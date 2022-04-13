import { React, useEffect, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
// let c = [];
// let b = [];
function App() {
  
  const [playerList, setPlayerList] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  async function fetchData() {
    try {
      var a = await  fetch("https://api.npoint.io/20c1afef1661881ddc9c");
      var b = await a.json();
        // playerList = b.playerList;
       setPlayerList(  b.playerList);
      
      } catch (error ) {
        console.log("network" ,error);
      }
    }

  


  useEffect(() => {
         fetchData();
     },[]);
 

  return (
    <>
    <div className="container-fluid">

    
      <div className="container">
        <div className="row">
          <div className="hederr">
            <h1>Top 50 player's</h1>
          </div>
          <input type="text" placeholder="search player here" id="searchBox"  onKeyUp={(e) => setSearchTerm(e.target.value)}/>
        {
          // function display(playerList){

          // }
          playerList.filter((val)=>{
            return val.TName.toLowerCase().includes(searchTerm.toLowerCase()) || val.PFName.toLowerCase().includes(searchTerm.toLowerCase())
          }).reverse().map((player) => {
            // console.log(player.PFName);
           return (
           <div className="col-md-4 col-sm-6 col-lg-3  col-">
           <div className="card">
            <img src={`./player-images/${player.Id}.jpg`} className="card-img-top" alt="player img" />
            <div className="card-body">
              <h5 className="card-title">{player.PFName}</h5>
              <h6>{player.SkillDesc}</h6>
              <h6>{player.Value} $</h6>
              <h6>{player.TName}</h6>
              <h6>{player.UpComingMatchesList[0].CCode} Vs {player.UpComingMatchesList[0].VsCCode} : {player.UpComingMatchesList[0].MDate}</h6>
        
                         </div>
           </div>
            </div>
          
           )} 

           
        )
        }
          
        </div>
      </div>
      </div>
    </>
  
  );
}

export default App;
