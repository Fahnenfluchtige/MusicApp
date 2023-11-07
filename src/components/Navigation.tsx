
import { AiFillBell } from "react-icons/ai";
import "../styles/Navigation.css";
import Searchbar from "./Searchbar";


const myArea = {
  name: "somename",
  type: "sometype",
};

const Navigation = () => {
  return (
    <nav className="navbar">
      <Searchbar />
      <menu className="area-menu">
        <AiFillBell className="bell-icon" />
        <div className="personal-area">
          <img
            className="image"
            src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          />
          <div className="information">
            <div className="information-name">{myArea.name}</div>
            <div className="information-type">{myArea.type}</div>
          </div>
        </div>
      </menu>
    </nav>
  );
};

export default Navigation;
