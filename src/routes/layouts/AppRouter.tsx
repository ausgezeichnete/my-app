import { Route, Routes } from "react-router-dom";
import Layout from "./AppLayout/layout";
import { AppChip } from "../../common/appChip/appChip";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default AppRouter;
