// handles what happens when a buyer signs up or logs in.
// Example: "When a user signs up, save their data."


import Buyer from "../Models/buyerModel.js";
import jwt from "jsonwebtoken";

function authToken(id, role) {
  return jwt.sign({ id, role }, process.env.JWTSECRET, {
    expiresIn: "28d",
  });
}

// Signup Function
async function signup(req, res) {
  try {
    const { name, email, password, phone } = req.body;

    // Check if all fields are provided
    if (!email || !name || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Validate Name
    if (typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Name must be a non-empty string",
      });
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Validate Password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long, include at least one uppercase letter, and one number",
      });
    }

    // Validate Phone
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be 10 digits",
      });
    }

    // Create a new user
    const newBuyer = await Buyer.create({
      name,
      email,
      password,
      phone,
    });

    const token = authToken(newBuyer._id, "buyer");

    res.cookie("jwt", token, {
      maxAge: 28 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    // Return success response
    res.status(200).json({
      success: true,
      buyer: {
        _id: newBuyer._id,
        name: newBuyer.name,
        email: newBuyer.email,
        phone: newBuyer.phone,
      },
    });
  } catch (error) {
    if (error.keyPattern && error.keyPattern.email) {
      return res.status(400).json({
        success: false,
        message: "email already exists,use a new one please",
      });
    }
    console.error("Error during buyer signup:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

// Login Function
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
    // Find the buyer by email
    const buyer = await Buyer.findOne({ email }).select("+password");

    if (!buyer || !(await buyer.comparePW(password))) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate token
    const token = authToken(buyer._id, "buyer");

    // Set cookie
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
      httpOnly: true, //prevents any XSS attacks
      sameSte: "strict", //prevents any CSRF attacks
      secure: false,
    });

    // Return success response (excluding sensitive data)
    res.status(200).json({
      success: true,
      buyer: {
        _id: buyer._id,
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone,
      },
    });
  } catch (error) {
    console.error("Error during buyer login:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

// Export both functions
export { signup, login };
