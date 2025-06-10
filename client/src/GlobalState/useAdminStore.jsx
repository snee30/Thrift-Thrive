import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";

export const useAdminStiore = create((set) => ({
  unapprovedProducts: [],
  loadingUnapprovedProducts: false,

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
}));
