import { useState } from 'react'

const Form = () => {

    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = e.target
        const userData = {
            name: data.name.value,
            email: data.email.value,
            gender: data.gender.value
        }

        setUser(userData)
    }

    return (
        <div className='form-container'>
            {user.name && user.name.length > 0 && (
                <div>
                    <h2>Form</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <form className='form-main' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' />
                </div>
                <div className='form-group'>
                    <select name='gender'>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form