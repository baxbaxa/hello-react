const Header = ({name , logo}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header-top">
                    <div className="header-top__logo">
                        <a href="/">{logo}</a>
                    </div>
                    <div className="header-top__text">
                        <h1>მოგესალმებით, <span>{name}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;