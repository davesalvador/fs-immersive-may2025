import { useState, useEffect, use } from "react"


// LiveClock

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Live Clock</h1>
        <h2>{time.toLocaleTimeString()}</h2>  

      </div>

  )
}

export default LiveClock
