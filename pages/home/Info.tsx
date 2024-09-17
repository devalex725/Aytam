'use client';

import Image from 'next/image';
import { ReactNode, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import styled from 'styled-components';
import { IconButton } from '@mui/material';

const infos: {
  title: string;
  info: string;
}[] = [
  { title: '595+', info: 'نحن في أرقام' },
  { title: '48M', info: 'نحن في أرقام' },
  { title: '35+', info: 'نحن في أرقام' },
  { title: '5000+', info: 'نحن في أرقام' },
];
const CustomDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const SliderContainer = styled('div')`
  justify-content: center !important;
  align-items: center !important;
  height: 600px;
  display: flex !important;
  overflow: hidden !important;
  padding: 0px 10px;

  @media (max-width: 1280px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 500px) {
    height: 200px;
  }
`;
const sliderItems: {
  image: string;
  title: string;
  description: string;
}[] = [
  {
    image: '/images/intro/intro1.jpg',
    title: 'تقديم الدعم النفسي والإجتماعي والتربوي للأيتام',
    description:
      'هنا نص حول السلايد المذكور هنا حول تقديم الدعم النفسي والإجتماعي والتربوي للأيتام. هنا نص حول السلايد المذكور هنا حول تقديم الدعم النفسي والإجتماعي والتربوي للأيتام.',
  },
  {
    image: '/images/intro/intro2.jpg',
    title: 'تقديم الدعم النفسي والإجتماعي والتربوي للأيتام',
    description:
      'هنا نص حول السلايد المذكور هنا حول تقديم الدعم النفسي والإجتماعي والتربوي للأيتام. هنا نص حول السلايد المذكور هنا حول تقديم الدعم النفسي والإجتماعي والتربوي للأيتام.',
  },
  {
    image: '/images/intro/intro3.jpg',
    title: 'تقديم الدعم النفسي والإجتماعي والتربوي للأيتام',
    description:
      'هنا نص حول السلايد المذكور هنا حول تقديم الدعم النفسي والإجتماعي والتربوي للأيتام. هنا نص حول السلايد المذكور هنا حول تقديم الدعم النفسي والإجتماعي والتربوي للأيتام.',
  },
];

const PrevButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <IconButton
      onClick={onClick}
      className="!absolute !top-[50%] translate-y-[-50%] !left-[20px] z-[1] !bg-white !bg-opacity-30"
    >
      <ArrowBackIosNewRoundedIcon />
    </IconButton>
  );
};

const NextButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <IconButton
      onClick={onClick}
      className="!absolute !top-[50%] translate-y-[-50%] !right-[20px] z-[1] !bg-white !bg-opacity-30"
    >
      <ArrowForwardIosRoundedIcon />
    </IconButton>
  );
};

const InfoSection = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const settings: Settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    customPaging: (i: number) => (
      <CustomDot
        style={{ backgroundColor: i === currentSlide ? '#4B9AB8' : 'white' }}
      /> // Pass the active prop
    ),
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          padding: '10px',
          bottom: '10px',
        }}
      >
        {dots}
      </div>
    ),
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  return (
    <>
      <div className="relative">
        <Slider {...settings}>
          {sliderItems.map((item, index) => (
            <SliderContainer key={index}>
              <div className="relative overflow-auto rounded-br-[40px] h-full">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`w-full h-full object-cover`}
                  alt={`slider-image`}
                />
                <div className="absolute top-[40px] left-[40px] text-white max-w-[664px]">
                  <div className="md:text-[36px] text-[18px] font-bold">
                    {item.title}
                  </div>

                  <div className="md:text-[24px] text-[16px] leading-[36px]">
                    {item.description}
                  </div>
                </div>
              </div>
            </SliderContainer>
          ))}
        </Slider>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 pt-[40px]">
        {infos.map((item, index) => (
          <div className="text-center" key={index}>
            <div className="text-my-green xl:text-[60px] md:text-[40px] text-[20px] font-medium xl:leading-[90px]">
              {item.title}
            </div>
            <div className="xl:text-[24px] md:text-[20px] text-[16px] md:leading-[36px]">
              {item.info}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoSection;
