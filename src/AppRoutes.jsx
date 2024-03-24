import Home from "./pages/Home";
import Venues from "./pages/Venues";
const AppRoutes = [
  { index: true, title: "Home", element: <Home />, path: "/" },
  { title: "Venues", element: <Venues />, path: "venues" },
];

export default AppRoutes;
