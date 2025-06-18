import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
  
    return (
      <div className="layout-wrapper">
        <Navbar />
        <main className={isHome ? 'main-full' : 'main-content'}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
export default MainLayout;
