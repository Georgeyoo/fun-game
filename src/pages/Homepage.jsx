import { useState, useEffect } from 'react' // React Hooks
import EarnButton from '../components/EarnButton';
import Asset from '../components/Asset';
import DEFAULT_JSON from '../assets/asset.json';

function Homepage() {

  const [funds, setFunds] = useState(0);
  
  // This funciton will SET our funds (by calling the setFunds()) to the current funds + 1
  const clickIncreaseFunds = () => {
    setFunds((prevFunds) => prevFunds + 1);
  };

  const assetIncreaseFunds = () => {
    setFunds((prevFunds) => prevFunds + 100);
  };
  
  // ----- 
  
  // TODO: When assets reach 100%, don't automatically restart at 0% (maybe add a button to restart)
  // TODO: Increase levels of assets (maybe add a button to increase levels)
  // TODO: Increase funds by X amount per level of assets

  // -----

  // TODO: Add unique colors/sprites for each asset

  return (
    <>  
      
      {/* TODO: MODULARIZATION OF ASSETS NEEDED, PASS DATA AS PROPS */}
      <h2>${funds}</h2>
      
      <EarnButton onClick={clickIncreaseFunds}/>

      <h3>Assets:</h3>
      <Asset velocity={DEFAULT_JSON.asset1.velocity} onComplete={assetIncreaseFunds}/>
      <Asset velocity={DEFAULT_JSON.asset2.velocity} onComplete={assetIncreaseFunds}/>
      <Asset velocity={DEFAULT_JSON.asset3.velocity} onComplete={assetIncreaseFunds}/>
    </>
  )
}

export default Homepage
