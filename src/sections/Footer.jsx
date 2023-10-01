import { copyrightSign } from '../assets/icons/index';
import { footerLogo } from '../assets/images/index';
import { socialMedia, footerLinks } from '../constants/index';
function Footer() {
  return (
    <footer className="max-container">
      <div
        className="flex flex-wrap items-start justify-between 
      gap-20 max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p
            className="mt-6 font-montserrat text-base 
          leading-7 text-white-400 sm:max-w-sm"
          >
            Get shoes ready for the new term ot your nearest nike store. find
            your perfect Size In store. Get Rewards
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className="flex h-12 w-12
              items-center justify-center rounded-full bg-white hover:bg-slate-gray"
              >
                <img src={social.src} alt="icon" width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-wrap justify-between gap-20 lg:gap-10">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal text-white">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item) => (
                  <li
                    key={item.name}
                    className="mt-3 cursor-pointer font-montserrat 
                  text-base leading-normal text-white-400 hover:text-slate-gray "
                  >
                    <a href="#">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 flex justify-between text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyRight"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>CopyRight All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms and conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
