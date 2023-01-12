import DashboardHeader from './dashboardHeader'
import DashboardMain from './dashboardMain'
import Search from './dashboardMain/SearchBar'
import { StyledDashboard } from './style'

function Dashboard() {
  return (
    <StyledDashboard>
        <DashboardHeader/>
        <Search/>
        <DashboardMain/>
       
    </StyledDashboard>
  )
}

export default Dashboard;