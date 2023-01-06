import React from 'react'
import LogoHeader from '../../../components/logo/LogoHeader.jpg'
import { Link } from 'react-router-dom'
import { StyledDashboardHeader } from './style'

function DashboardHeader() {
  return (
    <StyledDashboardHeader>
      <div className='headerContainer'>
        <img src={LogoHeader} alt="" />
        <Link className='logout' to={'/'}>Sair</Link>
      </div>
    </StyledDashboardHeader>
  )
}

export default DashboardHeader