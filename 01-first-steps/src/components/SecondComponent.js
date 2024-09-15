import { useState } from 'react'

const SecondComponent = () => {
    let books = [
        {
            title: 'The Alchemist',
            description: 'The Alchjemist is a novel by Brazilian author Paulo Coelho.',
        },
        {
            title: 'The Little Prince',
            description: 'The Little Prince is a novella by French writer Antoine de Saint-Exupéry.',
        },
        {
            title: 'The Da Vinci Code',
            description: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown.',
        },
    ]

    const [hasBook, setHasBook] = useState(books);

    const handleDeleteAllBooks = () => {
        setHasBook([]);
    }

    const handleDeleteBook = (index) => {
        const newBooks = [...hasBook];
        newBooks.splice(index, 1);
        setHasBook(newBooks);
    }

    const handleCloneBooks = () => {
        console.log('Cloning books...');

        const clonedBooks = [...hasBook];
        setHasBook([...hasBook, ...clonedBooks]);
    }

    return (
        <>
            <div className='books'>
                {hasBook.length > 0 &&
                    hasBook.map((book, index) => {
                        return (
                            <div key={index}>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            {
                hasBook.length === 0 ? <p>No books available</p> : (
                    <div className='flex items-center'>
                        <button className='btn btn-s' onDoubleClick={handleCloneBooks}>Clone Current Books</button>
                        <button className='btn' onClick={handleDeleteBook}>Delete A Book</button>
                    </div>
                )
            }
        </>
    )
}

export default SecondComponent