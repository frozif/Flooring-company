import { useContext } from "react"
import { MyContext } from "@/app/Context"

function AchievementsPanel(){

const {achievementImg1, achievementImg2, achievementImg3 } = useContext(MyContext)

let achievementImg = ((img, type)=>{
  return (
     <img   className={img} src={type} alt="achievementImg1" />
  )
})


return (
    <section className='flooring_achievements'>
      <div className="container">
        <div className="flooring_achievements_main">
          <div className="flooring_achievements_img">
          {achievementImg('achievementImgOne', achievementImg1)}
          {achievementImg('achievementImgTwo', achievementImg2)}
          {achievementImg('achievementImgThree', achievementImg3)}
          </div>
          <div className="flooring_achievements_info">
            <h2>A Trendy Woodwork for Trendy Home</h2>
            <p>We are committed to providing our customers with super exceptional service while offering our employees the best training and a working environment in which they can excel best of all places.</p>
            <button type='button'>Read more</button>
          </div>
        </div>
      </div>
    </section>
)
}



export default AchievementsPanel