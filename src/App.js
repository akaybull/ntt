import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeaderMenu from "./components/Menu";
import Sliderr from "./components/Slider";
import Content from "./components/Content";
function App() {
  return (
    <Box>
      <Navbar />
      <HeaderMenu />
      <Sliderr />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
