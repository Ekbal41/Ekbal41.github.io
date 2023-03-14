import "./App.css";
import Navbar from "./componants/Navbar";
import Hero from "./componants/Hero";
import Works from "./componants/Works";
import Footer from "./componants/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Works title="All Works" backG="white" btnText="View All Works" />
      <Works title="React Works" backG="" btnText="View All React Works"/>
      <Footer />
    </>
  );
}

export default App;
