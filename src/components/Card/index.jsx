import useAverage from "@/hooks/use-average"
import {
    CardContainer,
    Avatar,
    TextContainer,
    Name,
    InfoContainer,
    Info
} from './style'

const Card = student => {
    const studentAverage = useAverage(student.grades)

    return (
        <CardContainer>
            <Avatar src={student.pic} alt="avatar" />
            <TextContainer>
                <Name>{`${student.firstName} ${student.lastName}`}</Name>
                <InfoContainer>
                    <Info>Email: {student.email}</Info>
                    <Info>Company: {student.company}</Info>
                    <Info>Skill: {student.skill}</Info>
                    <Info>Average: {`${studentAverage}%`}</Info>
                </InfoContainer>
            </TextContainer>
        </CardContainer>
    )
}

export default Card