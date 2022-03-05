import React, { useState } from 'react';
import Input from './components/Input';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});
  const search = async (e) => {
    e.preventDefault();
    const key = 'bd9ce425aa545bbb06b29e8abcd77fa6';
    const url = 'https://api.openweathermap.org/data/2.5/';
    const res = await fetch(`${url}weather?q=${query}&appid=${key}`);
    const response = await res.json();
    setResult(response);
    console.log(response);
    setQuery('');
  };
  return (
    <div className='flex items-center max-h-screen h-screen w-screen max-w-screen overflow-hidden bg-sky-900 flex-col'>
      <Input query={query} setQuery={setQuery} search={search} />
      {typeof result.main !== undefined ? (
        <div>
          <h1>
            {result.name}, {result.sys.country} 
          </h1>
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
}

export default App;
