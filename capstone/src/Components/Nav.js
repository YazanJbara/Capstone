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
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/reservation">reservation</a>
                </li>
                <li>
                    <a href="/order">order</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/login">login</a>
                </li>
                
                
            </ul>



        </nav>

    )
}

export default Nav;