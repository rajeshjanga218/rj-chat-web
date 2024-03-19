import { create } from "zustand";

const useConversationStore = create((set) => ({
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears }),
  selectedUser: null,
  setSelectedUser: (selectedUser) => set({ selectedUser }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversationStore;
