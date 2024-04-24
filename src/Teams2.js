import Nav from './Nav.js';

const Teams2 = ({search,filteredPlayers,handleSearch}) => {
    return (
        <div>
            <Nav />
            <br />
            <h1 className="page_title">Our 2024 Batch</h1>
            <br />
            <div className="searchbar">
                <input
                type="text"
                placeholder="Enter name of player"
                value={search}
                onChange={handleSearch}
                />
            </div>
            <br />
            <div>
                {filteredPlayers.map(splayer => (
                <div key={splayer.name} id={splayer.name} className="player_info">
                <img src={splayer.image} className="player_img2" alt="player"/>
                <h2>{splayer.name}</h2>
                <p><b>Role:</b> {splayer.role}</p>
                <p><b>Matches played:</b> {splayer.matchesPlayed}</p>
                <p><b>Runs:</b> {splayer.runs}</p>
                <p><b>Wickets:</b> {splayer.wickets}</p>
                </div>
                ))}
            </div>
        </div>


      );
}

export default Teams2;