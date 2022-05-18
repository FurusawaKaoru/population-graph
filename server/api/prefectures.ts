import axios from 'axios'

type Record = {
  prefCode: number
  prefName: string
}

export default defineEventHandler(async () => {
  const response = await axios.get<{ message: string | null, result: Record[] }>('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    headers: {
      'X-API-KEY': process.env.RESAS_API_KEY,
    },
  })
  return response.data.result.map((record) => {
    return { code: record.prefCode, name: record.prefName }
  })
})
