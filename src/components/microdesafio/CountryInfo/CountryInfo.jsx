import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CountryInfo = () => {
    const [ data, setData ] = useState([])

    useEffect(() => {
        const fetchData = (countryName) => {
            const url = `https://restcountries.com/v3.1/name/${countryName}`
            // const url = `https://pokeapi.co/api/v2/pokemon/${countryName}`
            axios.get(url)
                .then((res) => setData(res.data[0].name.common))
                // .then((res) => setData(res.data.name))
                .catch((error) => console.log(error))
        }
        fetchData('Argentina')
    }, [])
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default CountryInfo
