import Navbar from '../components/shared/Navbar';
import Header from '../components/shared/Header';
import BrekinhgNews from '../components/shared/BrekinhgNews';


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <BrekinhgNews />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;