<script setup lang="ts">
import { usePrefectures } from '~/composables/prefecture'
import Prefecture from '~/components/Prefecture.vue'

const { data: masterPrefectures } = await useFetch('/api/prefectures')
const { prefectures } = usePrefectures()
</script>

<template>
  <section class="mt-8">
    <h1 class="text-xl">都道府県</h1>
    <ul class="grid grid-cols-4 md:grid-cols-6 gap-4">
      <li v-for="prefecture in masterPrefectures" :key="prefecture.code">
        <Prefecture :prefecture="prefecture" />
      </li>
    </ul>
  </section>
  <section class="mt-8">
    <h1 class="text-xl">人口構成</h1>
    <span v-for="prefecture in prefectures" :key="prefecture.code">{{ prefecture.name }}</span>
  </section>
</template>
