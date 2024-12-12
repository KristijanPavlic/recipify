import SectionContainer from "../components/SectionContainer";
import { Heading2 } from "../components/Headings";
import CtaBtn from "../components/CtaBtn";

const steps = [
  {
    step: "Step 1",
    title: "Enter Ingredients",
    icon: <span className="material-symbols-outlined">grocery</span>,
    description: "Enter the ingredients you have on hand in the search bar.",
  },
  {
    step: "Step 2",
    title: "Find Recipes",
    icon: <span className="material-symbols-outlined">search</span>,
    description:
      "Recipify will return a list of recipes that you can make with the ingredients you entered.",
  },
  {
    step: "Step 3",
    title: "Start Cooking!",
    icon: <span className="material-symbols-outlined">cooking</span>,
    description: "Choose a recipe and get cooking! Enjoy your delicious meal.",
  },
];

export default function HowItWorks() {
  return (
    <SectionContainer>
      <div className="relative left-0 top-8">
        <Heading2 className="mb-6 md:mb-10">How Does Recipify Work?</Heading2>
        <p className="text-lg">
          Recipify is a recipe search engine that allows you to find recipes
          based on the ingredients you have on hand. Simply enter the
          ingredients you have and Recipify will return a list of recipes that
          you can make with those ingredients.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-6 py-4"
            >
              <h4 className="mb-2 font-light uppercase">{step.step}</h4>
              <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold">
                {step.title} {step.icon}
              </h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaBtn href="/find-recipe" icon="chevron_right">
            Try It Out
          </CtaBtn>
        </div>
        {/* <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-4 xl:gap-12">
          <div className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-6 py-4">
            <p className="mt-8 text-lg">
              Have a question or feedback? Feel free to{" "}
              <CustomLink
                href="mailto:test@test.com"
                className="text-[var(--primary)] hover:underline"
              >
                contact us
              </CustomLink>
              .
            </p>
          </div>
          <div className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-6 py-4">
            <p className="mt-8 text-lg">
              Want to learn more about Recipify? Check out our{" "}
              <CustomLink
                href="/about"
                className="text-[var(--primary)] hover:underline"
              >
                about page
              </CustomLink>
              .
            </p>
          </div>
          <div className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-6 py-4">
            <p className="mt-8 text-lg">
              Ready to start cooking? Head over to our{" "}
              <CustomLink
                href="/find-recipe"
                className="text-[var(--primary)] hover:underline"
              >
                recipe search page
              </CustomLink>
              .
            </p>
          </div>
          <div className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-6 py-4">
            <p className="mt-8 text-lg">
              Want to see what others are cooking? Check out our{" "}
              <CustomLink
                href="/recipes"
                className="text-[var(--primary)] hover:underline"
              >
                recipes page
              </CustomLink>
              .
            </p>
          </div>
        </div> */}
      </div>
    </SectionContainer>
  );
}
