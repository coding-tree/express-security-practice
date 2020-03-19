import React, { useState } from 'react';

const LoggedPage = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>naciśnięto {count} razy</p>
            <button onClick={() => { setCount(count + 1) }}>Dodaj</button>
        </div>
    )
}

export default LoggedPage;