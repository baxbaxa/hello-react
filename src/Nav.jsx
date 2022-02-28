
import { Link } from 'react-router-dom';

const setActive = ({isActive}) => isActive ?  "is-active" : "";

function Nav () {

    
    return (
        <div className="header">
            <div className="container">
                <div className="header-nav">
                    <div className="header-nav__logo">
                        <Link to="/">მოგესალმებით.</Link>  
                    </div>
                    <div className="header-nav__menu">
                   
                        <Link to="/" exact className={setActive}>მთავარი</Link>
                        <Link to="/about" className={setActive}>ჩემს შესახებ</Link>
                        <Link to="/works" className={setActive}>ნამუშევრები</Link>
                        <Link to="/contact" className={setActive}>დამიკავშირდი</Link>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;