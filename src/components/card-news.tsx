import { Card, CardBody, Stack, Heading, CardFooter, Image, Text, HStack, Badge, Box, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import getRandomColorScheme from "../hooks/use-random-color";


export const CardNews = ({ id, image, title, category, description, date, detail, url }: any) => {
    const navigate = useNavigate();
    const color = getRandomColorScheme()
    const toast = useToast();

    const handleShare = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: title,
                    text: description,
                    url: url,
                })
                .then(() => {
                    toast({
                        title: "Shared successfully!",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                    });
                })
                .catch((error) => {
                    toast({
                        title: "Error sharing",
                        description: error.message,
                        status: "error",
                        duration: 2000,
                        isClosable: true,
                    });
                });
        } else {
            navigator.clipboard.writeText(url);
            toast({
                title: "Link copied to clipboard",
                status: "info",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
            <Card 
                backgroundColor={"white"} 
                borderRadius={"lg"} 
                boxShadow={"-8px 5px 12px 0px rgba(0,0,0,0.39)"} 
                margin={"2rem"} 
                pos={"relative"}
                onClick={() => navigate(`/article/${id}`)}
            >
                <Box position="absolute" top="1rem" left="1rem" zIndex={1}>
                    <Badge 
                        colorScheme={color}
                        borderRadius="full"
                        px={3}
                        py={1} 
                        fontSize="sm" 
                        boxShadow="0 0 5px rgba(0, 0, 0, 0.5)" 
                    
                    >
                        <Text color={"black"}>
                            {category}
                        </Text> 
                    </Badge>
                </Box>
                <CardBody>
                    <Image
                        src={image}
                        alt='News Image'
                        borderRadius='lg'
                        fallbackSrc='https://picsum.photos/650/300?grayscale&blur=2'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={"black"}>{title}</Heading>
                        {detail ? 
                            <Text color={"black"}>
                                {description}
                            </Text> 
                        : 
                            <Text color={"black"} textOverflow={"ellipsis"} wordBreak={"break-word"} overflow={"hidden"} maxHeight="10.6em" lineHeight="1.8em">
                                {description}
                            </Text>
                        }
                    </Stack>
                </CardBody>
                <CardFooter justifyContent={"flex-end"}>
                    <HStack spacing='2'>
                        {detail ? 
                            <Button 
                                mt={4} 
                                colorScheme="blue" 
                                onClick={handleShare}
                            >
                                Share this article
                            </Button>
                            :
                            <Text color={"black"}>
                                {new Date(date).toLocaleString()}
                            </Text>
                        }
                    </HStack>
                </CardFooter>
            </Card>
    );
}
