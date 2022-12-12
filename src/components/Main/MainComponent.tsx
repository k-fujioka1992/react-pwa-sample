import { useRoutes, Link } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function Main() {
  const element = useRoutes(AppRoutes);

  return (
    <div>
      <p>MainComponent</p>
      <ul>
        <li>
          <Link to="/view/page1">page1</Link>
        </li>
        <li>
          <Link to="/view/page2">page2</Link>
        </li>
        <li>
          <Link to="/view">Top</Link>
        </li>
      </ul>
      {element}
    </div>
  );
}

export default Main;
