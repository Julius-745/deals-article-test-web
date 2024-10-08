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
                            id={data.documentId}
                            detail={true}
                            title={data.title}
                            description={data.blocks[0].body}
                            image={data.image}
                            date={data.createdAt}  
                            category={data.category?.name}
                        />
                    )}
                </GridItem>

                <GridItem overflowY="auto" maxH={{ base: "100vh", lg: "100vh" }}>
                    {!loadingCat && dataByCat.slice(0, 3).map((item, idx) => (
                        <CardNews 
                            key={idx}
                            id={item.documentId}
                            title={item.title}
                            description={item.blocks[0].body}
                            image={item.image}
                            date={item.createdAt} 
                            recommendation={true}
                            category={item.category?.name}
                        />
                    ))}
                </GridItem>
            </Grid>
        </Layout>
    );
};

export default ArticleDetail;

