import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";

const usePublicState = create((set) => ({
  // Public state variables
  products: [],
  individualProduct: null,
  loadingIndividualProduct: true,

  getProducts: async () => {
    try {
      const response = await axiosInstance.get("/public/all-products");

      set({ products: response.data.products });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  },

  getIndividualProduct: async (productId) => {
    try {
      set({ loadingIndividualProduct: true });
      const response = await axiosInstance.get(`/public/product/${productId}`);

      set({ individualProduct: response.data.product });
    } catch (error) {
      console.error("Failed to fetch individual product:", error);
    } finally {
      set({ loadingIndividualProduct: false });
    }
  },
}));

export default usePublicState;
