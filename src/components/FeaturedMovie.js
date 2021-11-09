import React from "react";
import './FeaturedMovie.css'

export default ({item}) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }


    return (
        
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            
            <div className ="featured--vertical">
                <div className="featured--horizontal">
                    <div className= "featured--name">{item.original_name}</div>
                        <div className= "featured--points">{item.vote_average} pontos</div>
                        <div className= "featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                        <div className="featured--description">{item.overview}</div>      
                        <dv className= "featured--buttons">
                        
                            <a href= "">Assistir</a>
                            <a href= "">+Minha Lista</a>
                        </dv> 
                        <dv className= "featured--genres">
                            <strong>Gêneros: </strong>
                            {genres.join(', ')}
                        </dv> 
                </div>
                
            </div>

        </section>
    )
}