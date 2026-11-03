import sliderArrowLeft from '@/shared/assets/icon/sliderArrowLeft.svg'
import sliderArrowRight from '@/shared/assets/icon/sliderArrowRight.svg'
import { useContext, useState, useEffect} from 'react';
import {MyContext} from '@/app/Context.jsx';

function HeaderPanel(){
let [headerScrollCount, setHeaderScrollCount] = useState(0)
 const {headerImg1, achievementImg3, achievementImg2,} = useContext(MyContext)

  const headerImg = [headerImg1, achievementImg2, achievementImg3];


let headerScroll = ((type)=>{
return  type == 'minus' ? setHeaderScrollCount(prev => Math.max(0, prev - 1)) :  setHeaderScrollCount(prev => Math.min(headerImg.length-1, prev + 1));
})



useEffect(() => {
  const timer = setInterval(() => {
    setHeaderScrollCount((prev) => (prev + 1) % headerImg.length);
  }, 6000);

  return () => clearInterval(timer);
}, [headerScrollCount]);

return (
  <header
    className="flooring_header"
    style={{
      backgroundImage: `url(${headerImg[headerScrollCount]})`
    }}
  >
  <div className="flooring_header_bg">
       {headerImg.map((img, i) => (
        <div
          key={i}
          className={`flooring_header_bg_slide ${i === headerScrollCount ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
  </div>
    
      <div className="container">
        <div className="flooring_header_main">
  <div className="flooring_header_slider">
    <button 
    type="button"
  onClick={(()=>{
    headerScroll('minus')
  })}
    className='flooring_header_slider_left'><img src={sliderArrowLeft} alt="left arrow" /></button>
          <div  key={headerScrollCount} className="flooring_header_info">
          <h1>Premium Hardwood Floors by Woodcove Flooring</h1>
          <p>Transform your space with flooring that blends timeless beauty with lasting performance. At Flooring Company, we bring together premium materials, thoughtful design, and expert craftsmanship to create beautiful spaces built to last.</p>
          </div>
    <button type="button"
    onClick={(()=>{
    headerScroll('plus')
  })}
     className='flooring_header_slider_right'><img src={sliderArrowRight} alt="right arrow" /></button>
  </div>
     <div className="flooring_header_type">
          {headerImg.map((_, i) => (
            <input
              key={i}
              type="radio"
              checked={headerScrollCount === i}
              onChange={() => setHeaderScrollCount(i)}
            />
          ))}
        </div>
        </div>
        
      </div>
    </header>
)
}


export default HeaderPanel