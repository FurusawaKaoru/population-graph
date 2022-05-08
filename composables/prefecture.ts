import { InjectionKey, Ref } from 'vue'

type Prefecture = {
  code: number
  name: string
}

const Prefectures: InjectionKey<Ref<Prefecture[]>> = Symbol('Prefectures')

export const usePrefectures = () => {
  const prefectures = inject(
    Prefectures,
    () => {
      const prefectures = ref<Prefecture[]>([])
      provide(Prefectures, prefectures)
      return prefectures
    },
    true
  )
  const add = (prefecture: Prefecture) => {
    if (prefectures.value.find(value => value.code === prefecture.code) !== undefined) {
      return
    }
    prefectures.value.push(prefecture)
  }
  const remove = (prefecture: Prefecture) => {
    if (prefectures.value.findIndex(value => value.code === prefecture.code) === -1) {
      return;
    }
    prefectures.value = prefectures.value.filter(value => value.code !== prefecture.code)
  }
  return { prefectures, add, remove }
}

export const usePrefecture = (onSelect = () => console.log('selected'), onClear = () => console.log('clear')) => {
  const selected = ref<boolean>(false)
  watchEffect(() => {
    if (selected.value) {
      onSelect()
      return
    }
    onClear()
  })
  return { selected }
}
