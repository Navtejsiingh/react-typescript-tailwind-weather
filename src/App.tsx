import { useEffect, useState } from 'react';
import './App.css';
import { getFormattedData } from './Services/Service';
import TopButtons from './Components/TopButtons/TopButtons';
import Inputs from './Components/Inputs/Inputs';
import DateAndTime from './Components/DateAndTime/DateAndTime';
import TemperatureAndDetails from './Components/TempratureAndDetails/TemperatureAndDetails';
import Forcast from './Components/Forcast/Forcast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const App: React.FC = () => {
  const [query, setQuery] = useState({ q: 'Delhi' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState<any>(null)

  useEffect(() => {
    getFormattedData({ ...query, units })
      .then((res) => {
        setWeather(res)
        toast.success(`Successfully Fetched the Weather from ${res.name},${res.country}`)
      })
      .catch((error) => {
        toast.error("Please Enter a Valid City Name")
      })
  }, [query, units])

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }
  return (
    <div className="App">
      <ToastContainer newestOnTop={true} />
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-24 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <DateAndTime weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forcast title='hourly forcast' weather={weather.hourly} />
            <Forcast title='daily forcast' weather={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
