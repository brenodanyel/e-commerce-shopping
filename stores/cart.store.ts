import { defineStore } from "pinia";
import { ProductType } from "~/types";

type StoreType = {
  items: {
    [key: string]: {
      product: ProductType;
      qty: number;
    };
  };
};

export const useCartStore = defineStore("auth", {
  state: (): StoreType => ({
    items: {},
  }),

  getters: {
    total(state) {
      return Object.values(state.items).reduce((acc, item) => {
        return acc + (item.product.price / 100) * item.qty;
      }, 0);
    },
  },

  actions: {
    addProduct(product: ProductType) {
      if (!this.items[product.id]) {
        this.items[product.id] = { product, qty: 0 };
      }

      this.items[product.id].qty++;
    },
    updateProductQuantity(productId: string, add: number) {
      if (!this.items[productId]) return;

      this.items[productId].qty += add;

      if (this.items[productId].qty <= 0) {
        delete this.items[productId];
      }
    },
  },

  persist: {
    storage: persistedState.cookies,
  },
});
