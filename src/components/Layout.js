import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <ul>
                <li><NavLink to="/" className={"my"}>Home page</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "orange" : "my"} >About</NavLink></li>
                <li><NavLink to="/articles" style={({ isActive }) => ({
                    color: isActive ? "blue" : "pink"
                })}>Articles</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout;