<script setup lang="ts">
import { usePrefectures } from '~/composables/prefecture'

const { prefectures, populations } = await usePrefectures()
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
  <section class="mt-8">
    <h1 class="text-xl">人口構成</h1>
    <ul>
      <li v-for="population in populations" :key="population.prefecture.code">
        {{ population.prefecture.name }}: {{ population.population[0].year }} {{ population.population[0].value }}
      </li>
    </ul>
  </section>
</template>
