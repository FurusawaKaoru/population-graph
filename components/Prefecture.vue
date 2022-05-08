<script setup lang="ts">
import { usePrefectures, usePrefecture } from '~/composables/prefecture'

const props = defineProps<{
  prefecture: { code: number, name: string }
}>()
const { prefectures, add, remove } = usePrefectures()
const { selected } = usePrefecture(() => add(props.prefecture), () => remove(props.prefecture))
</script>

<template>
  <input :id="prefecture.code" v-model="selected" type="checkbox">
  <label :for="prefecture.code">{{ prefecture.name }}</label>
</template>
