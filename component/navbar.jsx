const Navbar = (props) => {
    return (
        <header className="l-header ">
            <nav className="nav bd-grid pt-3 ">
                <div>
                    <p className="text-xl font-bold text-sky-400">{props.title}</p>
                </div>
                {
                    props.children
                }
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;