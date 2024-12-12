import CtaBtn from "../components/CtaBtn";
import { Heading1 } from "../components/Headings";
import SectionContainer from "../components/SectionContainer";

export default function Hero() {
  return (
    <SectionContainer>
      <Heading1 className="text-center">
        Turn Your Pantry Into Delicious Meals!
      </Heading1>
      <div>
        <CtaBtn href="/find-recipe" icon="chevron_right">
          Get Started
        </CtaBtn>
      </div>
    </SectionContainer>
  );
}
