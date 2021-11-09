import React, {useEffect, useState} from 'react'
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header'


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length -1));
      let chosen = originals[0].itens.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  useEffect( ()=> {
    const scrollLinstener = ()=> {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollLinstener)
    return ()=> {
      window.removeEventListener('scroll', scrollLinstener)
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>
      
      {featuredData && 
        <FeaturedMovie item = {featuredData}/>
      }

      <section className ="lists">
        {movieList.map((item, key) => (
          <MovieRow key = {key} title= {item.title} itens={item.itens}/>
        ))}
      </section>
    </div>
  );
}