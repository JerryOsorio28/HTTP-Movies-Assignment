import React from 'react';
import { Button,  Form } from 'semantic-ui-react';

//Semantic UI styles
import 'semantic-ui-css/semantic.min.css';

const UpdateMovies = () => {
    return (
        <Form>
            <h1>Update Movie</h1>
            <Form.Field>
                <label>Title</label>
                <input placeholder='Title' />
            </Form.Field>
            <Form.Field>
                <label>Director</label>
                <input placeholder='Director' />
            </Form.Field>
            <Form.Field>
                <label>Metascore</label>
                <input placeholder='Metascore' />
            </Form.Field>
            <Form.Field>
                <label>Stars</label>
                <input placeholder='Stars' />
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