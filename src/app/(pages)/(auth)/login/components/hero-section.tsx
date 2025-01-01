import Image from 'next/image';
import bgDarkCircles from '@/assets/images/bg-dark-circles.png';
import bgLightCircles from '@/assets/images/bg-light-circles.png';

export default function HeroSection() {
  return (
    <section className={'hidden w-2/5 max-w-4xl xl:block'}>
      <div className={'relative h-full'}>
        <div className={'absolute h-full w-full dark:bg-neutral-900'}>
          <Image
            className={
              'absolute left-1/2 top-[15%] hidden w-[50%] -translate-x-1/2 dark:block'
            }
            src={bgDarkCircles}
            alt={'background-image'}
            width={500}
            height={500}
          />

          <Image
            className={
              'absolute left-1/2 top-[15%] w-[50%] -translate-x-1/2 dark:hidden'
            }
            src={bgLightCircles}
            alt={'background-image'}
            width={500}
            height={500}
          />
        </div>

        <div
          className={
            'absolute left-0 top-0 h-full w-full bg-neutral-900/10 backdrop-blur-[120px]'
          }
        />

        <div className={'relative'}>Hello</div>
      </div>
    </section>
  );
}
