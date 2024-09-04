import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faSearch } from '@fortawesome/free-solid-svg-icons'

const Inputs: React.FC = () => {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type="text"
                    placeholder='Search....'
                    className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase'
                />
                <FontAwesomeIcon icon={faSearch} className='text-white text-xl cursor-pointer transition ease-in-out hover:scale-125' />
                <FontAwesomeIcon icon={faLocation} className='text-white text-xl cursor-pointer  transition ease-in-out hover:scale-125' />
            </div>
            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button name='metric' className='text-white font-light text-xl'>&#176;C</button>
                <p className='text-white font-light text-xl mx-1'>|</p>
                <button name='imperial' className='text-white font-light text-xl'>&#176;F</button>
            </div>
        </div>
    )
}

export default Inputs
