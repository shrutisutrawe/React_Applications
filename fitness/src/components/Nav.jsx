import React,{useState} from 'react';
import logo from '../Images/logo.jpg';


function Nav({ setPage }) {

    function navTo(e, target) {
        e.preventDefault();
        const url = '/'+target;
        window.history.pushState({},"",url);
        setPage(target);
    }
    const [navLinkOpen,navLinkToggle] = useState(false);
    const handleClick=() =>{
        navLinkToggle(!navLinkOpen);
    };
    
    return (
        <header>
            <div className="container">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <nav>
                    <div className = "nav-list">
                    <button aria-label = "menu button" onClick={handleClick} className = "nav-icon">
                        &#9776;
                    </button>
                    <ul className = {navLinkOpen ? "nav-menu active":"nav-menu"} >
                        <li className="nav-item"><a href="#Home" onClick={(e) => {navLinkToggle(!navLinkOpen); navTo(e, '#Home');}}>Home</a></li>
                        <li className="nav-item"><a href="#Diet" onClick={(e) => {navLinkToggle(!navLinkOpen); navTo(e, '#Diet');}}>Diet</a></li>
                        <li className="nav-item"><a href="#Exercise" onClick={(e) =>{navLinkToggle(!navLinkOpen); navTo(e, '#Exercise');}}>Exercise</a></li>
                        <li className="nav-item"><a href="#Mealplan" onClick={(e) => {navLinkToggle(!navLinkOpen);navTo(e, '#MealPlan');}}>Meals</a></li>
                        <li className="nav-item"><a href="#QnA" onClick={(e) => {navLinkToggle(!navLinkOpen);navTo(e, '#QnA');}}>FAQs</a></li>
                        <li className="nav-item"><a href="#Feedback" onClick={(e) => {navLinkToggle(!navLinkOpen);navTo(e, '#Feedback');}}>Feedback</a></li>
                    </ul>
                    
                    </div>
                </nav>
             </div>
         </header>
    );
}
export default Nav;