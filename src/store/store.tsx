import {create} from 'zustand';


interface Book {
  key:string;
  title:string;
  authors:string;
  cover_id?:string;
}

interface BookStore {
  recommendedBooks: Book[];
  setRecommendedBooks: (books: Book[]) => void;
}

export const useStore = create<BookStore>((set) => ({
  recommendedBooks: [],
  setRecommendedBooks: (books) => set({ recommendedBooks: books }),
}));