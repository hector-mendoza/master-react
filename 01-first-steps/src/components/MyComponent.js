import PropTypes from 'prop-types'

const MyComponent = ({ text }) => {
    return (
        <>
            {
                text ? <p>{text}</p> : <p>No text passed as prop</p>
            }
        </>
    )
}

export default MyComponent

MyComponent.propTypes = {
    text: PropTypes.string
}