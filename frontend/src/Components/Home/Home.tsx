import { useEffect, useState } from "react";
import { game } from "../Games/GameCollections/GameCollectionsLogic"
import  Image  from '../../Images/logo.png';
import axios from "axios";

function Home() {

  const [, setData] = useState<game[]>([]);

  useEffect(() => {
    axios
      .get(`http://18.224.45.201:8080/game/getAllGames`)
      .then((Response) => setData(Response.data))
      .catch((error) => console.error(error));
  }, [])

  return (
    <>
    <section className="home">
      <h1>Welcome To Board.up</h1>

      <img alt='Board.up logo' src={Image} style={{ width: '20%' }} />
      <br />
      <br />
      <div className="home-contents">
        <p>Board.up is your ultimate hub for board game enthusiasts!</p>

        <p>Whether you're here to discover new games, connect with like-minded players, or organize exciting events, our platform has you covered.</p>

        <br />
        <h3>Features You'll Love</h3>
        <ul>
          <li>Personalized Accounts: Log in to create and manage your account. Add, update, and customize your profile to showcase your favorite games and collections.</li>
          <li>Collections Made Easy: Keep track of your board game library by adding your collections to your profile.</li>
          <li>Guest Access: Not ready to commit? Browse our content as a guest and see what Board.up has to offer.</li>
          <li>Community Discussions: Rate games and start or join threads to share your thoughts on board games or dive into other engaging topics.</li>
          <li>Post Management: Complete control over your content — delete any post you've created, hassle-free.</li>
          <li>Event Planning: Create and join meet-ups for tournaments, game nights, or other events at specific locations. Bring the community together for unforgettable experiences.</li>
          <li>Comprehensive Database: Powered by the BGG API, our database is packed with the latest and greatest board games, ensuring you never miss a gem.</li>
        </ul>
        <p>Join Board.up today and level up your board game journey!</p>
      </div>
    </section>
    </>
  )
}

export default Home