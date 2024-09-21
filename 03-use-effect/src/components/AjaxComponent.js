import { useState, useEffect } from 'react'

const AjaxComponent = () => {
    const usersUrl = `https://reqres.in/api/users?page=2`;
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleUsers = async () => {
        try {
            const response = await fetch(usersUrl);
            const { data } = await response.json();

            if (data && data.length > 0) {
                setUsers(data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error while fetching users:', error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        handleUsers();
    }, []);

    return (
        <div>
            <h1>User List using AJAX</h1>
            {loading && <p>Loading Users...</p>}
            {(users.length > 0) &&
                <ul className='users-list'>
                    {users.map(user => (
                        <li key={user.id}>
                            <img src={user.avatar} alt={user.first_name}
                                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                            />
                            {user.first_name} {user.last_name}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default AjaxComponent