import React from 'react'

const CongressmanCard = ({ congressman, infosToDisplay=[], answer }) => (
  <div className="congressman-container" >
      <div  className={'congressman-photo animated ' + (infosToDisplay.includes('name') ? (answer === congressman.side  ? 'pulse' : 'shake') : 'fadeInUp')}>
          {infosToDisplay.includes('photo') && <img className="congressman-photo" src={congressman.path} alt="Photo d'un député" />}
      </div>
    <div className="congressman-infos animated fadeInUp">
      {infosToDisplay.includes('name') && <span className="congressman-name">{congressman.name}</span>}
      {infosToDisplay.includes('party') && <span className="congressman-party">{congressman.parti}</span>}
      {infosToDisplay.includes('successRate') && <i className="congressman-successrate">{Math.round(congressman.average_success * 100)}% ont trouvé</i>}
    </div>
  </div>
)

export default CongressmanCard
