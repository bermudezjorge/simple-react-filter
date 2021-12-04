import Input from "@/components/Input"
import useInput from '@/hooks/use-input'
import { InputContainer } from './styles'

const SearchStudent = ({ search, setSearch }) => {
    const { value, onChange } = useInput({
        initialValue: search,
        update: setSearch
    })

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