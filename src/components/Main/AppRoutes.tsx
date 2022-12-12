import { Navigate } from "react-router-dom";
import Page1 from "../Page1/Page1Component";
import Page2 from "../Page2/Page2Component";
import View from "../View/ViewComponent";

const AppRoutes = [
  {
    path: "view",
    element: <View />,
    children: [
      { path: "page1", element: <Page1 /> },
      { path: "page2", element: <Page2 /> },
    ],
  },
  { path: "*", element: <Navigate to="view" /> },
];

export default AppRoutes;
