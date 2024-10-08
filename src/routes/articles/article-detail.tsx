// @ts-nocheck
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom"; // Import useParams
import { CardNews } from "../../components/card-news";
import Layout from "../../components/layout";
import useFetchData from "../../hooks/use-fetch-data";
import useFetchDataByCategory from "../../hooks/use-fetch-each-data";
import { useEffect } from "react";

const ArticleDetail = () => {
    const { id } = useParams();  // Get id from the URL
    const { data, loading, refetch } = useFetchData(`articles/${id}?populate=*`);
    const { dataByCat, loading: loadingCat } = useFetchDataByCategory();

    useEffect(() => {
        refetch(); 
    }, [id, refetch]);

    console.log("data", data)

    return (
        <Layout>
            <Grid 
                templateColumns={{ base: "1fr", lg: "2fr 1fr" }} 
                gap={6} 
                maxW={"70%"} 
                margin="auto"
            >
                <GridItem>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <CardNews  
                            id={data.id}
                            detail={true}
                            title={data.attributes.title}
                            description={data.attributes.blocks}
                            image={data.attributes.image}
                            date={data.attributes.createdAt} 
                            category={data.attributes.category.data.attributes.name}
                        />
                    )}
                </GridItem>

                <GridItem overflowY="auto" maxH={{ base: "100vh", lg: "100vh" }}>
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
                </GridItem>
            </Grid>
        </Layout>
    );
};

export default ArticleDetail;

