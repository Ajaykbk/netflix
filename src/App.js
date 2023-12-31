import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <Banner fetchUrl={requests.fetchTrending}></Banner>
      <Row isLargeRow={true} title="NetFlix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>


    </div>
  );
}

export default App;
