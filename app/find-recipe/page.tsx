import Footer from "../components/Footer";
import { Heading2 } from "../components/Headings";
import Nav from "../components/Nav";

export default function FindRecipe() {
  return (
    <div className="container m-auto px-4">
      <Nav />
      <main className="relative mt-5 flex min-h-[60svh] flex-col items-start md:mt-10">
        <Heading2 className="mb-6 mt-10">Find Recipe</Heading2>
      </main>
      <Footer />
    </div>
  );
}
