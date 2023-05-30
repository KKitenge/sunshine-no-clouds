import './assets/css/style.css';
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Bio');
  console.log(currentPage);

  const renderPage = () => {
    if(currentPage === 'Bio') {
      return <Bio />;
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if(currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}

//Header or Navbar