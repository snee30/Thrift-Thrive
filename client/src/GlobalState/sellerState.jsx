import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";
import toast from "react-hot-toast";

const sellerState = create((set) => ({
  loading: false,

  addProduct: async (data) => {
    try {
      set({ loading: true });
      const res = await axiosInstance.post("seller/add-product", data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message || "Server Error!!!");
    } finally {
      set({ loading: false });
    }
  },
}));

export default sellerState;
