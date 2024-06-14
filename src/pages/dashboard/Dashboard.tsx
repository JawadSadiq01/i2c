import React from 'react'
import './Dashboard.css'
import { Header } from '../../components'
import { HeroImage } from '../../assets/images'
const Dashboard:React.FC = () => {
  return (
    <div>
      <Header/>
      <div className="heroSection">
        <div className="heroLeft">

        </div>
        <div className="heroRight">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
