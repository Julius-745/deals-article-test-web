import { Box, Stack } from "@chakra-ui/react";
import Navbar from "./navbar";
import { Navigation } from "../constants/navigation";
import Footer from "./footer";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Navbar data={Navigation} />
      <Stack 
        mt={60} 
        gap={"5rem"} 
        flex="1"
      >
        {props.children}
      </Stack>
      <Footer />
    </Box>
  );
};

export default Layout;
