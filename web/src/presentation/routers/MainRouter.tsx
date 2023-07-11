import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/home/HomeView";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeView />
	},
]);

export default router;