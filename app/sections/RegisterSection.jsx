import RegistrationForm from "../components/RegistrationForm";
import SectionWrapper from "../components/SectionWrapper";

export default function RegisterSection() {
  return (
    // The id="register" is what connects to your Navbar's href="#register"
    <SectionWrapper
      id="register" 
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#020510] overflow-hidden flex items-center justify-center"
    >
      <div className="relative w-full z-10">
        <RegistrationForm />
      </div>
    </SectionWrapper>
  );
}