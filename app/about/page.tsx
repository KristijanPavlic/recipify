import Footer from "../components/Footer";
import { Heading2 } from "../components/Headings";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="container m-auto px-4">
      <Nav />
      <main className="relative mt-5 flex min-h-[60svh] flex-col items-start md:mt-10">
        <Heading2 className="mb-6 mt-10">About</Heading2>
        <p className="text-lg">
          Recipify is a recipe search engine that allows you to find recipes
          based on the ingredients you have on hand. Simply enter the
          ingredients you have and Recipify will return a list of recipes that
          you can make with those ingredients.
        </p>
        <div>
          <h2 className="text-lg font-semibold">How It Works</h2>
          <p className="mt-3">
            Recipify is a recipe search engine that allows you to find recipes
            based on the ingredients you have on hand. Simply enter the
            ingredients you have and Recipify will return a list of recipes that
            you can make with those ingredients.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Our Mission</h2>
          <p className="mt-3">
            Our mission is to help you make delicious meals with the ingredients
            you have at home. We believe that cooking should be fun, easy, and
            accessible to everyone. With Recipify, you can discover new recipes,
            learn new cooking techniques, and enjoy delicious meals with your
            loved ones.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Our Team</h2>
          <p className="mt-3">
            We are a team of food enthusiasts who are passionate about cooking
            and sharing delicious recipes with the world. Our goal is to help
            you make cooking fun and enjoyable, so you can create amazing meals
            for yourself and your loved ones.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-3">
            If you have any questions, comments, or feedback, please feel free
            to reach out to us using the form below. We would love to hear from
            you!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
