import "./App.css";
import { useColorMode } from "@chakra-ui/react";
import _Navbar from "./componantstwo/Navbar";
import _Intro from "./componantstwo/Intro";
import _Works from "./componantstwo/Works";
import _With from "./componantstwo/With";
import _Footer from "./componantstwo/Footer";
import _CommandP from "./componantstwo/Commandp";
import { allwork, recentwork } from "../data/data";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <_CommandP>
        <_Navbar />
        <_Intro />
        <_Works
          data={recentwork}
          title="Recent Work"
          desc="My recent projects"
          _bg={colorMode === "light" ? "blackAlpha.100" : "#0e1013"}
        />
        <_Works
          data={allwork}
          title="All Works"
          desc=""
          _bg={colorMode === "light" ? "white" : "#17181b"}
        />
        <_With />
        <_Footer />
      </_CommandP>
    </>
  );
}

export default App;
