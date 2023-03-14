import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sliderr from "./components/Slider";
import Content from "./components/Content";
function App() {
  return (
    <Box>
      <Navbar />
      <Sliderr />
      <Content />
      <Footer />
    </Box>
  );
}

export default App;
