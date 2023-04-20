import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import {BootingScreen} from '../component'

export default function App({ Component, pageProps }: AppProps) {
  const [booting, setBooting] = useState(true);
  const [bootingCompleted, setBootingCompleted] = useState(false);

  function handleBooting (pCompleted = false){
      setBootingCompleted(pCompleted);
  } 
  useEffect(() => {
    setTimeout(() => {
      // set session storage so in once session booting screen will appear only once
      setBooting(bootingCompleted)
    }, 5000)
  },[])

  if(booting){
    return <BootingScreen handleBooting={handleBooting} />
  } else {
    return <Component {...pageProps} />
  }
}
