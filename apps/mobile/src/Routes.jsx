import { Route, Routes } from 'react-router-dom'

import PageRoot from './Components/PageRoot'
import DashboardTasks from './Pages/DasboardTasks'
import Register from './Pages/Register'
import SignIn from './Pages/SignIn'
import PageInto from './Pages/SignIn/PageInto'
import DashboardCalendar from './Pages/DasboardCalendar'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/user" element={<PageRoot />}>
        <Route index element={<DashboardTasks />} />
        <Route path="calendar" element={<DashboardCalendar />} />
      </Route>

      <Route path="/" element={<PageInto />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes
