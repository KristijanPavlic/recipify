import CustomLink from "../components/CustomLink";
import SectionContainer from "../components/SectionContainer";

export default function Hero() {
  return (
    <SectionContainer>
      <h1 className="text-center text-3xl font-bold leading-[1.6] text-[var(--primary)] md:text-5xl md:leading-[1.6] lg:text-6xl lg:leading-[1.6] xl:text-8xl xl:leading-[1.4]">
        Turn Your Pantry Into Delicious Meals!
      </h1>
      <CustomLink
        href="/"
        className="rounded-xl bg-[var(--accent)] px-4 py-2 hover:bg-[var(--primary)] hover:text-[var(--text-nav)]"
      >
        Get Started
      </CustomLink>
    </SectionContainer>
  );
}
