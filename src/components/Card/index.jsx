import { useState } from 'react'
import useAverage from "@/hooks/use-average"
import getFullname from '@/utils/get-fullname'
import {
    CardContainer,
    Avatar,
    TextContainer,
    Name,
    InfoContainer,
    Info,
    GradesContainer,
    CardHeader,
    ExpandButton
} from './style'
import plusSvg from '@/assets/icons/plus.svg'
import minusSvg from '@/assets/icons/minus.svg'

const Card = student => {
    const [expand, setExpand] = useState(false)
    const studentAverage = useAverage(student.grades)
    
    const handleCardExpandtion = () => {
        setExpand(expand ? false : true)
    }

    return (
        <CardContainer expand={expand}>
            <Avatar src={student.pic} alt="avatar" />
            <TextContainer>
                <CardHeader>
                    <Name>{getFullname(student)}</Name>
                    <ExpandButton src={expand ? minusSvg : plusSvg} role="button" onClick={handleCardExpandtion} />
                </CardHeader>
                <InfoContainer>
                    <Info>Email: {student.email}</Info>
                    <Info>Company: {student.company}</Info>
                    <Info>Skill: {student.skill}</Info>
                    <Info>Average: {`${studentAverage}%`}</Info>
                    {   expand &&
                        (
                            <GradesContainer>
                                {student.grades.map((grade, index) => (
                                    <Info key={index}>{`Test ${index}:  ${grade}%`}</Info>
                                ))}
                            </GradesContainer>
                        )
                    }
                </InfoContainer>
            </TextContainer>
        </CardContainer>
    )
}

export default Card