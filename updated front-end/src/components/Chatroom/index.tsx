import ChatItem from '@/components/Chatroom/ChatItem';

interface ChatroomProps {
  data: {
    id: string;
    text: string;
    position: 'left' | 'right';
  }[];
}

export default function Chatroom({ data }: ChatroomProps) {
  return (
    <div className='flex w-full flex-col gap-6'>
      {data.map((item) => (
        <ChatItem key={item.id} position={item.position} text={item.text} />
      ))}
    </div>
  );
}
