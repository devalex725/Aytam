import { Divider } from '@mui/material';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-[48px]">
      <div>
        <Image
          src={'/images/introduction.png'}
          width={0}
          height={0}
          sizes="100vw"
          alt={`Intro`}
          className="w-full h-full object-cover max-w-[660px] mx-auto"
        />
      </div>

      <div className="flex flex-col lg:gap-[32px] gap-[24px]">
        <div>
          <div className="text-my-green">{`الجمعية في سطور`}</div>
          <div className="font-semibold xl:text-[48px] md:text-[36px] text-[24px]">{`نسعى لتحقيق أهدافنا لدعم الأطفال الأيتام`}</div>
        </div>
        <div className="text-[16px]">{`تأسست جمعية رعاية الأيتام بمحافظة ضمد بهدف تقديم الدعم والرعاية الشاملة للأيتام في المحافظة، وتسعى الجمعية إلى تحسين حياة الأيتام من خلال برامج متكاملة تشمل التعليم، التأهيل النفسي والاجتماعي، وتنمية المهارات. كما تعمل الجمعية على بناء جسور التواصل بين الأيتام والمجتمع لتعزيز التكافل الاجتماعي والمساهمة في دعم مسيرة الأيتام نحو مستقبل مشرق.
تركز الجمعية على تقديم برامج تدريبية وتعليمية تهدف إلى تمكين الأيتام من تطوير قدراتهم ومهاراتهم لتأهيلهم لسوق العمل والمشاركة الفاعلة في المجتمع. بالإضافة إلى ذلك، تولي الجمعية اهتمامًا كبيرًا بالدعم النفسي والاجتماعي لضمان استقرار الأيتام وتحقيق تنمية شاملة لهم.
كما تسعى الجمعية إلى إشراك المجتمع في مسيرة رعاية الأيتام من خلال تنظيم فعاليات ومؤتمرات توعوية تعزز من دور الأفراد والمؤسسات في تقديم الدعم والمساندة للأيتام.`}</div>

        <div
          className={`lg:py-[32px] lg:px-[48px] px-[24px] py-[16px] flex items-center justify-between border-[4px] border-my-green`}
        >
          <div>
            <div className="text-[16px]">{`إطلاق حملات توعية مجتمعية`}</div>
            <div className="text-[24px] font-semibold">{`500 حملة توعوية`}</div>
          </div>
          <Divider orientation="vertical" className="!border-my-green" />
          <div>
            <div className="text-[16px]">{`الرعاية الصحية والنفسية`}</div>
            <div className="text-[24px] font-semibold">{`دعم 34,000`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
