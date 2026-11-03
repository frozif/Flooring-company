import NavPanelDown from '@/widgets/nav/NavPanelDown.jsx'
import NavPanelUp from '@/widgets/nav/NavPanelUp'
import HeaderPanel from '@/widgets/header/HeaderPanel'
import CollectionsPanel from '@/widgets/section/CollectionsPanel'
import AchievementsPanel from '@/widgets/section/AchievementsPanel'
import TeamPanel from '@/widgets/section/TeamPanel'
import ReviewsPanel from '@/widgets/section/ReviewsPanel'
import RequestPanel from '@/widgets/section/RequestPanel'
import Footer from '@/widgets/footer/Footer'

import '@/app/styles/NavPanel.css'
import "@/app/styles/AchievementsPanel.css"
import '@/app/styles/HeaderPanel.css'
import '@/app/styles/CollectionsPanel.css'
import '@/app/styles/TeamPanel.css'
import '@/app/styles/ReviewsPanel.css'
import '@/app/styles/RequestPanel.css'
import '@/app/styles/Footer.css'

function HomePage(){



return (
    <div className="flooring_project">
<NavPanelUp>

</NavPanelUp>
<NavPanelDown>
  
</NavPanelDown>
<main>
  <HeaderPanel></HeaderPanel>
  <CollectionsPanel></CollectionsPanel>
  <AchievementsPanel></AchievementsPanel>
  <TeamPanel></TeamPanel>

  <ReviewsPanel></ReviewsPanel>
  <RequestPanel></RequestPanel>

</main>
<Footer></Footer>
</div>
)
}



export default HomePage