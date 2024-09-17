import { Button } from '@mui/material';
import Image from 'next/image';

interface FeatureDTO {
  icon: string;
  title: string;
  description: string;
}
const features: FeatureDTO[] = [
  {
    icon: '/images/feature/zakah.svg',
    title: 'ورش العمل والدورات التدريبية',
    description:
      'تمكين الأيتام من خلال تطوير مهاراتهم العملية والعلمية في مجالات متعددة مثل التكنولوجيا والحرف اليدوية .تمكين الأيتام من خلال تطوير مهاراتهم العملية والعلمية في مجالات متعددة مثل التكنولوجيا والحرف اليدوية.',
  },
  {
    icon: '/images/feature/orphan.svg',
    title: 'الدعم النفسي والاجتماعي والتربوي',
    description:
      'توفير رعاية شاملة لتعزيز الثقة بالنفس والدعم النفسي والاجتماعي للأيتام وأسرهم. توفير رعاية شاملة لتعزيز الثقة بالنفس والدعم النفسي والاجتماعي للأيتام وأسرهم.',
  },
  {
    icon: '/images/feature/wateraid.svg',
    title: 'المؤتمرات والملتقيات التوعوية',
    description:
      'تنظيم فعاليات لرفع الوعي بأهمية رعاية الأيتام ودور المجتمع في دعمهم. تنظيم فعاليات لرفع الوعي بأهمية رعاية الأيتام ودور المجتمع في دعمهم.',
  },
  {
    icon: '/images/feature/islamic.svg',
    title: 'توعية المجتمع',
    description: `تعزيز دور المجتمع في دعم الأيتام من خلال حملات توعية ومشاركة فاعلة. تعزيز دور المجتمع في دعم الأيتام من خلال حملات توعية ومشاركة فاعلة.`,
  },
  {
    icon: '/images/feature/committee.svg',
    title: `تنمية مهارات الأيتام`,
    description:
      'تطوير قدراتهم وتمكينهم من المشاركة الفعالة في المجتمع. تطوير قدراتهم وتمكينهم من المشاركة الفعالة في المجتمع.',
  },
  {
    icon: '/images/feature/emergency.svg',
    title: 'تقديم الدعم المتكامل للأيتام',
    description: `توفير الرعاية النفسية والاجتماعية والتربوية لضمان استقرارهم. توفير الرعاية النفسية والاجتماعية والتربوية لضمان استقرارهم.`,
  },
];

const FeatureItem = ({ feature }: { feature: FeatureDTO }) => {
  return (
    <div className="relative rounded-br-[20px] bg-my-green text-my-white p-[24px] shadow shadow-my-white flex flex-col md:gap-[16px] gap-[8px]">
      <div>
        <Image
          src={feature.icon}
          width={0}
          height={0}
          alt={`fature-icon`}
          className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
        />
      </div>

      <div className="lg:text-[24px] md:text-[20px] text-[18px] font-medium">
        {feature.title}
      </div>

      <div className="md:text-[16px] text-[14px] leading-[28px]">
        {feature.description}
      </div>

      <div className="h-[50px]"></div>

      <div className="absolute bottom-0 left-0 w-full flex justify-end p-[24px]">
        <Button
          variant="contained"
          className="!bg-my-white !rounded-br-[30px] md:!h-[50px] w-[130px]"
          sx={{ textTransform: 'none' }}
        >
          <span className="xl:text-[18px] lg:text-[16px] text-[14px] text-[#A081AD]">
            {`التواصل معنا`}
          </span>
        </Button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-[48px] gap-[24px]">
      {features.map((item, index) => (
        <FeatureItem feature={item} key={index} />
      ))}
    </div>
  );
};

export default FeatureSection;
