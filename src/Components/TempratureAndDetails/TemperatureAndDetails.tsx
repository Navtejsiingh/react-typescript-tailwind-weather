import { faArrowDown, faArrowUp, faDroplet, faSun, faTemperature0, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
interface Props {
    weather: any;
}
const TemperatureAndDetails: React.FC<Props> = ({ weather }) => {
    const { details, temp, feels_like, humidity, speed, fsunrise, fsunset, temp_max, temp_min, icon } = weather
    return (
        <div>
            <div className='flex items-center justify-center  py-6 text-cyan-300 text-xl'>
                <p>{details}</p>
            </div>
            <div className='flex flex-row items-center justify-between text-white py-3'>
                <img
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="sun"
                    className='w-20' />
                <p className='text-5xl'>
                    {Math.trunc(temp)}&#176;
                </p>
                <div className='flex flex-col space-y-2'>
                    <div className=' flex font-light text-sm items-center justify-center'>
                        <FontAwesomeIcon icon={faTemperature0} className='text-white  mr-1 text-xl' />
                        Feels Like:
                        <span className='font-medium ml-1'>{Math.trunc(feels_like)}°</span>
                    </div>
                    <div className=' flex font-light text-sm items-center justify-center'>
                        <FontAwesomeIcon icon={faDroplet} className='text-white  mr-1 text-xl' />
                        Humidity:
                        <span className='font-medium ml-1'>{humidity}%</span>
                    </div>
                    <div className=' flex font-light text-sm items-center justify-center'>
                        <FontAwesomeIcon icon={faWind} className='text-white  mr-1 text-xl' />
                        Wind:
                        <span className='font-medium ml-1'>{Math.trunc(speed)} km/h</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 mt-4'>
                <FontAwesomeIcon icon={faSun} className='text-xl' />
                <p className='font-light'>
                    Rise: <span className=' ml-1'>{fsunrise}</span>
                </p>
                <p className='font-light'>|</p>

                <FontAwesomeIcon icon={faSun} className='text-xl' />
                <p className='font-light'>
                    Set: <span className=' ml-1'>{fsunset}</span>
                </p>
                <p className='font-light'>|</p>

                <FontAwesomeIcon icon={faArrowUp} className='text-xl' />
                <p className='font-light'>
                    High: <span className=' ml-1 text-sm'>{Math.trunc(temp_max)}</span>
                </p>
                <p className='font-light'>|</p>

                <FontAwesomeIcon icon={faArrowDown} className='text-xl' />
                <p className='font-light'>
                    Low: <span className=' ml-1'>{Math.trunc(temp_min)}</span>
                </p>
            </div>
        </div>
    )
}

export default TemperatureAndDetails