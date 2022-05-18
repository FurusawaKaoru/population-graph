import axios from 'axios'

type Record = {
  year: number
  value: number
  rate: number | undefined
}

export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const response = await axios.get<{
    message: string | null,
    result: {
      boundaryYear: number,
      data: {
        label: string
        data: Record[]
      }[]
    },
  }>(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${query.prefCode}&cityCode=-`,
    {
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY,
      },
    })
  const population = response.data.result.data.find((record) => record.label === '総人口')
  if (population === undefined) {
    // TODO: error throw
    return []
  }
  return population.data
})
