import {App, Link, Navbar, Page, Toolbar, View} from "framework7-react";
import {AppRoutes} from "@/AppRoutes.tsx";

export default function () {
  return <App
    theme="auto" name="My App" routes={AppRoutes}
  >
    <View main url="/" />
  </App>
}