import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';
import { useAppContext } from './contexts/AppContext';
import AddHotel from './Pages/AddHotel';

const App = () => {
  const {isLoggedIn} = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>HomePage</p>
        </Layout>} />
        <Route path="/search" element={<Layout>
          <p>Search Page</p>
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
          </>
        )}

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
};

export default App;
