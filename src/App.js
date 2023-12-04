import './index.css';
import Panel from './components/Panel';
import { useState } from 'react';
import Content from "./components/Content"

function App() {

  const [background, setBackground] = useState(true);
  const [display, setDisplay] = useState("A")

  return (
    <div className={background? "App" : "App AppChange"}>

      <div className="panels">
        <Panel letter="A" setBackground = {setBackground} background={background} click={() => {setDisplay("A")}}/>
        <Panel letter="B" setBackground = {setBackground} background={background} click={() => {setDisplay("B")}}/>
        <Panel letter="C" setBackground = {setBackground} background={background} click={() => {setDisplay("C")}}/>
        <Panel letter="D" setBackground = {setBackground} background={background} click={() => {setDisplay("D")}}/>
        <Panel letter="E" setBackground = {setBackground} background={background} click={() => {setDisplay("E")}}/>
      </div>
     
     <div className="content">
        {
          display === "A"? "A" : null
          
        }

        {
          display === "B"? "C" : null
          
        }
        {
          display === "C"? "E" : null
          
        }
        {
          display === "D"? "G" : null
          
        }
        {
          display === "E"? "I" : null
          
        }
     </div>
    </div>
  );
}

export default App;
