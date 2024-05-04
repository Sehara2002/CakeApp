import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'






const ApiComponent = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/login/').then(data => setUserData(data))
    }, []);

    return (
        <div>{userData}
            <h1>Hello World</h1>
        </div>

    )
}

export default ApiComponent