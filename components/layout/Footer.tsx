import AppStoreButtons from "@/components/ui/AppStoreButtons";
import SubscribeForm from "@/components/forms/SubscribeForm";
import SocialIcons from "@/components/layout/SocialIcons";
import { content } from "@/lib/constants/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container max-w-7xl md:px-5 px-4 mx-auto">
        <div className="border-y border-accent pt-10 md:pb-[60px] pb-10 flex flex-col sm:gap-6 gap-5">
          <div className="flex justify-between items-center sm:flex-row flex-col gap-5">
            <a href="/" className="block">
              <img src="/assets/images/footer-logo.svg" alt="Ready to Date footer logo" className="max-w-28 w-full" />
            </a>
            <SocialIcons />
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-4 gap-5">
            <p>
              You deserve something better than confusion.{" "}
              <span className="text-primary font-bold">Ready to Date</span> is for people who want clarity,
              safety, and a real chance at love.
            </p>
            <div>
              <h5 className="font-bold md:text-xl/snug text-lg/snug text-primary mb-2">Download the App</h5>
              <div className="lg:mb-6 mb-4">
                <AppStoreButtons variant="light" />
              </div>
              <a href="#" className="block text-sm/snug hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm/snug hover:text-primary lg:mt-3 mt-1">
                Terms & Conditions
              </a>
            </div>
            <div>
              <h3 className="font-medium md:text-3xl/snug text-2xl/snug text-primary mb-2">Subscribe</h3>
              <p>Be the first to know about exclusive events for singles.</p>
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-1 items-center md:py-7 py-4 sm:flex-row flex-col">
          <p className="m-0 text-sm/snug block">{content.footer.copyright}</p>
          <a href="mailto:info@readytodate.ca" className="block text-sm/snug hover:text-primary">
            info@readytodate.ca
          </a>
        </div>
      </div>
    </footer>
  );
}
