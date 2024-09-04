import React from 'react'
import TopButtons from '../TopButtons/TopButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Inputs from '../Inputs/Inputs'
import DateAndTime from '../DateAndTime/DateAndTime'
import TemperatureAndDetails from '../TempratureAndDetails/TemperatureAndDetails'
import Forcast from '../Forcast/Forcast'
type Props = {}

const Main: React.FC = () => {
    return (
        <div className='mx-auto max-w-screen-md mt-4 py-5 px-24 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
            <TopButtons />
            <Inputs />
            <DateAndTime />
            <TemperatureAndDetails />
            <Forcast title='hourly forcast' />
            <Forcast title='daily forcast' />
        </div>
    )
}
export default Main