import { create } from 'zustand';

interface Book {
  key: string;
  title: string;
  authors: { name: string }[];
  cover_id?: string;
}

interface BookStore {
  recommendedBooks: Book[];
  searchedBooks: Book[]; // <-- Step 1: Add state for searched books
  setRecommendedBooks: (books: Book[]) => void;
  setSearchedBooks: (books: Book[]) => void; // <-- Step 1: Add setter for searched books
}

export const useStore = create<BookStore>((set) => ({
  recommendedBooks: [],
  searchedBooks: [], // <-- Step 1: Initialize empty array

  setRecommendedBooks: (books) => set({ recommendedBooks: books }),
  setSearchedBooks: (books) => set({ searchedBooks: books }), // <-- Step 1: Setter function
}));
