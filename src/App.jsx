import { useState } from 'react'
import Card from '@/components/Card'
import Layout from './layout/CardLayout'
import useStudents from '@/hooks/use-students'
import SearchStudent from './components/SearchStudent'
import useFilter from '@/hooks/use-filter'

function App() {
  const [search, setSearch] = useState('')
  const students = useStudents()
  const data = useFilter({ keyword: search, data: students })
  
  return (
    <Layout>
      <SearchStudent search={search} setSearch={setSearch} />
      <ul>
        {data?.map((data) => (
          <Card key={data.id} {...data} />
        ))}
      </ul>
    </Layout>
  )
}

export default App
