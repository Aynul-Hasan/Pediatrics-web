import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Doctor from './component/doctor/Doctor';
import Service from './component/service/Service';
import Contact from './component/contact/Contact';
import Login from './component/form/Login';
import Singup from './component/form/Singup';
import ServiceDtls from './component/service/ServiceDtls';
import Notfound from './component/notfound/Notfound';
import AuthProvider from './context/AuthProvider';
import Shoppincard from './component/private/Shoppincard';
import Privateroute from './component/Privateroute';

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/doctor" component={Doctor}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/service/:id" component={ServiceDtls}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Singup}/>
      <Privateroute path="/shop/:id">
            <Shoppincard></Shoppincard>
      </Privateroute>
      <Route exact path="*" component={Notfound}/>


    </Switch>
    <Footer/>
    </Router>
    </AuthProvider>
    

    </>
  );
}

export default App;
