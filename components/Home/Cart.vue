<script setup lang="ts">
import { useCartStore } from "@/stores/cart.store";

const $cart = useCartStore();

const cartItems = computed(() => {
  return Object.values($cart.items).map((item) => {
    return {
      product: item.product,
      qty: item.qty,
    };
  });
});

const visible = ref(true);
</script>

<template>
  <q-menu v-model="visible" style="min-width: 30em; width: 750px; max-width: 60em" cover anchor="top left">
    <q-card bordered class="q-pa-md">
      <div class="row q-gutter-md justify-between">
        <div class="text-h5">Carrinho</div>
        <div class="text-h6">{{ formatNumber($cart.total) }}</div>
      </div>

      <q-list class="q-gutter-md">
        <q-item v-for="item in cartItems" :key="item.product.id" class="no-padding q-gutter-md">
          <q-item-section avatar>
            <q-img
              v-if="item.product.image"
              :src="item.product.image"
              height="100px"
              width="130px"
              position="center"
              fit="cover"
              :ratio="4 / 3"
              class="rounded-borders"
            />
          </q-item-section>
          <q-item-section>
            <div class="row justify-between q-gutter-sm">
              <div class="">
                <div class="column">
                  <span class="text-h5">{{ item.product.name }}</span>
                  <span class="text-secondary">{{ formatNumber(item.product.price / 100) }}</span>
                </div>
              </div>
              <div>
                <q-btn-group push>
                  <q-btn label="-" push @click="$cart.updateProductQuantity(item.product.id, -1)" />
                  <q-btn :label="item.qty" :ripple="false" />
                  <q-btn label="+" push @click="$cart.updateProductQuantity(item.product.id, 1)" />
                </q-btn-group>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="row justify-end q-gutter-md">
        <q-btn color="primary" label="Finalizar compra" icon="shopping_cart" />
      </div>
    </q-card>
  </q-menu>
</template>
