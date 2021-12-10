import Input from "@/components/Input"
import useInput from '@/hooks/use-input'
import { useEffect } from "react"
import { InputContainer } from './styles'

const SearchBar = ({ placeholder, handleSearch }) => {
    const { value, onChange } = useInput('')

    useEffect(() => {
        handleSearch(value)
    }, [value])

    return (
        <InputContainer onSubmit={(event) => event.preventDefault()}>
            <Input
                fontSize="1.7rem"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    )
}

export default SearchBar