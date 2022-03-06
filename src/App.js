import React, { useState } from 'react';
import Input from './components/Input';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState({});
  const search = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const key = 'bd9ce425aa545bbb06b29e8abcd77fa6';
    const url = 'https://api.openweathermap.org/data/2.5/';
    const res = await fetch(`${url}weather?q=${query}&appid=${key}`);
    const response = await res.json();
    setResult(response);
    setDate(new Date(response.dt * 1000 - response.timezone * 1000));
    console.log(response);
    console.log(new Date(result.dt * 1000 - result.timezone * 1000));
    setQuery('');
    setIsLoading(false)
  };
  return (
    <div className='flex items-center max-h-screen h-screen w-screen max-w-screen overflow-hidden bg-sky-900 flex-col'>
      <Input query={query} setQuery={setQuery} search={search} />
      {}
      {!isLoading && (
        <div>
          <h1>
            {result.name}, {result.sys.country}
          </h1>
          <h2>date</h2>
        </div>
      )}
    </div>
  );
}

export default App;
