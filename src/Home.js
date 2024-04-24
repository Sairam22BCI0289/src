import csk_home_3 from './image_csk/csk_home_3.jpg';
import csk_home_6 from './image_csk/csk_home_6.jpeg';
import ipl from './image_csk/ipl.png';
import champ from './image_csk/champ.png';
import Nav from './Nav.js';

const Home = () => {
    return (
        <div>
            <div className="welcome">
            <Nav />
            <div className="welcome_title">
                <h1>Welcome to the home of CSK</h1>
            </div>
            <div className="about">
                <h2>About CSK</h2>
                <p>Chennai Super Kings (CSK) isn't just a cricket team; it's a formidable force that embodies the essence of perseverance and resilience. Established in the vibrant city of Chennai, CSK has etched its name as a powerhouse in the Indian Premier League (IPL) arena.

Led by the iconic MS Dhoni, affectionately known as "Captain Cool," CSK has created a legacy of excellence, clinching numerous IPL titles and cementing its status as one of the most dominant teams in the league's history.

What sets CSK apart is not just its on-field prowess but also its unwavering support from the passionate "Yellow Brigade." From cheering fervently in the stands to painting the city yellow with enthusiasm, CSK fans epitomize loyalty and dedication.

Managed by astute minds and boasting a roster of seasoned players, CSK exemplifies the spirit of teamwork and camaraderie, making every match a spectacle of thrilling cricketing action and unforgettable moments.

In essence, Chennai Super Kings isn't just a team; it's a symbol of unity, resilience, and the unwavering spirit of Chennai.</p>
            </div>
            </div>
            <div className="Our City, Chennai">
            <img src={csk_home_3} id="chennai_img" />
            <h2 className="chennai_title">Chennai</h2>
            <p className="chennai_para">Our franchise is based in the city of Chennai. Chennai, formerly known as Madras, 
                is the capital city of Tamil Nadu, the southernmost state of India. It is the state's primate city and 
                is located on the Coromandel Coast of the Bay of Bengal. According to the 2011 Indian census, Chennai 
                is the sixth-most populous city in India and forms the fourth-most populous urban agglomeration. 
                Incorporated in 1688, the Greater Chennai Corporation is the oldest municipal corporation of India and 
                the second oldest in the world after London.Historically, the region was part of the Chola, Pandya, Pallava and Vijayanagara 
                kingdoms during various eras. The coastal land which then contained the fishing village Madrasapattinam, 
                was purchased by the British East India Company from the Nayak ruler Chennapa Nayaka in the 17th century. 
                The British garrison established the Madras city and port, and built Fort St. George, the first British 
                fortress in India. The city was made the winter capital of the Madras Presidency, a colonial province of 
                the British Raj in the Indian subcontinent. After India gained its independence in 1947, Madras 
                continued as the capital city of the Madras State and present-day Tamil Nadu. The city was officially 
                renamed as Chennai in 1996.</p>
            </div>
            <div className="homeground">
            <img src={csk_home_6} id="homeground_img" />
            <h2 className="homeground_title">Our Home Ground</h2>
            <p className="homeground_para">M. A. Chidambaram Stadium, commonly known as the Chepauk Stadium, is a cricket stadium in Chennai, Tamil 
                Nadu, India. Established in 1916, it is the second oldest cricket stadium in the country after Eden 
                Gardens in Kolkata. It is owned and operated by Tamil Nadu Cricket Association (TNCA). The stadium 
                is located at Chepauk, a few hundred meters from Marina beach along the Bay of Bengal. Formerly known as 
                Madras Cricket Club Ground, the stadium is named after M. A. Chidambaram, the former president of BCCI 
                and Head of TNCA. In addition to the franchise, it is also the home ground of the Tamil Nadu cricket team. 
                Chepauk hosted its first Test match on 10 February 1934, hosted the first match of the first Ranji Trophy 
                in 1934 and the Indian cricket team's first test victory in 1952 against England. The 1986 India-Australia 
                match held at Chepauk was only the second ever Tied Test in the history of the game.</p>
            </div>
            <div>
            <h2 className="homeground_title">Trophies won</h2>
            <div className="trophy_collection">
                <div className="trophy_card">
                <img src={ipl} className="trophy" />
                <h3>2010</h3>
                </div>
                <div className="trophy_card">
                <img src={champ} className="trophy" />
                <h3>2010</h3>
                </div>
                <div className="trophy_card">
                <img src={ipl} className="trophy" />
                <h3>2011</h3>
                </div>
                <div className="trophy_card">
                <img src={champ} className="trophy" />
                <h3>2014</h3>
                </div>
                <div className="trophy_card">
                <img src={ipl} className="trophy" />
                <h3>2018</h3>
                </div>
                <div className="trophy_card">
                <img src={ipl} className="trophy" />
                <h3>2021</h3>
                </div>
                <div className="trophy_card">
                <img src={ipl} className="trophy" />
                <h3>2023</h3>
                </div>
            </div>
            <br />
            <br />
            </div>
        </div>
    );
}

export default Home;