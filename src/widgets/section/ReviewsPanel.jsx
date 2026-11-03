import { useState } from "react";

function ReviewsPanel(){



let [reviewsScrollCount, setReviewsScrollCount] = useState(0)
const reviews = [
 [
    { name: "Bob", text: "The flooring looks beautiful." },
    { name: "Kamo", text: "The team did an amazing job." },
  ],
  [
    { name: "Edo", text: "good" },
    { name: "Mike", text: "the best" },
  ],
  [
    { name: "Anna", text: "Great service." },
    { name: "John", text: "Highly recommend." },
  ],
];

let reviewCard = (index)=>{
  const page = reviews[index]
  if (!page) return null
   return    page.map((review) => (
    
    <div className="flooring_reviews_card" key={review.name}>
        <h2>{review.name}</h2>
        <p>{review.text}</p>
    </div>

))
}


let reviewsType = ((number)=>{

return (
                <input type="radio" 
              checked={reviewsScrollCount == number ? true : ''}
              onChange={()=>{
               setReviewsScrollCount(number)
              }}/>
)
})


return (
    <section className='flooring_reviews'>
    <div className="container">
      <div className="flooring_reviews_main">
        <div className="flooring_reviews_info">
          <h2>What <span>Our Customers</span> Say</h2>
          <p>See what our customers say about their new floors and their experience with our team.</p>
        </div>
        <div className="flooring_reviews_cards"  key={reviewsScrollCount}>
          {reviewCard(reviewsScrollCount)}
        </div>
        <div className="flooring_reviews_type">
          {reviewsType(0)}
          {reviewsType(1)}
          {reviewsType(2)}

</div>
      </div>
    </div>
  </section>
)
}


export default ReviewsPanel