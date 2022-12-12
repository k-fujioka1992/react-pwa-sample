import { Outlet } from "react-router-dom";

function View() {
  return (
    <div>
      <p>ViewComponent</p>
      <Outlet />
    </div>
  );
}

export default View;
