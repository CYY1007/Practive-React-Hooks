import {Link} from "react-router-dom";

const Home = () =>{
    return (
        <ul>
            <li><Link to="/useinput"><strong>Use Input</strong></Link></li>
            <li><Link to="/usetabs"><strong>Use Tabs</strong></Link></li>
            <li><Link to="/usetitle"><strong>Use Title</strong></Link></li>
            <li><Link to="/useclick"><strong>Use Click</strong></Link></li>
            <li><Link to="/useconfirm"><strong>Use Confirm</strong></Link></li>
            <li><Link to="/useprevent"><strong>Use Prevent</strong></Link></li>
            <li><Link to="/usepageleave"><strong>Use PageLeave</strong></Link></li>
            <li><Link to="/usefadein"><strong>Use Fade in</strong></Link></li>
            <li><Link to="/usenetwork"><strong>Use Network</strong></Link></li>
            <li><Link to="/usescroll"><strong>Use Scroll</strong></Link></li>
            <li><Link to="/usefullscreen"><strong>Use FullScreen</strong></Link></li>
            <li><Link to="/useaxios"><strong>Use Axios</strong></Link></li>
            <li><Link to="/usenotification"><strong>Use Notification</strong></Link></li>
        </ul>
    )
}

export default Home;