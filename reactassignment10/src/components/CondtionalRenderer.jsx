import { useState } from "react"

function CondtionalRenderer() {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(prev => !prev);   
    };

  return (
    <div>
        {isVisible ? (
            <div>Component is Visible</div>
        ) : (
            <div>Component is Hidden</div>
        )}

        <button onClick={toggleVisibility}>
            {isVisible ? "Hide" : "Show"} Component
        </button>
    </div>
  )
}

export default CondtionalRenderer