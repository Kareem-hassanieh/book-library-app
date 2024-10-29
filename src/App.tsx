import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css'
import BookDetails from './components/BookDetails';
import LoginPage from './components/LoginPage';
import AuthorBooks from './components/AuthorBooks';

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/book/:id" element={<BookDetails />} /> 
      <Route path="/author/:name" element={<AuthorBooks />} />
    </Routes>
  </Router>
   
  );
}

export default App

