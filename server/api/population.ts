import axios from 'axios'

export default defineEventHandler(async (event) => {
  const query = useQuery(event)
  const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${query.prefCode}&cityCode=-`, {
    headers: {
      'X-API-KEY': import.meta.env.VITE_RESAS_API_KEY,
    },
  })
  return response.data.result
})
