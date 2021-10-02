<template>
  <nav class="p-5 bg-green-400 text-white mb-10">
    <router-link :to="{ name: 'Home' }">Snazzy Fake Blog</router-link>
  </nav>
  <div class="container mx-auto">
    <router-view v-slot="{Component}">
      <template v-if="Component">
        <suspense>
          <template #default>
            <component :is="Component"/>
          </template>
          <template #fallback>
            <div>Loading...</div>
          </template>
        </suspense>
      </template>
    </router-view>
  </div>
</template>

<script setup></script>
