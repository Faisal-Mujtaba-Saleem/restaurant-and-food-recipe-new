// Import Bootstrap Css 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/commons/Header';
import BookingResponse from './screens/BookingResponse';
import LandingPage from './screens/LandingPage';
import Footer from './components/commons/Footer';
import Blogs from './screens/Blogs';
import RecipeDetails from './screens/RecipeDetails';
import ContactResponse from './screens/ContactResponse';
import RouteNotFound from './components/commons/RouteNotFound';

function App() {
  const appTitle = `PLATO`;
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route
            path="/seats"
            element={
              <BookingResponse />
            }
          />

          {/* Route for contact form submission response */}
          <Route
            path="/contact-response"
            element={
              <ContactResponse
                appTitle={appTitle}
              />
            }
          />

          {/* Not Found Route */}
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer appName={"Plato"} />
      </BrowserRouter>
    </>
  );
}

export default App;