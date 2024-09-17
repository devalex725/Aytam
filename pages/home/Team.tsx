import Image from 'next/image';

interface TeamMemberDTO {
  icon: string;
  name: string;
  role: string;
  description: string;
}

const members: TeamMemberDTO[] = [
  {
    icon: '',
    name: 'John Doe',
    role: 'رئيس',
    description: 'قيادة جمعيتنا برؤية والتزام بالتميز.',
  },
  {
    icon: '',
    name: 'Jane Smith',
    role: 'نائب الرئيس',
    description: 'دعم مبادراتنا بالرؤى الإستراتيجية والقيادة.',
  },
  {
    icon: '',
    name: 'Alice Johnson ',
    role: 'عضو',
    description: 'المساهمة في المشاريع المجتمعية وجهود التوعية.',
  },
  {
    icon: '',
    name: 'Bob Brown',
    role: 'عضو',
    description: 'التواصل مع أعضاء المجتمع لتعزيز التعاون.',
  },
  {
    icon: '',
    name: 'Cathy Green',
    role: 'عضو',
    description: 'المساعدة في تنظيم الأحداث التي تجمع مجتمعنا معًا.',
  },
  {
    icon: '',
    name: 'David White',
    role: 'عضو',
    description: 'الدعوة إلى ممارسات مستدامة داخل مجتمعنا.',
  },
  {
    icon: '',
    name: 'Eva Black',
    role: 'عضو',
    description: 'تعزيز الشراكات مع المنظمات المحلية لتحقيق تأثير أكبر.',
  },
  {
    icon: '',
    name: `نحن نبحث عن موظفين!`,
    role: 'انضم إلى فريقنا وأحدث الفارق.',
    description: 'الوظائف المفتوحة',
  },
];

const TeamMemberItem = ({ member }: { member: TeamMemberDTO }) => {
  return (
    <div className="flex flex-col gap-[24px] max-w-[300px] mx-auto justify-between">
      <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px] rounded-full mx-auto">
        <Image
          src={member.icon || '/images/def-member.png'}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          alt={`member`}
        />
      </div>

      <div className="text-center">
        <div className="font-semibold md:text-[20px] text-[18px]">
          {member.name}
        </div>
        <div className="md:text-[18px] text-[16px]">{member.role}</div>

        <div className="pt-[16px] md:text-[16px] text-[14px]">
          {member.description}
        </div>
      </div>

      <div className="flex justify-center items-center gap-[12px]">
        <a href="https://linkedin.com" target="_blank">
          <Image
            src={'/images/icon/linkedin1.svg'}
            width={24}
            height={24}
            sizes="100vw"
            alt={`linkedin`}
          />
        </a>
        <a href="https://x.com" target="_blank">
          <Image
            src={'/images/icon/x.svg'}
            width={24}
            height={24}
            sizes="100vw"
            alt={`x`}
          />
        </a>
        <a href="https://dribble.com" target="_blank">
          <Image
            src={'/images/icon/dribble.svg'}
            width={24}
            height={24}
            sizes="100vw"
            alt={`dribble`}
          />
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div>
      <div className="max-w-[768px] mx-auto text-center">
        <div className="font-semibold text-[16px]">{`فريق`}</div>
        <div className="font-bold xl:text-[48px] md:text-[36px] text-[24px]">{`أعضاء`}</div>
        <div className="lg:text-[18px] text-[16px] leading-[150%]">{`يتكون فريق قيادتنا من رئيس ونائب رئيس وأعضاء يساهمون بشكل فعال في تحقيق أهداف الجمعية`}</div>
      </div>

      <div className="pt-[80px]">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[32px]">
          {members.map((member, index) => (
            <TeamMemberItem member={member} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
