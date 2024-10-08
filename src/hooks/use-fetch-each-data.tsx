import { useEffect, useState } from 'react';
import axios from 'axios';
import { IArticles } from '../type/articles';

const useFetchDataByCategory = () => {
    const baseURL = import.meta.env.VITE_API_URL;
    const [category, setCategory] = useState<string[]>([]);
    const [dataByCat, setDataByCat] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchCat = async () => {
            try {
                const { data } = await axios.get(`${baseURL}categories`);
                const categories = data.data.map((item: {
                    attributes: any; name: string 
                    }) => item.attributes.name);
                setCategory(categories);


                const requests = categories.map((item: IArticles) => 
                    axios.get(`${baseURL}articles?populate=*&filters[$and][0][category][name][$eq]=${item}`)
                );

                const responses = await Promise.all(requests);

                const allDataByCat = responses.map(response => response.data.data);
                setDataByCat(allDataByCat.flat()); 
            } catch (error) {
                console.log("error", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCat();
    }, [baseURL]);

    return {
        category,
        dataByCat,
        loading
    };
};

export default useFetchDataByCategory;
