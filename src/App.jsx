
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import Getting from './Getting'
// import Welcome from './Welcome'
import Header from './Header'
// import Data from './Data'
import Nav from './Nav'
import {HomePage} from './pages/Home'
import {AboutPage} from './pages/About'
import {WorksPage} from './pages/Works'
import {ContactPage} from './pages/Contact'

import {Routes, Route , Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav/>
       
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

       {/* <Header logo="</Hello." name="ნიკა ბახბახაშვილი" /> */}
       {/* <Getting title="nika" subtitle="Baxbaxashvili" />
       <Welcome user="nika" age={50} /> */}
       {/* <Data /> */}
    </div>
  );
}

export default App;
