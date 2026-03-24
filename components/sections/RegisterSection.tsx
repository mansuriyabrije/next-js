import RegisterForm from "@/components/forms/RegisterForm";
import DownloadCTA from "@/components/sections/DownloadCTA";

export default function RegisterSection() {
  return (
    <section className="form-sec lg:pt-20 md:py-14 py-10 lg:pb-[120px]">
      <div className="container max-w-7xl md:px-5 px-4 mx-auto">
        <div className="p-px bg-[linear-gradient(327.65deg,rgba(255,255,255,0.58)_3.47%,rgba(255,255,255,0)_49.05%,rgba(255,255,255,0.58)_99.23%)] lg:rounded-[54px] rounded-3xl">
          <div className="form-box lg:rounded-[54px] rounded-3xl">
            <div className="lg:p-14 xs:p-5 p-3 lg:rounded-[54px] rounded-3xl bg-[radial-gradient(115.38%_185.8%_at_31.1%_-27.5%,#F243BC_0%,rgba(100,19,188,0.94)_50.55%,rgba(74,0,117,0.94)_73.96%,#F77479_98%)]">
              <div className="flex sm:flex-row flex-col 2xl:gap-[70px] lg:gap-10 gap-6 items-center">
                <div className="sm:w-[52%] w-full lg:rounded-3xl rounded-xl lg:p-6 xs:p-4 p-3 shadow-[0px_10px_40px_0px_#00000029]">
                  <h3 className="text-white font-medium md:text-[40px] md:leading-12 text-3xl/snug mb-1">
                    Register Now
                  </h3>
                  <p className="text-white">To know more about You.</p>
                  <RegisterForm />
                </div>
                <DownloadCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
