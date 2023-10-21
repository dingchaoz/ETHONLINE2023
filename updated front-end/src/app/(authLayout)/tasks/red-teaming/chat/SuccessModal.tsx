/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

interface Props {
  show: boolean;
  onClose: () => void;
}

export default function SuccessModal({ show, onClose }: Props) {
  if (!show) {
    return <></>;
  }

  return (
    <div className=' fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
      <div className='flex flex-col items-center rounded-3xl bg-slate-800 px-10'>
        <img
          loading='lazy'
          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f263f212-52da-4812-bafd-f6dbd89eb33e?apiKey=baf7a5ccfdd6462980e433830729f984&'
          className='mt-12 aspect-square w-14 shrink-0 self-center overflow-hidden object-cover object-center'
          alt='Image'
        />
        <section className='w-211 mt-2 flex max-w-full flex-col items-center self-center'>
          <h2 className='leading-150 self-center text-base tracking-wide text-blue-400'>
            Submitted
          </h2>
          <p className='leading-142.86 self-stretch text-sm tracking-wide text-white'>
            We have received your response.
          </p>
        </section>
        <form className='w-161 mb-12 mt-8 flex max-w-full flex-col items-center justify-center self-center rounded-full bg-blue-400 px-5 py-4'>
          <button
            type='button'
            className='leading-114.29 self-center text-sm font-medium tracking-widest text-black'
            onClick={onClose}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
