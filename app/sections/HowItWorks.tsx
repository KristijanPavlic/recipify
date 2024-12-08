import SectionContainer from "../components/SectionContainer";
import CustomLink from "../components/CustomLink";

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
    title: "Get Cooking!",
    icon: <span className="material-symbols-outlined">cooking</span>,
    description: "Choose a recipe and get cooking! Enjoy your delicious meal.",
  },
];

export default function HowItWorks() {
  return (
    <SectionContainer>
      <div className="relative left-0 top-8">
        <h2 className="mb-6 text-xl font-bold text-[var(--primary)] md:text-xl lg:text-2xl xl:text-3xl">
          How Does Recipify Work?
        </h2>
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
          <CustomLink
            href="/find-recipe"
            className="m-auto flex w-fit items-center justify-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 hover:gap-6 hover:bg-[var(--primary)] hover:text-[var(--text-nav)]"
          >
            Try It Out
            <span className="material-symbols-outlined">chevron_right</span>
          </CustomLink>
        </div>
        {/* <div>
          <p className="mt-8 text-lg">
            Have a question or feedback? Feel free to{" "}
            <a
              href="mailto:test@test.com"
              className="text-[var(--primary)] hover:underline"
            >
              contact us
            </a>
            .
          </p>
        </div>
        <div>
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
        <div>
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
        <div>
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
        </div>*/}
      </div>
    </SectionContainer>
  );
}
