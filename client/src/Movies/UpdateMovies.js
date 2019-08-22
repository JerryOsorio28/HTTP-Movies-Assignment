import React, { useState, useEffect } from 'react';
import { Button,  Form } from 'semantic-ui-react';
import axios from 'axios';

//Semantic UI styles
import 'semantic-ui-css/semantic.min.css';

const UpdateMovies = (movieList) => {

    const movies = movieList.movieList;

    const [updatedMovie, setUpdatedMovie] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        stars: []
    });

    console.log(updatedMovie)

    useEffect(() => {

        const id = movieList.match.params.id;

        const movieInArray = movies.find( movie => `${movie.id}` === id);

       if(movieInArray) setUpdatedMovie(movieInArray)

    },[movies, movieList.match.params.id])


    // console.log(movies)

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:5000/api/movies/update-movie/${updatedMovie.id}`, updatedMovie )
        .then( res => console.log( res))
        .catch(err => console.log(err.response))
    }

    const changeHandler = e => {
        setUpdatedMovie({...updatedMovie, [e.target.name]: e.target.value})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Update Movie</h1>
            <Form.Field>
                <label>Title</label>
                <input 
                placeholder='Title' 
                name='title'
                onChange={changeHandler}
                value={updatedMovie.title}
                />
            </Form.Field>
            <Form.Field>
                <label>Director</label>
                <input 
                placeholder='Director' 
                name='director'
                onChange={changeHandler}
                value={updatedMovie.director}
                />
            </Form.Field>
            <Form.Field>
                <label>Metascore</label>
                <input 
                placeholder='Metascore' 
                name='metascore'
                onChange={changeHandler}
                value={updatedMovie.metascore}
                />
            </Form.Field>
            <Form.Field>
                <label>Stars</label>
                <input 
                placeholder='Stars'
                name='stars'
                onChange={changeHandler}
                value={updatedMovie.stars}
                />
            </Form.Field>
            <Button type='submit'>Update</Button>
        </Form>
    )
};

export default UpdateMovies;

//Movie Object Format
/*id: 5,
  title: 'Tombstone',
  director: 'George P. Cosmatos',
  metascore: 89,
  stars: ['Kurt Russell', 'Bill Paxton', 'Sam Elliot'],*/