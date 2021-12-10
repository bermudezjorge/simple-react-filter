import { useState } from 'react'
import Card from '@/components/Card'
import Layout from './layout/CardLayout'
import useStudents from '@/hooks/use-students'
import SearchBar from './components/SearchBar'
import useFilter from '@/hooks/use-filter'

function App() {
  const { students, addTags } = useStudents()
  const { data, handleSearch } = useFilter(students)

  return (
    <Layout>
      <SearchBar byKey="fullname" placeholder="Search by name" handleSearch={handleSearch} />
      <SearchBar byKey="tag" placeholder="Search by tag" handleSearch={handleSearch} />
      <ul>
        {data?.map((student, index) => (
          <Card
            key={student.id}
            addTags={addTags}
            dataIndex={index}
            student={student}  
          />
        ))}
      </ul>
    </Layout>
  )
}

export default App
