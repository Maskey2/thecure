import React from 'react'
import './../index.css';

const pStyle = {
    fontSize: '100px',
    fontFamily: 'Quicksand',
    position: 'absolute',
    top: '40%',
    left: '5%',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'grey'
};
const subpStyle = {
    fontSize: '30px',
    fontFamily: 'Courgette',
    position: 'absolute',
    top: '60%',
    left: '5%',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black'
};

export default function Mainimg() {
    return (
        <div>
            <div className="bg"></div>
            <p style={pStyle}> We Care</p>
            <p style={subpStyle}> <em>"We are here to listen and provide the best help"</em></p>
        </div>
    )
}
