//import { GlobalStyle } from '../globalStyles';
import Navbar from './Navbar';
import Footer from './Footer';
import '../index.css'; // <-- Corrected path

const App = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
      <div className="hero-section">
        <Navbar />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              DISCOVER <span>the world</span>
            </h1>
            <button className="explore-btn">EXPLORE NOW</button>
          </div>
          <div className="search-bar">
            <div className="search-tabs">
              <button className="active">Flights</button>
              <button>Cars</button>
              <button>Villas</button>
              <button>Trips</button>
              <button>Nightlifes</button>
              <button>eSIM</button>
            </div>
            <form className="search-form">
              <input type="text" placeholder="Destination" />
              <input type="date" placeholder="Check In" />
              <input type="date" placeholder="Check Out" />
              <input type="number" min="1" placeholder="Adults" />
              <input type="number" min="0" placeholder="Children" />
              <button type="submit" className="search-btn">
                SEARCH
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* ...other sections/components... */}
      <Footer />
    </>
  );
};

export default App;
