import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeamCard} = props
  const {teamImageUrl, id, name} = eachTeamCard

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="li3">
        <div className="teamContainer">
          <img src={teamImageUrl} alt={name} className="teamImage" />
          <p className="nameHeading">{name}</p>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
