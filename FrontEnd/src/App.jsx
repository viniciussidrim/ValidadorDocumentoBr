import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Frame from './components/Frame/Frame'
import Footer from './components/Footer/Footer'


function App() {
  const [page, setPage] = useState(1)

  return (
    <div className='h-screen flex flex-col'>
      <NavBar page={page} func={setPage}/>
      <Frame page={page}/>
      <Footer/>
    </div>
  )
}

export default App
