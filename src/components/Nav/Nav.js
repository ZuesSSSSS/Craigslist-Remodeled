import { Link } from "react-router-dom";
import './nav.css'

function Nav() {
    return (
        <>
            <nav id="top-nav">
                <ul>
                    <li>
                        <Link to='/'>
                            <a id='logo'>
                                Craigslist
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to='/sign-up'>
                            <a>
                                Sign Up
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to='login'>
                            <a>
                                Login
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav id="bottom-nav">
                <ul>
                    <li>
                        <Link to='/community'>Community</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/forums'>Forums</Link>
                    </li>
                    <li>
                        <Link to='/housing'>Housing</Link>
                    </li>
                    <li>
                        <Link to='/for-sale'>For Sale</Link>
                    </li>
                    <li>
                        <Link to='/jobs'>Jobs</Link>
                    </li>
                    <li>
                        <Link to='/gigs'>Gigs</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
