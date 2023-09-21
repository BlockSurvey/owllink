import { create } from 'zustand';

interface themeState {
  currentTheme: string;
  switchTheme: () => void;
}

let currentTheme: string | null = null;

if (typeof window !== 'undefined') {
  // Perform localStorage action
  currentTheme = localStorage.getItem('theme');
}

export const useThemeStore = create<themeState>(set => ({
  currentTheme: currentTheme || 'light',
  switchTheme: () => {
    const newTheme =
      localStorage.getItem('theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    set(() => ({ currentTheme: newTheme }));
  }
}));
