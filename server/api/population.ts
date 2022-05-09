import axios from 'axios'

export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${query.prefCode}&cityCode=-`, {
    headers: {
      'X-API-KEY': process.env.RESAS_API_KEY,
    },
  })
  return response.data.result.data.find((record: { label: string, data: [] }) => record.label === '総人口').data
})
