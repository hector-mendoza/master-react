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

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]: value
            }
        })
    }

    return (
        <div className='form-container'>
            {user.name && user.name.length > 0 && (
                <div className='form-message'>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            )}
            <form className='form-main' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' name='name' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <select name='gender' onChange={handleChange}>
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