import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
