export interface IArticles {
    id: string;
    image: any;
    title: string;
    description: string;
    date: Date;
    category: {
        name: string;
    };
    attributes?: any;
    documentId: string;
    media_berita?: any;
    createdAt: Date;
    blocks: any[];
    title_berita?: string;
    content_berita?: string;
    recommendation?: boolean;
}