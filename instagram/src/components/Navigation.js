import "../styles/Navigation.scss";
import logo from '../images/logoletter.png';
import searchIcon from '../images/searchIcon.png';
import Menu from './Menu.js';

function Navigation() {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="Instagram Logo" />
                    <div className="search">
                        <img className="searchIcon" src={searchIcon} alt="Search Icon" />
                            <span className="searchText">Search</span>
                    </div>
                <Menu />
            </div>
        </div>
    );
}

export default Navigation;