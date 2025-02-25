import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { About } from './components/About';


export function App() {
  return (
    <>
    <Header />
    <About />
    </>

  );
}