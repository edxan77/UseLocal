

import React from 'react';
import './App.css';
import { useToggle } from './hooks/useToggle';





function App() {

const[val , func,ref,clear,] = useToggle()

 
  return (

     
    <div>
      <input ref={ref} className='inp'></input>
      <button onClick={func} className='btnadd'>add</button>
      <div className='main'>
        {val.map(function(item,index){
          return <span key={Math.random()} className='list'>{item}</span>
        })}
        
        </div>
        <button onClick={clear} className={val.length>0?"btnclear":"btnclearhide  "}>CLEAR</button>
      
    </div>
      
      

  );
}

export { App}
