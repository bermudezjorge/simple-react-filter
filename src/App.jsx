import Card from '@/components/Card'
import Layout from '@/layout/CardLayout'
import useStudents from '@/hooks/use-students'
import SearchBar from '@/components/SearchBar'
import useFilter from '@/hooks/use-filter'

function App() {
  const { students, addTags } = useStudents()
  const { data, setSearchFullname, setSearchTags } = useFilter(students)

  return (
    <Layout>
      <SearchBar placeholder="Search by name" handleSearch={setSearchFullname} />
      <SearchBar placeholder="Search by tag" handleSearch={setSearchTags} />
      <ul>
        {data?.map((student, index) => (
          <Card
            key={student.id}
            dataIndex={index}
            student={student}
            addTags={addTags}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default App
