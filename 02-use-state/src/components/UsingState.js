import { useState } from 'react'

const UsingState = () => {
    const defaultName = 'React States - useState';
    const [name, setName] = useState(defaultName);

    const handleNameUpdate = () => {
        const updatedName = `${defaultName} - Updated`;
        setName(updatedName);
    }

    return (
        <>
            <div>{name}</div>
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <button onClick={handleNameUpdate}>Update Name</button>
        </>
    )
}

export default UsingState