import { useState } from 'react'
import List from './list'
import './App.css'
import data from './data'

function App() {
const[people , setPeople] = useState(data)
const clearAll =()=>{
setPeople([])
}
  return (
    <div>
      <h1>Workshop 1: Birthday-list</h1>
      <main>
        <section className='container'>
          <h3>{people.length} Birthday today</h3>
          <List people = {people} />
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </div>
  )
}

export default App
