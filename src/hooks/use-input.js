import { useState } from "react"

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue || '')

    const handleChange = (event) => {
        const newValue = event.target.value
        setValue(newValue)
    };

    return {
        value,
        setValue,
        onChange: handleChange
    }
}

export default useInput