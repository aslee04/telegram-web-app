import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram'

const tg = window.Telegram.WebApp

function App() {
  const {onToggleButton, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])
  
  return (
    <div className='App'>
      <h1>Work</h1>

      <button onClick={onToggleButton}>Toggle</button>
    </div>
  )
}

export default App
