import { useState } from 'react'
import PropTypes from 'prop-types'

const Year = ({ year }) => {
    const [messages, setMessages] = useState("");
    const [getYear, setYear] = useState(year);

    const handleUpdateYear = (e) => {
        let year = e.target.value;
        if (isNaN(year) || Number.isInteger(year)) return;

        if (year.length === 0 || year === "") {
            setMessages("Year is required")
        } else if (year < 0) {
            setMessages("Year should be a positive number")
        } else if (year.length > 4 || year.length < 4) {
            setMessages("Year should be 4 digits")
        } else {
            setMessages("")
        }

        setYear(parseInt(year))
    }

    return (
        <div>
            <h2>Year: {getYear}</h2>
            {messages && <span className='message'>{messages}</span>}
            <div className='year flex align-center'>
                <button onClick={() => setYear(getYear - 1)}>Decrement</button>
                <input type="text" value={getYear} onChange={handleUpdateYear} />
                <button onClick={() => setYear(getYear + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Year

Year.propTypes = {
    year: PropTypes.number.isRequired
}