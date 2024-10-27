import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css'
import BookDetails from './components/BookDetails';
import LoginPage from './components/LoginPage';

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/book/:id" element={<BookDetails />} /> 
    </Routes>
  </Router>
   
  );
}

export default App

