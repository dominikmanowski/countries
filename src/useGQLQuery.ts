import { useQuery } from 'react-query'
import { request } from 'graphql-request'

export default (key: string, query: any) => {
  const endpoint = 'https://countries.trevorblades.com/'

  const fetchData = async () => request(endpoint, query)

  return useQuery(key, fetchData)
}
