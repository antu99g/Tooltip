import { useState } from 'react';
import './App.css';

function App() {
	const [position, setPosition] = useState('right');
	const [showTooltip, setShowTooltip] = useState(false);

	return (
      <div className="App">
         <span
				className='container'
            onMouseEnter={() => {
               setShowTooltip(true);
            }}
            onMouseLeave={() => {
               setShowTooltip(false);
            }}
         >
            <h2>Hover over me!</h2>

            {showTooltip && (
					<span className={`${position} toolTip`}>Thanks for hovering!</span>
            )}
         </span>

         <h3 className='positionHeading'>Tooltip Position</h3>

         <select onChange={(e) => {setPosition(e.target.value)}}>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="top">Top</option>
         </select>
      </div>
   );
}

export default App;