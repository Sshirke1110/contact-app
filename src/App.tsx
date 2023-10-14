import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './layout/HomePage'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/contacts" replace />}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}

export default App
