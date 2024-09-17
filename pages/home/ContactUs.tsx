import Image from 'next/image';

interface ContactDTO {
  icon: string;
  title: string;
  description: string;
  extra: string;
}

const contacts: ContactDTO[] = [
  {
    icon: '/images/icon/envelope.svg',
    title: 'بريد إلكتروني',
    description: 'العميل مهم جدًا، العميل سيتبعه العميل. سأكون كازينو.',
    extra: 'hello@relume.io',
  },
  {
    icon: '/images/icon/phone.svg',
    title: 'هاتف',
    description: 'العميل مهم جدًا، العميل سيتبعه العميل. سأكون كازينو.',
    extra: '+1 (555) 000-0000',
  },
  {
    icon: '/images/icon/map.svg',
    title: 'مكتب',
    description: 'العميل مهم جدًا، العميل سيتبعه العميل. سأكون كازينو.',
    extra: '123 Sample St, Sydney NSW 2000 AU',
  },
];

const ContactItem = ({ contact }: { contact: ContactDTO }) => {
  return (
    <div className="flex flex-col gap-[24px] max-w-[400px] mx-auto">
      <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full mx-auto">
        <Image
          src={contact.icon || ''}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          alt={`contact`}
        />
      </div>

      <div className="text-center flex flex-col md:gap-[24px] gap-[12px]">
        <div className="font-semibold xl:text-[32px] md:text-[20px] text-[18px] leading-[130%]">
          {contact.title}
        </div>
        <div className="pt-[16px] md:text-[16px] text-[14px]">
          {contact.description}
        </div>
        <div className="pt-[16px] md:text-[16px] text-[14px] underline">
          {contact.extra}
        </div>
      </div>
    </div>
  );
};

const ContactUsSection = () => {
  return (
    <div>
      <div className="max-w-[768px] mx-auto text-center">
        <div className="font-semibold text-[16px]">{`الشعار`}</div>
        <div className="font-bold xl:text-[48px] md:text-[36px] text-[24px]">{`اتصل بنا`}</div>
        <div className="lg:text-[18px] text-[16px] leading-[150%]">{`لمزيد من المعلومات أو الاستفسارات لا تتردد في التواصل معنا عبر القنوات التالية`}</div>
      </div>

      <div className="pt-[80px]">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[32px]">
          {contacts.map((contact, index) => (
            <ContactItem contact={contact} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
