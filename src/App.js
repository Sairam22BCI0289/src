import './App.css';
import Home from './Home.js';
import Teams from './Teams.js';
import Teams2 from './Teams2.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Contact from './Contact.js';
import {useState} from "react";
import csk_home_5 from './image_csk/csk_home_5.png';

function App() {
  //for choosing role
  const [selRole,setRole] = useState("Batter");

  //list of players
  const players = [
    {
      name: "Ruturaj Gaikwad",
      role: "Batter",
      matchesPlayed: 57,
      runs: 1952,
      wickets: 0,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/102.png"
    },
    {
      name: "Devon Conway",
      role: "Batter",
      matchesPlayed: 23,
      runs: 924,
      wickets: 0,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png"
    },
    {
      name: "MS Dhoni",
      role: "Wicket-keeper/Batter",
      matchesPlayed: 255,
      runs: 5121,
      wickets: 0,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
    },
    {
      name: "Ajinkya Rahane",
      role: "Batter",
      matchesPlayed: 177,
      runs: 4519,
      wickets: 1,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/44.png"
    },
    {
      name: "Shaik Rasheed",
      role: "Batter",
      matchesPlayed: 0,
      runs: 0,
      wickets: 0,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/778.png"
    },
    {
        name: "Sameer Rizvi",
        role: "Batter",
        matchesPlayed: 4,
        runs: 14,
        wickets: 0,
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1229.png"
      },
    {
        name: "Daryl Mitchell",
        role: "All-Rounder",
        matchesPlayed: 7,
        runs: 151,
        wickets: 1,
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/83.png"
      },     
    {
      name: "Ravindra Jadeja",
      role: "All-Rounder",
      matchesPlayed: 231,
      runs: 2776,
      wickets: 156,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/46.png"
    },
    {
      name: "Mitchell Santner",
      role: "All-Rounder",
      matchesPlayed: 15,
      runs: 56,
      wickets: 13,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/75.png"
    },
    {
        name: "Rachin Ravindra",
        role: "All-Rounder",
        matchesPlayed: 5,
        runs: 112,
        wickets: 0,
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/724.png"
      },
    {
      name: "Moeen Ali",
      role: "All-Rounder",
      matchesPlayed: 60,
      runs: 1034,
      wickets: 35,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/206.png"
    },
    {
      name: "Shivam Dube",
      role: "All-Rounder",
      matchesPlayed: 56,
      runs: 1282,
      wickets: 4,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/211.png"
    },
    {
      name: "Nishant Sindhu",
      role: "All-Rounder",
      matchesPlayed: 0,
      runs: 0,
      wickets: 0,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/791.png"
    },
    {
      name: "Raj Hangargekar",
      role: "Bowler",
      matchesPlayed: 2,
      runs: 0,
      wickets: 3,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/783.png"
    },
    {
        name: "Tushar Deshpande",
        role: "Bowler",
        matchesPlayed: 28,
        runs: 21,
        wickets: 30,
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/539.png"
      },
    {
      name: "Deepak Chahar",
      role: "Bowler",
      matchesPlayed: 77,
      runs: 80,
      wickets: 76,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/91.png"
    },
    {
      name: "Mahesh Theekshana",
      role: "Bowler",
      matchesPlayed: 25,
      runs: 7,
      wickets: 25,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/629.png"
    },
    {
      name: "Mukesh Choudhary",
      role: "Bowler",
      matchesPlayed: 14,
      runs: 6,
      wickets: 14,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/970.png"
    },
    {
      name: "Mustafizur Rahman",
      role: "Bowler",
      matchesPlayed: 52,
      runs: 13,
      wickets: 56,
      image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/258.png"
    } 
    ];

    //filtered list of players based on role
    const [filtered, setFiltered] = useState(
      players.filter((player) => player.role === selRole)
    );

    //modifying filtered list when role is selected
    function role_change(event) {
      const role = event.target.value;
      setRole(role);
      const filtered_players = players.filter((player) => player.role === role);
      setFiltered(filtered_players);
    }

    //searching name of player
    const [search, setSearch] = useState('');

    //players list filtered based on name matching with text entered in searchbar
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(search.toLowerCase())
    );
  
    //setting Search
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };

    var today=new Date();

  return (
    <Router>
      <header>
        <img src={csk_home_5} className="icon" />
        <h4 id="header_title">Chennai Super Kings</h4>
      </header>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/Teams" element={<Teams 
        selRole={selRole} 
        role_change={role_change} 
        players={filtered}
        />}>
        </Route>
        <Route path="/Teams2" element={<Teams2 
        search={search}
        filteredPlayers={filteredPlayers}
        handleSearch={handleSearch}
        />}>
        </Route>
        <Route path="/Contact" element={<Contact />}>
        </Route>
      </Routes>
      <footer>
        <h4>Official website of CSK - {today.getFullYear()}</h4>
      </footer>
    </Router>
  );
}

export default App;