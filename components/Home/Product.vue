<script setup lang="ts">
import { ProductType } from "@/types";

const emit = defineEmits(["add-to-cart"]);

const { product } = defineProps<{
  product: ProductType;
}>();
</script>

<template>
  <q-card style="min-width: 300px">
    <q-img v-if="product.image" :src="product.image" :ratio="4 / 3" height="15em" fit="cover" position="center" />

    <q-card-section>
      <div class="row justify-between items-center q-gutter-md">
        <div class="text-h6">{{ product.name }}</div>
        <div class="text-h6 text-secondary">{{ formatNumber(product.price / 100) }}</div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" label="Comprar" icon="add_shopping_cart" @click="emit('add-to-cart', product)" />
    </q-card-actions>
  </q-card>
</template>
