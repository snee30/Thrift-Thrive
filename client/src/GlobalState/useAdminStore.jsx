import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";
import toast from "react-hot-toast";

export const useAdminStore = create((set) => ({
  unapprovedProducts: [],
  loadingUnapprovedProducts: false,

  loadingResponse: false,

  individualProduct: null,
  loadingIndividualProduct: true,

  getUnapprovedProducts: async () => {
    try {
      set({ loadingUnapprovedProducts: true });
      const res = await axiosInstance.get("/admin/products/unapproved");

      set({ unapprovedProducts: res.data.products });
    } catch (error) {
      console.error("Error fetching unapproved products: ", error);
    } finally {
      set({ loadingUnapprovedProducts: false });
    }
  },

  approveProduct: async (productId) => {
    try {
      set({ loadingResponse: true });
      await axiosInstance.post(`/admin/product/approve/${productId}`);
      toast.success("Product Approved!!");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Something went wrong");
    } finally {
      set({ loadingResponse: false });
    }
  },

  getIndividualProductAdmin: async (productId) => {
    try {
      set({ loadingIndividualProduct: true });
      const response = await axiosInstance.get(`/admin/product/${productId}`);

      set({ individualProduct: response.data.product });
    } catch (error) {
      console.error("Failed to fetch individual product:", error);
    } finally {
      set({ loadingIndividualProduct: false });
    }
  },
}));
