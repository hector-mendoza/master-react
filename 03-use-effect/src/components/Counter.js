import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            Counter: {count}
        </div>
    )
}

export default Counter