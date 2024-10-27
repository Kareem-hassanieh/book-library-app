import {create} from 'zustand';


interface Book {
  key:string;
  title:string;
  authors:string;
  cover_id?:string;
}

interface BookStore {
  recommendedBooks: Book[];
  searchResults: Book[]; 
  searchPerformed: boolean;
  setRecommendedBooks: (books: Book[]) => void;
  setSearchResults: (books: Book[]) => void;
  setSearchPerformed: (performed: boolean) => void; 
}
export const useStore = create<BookStore>((set) => ({
  recommendedBooks: [],
  searchResults: [],
  searchPerformed: false,
  setRecommendedBooks: (books) => set({ recommendedBooks: books }),
  setSearchResults: (books) => set({ searchResults: books }),
  setSearchPerformed: (performed) => set({ searchPerformed: performed }),
}));