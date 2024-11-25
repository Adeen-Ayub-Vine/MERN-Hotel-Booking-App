import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import { useAppContext } from './contexts/AppContext';
import AddHotel from './Pages/AddHotel';
import MyHotels from './Pages/MyHotels';
import EditHotel from './Pages/EditHotel';
import Search from './Pages/Search';
import HotelDetail from './Pages/HotelDetail';
import Booking from './Pages/Booking';

const App = () => {
  const {isLoggedIn} = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>HomePage</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <Search/>
        </Layout>} />
        <Route path="/detail/:hotelId" element={<Layout>
          <HotelDetail/>
        </Layout>} />
        <Route path="/register" element={<Layout>
          <Register />
        </Layout>} />
        <Route path="/sign-in" element={<Layout>
          <SignIn />
        </Layout>} />

        {isLoggedIn && (
          <>
          <Route path="/add-hotel" element={
            <Layout>
              <AddHotel/>
            </Layout>} />

          <Route path="/my-hotels" element={
            <Layout>
              <MyHotels/>
            </Layout>} />

          <Route path="/edit-hotel/:hotelId" element={
                <Layout>
                  <EditHotel />
                </Layout>}/>

          <Route path="/hotel/:hotelId/booking" element={
            <Layout>
              <Booking/>
            </Layout>} />
          </>
        )}

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
};

export default App;
