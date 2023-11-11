import { useState, useEffect } from 'react'
import LinearProgress from '@mui/material/LinearProgress';

function Homepage() {

  const [funds, setFunds] = useState(0);
  const [assetCounter, setAssetCounter] = useState(0);

  // When asset reaches 100%, restart at 0% DONE
  // Increase fund amount by X DONE

  // -----

  // TODO: Modularize the different assets (including functionality)
  // TODO: When assets reach 100%, don't automatically restart at 0% (maybe add a button to restart)
  const collectAndRestart = () => {};

  // ----- 

  // TODO: Increase levels of assets (maybe add a button to increase levels)
  // TODO: Increase funds by X amount per level of assets

  // -----

  // TODO: Add unique colors/sprites for each asset


if (assetCounter < 100) {
  // useEffect is a hook that runs after the first render
  useEffect(() => {

    // setInterval is a function that runs every X milliseconds
    const interval = setInterval(() => {
      
      // setAssetCounter is a function that updates the state of assetCounter
      setAssetCounter((prevCounter) => prevCounter + 1);
      
    }, 1000);
    
    // then return a function that clears the interval
    return () => clearInterval(interval);
    
    // pass an empty array as the second argument to useEffect to only run once
  }, []);
  } else {
    // ! THIS WILL BE REMOVED LATER
    setAssetCounter(0);
    setFunds((prevFunds) => prevFunds + 100);
  }


  return (
    <>  
      {/* TODO: MODULARIZATION OF ASSETS NEEDED, PASS DATA AS PROPS */}
      <h2>${funds}</h2>
      <LinearProgress variant="determinate" value={assetCounter} />
      <p>{assetCounter}</p>

      <LinearProgress variant="determinate" value={assetCounter} />
      <p>{assetCounter}</p>

      <LinearProgress variant="determinate" value={assetCounter} />
      <p>{assetCounter}</p>
    </>
  )
}

export default Homepage
