import { useEffect, useState } from "react"
import getFullname from '@/utils/get-fullname'

const useFilter = ({ keyword, data }) => {
    const [filteredData, setFilteredData] = useState()
    
    useEffect(() => {
        const filtered = data?.filter(record => {
            const fullName = getFullname(record).toLocaleLowerCase()
            return fullName.includes(keyword.toLocaleLowerCase())
        })
        setFilteredData(filtered)
    }, [keyword, data])

    return filteredData
}

export default useFilter