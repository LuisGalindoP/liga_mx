// import dependencies
import React, {useState} from 'react';

//import related components
import BannerTeams from "./components/bannerTeams";
import LogoBanner from "./components/logoBAnner";
import MenuBar from "./components/menuBar";
import GameCards from "./components/gameCards";
import MiddleAddBanner from "./components/middleAddBanner";
import NewsCarrousel from "./components/newsCarrousel"

//import data for teams
import Teams from "./data/teams";



function App() {
    const [teams, setTeams] = useState(Teams);
  return (
    <div>
      <BannerTeams
        teams={teams}
      />
      <LogoBanner/>
      <MenuBar/>
      <GameCards/>
      <MiddleAddBanner/>
      <NewsCarrousel/>
      <MiddleAddBanner/>
    </div>
  );
}

export default App;
