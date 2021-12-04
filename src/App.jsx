import Card from '@/components/Card'
import Layout from './layout/CardLayout'
import useStudents from "@/hooks/use-students"
import SearchStudent from './components/SearchStudent'

function App() {
  const students = useStudents()

  return (
    <Layout>
      <SearchStudent />
      <ul>
        {students?.map((student) => (
          <Card key={student.id} {...student} />
        ))}
      </ul>
    </Layout>
  )
}

export default App
