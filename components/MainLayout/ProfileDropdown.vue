<script setup lang="ts">
import { useAuthStore } from "~/stores/auth.store";

const $auth = useAuthStore();

const logout = () => {
  $auth.logout();
};
</script>

<template>
  <q-btn no-caps icon="person" :label="$auth.user?.username">
    <q-menu max-width="30em">
      
    </q-menu>
  </q-btn>
</template>
