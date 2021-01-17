import gql from 'graphql-tag'
import useGQLQuery from './useGQLQuery'

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
    }
  }
`

function App() {
  const { data, isLoading, error } = useGQLQuery('countries', GET_COUNTRIES)
  if (error) return <p>An error ocurred</p>

  return (
    <div className='App'>
      <h1>Countries:</h1>
      {isLoading && <p>Loading...</p>}
      <ul>
        {data?.countries.map(({ name, code }) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
