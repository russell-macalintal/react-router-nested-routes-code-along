import React from 'react';
import { Link } from 'react-router-dom';

// Traditional method of passing in props
// const MoviesList = (props) => {
//     const renderMovies = Object.keys(props.movies).map((movieID) => (
//         <Link key={movieID} to={`/movies/${movieID}`}>
//             {props.movies[movieID].title}
//         </Link>
//     ))

//     return <div>{renderMovies}</div>
// }

// Using object destructuring
const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map((movieID) => (
        <Link key={movieID} to={`/movies/${movieID}`}>
            {movies[movieID].title}
        </Link>
    ))

    return <div>{renderMovies}</div>
}

export default MoviesList;