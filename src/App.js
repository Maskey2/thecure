import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Termsofuse from './components/Termsofuse';
import Privacy from './components/Privacy'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import About from './components/About'
import Users from './components/Users'
import Box from '@material-ui/core/Box';
import Drawer from './components/Drawer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box display={{ md: 'block', lg: 'none' }} ><Drawer /></Box>
      <Box display={{ xs: 'none', sm: 'block', md: 'none' }}></Box>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About} ></Route>
        <Route path="/users" component={Users}></Route>
        <Route path="/privacypolicy" component={Privacy} ></Route>
        <Route path="/termsofuse" component={Termsofuse}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

