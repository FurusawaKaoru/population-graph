import axios from 'axios'

export default defineEventHandler(async () => {
  const response = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    headers: {
      'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
    },
  })
  return response.data.result.map((record: { prefCode: number, prefName: string }) => {
    return { code: record.prefCode, name: record.prefName }
  })
})
