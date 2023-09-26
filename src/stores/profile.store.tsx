import { create } from 'zustand';

interface profileState {
  name: string;
  description: string;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
}

export const useProfileStore = create<profileState>(set => ({
  name: '',
  description: '',
  setName: (name: string) => set({ name }),
  setDescription: (description: string) => set({ description })
}));
