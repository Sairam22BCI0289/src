import Nav from './Nav.js';

const Teams = ({selRole,role_change,players}) => {

    return (
      <div>
      <Nav />
      <br />
      <h1 className="page_title">Our 2024 Batch</h1>
      <br />
      <div className="sel_container">
        <select className="form_role" value={selRole} onChange={role_change}>
            <option value="Batter">Batters</option>
            <option value="Bowler">Bowlers</option>
            <option value="All-Rounder">All Rounders</option>
            <option value="Wicket-keeper/Batter">Wicket Keepers</option>
        </select> <br />
      </div>
        <div className="card-collection">
          {players.map(player => (
            <div key={player.name} id={player.name} className={selRole === "Wicket-keeper/Batter" ?"dhoni":"player_card"}>
              <img src={player.image} className="player_img" alt="player"/>
              <div className="card_body">
                <p><b>Name:</b> {player.name}</p>
                <p><b>Matches played:</b> {player.matchesPlayed}</p>
                <p><b>Runs:</b> {player.runs}</p>
                <p><b>Wickets:</b> {player.wickets}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

}

export default Teams;
