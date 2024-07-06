import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Algebra</h1>
      <p>ローカルサーバの立ち上げ方は、ディレクトリを変えた後に'npm run dev'</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Scount is {count}
        </button>
      </div>
    </>
  )
}

export default App
