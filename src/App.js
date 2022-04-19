import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const fetchOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_XKEY
      }
    }
    console.log('hi')
  }, [])

  return <div className='App'></div>
}

export default App
