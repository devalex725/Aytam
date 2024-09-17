import { Button } from '@mui/material';
import Image from 'next/image';

const IntroductionSection = () => {
  return (
    <div className="md:grid grid-cols-2">
      <div className="flex flex-col justify-center xl:gap-[24px] md:gap-[18px] gap-[12px]">
        <div className="font-bold xl:text-[36px] text-[24px] text-my-green xl:leading-[42px] md:leading-[28px] leading-[24px]">
          {`جمعية رعاية الأيتام بمحافظة ضمد`}
        </div>

        <div className="xl:text-[24px] md:text-[16px] text-[14px] font-medium xl:leading-[36px] md:leading-[28px] leading-[21px]">
          {`نعمل بجد لتحقيق أهدافنا السامية في دعم وتطوير المجتمع، من خلال تقديم الرعاية المتكاملة للأيتام والمساهمة في تنمية المجتمع المحلي.`}
        </div>

        <div className="xl:text-[24px] md:text-[16px] text-[14px] xl:leading-[36px] md:leading-[28px] leading-[21px]">
          {`نعمل بجد لتحقيق أهدافنا السامية في دعم وتطوير المجتمع، من خلال تقديم الرعاية المتكاملة للأيتام والمساهمة في تنمية المجتمع المحلي.نعمل بجد لتحقيق أهدافنا السامية في دعم وتطوير المجتمع، من خلال تقديم الرعاية المتكاملة للأيتام والمساهمة..`}
        </div>
        <div>
          <Button
            variant="contained"
            className="!bg-my-green !rounded-br-[30px] xl:!h-[60px] md:h-[50px] md:w-[90px] w-[124px]"
            sx={{ textTransform: 'none' }}
          >
            <span className="xl:text-[18px] text-[14px]"> {`أكثر`}</span>
          </Button>
        </div>
      </div>

      <div className="md:flex hidden pl-[100px] items-center justify-center">
        <Image
          src={'/images/introduction.png'}
          width={0}
          height={0}
          sizes="100vw"
          alt={`Intro`}
          className="w-full h-full object-cover max-w-[660px] mx-auto"
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
