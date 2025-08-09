import React,{ useState, useEffect } from 'react';

export default function BackgroundColorChanger() {
    const [color, setColor] = useState('pink');

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let hex ="#";
        for (let i = 0; i < 6; i++) {
            hex += letters[Math.floor(Math.random() * 16)];
        }
        return hex;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(getRandomColor());
        }, 2000); // Change color every 2 seconds

        //cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []);

    return (
       
        <div style={{ ...style.card, backgroundColor: color }}>
            <h2>Background Color Changer</h2>
            <p>Changes every two seconds</p>
        </div>
        
    )

}

    const style = {
        card: {
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            color: '#fff',
            transition: 'background-color 0.5s ease'
        }
    }