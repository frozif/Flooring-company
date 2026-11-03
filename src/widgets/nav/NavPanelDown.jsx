import { useState, useEffect } from "react";
import contactIcon from '@/shared/assets/icon/ContactIcon.svg'
function NavPanelDown(){
let [burgerMenu, setBurgerMenu] = useState(false)



  const handleClick = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };


useEffect(() => {
  const handleResize = () => {
    setBurgerMenu(window.innerWidth < 769);
  };


  handleResize();

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


const buttonType =((name, className)=>{


return (
          <button   
            onClick={(e)=>{
    handleClick(e,  `${className}`)
        }}
        type="button">{name}</button>
)
})


  return (
      <nav className="flooring_nav_panel">
                <div className="container">
              <div className="flooring_nav_panel_main">
                <div className="flooring_nav_panel_mainBtns">
    <input type="checkbox" id="menu_toggle" className="menu_toggle" />
     <label htmlFor="menu_toggle"  
              className={`burger ${burgerMenu ? "active" : ""}`}
           aria-label="Меню">
            <span></span>
            <span></span>
            <span></span>
          </label>
      <nav className="menu">
{buttonType('Home', '.flooring_header' )}
{buttonType('Hardwood', '.flooring_collections' )}
{buttonType('Achievements', '.flooring_achievements' )}
{buttonType('Team', '.flooring_team' )}
{buttonType('Reviews', '.flooring_reviews' )}
      </nav>
                </div>
                          <div className="flooring_nav_contactBtn">
                <button     onClick={(e)=>{
    handleClick(e, '.flooring_Request')
    
        }}  type="button">Contact us<img src={contactIcon} alt="" /></button>
              </div>
              
              </div>
                </div>
      </nav>
  )
}


export default NavPanelDown