import { useState, useRef } from 'react'
import Tag from '@/components/Tag'
import Input from '@/components/Input'
import useInput from '@/hooks/use-input'
import { Container, StyledUl } from './styles'

const TagContainer = ({ student, addTags }) => {
    const { value, setValue, onChange } = useInput()
    const formRef = useRef(null)

    const handleSubmit = event => {
        event.preventDefault()
        if (value === '') return
        
        setValue('')
        formRef.current.reset()

        addTags({ dataIndex: student.id, value })
    }

    return (
        <Container>
            <StyledUl>
                {student.tags.map((tag, index) => (
                   <Tag key={tag+index}>{tag}</Tag> 
                ))}
            </StyledUl>
            <form ref={formRef} onSubmit={handleSubmit}>
                <Input
                    width="11rem"
                    fontSize="1rem"
                    placeholder="Add tag"
                    value={value}
                    onChange={onChange}
                />
            </form>
        </Container>
    )
}

export default TagContainer