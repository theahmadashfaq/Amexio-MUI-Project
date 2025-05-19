import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Insights } from './components/Insights';
import { Main } from './components/Main';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/work" element={<Work />} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;