import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './Pages/Register';
import SignIn from './Pages/SignIn';

const App = () => {
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

        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </Router>
  );
};

export default App;
