import Search from '../../components/search';
import DashboardHeader from './dashboardHeader'
import DashboardMain from './dashboardMain'

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