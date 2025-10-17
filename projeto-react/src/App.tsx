import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'
import ConferenciaPage from './pages/ConferenciaPage.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conferencia' element={<ConferenciaPage />} />
    </Routes>
    </>
  )
}

export default App