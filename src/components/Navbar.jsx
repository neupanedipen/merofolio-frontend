import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            {/* <a className="logo" href="/"><img src="images/logo.svg" alt="logo"/></a> */}
            <div className="logo">MeroFolio</div>
            <nav>
                <ul className="nav__links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/forum">Forum</a></li>
                </ul>
            </nav>
            <a className="cta" href="/register">Sign Up</a>
        </header>
    )
}

export default Navbar;