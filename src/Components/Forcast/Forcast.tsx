import React from 'react'

interface ForcastProps {
    title: string
}
const Forcast: React.FC<ForcastProps> = ({ title }) => {
    return (
        <div>
            <div className='flex items-center justify-start my-4'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className=' flex flex-row items-center justify-between text-white'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 AM</p>
                    <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt=""
                    />
                    <p className='text-white font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 AM</p>
                    <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt=""
                    />
                    <p className='text-white font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 AM</p>
                    <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt=""
                    />
                    <p className='text-white font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 AM</p>
                    <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt=""
                    />
                    <p className='text-white font-medium'>22°</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>04:30 AM</p>
                    <img
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        alt=""
                    />
                    <p className='text-white font-medium'>22°</p>
                </div>
            </div>
        </div>
    )
}

export default Forcast