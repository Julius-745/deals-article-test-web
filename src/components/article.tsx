import { Box, Flex, Stack } from "@chakra-ui/react";
import {CardNews} from "./card-news";
import useFetchData from "../hooks/use-fetch-data";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import useFetchDataByCategory from "../hooks/use-fetch-each-data";
import { IArticles } from "../type/articles";

const Article = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 3000 }),
      ]);
      
    const {
        data,
        loading,
      } = useFetchData("articles?populate=*");

    const {dataByCat, loading: loadingCat} = useFetchDataByCategory()

      return (
        <Flex direction={{ lg: "row", base: "column"}} alignSelf={"center"} maxW={"70%"} maxH={"50%"}>
        <Box ref={emblaRef} overflow="hidden">
        <Flex>
            {!loading && data.map((item: IArticles, idx) => (
                <Box
                    key={idx}
                    flex="0 0 100%"
                    minW="0"
                    rounded="xl"
                    overflow="hidden"
                >
                    <CardNews 
                        key={idx}
                        id={item.id }
                        title={item.attributes.title}
                        description={item.attributes.blocks}
                        image={item.attributes.image}
                        date={item.attributes.createdAt} 
                        author={""}
                        category={item.attributes.category.data.attributes.name}
                    />
                </Box>
            ))}
        </Flex>
    </Box>
    <Stack
        overflow={{ base: "hidden", lg: "auto" }} 
        maxH={{ base: "none", lg: "100vh" }} 
        spacing={4} 
        p={4}
    >
        {!loadingCat && dataByCat.slice(0, 3).map((item, idx) => (
            <CardNews 
                key={idx}
                id={item.id}
                title={item.attributes.title}
                description={item.attributes.blocks}
                image={item.attributes.image}
                date={item.attributes.createdAt} 
                recommendation={true}
                category={item.attributes.category.data.attributes.name}
            />
        ))}
    </Stack>
        </Flex>

    )
}

export default Article;