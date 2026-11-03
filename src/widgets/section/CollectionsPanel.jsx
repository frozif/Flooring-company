import collectionsSliderArrowRight from '@/shared/assets/icon/collectionsSliderArrowRight.svg'
import collectionsSliderArrowLeft from '@/shared/assets/icon/collectionsSliderArrowLeft.svg'

import whiteAsh from '@/shared/assets/img/whiteAsh.png'

import { useRef } from 'react';


function CollectionsPanel(){


const listRef = useRef(null);

const scroll = (dir) => {
  listRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
};


let collectionCard = ((img, type, price)=>{
return (
    <div className="flooring_collections_card">
  <img src={img} alt="card img" />
  <h2>{type}</h2>
  <div className="flooring_collections_card_priceInfo">
    <button type="button">Add to cart</button>
    <p>{price}</p>
  </div>
</div>
)
})

let arrowBtn = ((img, alt, number)=>{

return (
  <button type="button"><img src={img} alt={alt} onClick={() => scroll(number)} /></button>
)
})


return (
  
  <section className='flooring_collections'>
    <div className="container">
      <div className="flooring_collections_main">
        <div className="flooring_collections_slider">
        {arrowBtn(collectionsSliderArrowRight, "collections arrow right", -1 )}
          <div className="flooring_collections_cards" ref={listRef}>
{collectionCard(whiteAsh, 'Texas White Ash', '$5.4' )}
{collectionCard(whiteAsh, 'Texas White Ash', '$5.4' )}
{collectionCard(whiteAsh, 'Texas White Ash', '$5.4' )}
          </div>
        {arrowBtn(collectionsSliderArrowLeft, "collections arrow left", 1 )}

        </div>
      </div>
    </div>
  </section>
)
}


export default CollectionsPanel