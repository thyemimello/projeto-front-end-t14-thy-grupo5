import PropertyList from './propertyList'
import SearchBar from './SearchBar'
import { StyledDashboardMain } from './style'

function DashboardMain() {
  return (
    <StyledDashboardMain>
        <SearchBar/>
        <PropertyList/>
    </StyledDashboardMain>
  )
}

export default DashboardMain