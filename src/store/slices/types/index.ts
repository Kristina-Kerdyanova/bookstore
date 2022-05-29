export interface IBook {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
};

export interface IFavorite {
    sortMode: string;
    favorites: IBook[];
};

export interface ICart {
    buy: IBook[];
};