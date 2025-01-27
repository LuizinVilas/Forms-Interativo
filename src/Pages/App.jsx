import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import CreateAccount from './CreateAccount'

function App() {
  return (
    <>
     <Router>
        <Routes>
            <Route path="/" element={< Login/>} />
            <Route path='/CreateAccount' element={<CreateAccount/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
