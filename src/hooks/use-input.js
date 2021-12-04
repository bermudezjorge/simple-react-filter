import { useState } from "react";

const useInput = ({ initialValue, update }) => {
    const [value, setValue] = useState(initialValue || '');

    const handleChange = (event) => {
        const newValue = event.target.value
        setValue(newValue);
        update(newValue)
    };

    return {
        value,
        onChange: handleChange
    };
};

export default useInput;