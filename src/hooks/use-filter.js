import { useEffect, useState } from "react"

const lowerCase = str => str ? str?.toLocaleLowerCase() : null

const useFilter = data => {
    const [keywords, setKeywords] = useState({})
    const [filteredData, setFilteredData] = useState(data)

    useEffect(() => {
        setFilteredData(data)
        if(Object.values(keywords).some(keyword => keyword !== '')) {
            filterData()
        }
    }, [data])

    const handleSearch = ({ byKey, value }) => {
        setKeywords(prevKeywords => Object.assign(prevKeywords, { [byKey]: value }))
        
        setFilteredData(data)

        if(Object.values(keywords).some(keyword => keyword !== '')) {
            filterData()
        }
    }


    const filterData = () => {
        const filtered = filteredData.filter(record => {
            let filtering = false

            if (keywords['fullname'] !== '') {
                if(lowerCase(record['fullname']).includes(lowerCase(keywords['fullname']))) {
                    filtering = true
                }
                console.log('here', filtering);
            }
            
            if (keywords['tag'] !== '') {
                console.log('got here');
                if (record['tags'].length > 0) {
                    const hasTag = record['tags'].some(tag => lowerCase(tag).includes(lowerCase(keywords['tag'])))
                    filtering = hasTag
                }
            }

            return filtering
        })

        setFilteredData(filtered)
    }

    return {
        data: filteredData,
        handleSearch
    }
}

export default useFilter