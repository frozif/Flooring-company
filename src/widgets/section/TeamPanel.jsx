import logo1 from '@/shared/assets/icon/logo1.svg'
import logo2 from '@/shared/assets/icon/logo2.svg'
import logo3 from '@/shared/assets/icon/logo3.svg'
import logo4 from '@/shared/assets/icon/logo4.svg'

function TeamPanel(){

let cardType = ((logo, name, profession)=>{

return (
      <div className="flooring_team_expert_card">
      <img src={logo} alt="expert card img" />
      <div className="flooring_team_expert_card_info">
        <h2>{name}</h2>
        <p>{profession}</p>
      </div>
    </div>
)
})

return (
    <section className='flooring_team'>
    <div className="container">
      <div className="flooring_team_main">
        <div className="flooring_team_info">
          <h2>MEET OUR  <span>EXPERTS</span></h2>
        </div>
        <div className="flooring_team_experts">
{cardType(logo1, 'Mark', 'Founder' )}
{cardType(logo2, 'David', 'Manager' )}
{cardType(logo3, 'Arthur', 'Designer' )}
{cardType(logo4, 'Jack', 'Builder' )}

        </div>
      </div>
    </div>
  </section>
)
}


export default TeamPanel