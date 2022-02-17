import React from 'react';
import Sdata from './Sdata';
import './index.css';




let Displays = (data) => {
    return (
        <div className='card' key ={data.id}>
            <img src={data.imgsrc} alt="webseries" className='img1' />
            <div className='card_info'>
                <span className='card_category'>{data.Sname}</span>
                <h3 className='card_title'>{data.title}</h3>
                <a href={data.Slink} target="_blank">
                    <button className='btn1'>Watch Now</button>
                </a>
            </div>
        </div>

    )
}


function Card() {
    return (
     <div className='cards'>
        {Sdata.map(Displays)}
     </div>
    )
}

export default Card;