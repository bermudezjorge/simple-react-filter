import { useState, useEffect } from 'react'

const URL = 'https://api.hatchways.io/assessment/students'

const useStudents = () => {
    const [students, setStudents] = useState([])

    useEffect(async () => {
        const response = await window.fetch(URL)
        const { students = null } = await response.json()
        setStudents(students)
    }, [])
    return students
}

export default useStudents