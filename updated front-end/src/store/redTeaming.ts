import { create } from 'zustand';

interface ChatData {
  id: string;
  text: string;
  position: 'left' | 'right';
}

interface RedTeamingState {
  chatList: ChatData[];
  setChatList: (chatList: ChatData[]) => void;
  assertionTx: string;
  setAssertionTx: (assertionTx: string) => void;
}

export const useRedTeamingStore = create<RedTeamingState>((set) => ({
  chatList: [],
  setChatList: (chatList) =>
    set((prev) => ({ chatList: [...prev.chatList, ...chatList] })),
  assertionTx: '',
  setAssertionTx: (assertionTx) => set(() => ({ assertionTx })),
}));
