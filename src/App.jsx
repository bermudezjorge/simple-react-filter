import StudentCard from '@/components/StudentCard'
import Layout from './layout/CardLayout'
import useStudents from "@/hooks/use-students"

function App() {
  const students = useStudents()

  return (
    <Layout>
      <ul>
        {students?.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </ul>
    </Layout>
  )
}

export default App
