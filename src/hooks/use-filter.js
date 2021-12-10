import { useEffect, useState } from "react"

const lowerCase = str => str ? str?.toLocaleLowerCase() : null

const useFilter = initialData => {
    const [searchFullname, setSearchFullname] = useState('')
    const [searchTags, setSearchTags] = useState('')
    const [filteredData, setFilteredData] = useState(initialData)

    useEffect(() => {
        setFilteredData(initialData)
        if(searchFullname !== '' || searchTags !== '') {
            filterData()
        }
    }, [initialData, searchFullname, searchTags])


    const filterData = () => {
        const filtered = [...initialData].filter(record => {
            let filtersPassed = 0

            if (searchFullname !== '' && lowerCase(record['fullname']).includes(lowerCase(searchFullname))) {
                filtersPassed += 1
            }
            
            if (searchTags !== '' && record['tags'].length > 0 && record['tags'].some(tag => lowerCase(tag).includes(searchTags))) {
                filtersPassed += 1
            }

            if (searchFullname !== '' && searchTags !== '') {
                if (filtersPassed === 2) {
                    return true
                }

                return false
            }
            
            if (filtersPassed === 1)
                return true
        })

        setFilteredData(filtered)
    }

    return {
        data: filteredData,
        setSearchFullname,
        setSearchTags
    }
}

export default useFilter