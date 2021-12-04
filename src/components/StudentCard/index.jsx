import useAverage from "@/hooks/use-average"

const StudentCard = student => {
    const studentAverage = useAverage(student.grades)

    return (
        <li>
            <img src={student.pic} alt="avatar" />
            <h1>{`${student.firstName} ${student.lastName}`}</h1>
            <p>{student.email}</p>
            <p>{student.company}</p>
            <p>{student.skill}</p>
            <p>{`${studentAverage}%`}</p>
        </li>
    )
}

export default StudentCard