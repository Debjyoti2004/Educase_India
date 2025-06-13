import { Routes, Route } from 'react-router-dom';
import Hero from './components/hero'
import Login from './components/login';
import Account from './components/account';
import CreatePage from './components/createaccount';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/createaccount" element={<CreatePage />} />
    </Routes>
  )
}

export default App
