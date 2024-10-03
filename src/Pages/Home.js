import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useTheme } from '../context/ThemeContext';


function Home() {
    return ( 
        <div>
            <Navbar currentpage = "home" ></Navbar>
            <Footer></Footer>
        </div>
     );
}

export default Home;