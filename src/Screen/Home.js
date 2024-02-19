import React from 'react'
import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import requests from '../requests';

const Home = () => {
  return (
    <>
<div className="app">
        {/* Nav */}
        <Nav />
        {/* Banner */}
        <Banner />
        <Row
          title="NetFlix Originals"
          fetchUrl={requests.fetchNeflixOriginals}
          islargeRow
        />
        <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
        <Row
          title="UpComing Movies"
          fetchUrl={requests.fetchUpcoming}
          islargeRow
        />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          islargeRow
        />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          islargeRow
        />
        <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated} />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          islargeRow
        />
      </div>
    </>
  )
}

export default Home