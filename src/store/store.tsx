import { create } from 'zustand';

interface Book {
  key: string;
  title: string;
  authors: { name: string }[];
  cover_id?: string;
}

interface BookStore {
  recommendedBooks: Book[];
  searchedBooks: Book[]; 
  setRecommendedBooks: (books: Book[]) => void;
  setSearchedBooks: (books: Book[]) => void;
}

export const useStore = create<BookStore>((set) => ({
  recommendedBooks: [],
  searchedBooks: [], // <-- Step 1: Initialize empty array

  setRecommendedBooks: (books) => set({ recommendedBooks: books }),
  setSearchedBooks: (books) => set({ searchedBooks: books }), // <-- Step 1: Setter function
}));