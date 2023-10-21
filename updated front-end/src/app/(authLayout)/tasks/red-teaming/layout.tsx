import Link from 'next/link';

import UserNav from '@/containers/UserNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className='flex h-1 min-h-screen bg-slate-950'
      // style={{
      //   backgroundImage: 'url(/images/u-bg-preview.png)',
      //   backgroundSize: 'auto 90%',
      //   backgroundPosition: 'right 50% bottom 12%',
      // }}
    >
      <div className='flex-1 overflow-auto pb-10'>
        <div className='flex flex-1 justify-between px-8 py-4'>
          <Link href='/dashboard'>
            <h2 className='text-xl font-medium text-red-300'>AI Samurai</h2>
          </Link>
          <div>
            <UserNav />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
