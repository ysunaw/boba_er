import React from "react"; 
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.min.css';
import { Button, Navbar } from 'react-bulma-components';
import Home from './pages/Home';
import Journal from './pages/Journal';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("http://localhost:9000/testapi")
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }))
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    <Router>
        <Navbar>
        <Navbar.Brand>BOBAER</Navbar.Brand>
          <Navbar.Item href="Journal">JOURNAL</Navbar.Item>
          <Navbar.Item href="Recommenation">RECOMMENDATION</Navbar.Item>
          <Navbar.Item href="Blogs">ABOUT</Navbar.Item>
        <Navbar.Container align="right">
          <Button>LOG IN OR SIGN UP</Button>
        </Navbar.Container>
        </Navbar>
        <Routes>
            <Route exact path='/' element = {<Home />} />
            <Route path='/Journal' element={<Journal />} />

        </Routes>
    </Router>
  );
}



export default App;

