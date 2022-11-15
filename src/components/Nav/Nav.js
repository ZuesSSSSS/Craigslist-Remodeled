// import { Link } from "react-router-dom";
import './nav.css'
import Community from './assets/Group.svg'
import Service from './assets/Gear.svg'
import Forums from './assets/Forum.svg'
import Gigs from './assets/Money.svg'
import Jobs from './assets/Suitcase.svg'
import Sale from './assets/Sale.svg'
import Housing from './assets/House.svg'

function Nav() {
    return (
        <>
            <div className='container dark-blue'>
                <button className="Craigslist">Craigslist</button>
                <button className="Login">Login</button>
                <button className="Sign-Up">Sign Up</button>

                <button className="Community light"><img src={Community} alt='person outline' height='30px'/>Community</button>
                <button className="Services light"><img src={Service} alt='person outline' height='30px'/>Services</button>
                <button className="Forums light"><img src={Forums} alt='person outline' height='30px'/>Forums</button>
                <button className="Housing light"><img src={Housing} alt='person outline' height='30px'/>Housing</button>
                <button className="For-Sale light"><img src={Sale} alt='person outline' height='30px'/>For Sale</button>
                <button className="Jobs light"><img src={Jobs} alt='person outline' height='30px'/>Jobs</button>
                <button className="Gigs light"><img src={Gigs} alt='person outline' height='30px'/>Gigs</button>
            </div>
        </>
    )
}

export default Nav;
