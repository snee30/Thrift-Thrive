import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axiosInstance";

export const authState = create((set) => ({
  buyer: {},

  signup: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/buyer/signup", data);
      set({ buyer: response.data.buyer });
      toast.success("Signup Successful:)");
    } catch (error) {
      toast.error(error.response.data.message || "Server Error!!!");
      console.log(error.response.data);
    }
  },

  login: async (data) => {
    try {
      const response = await axiosInstance.post("/auth/buyer/login", data);
      set({ buyer: response.data.buyer });
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

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  },
}));
