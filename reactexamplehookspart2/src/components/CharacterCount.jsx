import { useState, useEffect } from 'react';

export default function CharacterCount() {
    const [text, setText] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(text.length);
    }, [text]);

    return (
        <div className="cards">
            <h2>Character Count</h2>
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type something...'
            ></textarea>
            <p>Character count: {count}</p>
            {count > 100 && <small >Character limit exceeded</small>}
        </div>
    )
}