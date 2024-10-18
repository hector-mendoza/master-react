import { useState } from 'react'

const Create = () => {
    const heading = "Agregar Película";

    const [movie, setMovie] = useState({
        title: "",
        description: ""
    });

    const { title, description } = movie;

    const handleMovieSubmit = (e) => {
        e.preventDefault();

        let movie = {
            id: new Date().getTime(),
            title: e.target.title.value,
            description: e.target.description.value
        }

        setMovie(movie);
    }

    return (
        <div className="add">
            <h3 className="title">{heading}</h3>
            {
                (title && description) && <strong>Has creado la película: {title}</strong>
            }
            <form onSubmit={handleMovieSubmit}>
                <input type="text" id="title" placeholder="Titulo" />
                <textarea id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}

export default Create