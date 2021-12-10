import { useState, useEffect } from 'react'
import getFullname from '@/utils/get-fullname'

const URL = 'https://api.hatchways.io/assessment/students'

const useStudents = () => {
    const [students, setStudents] = useState([])

    useEffect(async () => {
        const response = await window.fetch(URL)
        const { students = null } = await response.json()

        const studentsWithFullnameAndTags = students.map(student => {
            const fullname = getFullname(student)
            return { ...student, fullname, tags: [] }
        })
        setStudents(studentsWithFullnameAndTags)
    }, [])

    const addTags = ({ dataIndex, value }) => {
        let newStudents = [...students]
        newStudents[dataIndex - 1]['tags'].push(value)
        setStudents(newStudents)
    }

    return { students, addTags }
}

export default useStudents