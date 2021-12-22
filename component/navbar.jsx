const Navbar = (props) => {
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <p href="#" className="nav__logo">Febyk Alek Satria</p>
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