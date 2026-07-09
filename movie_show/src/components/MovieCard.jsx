import React from 'react'

const MovieCard = ({ movie }) => {
    function fovoriteMovie() {
        alert(`You have added  ${movie.title} to your favorites!`);
    }
  return (
    <>
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-overlay">
                <button className='movie-favorite' onClick={fovoriteMovie}>
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
        </div>
    </div>
    </>
  )
}

export default MovieCard
