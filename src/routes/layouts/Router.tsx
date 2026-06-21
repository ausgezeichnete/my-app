import { Route, Routes } from "react-router-dom"
import { AppLayout } from "./appLayout/appLayout"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        
      </Route>
    </Routes>
  )
}
