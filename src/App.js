import React, { useState } from 'react';
import Input from './components/Input';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const key = 'bd9ce425aa545bbb06b29e8abcd77fa6';
  const url = 'https://api.openweathermap.org/data/2.5/';
  const search = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await fetch(
      `${url}weather?q=${query}&appid=${key}&units=imperial`
    );
    const response = await res.json();
    setResult(response);
    setQuery('');
    setIsLoading(false);
  };

  return (
    <div className='flex items-center max-h-screen h-screen w-screen max-w-screen overflow-hidden bg-sky-900 flex-col bg-weather bg-center bg-cover bg-no-repeat'>
      <Input query={query} setQuery={setQuery} search={search} />
      {!isLoading && result.name !== undefined && (
        <div className='text-white flex flex-col items-center'>
          <h1 className='text-4xl my-4 text-center'>
            {result.name}, {result.sys.country}
          </h1>
          <img
            src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`}
            alt=''
            className='w-16'
          />
          <h2 className='text-3xl'>{result.main.temp}°F</h2>
          <h2 className='text-center capitalize'>
            {result.weather[0].description}
          </h2>
          <div className='flex space-x-5'>
            <div className='flex flex-col'>
              <div className='py-3 border-b-2 border-white border-dashed'>
                High/Low: {Math.round(result.main.temp_max)}/
                {Math.round(result.main.temp_min)}°F
              </div>
              <div className='py-3 border-b-2 border-white border-dashed'>
                Humidity: {result.main.humidity}
              </div>
              <div className='py-3 border-b-2 border-white border-dashed'>
                Pressure: {result.main.pressure}h/pa
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='py-3 border-b-2 border-white border-dashed'>
                Visibility: {result.visibility / 1000}km
              </div>
              <div className='py-3 border-b-2 border-white border-dashed'>
                Wind speed: {result.wind.speed}m/s
              </div>
              <div className='py-3 border-b-2 border-white border-dashed'>
                Wind Direction: {result.wind.deg}°
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && result.name === undefined && (
        <div className='text-3xl text-white'>Location not found</div>
      )}
    </div>
  );
}

export default App;
