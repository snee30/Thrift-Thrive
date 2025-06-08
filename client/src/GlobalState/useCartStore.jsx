import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";
import { toast } from "react-hot-toast";

const useCartStore = create((set, get) => ({
  cartItems: [],

  // Fetch cart items from backend (optional)
  fetchCart: async () => {
    try {
      const res = await axiosInstance.get("/cart/cart-items");
      if (res.data.success) {
        set({ cartItems: res.data.cart.items });
      }
    } catch (error) {
      console.error("Fetch cart error:", error);
    }
  },

  addToCart: async (product) => {
    try {
      const res = await axiosInstance.post(`/cart/add/${product._id}`);

      if (res.data.success) {
        set((state) => ({
          cartItems: [
            ...state.cartItems,
            {
              _id: product._id,
              name: product.name,
              price: product.price,
              image: product.productImages[0].url,
            },
          ],
        }));

        toast.success("Added to cart successfully!");
      } else {
        toast.error("Failed to add to cart");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error("An error occurred while adding to cart");
    }
  },

  removeFromCart: async (productId) => {
    try {
      const res = await axiosInstance.delete(`/cart/remove/${productId}`);
      if (res.data.success) {
        set({
          cartItems: get().cartItems.filter((item) => item._id !== productId),
        });
      }
    } catch (error) {
      console.error("Remove from cart error:", error);
    }
  },

  clearCart: async () => {
    try {
      set({ cartItems: [] });
    } catch (error) {
      console.error("Clear cart error:", error);
    }
  },
}));

export default useCartStore;
