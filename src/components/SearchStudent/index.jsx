import Input from "@/components/Input"
import useInput from '@/hooks/use-input'
import { InputContainer } from './styles'

const SearchStudent = () => {
    const { value, onChange } = useInput()

    return (
        <InputContainer>
            <Input
                placeholder="Search by name"
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    )
}

export default SearchStudent