/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

interface ChatItemProps {
  text: string;
  position: 'left' | 'right';
}

export default function ChatItem({ text, position }: ChatItemProps) {
  return (
    <div className={clsx('flex gap-2', { 'ml-auto': position === 'right' })}>
      <div
        className={clsx(
          'flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full',
          { 'bg-blue-500': position === 'left' }
        )}
      >
        {position === 'left' && (
          <img className='h-8 w-8 object-cover' src='/images/bot.png' alt='' />
        )}
      </div>
      <div
        className={clsx(
          'w-fit rounded-bl-[10px] rounded-br-[10px] bg-white/[0.08] px-4 py-3',
          { 'rounded-tl-[10px]': position === 'right' },
          { 'rounded-tr-[10px]': position === 'left' }
        )}
      >
        <p className='text-white/[0.87]'>{text}</p>
      </div>

      <div
        className={clsx(
          'flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full',
          { 'bg-green-500': position === 'right' }
        )}
      >
        {position === 'right' && <img src='/images/uhead2.png' alt='' />}
      </div>
    </div>
  );
}
