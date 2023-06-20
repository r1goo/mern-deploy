import './App.css';
import { useState } from 'react';

function App() {
  const [result,setResult] = useState('');
  async function fetchInfo(){
    const url = `${process.env.REACT_APP_API_URL}/test`;
    const response = await fetch(url);
    const json = await response.json();
    setResult(json);
    console.log(json);
  }
  return (
    <div>
      <button onClick={fetchInfo}>fetch info from api</button>
      <div>Date: {result}</div>
    </div>
  );
}

export default App;
