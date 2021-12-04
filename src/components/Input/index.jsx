import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    height: 2.5rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid lightgray;
    font-size: 1.7rem;
    font-weight: 500;
    outline: none;
    color: #525252;
    &:focus {
        border-bottom-color: gray;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #a3a3a3;
    }
`

const Input = ({ type, placeholder, value, onChange }) => (
    <StyledInput type={type || 'text'} placeholder={placeholder} value={value} onChange={onChange} />
)

export default Input