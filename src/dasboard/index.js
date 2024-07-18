import React from 'react';
import'./index.css'


const Dashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className='sidebar1'>
          <h2>Menu</h2>
          <ul>
            <li>Game statistics</li>
            <li>Game</li>
          </ul>
        </div>
      </div>
      <div className="content">
      <h1>UpcycleIt Dashboard</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="stats">
          <h2>Game Stats</h2>
          <img src="/images/graph.gif" alt="Game Stats Chart" />
        </div>
        {/* <div className="recent-game">
          <h2>Recent Game</h2>
          <div className="game-item">
            <img src="/images/knit.jpg" alt="Recent Game" />
            <div>
              <h3>Game Title</h3>
              <p>Some description of the recent game.</p>
            </div>
            <button>Play</button>
          </div>
        </div> */}
        <div className="game-list">
          <h2>Our Games</          h2>
          <div className="game-item">
            <img src="/images/game1.jpeg" alt="Game 1" />

            <img src="/images/game2.jpeg" alt="Game 2" />

            <img src='/images/game3.jpeg'></img>
          



            <div>
              {/* <h3>Cycle It</h3> */}
              {/* <p>The Wrap-It Game challenges players to upcycle everyday items into creative products.
                 Transform materials like newspapers and fabric scraps into
                 gift wraps and reusable bags while earning points. 
                 Have fun, innovate, and make a positive impact on the environment!</p> */}
            </div>
            {/* <button>Play</button> */}
          </div>
          {/* <div className="game-item">
            <img src="/images/game2.jpeg" alt="Game 2" />
            <img src='/images/game3.jpeg'></img>

            <div>
              <h3>Wrap It</h3>
              <p>The Wrap-It Game challenges players to upcycle
                 everyday items into creative products. Transform materials
                  likenewspapers and fabric scraps into gift
                 wraps and reusable bags while earning points. 
                 Have fun, innovate, and make a positive impact 
                 on the environment!</p>
            </div>
            <button>Play</button>
          </div> */}
          {/* <div className="game-item">
            <img src='/images/game3.jpeg'></img>
            <div>
              <h3>Paint It</h3>
              <p>The Wrap-It Game challenges players to upcycle everyday items into creative products. 
                Transform materials like newspapers and fabric
                 scraps into gift wraps and reusable bags while earning points. 
                 Have fun, innovate, and make a positive impact on the environment!.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;