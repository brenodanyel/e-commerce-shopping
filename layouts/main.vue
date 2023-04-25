<template>
  <q-layout view="Hhh Lpr lFf">
    <q-header class="bg-dark q-py-sm" bordered>
      <q-toolbar>
        <q-toolbar-title> E-Commerce </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <q-ajax-bar position="bottom" color="secondary" />
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
