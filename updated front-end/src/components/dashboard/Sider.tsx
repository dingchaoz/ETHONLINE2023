/* eslint-disable @next/next/no-img-element */
export default function DashboardSider() {
  return (
    <div className='relative h-full w-full overflow-hidden bg-white/5 p-8 py-4'>
      <h2 className='text-left text-xl font-medium text-red-300'>AI Samurai</h2>
      <div className='absolute left-[75px] top-[100px] h-[207px] w-[218px] overflow-hidden rounded-[20px]'>
        <p className='absolute left-20 top-[119px] text-center text-xl font-medium text-[#e09349]'>
          Bronze
        </p>
        <p className='absolute left-[67px] top-[157px] text-center text-2xl text-white'>
          40 / 100
        </p>
        <p className='absolute left-[54px] top-[187px] text-center text-sm text-white/60'>
          60 points to Silver
        </p>
        <img
          className='absolute left-1/2 top-[17px] h-[110px] w-[110px] -translate-x-1/2'
          src='/images/uhead2.png'
          alt='head'
        />
        <svg
          width={217}
          height={178}
          viewBox='0 0 217 178'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute left-[-1px] top-[-1px]'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            d='M29.3468 174.067C26.9151 176.081 23.2975 175.751 21.414 173.217C10.2475 158.191 3.13851 140.502 0.825543 121.859C-1.7225 101.321 1.65614 80.4835 10.5629 61.8033C19.4697 43.123 33.5332 27.3797 51.0943 16.4303C68.6554 5.48087 88.9817 -0.217835 109.675 0.00636741C130.369 0.23057 150.567 6.36833 167.887 17.6956C185.207 29.023 198.926 45.0673 207.426 63.9362C215.926 82.805 218.852 103.711 215.86 124.189C213.143 142.777 205.653 160.308 194.163 175.089C192.225 177.582 188.602 177.833 186.214 175.766C183.826 173.7 183.581 170.099 185.504 167.594C195.574 154.472 202.144 138.965 204.545 122.535C207.222 104.216 204.604 85.513 197 68.6328C189.396 51.7526 177.123 37.3992 161.628 27.2656C146.134 17.1321 128.064 11.6412 109.552 11.4407C91.0387 11.2401 72.8547 16.3382 57.1443 26.1336C41.434 35.9291 28.8528 50.0132 20.8847 66.7247C12.9166 83.4362 9.894 102.078 12.1735 120.451C14.2179 136.929 20.4504 152.574 30.2342 165.912C32.1019 168.458 31.7786 172.053 29.3468 174.067Z'
            fill='#121212'
          />
          <path
            d='M29.3468 174.067C26.9151 176.081 23.2975 175.751 21.414 173.217C10.2475 158.191 3.13851 140.502 0.825543 121.859C-1.7225 101.321 1.65614 80.4835 10.5629 61.8033C19.4697 43.123 33.5332 27.3797 51.0943 16.4303C68.6554 5.48087 88.9817 -0.217835 109.675 0.00636741C130.369 0.23057 150.567 6.36833 167.887 17.6956C185.207 29.023 198.926 45.0673 207.426 63.9362C215.926 82.805 218.852 103.711 215.86 124.189C213.143 142.777 205.653 160.308 194.163 175.089C192.225 177.582 188.602 177.833 186.214 175.766C183.826 173.7 183.581 170.099 185.504 167.594C195.574 154.472 202.144 138.965 204.545 122.535C207.222 104.216 204.604 85.513 197 68.6328C189.396 51.7526 177.123 37.3992 161.628 27.2656C146.134 17.1321 128.064 11.6412 109.552 11.4407C91.0387 11.2401 72.8547 16.3382 57.1443 26.1336C41.434 35.9291 28.8528 50.0132 20.8847 66.7247C12.9166 83.4362 9.894 102.078 12.1735 120.451C14.2179 136.929 20.4504 152.574 30.2342 165.912C32.1019 168.458 31.7786 172.053 29.3468 174.067Z'
            fill='white'
            fill-opacity='0.11'
          />
        </svg>
        <svg
          width={71}
          height={167}
          viewBox='0 0 71 167'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute left-[-1px] top-[-1px]'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            d='M29.3468 165.067C26.9151 167.081 23.2975 166.751 21.414 164.217C12.4069 152.097 6.01596 138.211 2.67454 123.442C-1.08806 106.811 -0.877988 89.5275 3.28771 72.993C7.45341 56.4584 15.4574 41.1384 26.6507 28.2754C36.591 16.8523 48.798 7.65251 62.4726 1.24661C65.332 -0.0929222 68.6741 1.33065 69.8611 4.25671C71.0482 7.18277 69.6298 10.5017 66.7787 11.8589C54.7658 17.5776 44.0374 25.7146 35.2769 35.7819C25.2633 47.2892 18.1028 60.9946 14.3762 75.7866C10.6495 90.5785 10.4616 106.041 13.8276 120.919C16.7725 133.935 22.3649 146.184 30.2343 156.912C32.102 159.458 31.7786 163.053 29.3468 165.067Z'
            fill='#ECBD3B'
          />
        </svg>
        <svg
          width={44}
          height={36}
          viewBox='0 0 44 36'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute left-[-1px] top-[-1px]'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            d='M2.14921 34.1724C-0.288603 32.1654 -0.648743 28.5507 1.48386 26.222C11.2087 15.6028 22.951 7.02502 36.0245 0.989947C38.8914 -0.333516 42.2254 1.10877 43.3961 4.04145C44.5667 6.97412 43.1296 10.2851 40.2709 11.6263C28.9762 16.9256 18.8081 24.3534 10.3252 33.5017C8.17818 35.8172 4.58702 36.1794 2.14921 34.1724Z'
            fill='#E38123'
          />
        </svg>
      </div>
      <div className='absolute left-[54px] top-[331px] flex w-[259px] flex-col items-start justify-start gap-8'>
        <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-[99px] self-stretch'>
          <div className='h-11 w-[68px] flex-shrink-0 flex-grow-0'>
            <p className='absolute left-0 top-0 text-left text-xs text-white/60'>
              Total points
            </p>
            <p className='absolute left-0 top-5 text-left text-xl font-medium text-white/[0.87]'>
              40
            </p>
          </div>
          <div className='h-11 w-[76px] flex-shrink-0 flex-grow-0'>
            <p className='absolute left-[167px] top-0 text-left text-xs text-white/60'>
              Rank
            </p>
            <p className='absolute left-[167px] top-5 text-left text-xl font-medium text-white/[0.87]'>
              23 / 124
            </p>
          </div>
        </div>
        <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-[75px]'>
          <div className='h-[60px] w-[92px] flex-shrink-0 flex-grow-0'>
            <p className='absolute left-0 top-0 w-[92px] text-left text-xs text-white/60'>
              Earnings based on participation
            </p>
            <p className='absolute left-0 top-9 text-left text-xl font-medium text-white/[0.87]'>
              32
            </p>
          </div>
          <div className='h-[60px] w-[92px] flex-shrink-0 flex-grow-0'>
            <p className='absolute left-[167px] top-0 w-[92px] text-left text-xs text-white/60'>
              Earnings based on bonus
            </p>
            <p className='absolute left-[167px] top-9 text-left text-xl font-medium text-white/[0.87]'>
              8
            </p>
          </div>
        </div>
      </div>
      <div className='absolute left-[54px] top-[547px] flex w-[259px] flex-col items-start justify-start gap-6 rounded-[20px]'>
        <div className='relative flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4 self-stretch'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-xl font-medium text-white/[0.87]'>
            Your Statistics
          </p>
          <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-2 self-stretch'>
            <div className='relative flex w-[259px] flex-shrink-0 flex-grow-0 items-start justify-between'>
              <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/60'>
                Task
              </p>
              <p className='flex-shrink-0 flex-grow-0 text-left text-xs text-white/60'>
                Earnings
              </p>
            </div>
            <div className='flex flex-shrink-0 flex-grow-0 flex-col items-start justify-start gap-4 self-stretch'>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Rank Chatbot Replies
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  40
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Compose a dialogue
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  0
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Reply as Chatbot
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  0
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Reply as Prompter
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  0
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Classify Chatbot Reply
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  0
                </p>
              </div>
              <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-between self-stretch'>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  Classify Prompter Reply
                </p>
                <p className='flex-shrink-0 flex-grow-0 text-left text-base text-white/[0.87]'>
                  0
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex flex-shrink-0 flex-grow-0 items-start justify-start gap-1'>
          <p className='flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-[#65b7f1]'>
            View details
          </p>
          <svg
            width={16}
            height={16}
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='relative h-4 w-4 flex-shrink-0 flex-grow-0'
            preserveAspectRatio='xMidYMid meet'
          >
            <path
              d='M6 3.33268L10.6667 7.99935L6 12.666'
              stroke='#65B7F1'
              stroke-width={2}
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
      </div>
      <svg
        width={280}
        height={1}
        viewBox='0 0 280 1'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute left-[43px] top-[506px]'
        preserveAspectRatio='xMidYMid meet'
      >
        <line y1='0.5' x2={280} y2='0.5' stroke='white' strokeOpacity='0.12' />
      </svg>
    </div>
  );
}
