<script setup lang="ts">
import { useCartStore } from "@/stores/cart.store";
import { ProductType } from "@/types";

const $q = useQuasar();
const $cart = useCartStore();

const { data: products } = await useAsyncData(async () => {
  const { data, status } = await api.get("/products");

  if (status !== 200) {
    return [];
  }

  return data;
});

function onClickAddToCart(product: ProductType) {
  $cart.addProduct(product);
  $q.notify({
    message: `Produto '${product.name}' adicionado ao carrinho`,
    icon: "add_shopping_cart",
  });
}
</script>

<template>
  <NuxtLayout name="main">
    <div class="row justify-between q-col-gutter-xs">
      <div class="text-h4">Produtos</div>
      <div class="col-xs-12 col-sm-auto">
        <q-btn label="Ver carrinho" icon="shopping_cart" color="primary" class="fit">
          <Cart />
        </q-btn>
      </div>
    </div>

    <q-separator spaced />

    <div class="row q-col-gutter-md">
      <div v-for="product in products" class="col-12 col-sm-auto">
        <Product :key="product.id" :product="product" @add-to-cart="(product: ProductType) => onClickAddToCart(product)" />
      </div>
    </div>
  </NuxtLayout>
</template>
