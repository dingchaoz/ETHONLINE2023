/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Spinner } from 'flowbite-react';
import * as React from 'react';

interface Props {
  show: boolean;
}

export default function LoadingModal({ show }: Props) {
  if (!show) {
    return <></>;
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-slate-950'>
      <div className='flex w-fit flex-col items-center rounded-3xl  px-24 py-20'>
        <Spinner aria-label='Extra large spinner example' size='xl' />
        <section className='w-211 mt-2 flex max-w-full flex-col items-center self-center'>
          <h2 className='leading-150 self-center text-base tracking-wide text-white/60'>
            Waiting...
          </h2>
        </section>
      </div>
    </div>
  );
}
