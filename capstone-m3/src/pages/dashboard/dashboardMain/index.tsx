
import PropertyList from './propertyList'
import SearchBar from './SearchBar'
import { StyledDashboardMain } from './style'

function DashboardMain() {
  return (
    <StyledDashboardMain>
        <div className='mainContainer'>
          { /*<SearchBar/>*/ }
          <PropertyList/>
        </div>
    </StyledDashboardMain>
  )
}

export default DashboardMain
