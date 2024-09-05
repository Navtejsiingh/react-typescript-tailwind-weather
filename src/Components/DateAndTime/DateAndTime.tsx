import React from 'react'
interface DateAndTimeProps {
    weather: any;
}

const DateAndTime: React.FC<DateAndTimeProps> = ({ weather }) => {
    const { name, country, fdt } = weather
    return (
        <div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {fdt}
                </p>
            </div>
            <div className=' flex item-center justify-center my-3'>
                <p className='text-white text-3xl font-medium'>{name},{country}</p>
            </div>
        </div>
    )
}

export default DateAndTime