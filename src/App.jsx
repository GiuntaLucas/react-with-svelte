import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SvelteWrapper } from './SvelteWrapper'
import Card from './Card.svelte';

const SvelteComponent = SvelteWrapper(Card);

function App() {
  const [count, setCount] = useState(0)
  const [card] = useState({title: 'Svelte component', content: 'Card created by React'})
  return (
    <div className='app'>
      <span>React app</span>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <SvelteComponent card={card} count={count}/>
      </div>
    </div>
  )
}

export default App
