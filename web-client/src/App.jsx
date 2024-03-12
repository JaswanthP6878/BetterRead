import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function count_increase(){
    setCount(count + 1)
  }
  return (
    <>
    <div>
      <navbar></navbar>
      <LoginPage></LoginPage>
    </div>
    </>
  )
}

export default App
