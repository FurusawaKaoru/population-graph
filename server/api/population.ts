import axios from 'axios'

export default defineEventHandler(async () => {
  const prefCode = 33
  const cityCode = '-'
  const response = await axios.get(`https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=${cityCode}`, {
    headers: {
      'X-API-KEY': 'BcziaxCTfsalIUzxiiZO8rtr6GAbG0sQjPSvc47F',
    },
  })
  return response.data.result
})
