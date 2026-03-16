import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/homePage";
import Layout from "./components/layout";
import AboutPage from "./pages/aboutPage";
import MenuPage from "./pages/menuPage";
import TestimonialsPage from "./pages/testimonialsPage";
import ContactsPage from "./pages/contactsPage";
import ReservationPage from "./pages/reservationPage";
import SpecialsPage from "./pages/specialsPage";
import MenuTypePage from "./pages/menuTypePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/menu",
          element: <MenuPage />,
        },
        {
          path: "/menu/:menuId",
          element: <MenuTypePage />,
        },
        {
          path: "/testimonials",
          element: <TestimonialsPage />,
        },
        {
          path: "/reservation",
          element: <ReservationPage />,
        },
        {
          path: "/specials",
          element: <SpecialsPage />,
        },
        {
          path: "/contacts",
          element: <ContactsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
