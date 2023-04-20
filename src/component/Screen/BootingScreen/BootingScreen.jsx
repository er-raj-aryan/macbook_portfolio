import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function BootingScreen({handleBooting}) {
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
          }, 800);
          return () => {
            clearInterval(timer);
          };    
          if(progress === 100){
            handleBooting(false)
          }
    },[])

  return (
    <div className=' flex justify-center flex-col gap-8 items-center h-[100vh]'>
        <img className='w-20' src='./apple.svg' alt='apple' />
        <Box sx={{width:'20%'}}>
        <LinearProgress variant="determinate" value={progress} color="inherit"/>
        </Box>
    </div>
  )
}

export default BootingScreen