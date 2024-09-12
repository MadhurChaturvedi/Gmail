import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/shared/Nav";
import SideBar from "./components/SideBar.jsx";
import Inbox from "./components/Inbox.jsx";
import Mail from "./components/Mail.jsx";
import Body from "./components/body.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
