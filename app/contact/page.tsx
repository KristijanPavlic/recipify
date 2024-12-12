import Footer from "../components/Footer";
import { Heading2 } from "../components/Headings";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <div className="container m-auto px-4">
      <Nav />
      <main className="relative mt-5 flex min-h-[60svh] flex-col items-start md:mt-10">
        <Heading2 className="mb-6 mt-10">Contact Us</Heading2>
        <p className="text-lg">
          We would love to hear from you! If you have any questions, comments,
          or feedback, please feel free to reach out to us using the form below.
        </p>
        <form className="mt-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-4 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-4 py-2"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="mt-6 w-full rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-4 py-2"
          />
          <textarea
            placeholder="Message"
            className="mt-6 w-full rounded-xl border border-[var(--primary)] bg-[var(--text-nav)] px-4 py-2"
          ></textarea>
          <button
            type="submit"
            className="mt-6 rounded-xl bg-[var(--accent)] px-4 py-2 hover:bg-[var(--primary)] hover:text-[var(--text-nav)]"
          >
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
