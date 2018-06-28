import React from 'react';

  const Action =(props)=>{
    return (
      <div>
        <button 
        onClick={props.handlePick} 
        disabled={!props.hasOptions}
        >what does the button do?</button>
      </div>
    );
    }
    export default Action;