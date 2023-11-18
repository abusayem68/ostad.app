import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import Subscribe from '../components/common/Subscribe';

function RootLayout() {
  return (
    <div className="w-full h-full relative font-poppins text-black bg-white">
      <Navbar />
      <Outlet />
      <Subscribe />
      <footer className="bg-black text-white pt-16 sm:pt-20 pb-6 sm:pb-8 px-7 sm:px-16 lg:px-20">
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
