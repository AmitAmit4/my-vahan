// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './Features';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import User from './User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/feature" element={<Features/>} />
        <Route path="/user" element={<User/>} />
       </Routes>
       <Footer/>
       </BrowserRouter> 
    </div>
  );
}

export default App;
