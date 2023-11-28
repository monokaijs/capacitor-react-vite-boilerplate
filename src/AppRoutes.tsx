import Home from "@/pages/Home.tsx";
import About from "@/pages/About.tsx";

export const AppRoutes = [{
  path: '/',
  component: Home,
  animated: true,
}, {
  path: '/about/',
  component: About,
  animated: true,
}]