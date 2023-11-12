import { useState, useEffect } from 'react' // React Hooks
import LinearProgress from '@mui/material/LinearProgress';

export default function Asset(props) {

    const [assetCounter, setAssetCounter] = useState(0);

      // Modularize the different assets (including functionality) DONE
        const collectAndRestart = () => {};

    // Logic
    if (assetCounter < 100) {
        // useEffect is a hook that runs after the first render
        useEffect(() => {
      
          // setInterval is a function that runs every X milliseconds
          const interval = setInterval(() => {
            
            // setAssetCounter is a function that updates the state of assetCounter
            setAssetCounter((prevCounter) => prevCounter + props.velocity);
          }, 1000);
          
          // then return a function that clears the interval
          return () => clearInterval(interval);
          
          // pass an empty array as the second argument to useEffect to only run once
        }, []);
        } else {
          // ! THIS WILL BE REMOVED LATER
          setAssetCounter(0);
          props.onComplete((prevFunds) => prevFunds + 100);
        }

    return (
        // React Fractals
        <>
            <LinearProgress variant="determinate" value={assetCounter} />
            <p>{assetCounter}</p>
        </>
    );
};