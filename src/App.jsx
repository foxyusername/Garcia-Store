import { useState } from 'react';
import './assets/App.css';
import Box from './box';
import { Count } from "./calculate";

function App() {
  const [array, setarray] = useState(Array(9).fill(null));
  const [X, setX] = useState(true);
  const [winner, setwinner] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [reset,setreset]=useState();

  const algorithm = [
    [3, 4, 5],
    [0, 1, 2],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 7],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const onClick = (boxidx) => {

    if (array[boxidx] === null) {

      const update = array.map((value, idx) => {
        
        if (idx === boxidx) {
          return X ? 'x' : 'o';
        } else {
          return value;
        }
      
      
    }
    )
    
      let winner = checkwinner(update);

      if (winner === 'o') {
        setwinner(false);
        setScoreO((prev) => prev + 1);

      } else if (winner === 'x') {
        setScoreX((prev) => prev + 1);
        setwinner(false);
      }


      setX(!X);
      setarray(update);
    };
  }

  function checkwinner(array) {
    for (let i = 0; i < algorithm.length; i++) {

      const [x, y, z] = algorithm[i];

      if (array[x] && array[x] === array[y] && array[y] === array[z]) {
        alert('🎉 ' + array[x] + ' has won🎉')
        return array[x];
      }

    }
    return null;
  }

function resetBoard(){
  setarray(Array(9).fill(null));
  setwinner(true);
}
  return (
    <div className='window'>
      {array.map((value, idx) => {
        return <Box value={value} onClick={() => { winner ? onClick(idx) : null }} />
      })}
      <Count scoreX={scoreX} scoreO={scoreO} />
      <button className='next' onClick={resetBoard}>continue</button>
    </div>
  );
}

export default App;
