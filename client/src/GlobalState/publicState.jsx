import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";

const usePublicState = create((set) => ({
  // Public state variables
  products: [],

  getProducts: async () => {
    try {
      const response = await axiosInstance.get("/public/all-products");
      console.log(response.data.products);
      set({ products: response.data.products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },
}));

export default usePublicState;
