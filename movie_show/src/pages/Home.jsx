import React from 'react'
import MovieCard from '../components/MovieCard'
import {useState} from 'react'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const movies = [
        {id:1,title: 'Inception',poster: 'https://example.com/inception.jpg', description: 'A mind-bending thriller about dreams within dreams.'},
        {id:2,title: 'The Matrix',poster: 'https://example.com/matrix.jpg', description: 'A hacker discovers the shocking truth about reality.'},
        {id:3,title: 'Interstellar',poster: 'https://example.com/interstellar.jpg', description: 'A team of explorers travel through a wormhole in space.'} 
    ]
    function searchMovie() {
        alert(`Searching for ${searchTerm}...`);
    }
  return (
    <>
    <div className="home">
        <form className="search-form">
            <input type="text" placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            
            />
            <button type="submit" onClick={searchMovie}>Search</button>
        </form>
        <div className = "movie-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchTerm.toLowerCase()) && <MovieCard  movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
    </>
  )
}

export default Home
