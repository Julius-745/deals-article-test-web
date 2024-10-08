import logo from "../assets/logo.svg";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { INavigation } from "../constants/navigation";
import MenuDrawer from "./menu-drawer";
import { useTranslation } from "react-i18next";
import { Link as URI } from "react-router-dom";

interface INavbar {
  data: INavigation[];
}

const MenuList: React.FC<INavbar> = ({ data }) => {
  return (
    <>
      {data.map((item, idx) => {
        return (
        <Link key={idx} href={item.link} _hover={{ textDecoration: "none" }}>
          <Text
            fontSize="md"
            fontWeight={"500"}
          >
            {item.name}
          </Text>
        </Link>
        )
      })}
    </>
  );
};

const Navbar: React.FC<INavbar> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Center>
      <Stack
        as={"nav"}
        w={"full"}
        position={"absolute"}
        mt={5}
        top={"0"}
        justifyContent={"center"}
      >
        <Container minW={"100%"} px={10}>
          <Box display={"flex"} alignItems={"center"}>
            <Box
              display={"flex"}
              justifyContent={{ base: "start", lg: "end" }}
              flex={1}
            >
              <HStack marginRight={"2rem"}>
                <URI to={"/"}>
                <Image
                  mx={{ base: 4, lg: 0 }}
                  src={logo}
                  alt={"Logo"}
                  w={{ base: 24, lg: "auto" }}
                />
                </URI>
              </HStack>
              <Stack
                flex={1}
                textAlign={"center"}
                align={"center"}
                direction={"row"}
                spacing={"1rem"}
                display={{ base: "none", lg: "flex" }}
              >
                <MenuList data={data} />
              </Stack>
            </Box>
            <Stack
              flex={1}
              justify={"end"}
              align={"center"}
              direction={"row"}
              spacing={"4rem"}
              display={{ base: "none", lg: "flex" }}
            >
              <Button type="submit" onClick={() => console.log("test")} color={"white"} backgroundColor={"#1877F2"}>
                {t("common.navbar.contactUs")}
              </Button>
            </Stack>
            <MenuDrawer>
              <MenuList data={data} />
            </MenuDrawer>
          </Box>
        </Container>
        <Divider size={"lg"} backgroundColor={"#BAD6FB"} height={0.5} orientation="horizontal" variant={"solid"} mt={5}/>
      </Stack>
    </Center>
  );
};

export default Navbar;
