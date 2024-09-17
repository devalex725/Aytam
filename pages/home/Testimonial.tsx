import { Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Image from 'next/image';

interface TestimonialDTO {
  title: string;
  description: string;
  user: {
    icon: string;
    name: string;
    role: string;
  };
}

const testimonials: TestimonialDTO[] = [
  {
    title: 'شكر وتقدير',
    description: `نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير`,
    user: {
      icon: '/images/testimonial-user.jpg',
      name: 'محمد احمد خالد',
      role: 'رئيس جمعية خيرية',
    },
  },
  {
    title: 'شكر وتقدير',
    description: `نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير`,
    user: {
      icon: '',
      name: 'محمد احمد خالد',
      role: 'رئيس جمعية خيرية',
    },
  },
  {
    title: 'شكر وتقدير',
    description: `نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير نص مخصص للشكر والتقدير شكر وتقدير`,
    user: {
      icon: '',
      name: 'محمد احمد خالد',
      role: 'رئيس جمعية خيرية',
    },
  },
];

const TestimonialItem = ({ item }: { item: TestimonialDTO }) => {
  return (
    <div className="border border-my-green px-[24px] py-[40px] flex flex-col md:gap-[60px] gap-[20px]">
      <div>
        <div className="text-[80px] leading-[80px] text-my-green">{`“`}</div>
        <div className="lg:text-[24px] md:text-[20px] text-[18px] leading-[35px]">
          {item.title}
        </div>
        <div className="xl:text-[16px] text-[14px] leading-[150%]">
          {item.description}
        </div>
      </div>

      <div className="flex gap-[12px] items-center">
        <div className="rounded-full border border-my-green md:w-[80px] md:h-[80px] md:min-w-[80px] md:min-h-[80px] w-[60px] min-w-[60px] h-[60px] min-h-[60px] overflow-hidden">
          <Image
            src={item.user.icon || '/images/def-user.png'}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover"
            alt={`user`}
          />
        </div>
        <div>
          <div className="lg:text-[24px] md:text-[20px] text-[18px]  leading-[150%]">
            {item.user.name}
          </div>
          <div className="md:text-[16px] text-[12px]">{item.user.role}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <div>
      <div className="flex justify-between items-end">
        <div>
          <div className="md:text-[24px] text-[14px] text-my-green">{`شهادة`}</div>
          <div className="xl:text-[48px] md:text-[36px] text-[24px] font-semibold">{`ماذا قالو عنا`}</div>
        </div>

        <div>
          <Button
            variant="contained"
            className="!bg-my-green !rounded-tr-[30px] md:!h-[60px] h-[40px]"
          >
            <KeyboardArrowLeft />
          </Button>
        </div>
      </div>

      <div className="pt-[50px] grid lg:grid-cols-3 grid-cols-1 lg:gap-[48px] gap-[24px]">
        {testimonials.map((item, index) => (
          <TestimonialItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
