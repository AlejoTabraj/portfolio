import React, { useState, useEffect } from 'react';
import Inicio from './Inicio';
import Main from './Main'
import '@fontsource/cormorant-garamond';
import "@fontsource/major-mono-display"; // Defaults to weight 400.
import "@fontsource/libre-barcode-39-extended-text"; // Defaults to weight 400.
import './style.css';

export default function App() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplay(true);
    }, 2200);
  });

  return <div className={'app'}>{display ? <Main /> : <Inicio />}</div>;
}
