import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { navbarLinks } from "../../constant/navbar";
import { faqLinks, sosmedLinks } from "../../constant/footer";
import primaxcelLogo from "../../public/primaxcel_logo.svg";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar logo={primaxcelLogo} links={navbarLinks} />
      <main>{children}</main>
      <Footer faqLinks={faqLinks} sosmedLinks={sosmedLinks} />
    </>
  );
};
