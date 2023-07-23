import Logo from './Logo.png'
function Nav() {
    return (
        <>
            <img src={Logo} alt="logo" />
            <ul>
                <li href="/" button> Home</li>
                <li href="" button>About</li>
                <li href="" button>Menu</li>
                <li href="" button>Reservation</li>
                <li href="" button>Order Online</li>
                <li href="" button>Login</li>
            </ul>
        </>
    )
}

export default Nav;