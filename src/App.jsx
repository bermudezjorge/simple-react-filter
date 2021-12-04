import StudentCard from '@/components/StudentCard'

import useStudents from "@/hooks/use-students"

function App() {
  const students = useStudents()

  return (
    <div className="App">
      <ul>
        {students?.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </ul>
    </div>
  )
}

export default App
