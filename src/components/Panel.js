import React, { useState } from 'react'

function Panel({letter, background, setBackground, click}) {

    const [state, setState] = useState(true);

    function changeStatus(){
        setState(!state);
        setBackground(!background);
    }

  return (
    <div className={state? "panel" : "panel panelMove"} onClick={changeStatus}>
        <h3 onClick={click}>{letter}</h3>
{/* 
        {
            state? null : <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At unde sit voluptatibus dolore eligendi assumenda non.</p>
        } */}
        
    </div>
  )
}

export default Panel