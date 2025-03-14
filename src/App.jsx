import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import Categories from './components/Categories'
import TheAllBooks from './components/TheAllBooks'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import MyFooter from './components/MyFooter'



function App() {
  const [selectedCategory, setSelectedCategory] = useState('scifi')

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <MyNav/>
      <Welcome/>
      <Categories onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <TheAllBooks selectedCategory={selectedCategory}/>
      <Testimonials/>
      <Newsletter/>
      <MyFooter/>  
    </>
  )
}

export default App
