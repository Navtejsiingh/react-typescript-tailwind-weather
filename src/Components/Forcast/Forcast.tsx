import React from 'react'

interface ForcastProps {
    title: string
    weather: any
}

const Forcast: React.FC<ForcastProps> = ({ title, weather }) => {
    return (
        <div>
            <div className='flex items-center justify-start my-4'>
                <p className='text-white font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />
            <div className=' flex flex-row items-center justify-between text-white'>
                {weather.map((wer: any) => (
                    <div className='flex flex-col items-center justify-center' key={wer.temp} >
                        <p className='font-light text-sm'>{wer.title}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${wer.icon}@2x.png`}
                            alt=""
                        />
                        <p className='text-white font-medium'>{Math.trunc(wer.temp)}°</p>
                    </div>
                ))}


            </div>
        </div >
    )
}

export default Forcast