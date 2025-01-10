import { createBrowserRouter } from "react-router";
import { Home } from "../Components/Home";
import { Events } from "../Components/Events";
import { Contact } from "../Components/Contact";
import { CampusAmbassador } from "../Components/CampusAmbassador";
import { Speakers } from "../Components/Speakers";
import { Sponsors } from "../Components/Sponsors";
import { App } from "./App";
import { Register } from "../Components/Register";
import { Login } from "../Components/Login";
import { Profile } from "../Components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "/events", Component: Events },
      { path: "/sponsors", Component: Sponsors },
      { path: "/speakers", Component: Speakers },
      { path: "/campusAmbassadors", Component: CampusAmbassador },
      { path: "/contact", Component: Contact },
      { path: "/register", Component: Register },
      { path: "/login", Component: Login },
      { path: "/profile", Component: Profile },
    ],
  },
]);
