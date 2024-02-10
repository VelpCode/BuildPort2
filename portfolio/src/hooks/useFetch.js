import {useEffect, useState} from 'react';


const useFetch = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch()
                const json = await res.json()
                setData(json)
                setLoading(false)
                
            }catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    })
  return {loading, error, data}
}

export default useFetch