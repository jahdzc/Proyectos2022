import '../styles/Menu.scss';
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Inbox} from '../images/messenger.svg';
import {ReactComponent as Explore} from '../images/explore.svg';
import {ReactComponent as Notification} from '../images/notifications.svg';
import ProfileIcon from './ProfileIcon';
import image from '../images/profile.jpg';

function Menu () {
    return (<div className="menu">
        <Home className="icon" />
        <Inbox className="icon" />
        <Explore className="icon" />
        <Notification className="icon" />
        <ProfileIcon iconSize="small" image={image}/>
    </div>
    );

}

export default Menu;