import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";


export default class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }
  
  componentDidMount() {
    this.fetchMovie(this.movieId);
  }

  componentWillReceiveProps(newProps) {
    if (this.movieId !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  removeMovie = id => {
    this.props.setMovieList(this.props.movieList.filter(movie => movie.id != id))
  }

  updateMovie = id => {
    this.props.history.push(`/update-movie/${this.props.match.params.id}`)
  }

  deleteMovie = (e) => {
    const movieToDelete = this.props.match.params.id;
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/api/movies/${movieToDelete}`, movieToDelete)
    .then(res => {
      this.removeMovie(movieToDelete)
      this.props.history.push('/')
      // console.log('from deleteMovie',this.props)
    })
    .catch( err => console.log(err.response))
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }
    console.log(this.props)
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.state.movie} />
        <div 
            onClick={ this.updateMovie }
            id="updateButton"
          >
          Update
        </div>
        <div 
            onClick={this.deleteMovie}
            id="deleteButton"
          >
          Delete
        </div>
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
      </div>
    );
  }
}
