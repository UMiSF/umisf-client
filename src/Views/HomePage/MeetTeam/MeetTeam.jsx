import React from 'react'
import styles from './meetteam.module.css'
import Member from './Member/memberComponent'

const MeetTeam = () => {
  return (
    <div>
      <div className={`${styles['team']}`}>
        <div className={`${styles['team-title']}`}>
          <span style={{color:'#102c42',borderTop:'3px solid #0984e3'}}>Meet </span><span style={{color:'#ffffff'}}>the Team</span>
        </div>
        <div className={`${styles['container']}`}>
          {/* <div className={`${styles['group-photo']}`}>
            <img src={require('../../../assests/images/team.jpeg')} />
          </div>
          <div className={`${styles['captain-contaier']}`}>
              <div className={`${styles['member']}`}>
                <Member img={'Captain_female.JPG'} name={'Nethmi Jayakody'} tag={'Captain'}/>
              </div>
              <div className={`${styles['member']}`}>
              <Member img={'ViceCaptain_female.jpg'} name={'Dulja Bamunusinghe'} tag={'Vice Captain'}/>
              </div>
              <div className={`${styles['member']}`}>
              <Member img={'Captain_male.jpg'} name={'Nadun Gunawardana'} tag={'Captain'}/>
              </div>
              <div className={`${styles['member']}`}>
              <Member img={'ViceCaptain_male.jpg'} name={'Vinul Fernando'} tag={'Vice Captain'}/>
              </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default MeetTeam
