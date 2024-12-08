import GetCurrentYear from "../functions/getCurrentYear";
import CustomLink from "./CustomLink";

const linksArray = [
  "About",
  "Contact",
  "Sign Up",
  "Privacy Policy",
  "Cookie Policy",
  "Terms of Service",
];

const socialMediaArray = [
  {
    name: "Facebook",
    url: "/",
  },
  {
    name: "X",
    url: "/",
  },
  {
    name: "Instagram",
    url: "/",
  },
];

const Footer = () => {
  return (
    <footer
      className="relative mb-2 mt-20 rounded-3xl bg-[var(--primary)] px-6 py-4 text-[var(--text-nav)] lg:px-8 lg:py-4"
      aria-label="Footer"
    >
      <div>
        <div className="grid grid-cols-1 gap-10 pb-6 lg:grid-cols-3 lg:gap-6">
          {/* Branding Section */}
          <div className="flex w-full flex-col lg:w-[95%]">
            <CustomLink
              href="/"
              className="text-xl font-semibold hover:text-[var(--accent)]"
            >
              Recipify.
            </CustomLink>
            <p className="mt-4">
              Your go-to platform for delicious recipes made from what you have
              at home.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-lg font-semibold">Links</h2>
            <ul className="mt-3 grid grid-cols-3 gap-x-2 gap-y-5">
              {linksArray.map((link) => (
                <li key={link}>
                  <CustomLink
                    href="/"
                    className="text-base font-normal hover:text-[var(--accent)] md:text-lg"
                  >
                    {link}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <ul className="mt-3 flex gap-5">
              {socialMediaArray.map((socialMedia) => (
                <li key={socialMedia.name}>
                  <CustomLink
                    href={socialMedia.url}
                    aria-label={`Follow us on ${socialMedia.name}`}
                    className="text-base font-normal hover:text-[var(--accent)] md:text-lg"
                  >
                    {socialMedia.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-2 flex flex-col items-center justify-center text-sm md:flex-row">
        <span>
          © <GetCurrentYear /> Recipify. All rights reserved.{" "}
        </span>
        <span>
          Made by{" "}
          <CustomLink
            href="https://kripaweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit KriPa Web"
            className="text-sm font-light hover:text-[var(--accent)]"
          >
            KriPa Web
          </CustomLink>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
