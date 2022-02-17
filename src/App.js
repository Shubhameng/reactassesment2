import React from 'react';
// import ReactDOM  from 'react-dom';
import Slot from './SlotMach'
import './App.css';


setInterval(() => {
    let arr=['blue','red','green','aqua','yellow'];
     document.querySelector(".color").style.color=arr[Math.floor(Math.random()*arr.length)];
},500);

const App = () => {
    return (
        <>
            <h1 className='heading'> 🎰 This is <span className='color'>Slot Machine Game</span> 🎰 </h1>
            <div className='Slot-box'>
                <Slot x='😄' y='😄' z='😄' />
                <Slot x='😸' y='😻' z='😃' />
                <Slot x='💓' y='💓' z="💓" />
            </div>
            
        </>
    )

}

export default App;