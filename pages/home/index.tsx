import AboutUsSection from './AboutUs';
import ContactUsSection from './ContactUs';
import FeatureSection from './Features';
import FooterSection from './Footer';
import HeaderSection from './Header';
import InfoSection from './Info';
import IntroductionSection from './Introduction';
import TeamSection from './Team';
import TestimonialSection from './Testimonial';

const LandingPage = () => {
  return (
    <>
      <div className="md:py-[20px] md:px-[64px] py-[10px] px-[18px]" id="home">
        <HeaderSection />

        <div className="max-w-landing mx-auto">
          <div className="py-[32px]">
            <IntroductionSection />
          </div>
          <div className="py-[18px]">
            <InfoSection />
          </div>

          <div className="py-[40px]" id="services">
            <FeatureSection />
          </div>

          <div className="py-[110px]">
            <TestimonialSection />
          </div>

          <div className="py-[80px]" id="aboutus">
            <AboutUsSection />
          </div>

          <div className="py-[80px]" id="members">
            <TeamSection />
          </div>

          <div className="py-[80px]" id="contactus">
            <ContactUsSection />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default LandingPage;
