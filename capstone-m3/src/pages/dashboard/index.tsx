import DashboardHeader from './dashboardHeader'
import DashboardMain from './dashboardMain'
import { StyledDashboard } from './style'

function Dashboard() {
  return (
    <StyledDashboard>
        <DashboardHeader/>
        <DashboardMain/>
    </StyledDashboard>
  )
}

export default Dashboard