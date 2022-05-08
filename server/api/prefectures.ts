import axios from 'axios'
import {name} from "ci-info";

export default defineEventHandler(async () => {
  const response = await axios.get('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    headers: {
      'X-API-KEY': 'BcziaxCTfsalIUzxiiZO8rtr6GAbG0sQjPSvc47F',
    },
  })
  return response.data.result.map((record: { prefCode: number, prefName: string }) => {
    return { code: record.prefCode, name: record.prefName }
  })
})
