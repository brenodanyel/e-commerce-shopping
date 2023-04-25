<template>
  <q-menu>
    <q-card bordered>
      <q-card-section horizontal>
        <q-item class="q-pa-lg">
          <q-item-section avatar>
            <q-avatar size="5em" icon="person" class="bg-primary" />
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-separator />
      <q-list>
        <q-item clickable @click="$q.dark.toggle()">
          <q-item-section avatar>
            <q-toggle dense :model-value="$q.dark.isActive" @click="$q.dark.toggle()" />
          </q-item-section>
          <q-item-section>Dark mode</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-menu>
</template>
