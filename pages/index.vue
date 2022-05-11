<script setup lang="ts">
import { usePrefectures } from '~/composables/prefecture'

const { prefectures } = await usePrefectures()
</script>

<template>
  <section class="mt-8">
    <h1 class="text-xl">都道府県</h1>
    <ul class="grid grid-cols-4 md:grid-cols-6 gap-4">
      <li v-for="prefecture in prefectures" :key="prefecture.code">
        <input :id="prefecture.code" v-model="prefecture.active" type="checkbox" >
        <label :for="prefecture.code">{{ prefecture.name }}</label>
      </li>
    </ul>
  </section>
</template>
