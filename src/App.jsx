import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SvelteWrapper } from './SvelteWrapper'
import Card from './Card.svelte';


const Context = createContext('');
const SvelteComponent = SvelteWrapper(Card, Context);

function App() {
  const id = Math.random();
  const [count, setCount] = useState(0);
  const [valueFromInterval, setValueFromInterval] = useState(0);
  const [card] = useState({title: 'Svelte component', content: 'Card created by React'});

  useEffect(() => {
    const t = setInterval(() => {
      setValueFromInterval(e => e + 1);
    }, 1000);
    return () => clearInterval(t);
  }, [])
  return (
    <Context.Provider value='Context from react say hello !'>
      <div className='app'>
        <span>React app</span> <br />
        React id: {id}
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"  className="logo react" alt="Svelte logo" />
          </a>
        </div>
        <div className="card">
          <button disabled>setInteval: {valueFromInterval}</button> 
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <div>
          <SvelteComponent card={card} count={count} valueFromInterval={valueFromInterval}/>
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
