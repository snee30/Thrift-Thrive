import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axiosInstance";

export const authState = create((set) => ({
  user: null,
  role: "",

  signup: async (data, role) => {
    try {
      const response = await axiosInstance.post(`/auth/${role}/signup`, data);
      set({
        user:
          role === "buyer"
            ? response.data.buyer
            : role === "seller"
            ? response.data.seller
            : response.data.admin,

        role: role,
      });
      toast.success("Signup Successful :)");
    } catch (error) {
      toast.error(error.response.data.message || "Server Error!!!");
      console.log(error.response.data);
    }
  },

  login: async (data, role) => {
    try {
      const response = await axiosInstance.post(`/auth/${role}/login`, data);
      set({
        user:
          role === "buyer"
            ? response.data.buyer
            : role === "seller"
            ? response.data.seller
            : response.data.admin,
        role: role,
      });
      console.log(response.data);
      toast.success("Login Successful");
    } catch (error) {
      toast.error(error.response.data.message || "Server Error!!!");
      console.log(error.response.data);
    }
  },

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/me");

      if (res.data.buyer) {
        set({
          user: res.data.buyer,
          role: "buyer",
        });
      } else if (res.data.seller) {
        set({
          user: res.data.seller,
          role: "seller",
        });
      } else if (res.data.admin) {
        set({ user: res.data.admin, role: "admin" });
      } else {
        set({ user: {}, role: "" });
      }
    } catch (error) {
      console.log(error);
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ user: null, role: "" });
      toast.success("Logout Successful");
    } catch (error) {
      toast.error(error.response.data.message || "Server Error!!!");
      console.log(error.response.data);
    }
  },
}));
