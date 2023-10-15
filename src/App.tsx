import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './layout/HomePage'
import '@testing-library/jest-dom'
import NotFound from './components/NotFound'

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/contacts" replace />}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
