import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = recentMatch

  return (
    <li className="li2">
      <div className="matchCardContainer">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="imagelogo1"
        />
        <p>{competingTeam}</p>
        <p className="resultPara">{result}</p>
        <p className={matchStatus === 'Won' ? 'wonClass' : 'lossClass'}>
          {matchStatus}
        </p>
      </div>
    </li>
  )
}
export default MatchCard
