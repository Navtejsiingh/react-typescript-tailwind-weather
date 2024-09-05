import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, useDeferredValue, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons'
interface Weathernput {
    weatherInput: string;
}

interface Props {
    setQuery: Dispatch<SetStateAction<any>>
    setUnits: Dispatch<SetStateAction<any>>
    units: any
}
const Inputs: React.FC<Props> = ({ setQuery, setUnits, units }) => {
    const [weather, setWeather] = useState<Weathernput>({ weatherInput: '' })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setWeather({ ...weather, [name]: value })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery({ q: weather.weatherInput })
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude
                let lon = position.coords.longitude

                setQuery({
                    lat,
                    lon
                })
            })
        }
    }
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <form className=' flex flex-row items-center justify-center  space-x-4' onSubmit={handleSubmit}>
                    <input
                        name='weatherInput'
                        type="text"
                        placeholder='Search....'
                        className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase'
                        onChange={handleChange}
                    />
                    <button type='submit'><FontAwesomeIcon icon={faSearch} className='text-white text-xl cursor-pointer transition ease-in-out hover:scale-125' /></button>
                    <button onClick={handleLocationClick} type='button'><FontAwesomeIcon icon={faLocation} className='text-white text-xl cursor-pointer  transition ease-in-out hover:scale-125' /></button>
                </form>
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-white font-light text-xl  transition ease-in-out hover:scale-125' onClick={() => setUnits('metric')}>&#176;C</button>
                <p className='text-white font-light text-xl mx-1'>|</p>
                <button name='imperial' className='text-white font-light text-xl  transition ease-in-out hover:scale-125' onClick={() => setUnits('imperial')}>&#176;F</button>
            </div>
        </div>
    )
}

export default Inputs
