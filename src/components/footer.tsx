import {
    Container,
    Flex,
    Image,
    Link,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import logo from "../assets/logo.svg";
  import { Navigation } from "../constants/navigation";
  import { useTranslation } from "react-i18next";
  
  const Footer = () => {
    const { t } = useTranslation();
  
    return (
      <Container minW={"100%"} py={10} backgroundColor={"#051830"} px={"10vh"}>
        <Flex justifyContent={"space-between"} gap={10} direction={{base:'column', md:'row'}} >
          <VStack
            h={"inherit"}
            gap={8}
            maxW={{base:"", lg: "20%"}}
            alignItems={"left"}
          >
            <Flex>
              <Image
                mx={{ base: 0, md: 0, }}
                src={logo}
                alt={"Logo"}
                w={{ base: 24, md: "auto" }}
              />
            </Flex>
            <Text>{t("common.footer.shortDesc")}</Text>
            <Text>{t("common.footer.description")}</Text>
            <Text>{t("common.footer.otherDesc")}</Text>
            <Text>{t("common.footer.download")}</Text>
          </VStack>

          <VStack maxW={{base:"", lg: "20%"}} alignItems={"left"} gap={8}>
            <Text fontSize={"24px"} >{t("common.footer.contact")}</Text>
            <Text>deals@deals.com</Text>
            <Text>{t("common.footer.addressIdn")}</Text>
            <Text>{t("common.footer.addressLn")}</Text>
          </VStack>
  
          <VStack gap={5} alignItems={"left"} mt={{base:20, md:0}}>
          <Text fontSize={"24px"}>{t("common.menu")}</Text>
            {Navigation.map((link, idx) => (
              <Link display={"block"} href={link.link} key={idx}>
                <Text fontSize={"20px"}  >
                  {link.name}
                </Text>
              </Link>
            ))}
          </VStack>
        </Flex>
      </Container>
    );
  };
  
  export default Footer;
  