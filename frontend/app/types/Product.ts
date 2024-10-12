interface ImageFormat {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
  }
  
  interface Image {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: unknown | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
  }
  
  interface Product {
    id: number;
    documentId: string;
    Name: string;
    Price: number;
    Description: string;
    Rating: number;
    Brand: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    Image: Image;
    AlternateImages: Image[];
    localizations: any[];
  }
  
  interface Meta {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  }
  
  interface ProductsResponse {
    data: Product[];
    meta: Meta;
  }
  