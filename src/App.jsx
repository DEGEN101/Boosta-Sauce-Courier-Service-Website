import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import HomePage from "./Pages/Homepage/Homepage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactPage from "./Pages/ContactPage/ContactPage";


const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


const App = () => {
    return (
        <Router hashType="slash">
            <ScrollToTop />
            <Routes>
                <Route path="/" exact element={<HomePage/> }/>
                <Route path="/home" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Routes>
      </Router>
    );
}

export default App;
