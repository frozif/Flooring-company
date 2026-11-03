import flooring_logo from '@/shared/assets/icon/flooring_logo.svg'
import basketVector from '@/shared/assets/icon/basket.svg'

function NavPanelUp (){
return (
    <nav className="flooring_nav">
    <div className="container">
      <div className="flooring_nav_main">
            <div className="flooring_nav_logo">
          <img src={flooring_logo} alt="nav logo"/>
          </div>
          <div className="flooring_nav_basket">
            <img src={basketVector} alt="basket img" />
            <p>Cart</p>
          </div>
      </div>
    </div>
  </nav>
)
}


export default NavPanelUp