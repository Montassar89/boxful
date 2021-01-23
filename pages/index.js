import React from 'react';

import Banner from './components/Banner';
import Section from './components/Section';
import Card from './components/Card';
import DownloadApp from './components/DownloadApp';
import Testimonials from './components/Testimonials';
import ContactRow from './components/ContactRow';

export default function Home() {
  return (
    <div className="main">
      <Banner />
      <Testimonials />
      <ContactRow />
    
    
    </div>
  )
}