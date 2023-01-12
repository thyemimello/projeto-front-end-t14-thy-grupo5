
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'
import ModalChecker from './modalChecker'
import PropertyList from './propertyList'

import { StyledDashboardMain } from './style'

function DashboardMain() {
  const {user} =useContext(UserContext)
  console.log(user)
  return (
    <StyledDashboardMain>
        <div className='mainContainer'>
          { /*<SearchBar/>*/ }
          <PropertyList/>
        </div>
        {/* <ModalChecker/> */}
    </StyledDashboardMain>
  )
}

export default DashboardMain
