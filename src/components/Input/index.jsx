import styled from 'styled-components'

const StyledInput = styled.input`
    width: ${({ width }) => width};
    height: 2.5rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid lightgray;
    font-size: ${({ fontSize }) => fontSize};
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

const Input = props => {
    let injectedProps = {
        width : props.width || "100%",
        fontSize: props.fontSize || "1.2rem",
        type: props.type || 'text',
        placeholder: props.placeholder || '',
        onKeyUp: props.onChange
    }
    
    return (
        <StyledInput {...injectedProps} />
    )
}

export default Input