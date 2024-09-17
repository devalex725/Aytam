import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { OutlinedInput } from '@mui/material';
import Image from 'next/image';

const FooterSection = () => {
  return (
    <div className="bg-[#111111] !text-white md:px-[60px] px-[18px] md:py-[120px] py-[32px] grid md:grid-cols-3 grid-cols-1 gap-[32px] justify-between">
      <div className="flex flex-col gap-[24px] md:text-start text-center">
        <div className="font-medium text-[24px]">{`دمض ةظفاحمب ماتيألا ةياعر ةيعمج`}</div>
        <div>{`280 كادونا الشمالية 326-324 كادونا 125-1400.`}</div>
        <div className="text-[#000504] text-[20px]">{`النشرة الإخبارية`}</div>
        <OutlinedInput
          placeholder="أدخل بريدك الإلكتروني"
          className="!text-white !border-0 max-w-[360px] md:mx-0 mx-auto md:w-auto w-[360px]"
          endAdornment={<ArrowForwardOutlinedIcon />}
        />
      </div>

      <div className="col-span-2 text-center">
        <div className="max-w-[900px] grid md:grid-cols-3 grid-cols-1 gap-[12px]">
          <div className="flex flex-col md:gap-[32px] gap-[12px]">
            <div className="text-[#000504] text-[20px]">{`Navigation`}</div>
            <div>
              <a href="#aboutus">{`معلومات عنا`}</a>{' '}
            </div>
            <div>
              <a href="#services">{`خدمات`}</a>
            </div>
            <div>
              <a href="#contactus">{`اتصل بنا`}</a>
            </div>
            <div>
              <a href="#home">{`بيت`}</a>
            </div>
          </div>

          <div className="flex flex-col md:gap-[32px]  gap-[12px]">
            <div className="text-[#000504] text-[20px]">{`Help`}</div>
            <div>{`التعليمات`}</div>
            <div>{`شروط الاستخدام`}</div>
            <div>{`سياسة الخصوصية`}</div>
          </div>

          <div className="flex flex-col md:gap-[32px]  gap-[12px]">
            <div className="text-[#000504] text-[20px]">{`Follow us on`}</div>
            <div className="flex items-center justify-center gap-[24px]">
              <a href="https://facebook.com" target="_blank">
                <Image
                  src={'/images/icon/facebook.svg'}
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt={`facebook`}
                />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 3.24268C3.67157 3.24268 3 3.91425 3 4.74268V19.7427C3 20.5711 3.67157 21.2427 4.5 21.2427H19.5C20.3284 21.2427 21 20.5711 21 19.7427V4.74268C21 3.91425 20.3284 3.24268 19.5 3.24268H4.5ZM8.52076 7.2454C8.52639 8.20165 7.81061 8.79087 6.96123 8.78665C6.16107 8.78243 5.46357 8.1454 5.46779 7.24681C5.47201 6.40165 6.13998 5.72243 7.00764 5.74212C7.88795 5.76181 8.52639 6.40728 8.52076 7.2454ZM12.2797 10.0044H9.75971H9.7583V18.5643H12.4217V18.3646C12.4217 17.9847 12.4214 17.6047 12.4211 17.2246C12.4203 16.2108 12.4194 15.1959 12.4246 14.1824C12.426 13.9363 12.4372 13.6804 12.5005 13.4455C12.7381 12.568 13.5271 12.0013 14.4074 12.1406C14.9727 12.2291 15.3467 12.5568 15.5042 13.0898C15.6013 13.423 15.6449 13.7816 15.6491 14.129C15.6605 15.1766 15.6589 16.2242 15.6573 17.2719C15.6567 17.6417 15.6561 18.0117 15.6561 18.3815V18.5629H18.328V18.3576C18.328 17.9056 18.3278 17.4537 18.3275 17.0018C18.327 15.8723 18.3264 14.7428 18.3294 13.6129C18.3308 13.1024 18.276 12.599 18.1508 12.1054C17.9638 11.3713 17.5771 10.7638 16.9485 10.3251C16.5027 10.0129 16.0133 9.81178 15.4663 9.78928C15.404 9.78669 15.3412 9.7833 15.2781 9.77989C14.9984 9.76477 14.7141 9.74941 14.4467 9.80334C13.6817 9.95662 13.0096 10.3068 12.5019 10.9241C12.4429 10.9949 12.3852 11.0668 12.2991 11.1741L12.2797 11.1984V10.0044ZM5.68164 18.5671H8.33242V10.01H5.68164V18.5671Z"
                  />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank">
                <Image
                  src={'/images/icon/instagram.svg'}
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt={`instagram`}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
