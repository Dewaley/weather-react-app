import React, { useState } from 'react';
import Input from './components/Input';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const search = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const key = 'bd9ce425aa545bbb06b29e8abcd77fa6';
    const url = 'https://api.openweathermap.org/data/2.5/';
    const res = await fetch(
      `${url}weather?q=${query}&appid=${key}&units=imperial`
    );
    const response = await res.json();
    setResult(response);
    console.log(response);
    setQuery('');
    setIsLoading(false);
  };

  return (
    <div className='flex items-center max-h-screen h-screen w-screen max-w-screen overflow-hidden bg-sky-900 flex-col bg-weather bg-center bg-cover bg-no-repeat'>
      <Input query={query} setQuery={setQuery} search={search} />
      {!isLoading && (
        <div className='text-white flex flex-col items-center'>
          <h1 className='text-6xl my-4'>
            {result.name}, {result.sys.country}
          </h1>
          <img
            src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`}
            alt=''
            className='w-16'
          />
          <h2 className='text-center capitalize'>
            {result.weather[0].description}
          </h2>
          <div className='flex flex-col'>
            <div>
              High/Low: {Math.round(result.main.temp_max)}/
              {Math.round(result.main.temp_min)}°F
            </div>
            <div>
              Humidity: {result.main.humidity}
            </div>
            <div>Pressure: {result.main.pressure}h/pa</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
