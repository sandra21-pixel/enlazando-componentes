import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import Footer from './Footer';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Notfound from './Notfound';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
        
          <SideBar />
          {/* <ContentWrapper /> */}

          <div className="content">
            <TopBar />
            <ContentRowMovies />
            <Routes>
                {/*<!-- Last Movie in DB -->*/}
                <Route path="/last" element={<LastMovieInDb/>}/>
                {/*<!-- End content row last movie in Data Base -->*/}

                {/*<!-- Genres in DB -->*/}
                <Route path = "/genres"  element={<GenresInDb/>} />

                <Route path = "/ContentMovie"  element={<Chart/>}/>

                <Route path = "*" element ={<Notfound/>}/>
            </Routes>
					  
            <Footer />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
