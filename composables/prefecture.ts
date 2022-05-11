import { InjectionKey, Ref } from 'vue'

export type Prefecture = {
  code: number
  name: string
  active: boolean
}

type Population = {
  prefecture: Prefecture
  population: { year: number, value: number }[]
}

const Prefectures: InjectionKey<Ref<Prefecture[]>> = Symbol('Prefectures')

const prefecturesConverter = (data: { code: number, name: string }[]) => {
  return data.map((record) => {
    return {
      ...record,
      active: false
    }
  })
}

export const usePrefectures = async () => {
  const prefectures = inject(
    Prefectures,
    () => {
      const prefectures = ref<Prefecture[]>([])
      provide(Prefectures, prefectures)
      return prefectures
    },
    true
  )
  const populations = ref<Population[]>([])

  // TODO: provide時にできるといい感じ
  const { data } = await useFetch('/api/prefectures')
  prefectures.value = prefecturesConverter(data.value)

  watchEffect(async () => {
    const activePrefectures = prefectures.value.filter((prefecture) => prefecture.active)
    if (activePrefectures.length === 0) {
      return
    }
    populations.value = await Promise.all(activePrefectures.map(async (prefecture) => {
      const { data } = await useFetch(`/api/population?prefCode=${prefecture.code}`)
      return { prefecture, population: data.value as { year: number, value: number }[] }
    }))
  })
  return { prefectures, populations }
}
