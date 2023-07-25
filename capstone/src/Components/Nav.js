import Logo from './Logo.png'
function Nav() {
    return (

        <nav className="nav">
            <img id='navLogo' src={Logo} alt="logo" />
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/Menu">Menu</a>
                </li>
                <li>
                    <a href="/reservation">Reservation</a>
                </li>
                <li>
                    <a href="/order">Order</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/login">login</a>
                </li>
            </ul>



        </nav>

    )
}

export default Nav;