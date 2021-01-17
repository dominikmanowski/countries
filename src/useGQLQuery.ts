import { useQuery } from 'react-query'
import { request } from 'graphql-request'

interface Country {
  name: string
  code: string
}

interface Countries {
  countries: Country[]
}

export default (key: string, query: any) => {
  const endpoint = 'https://countries.trevorblades.com/'

  const fetchData = async () => request(endpoint, query)

  return useQuery<Countries, Error>(key, fetchData)
}
