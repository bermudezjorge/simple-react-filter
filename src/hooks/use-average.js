const int = Number.parseInt

const useAverage = values => {
    const total = values.length
    const sum = values.reduce((acc, value) => acc += int(value), 0)
    const average = (sum / total).toFixed(3)
    return average
}

export default useAverage