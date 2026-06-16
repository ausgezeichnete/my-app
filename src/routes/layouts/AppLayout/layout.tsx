import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <main>
        <h1>App Layout</h1>
        <Outlet />
      </main>
    </>
  );
}
