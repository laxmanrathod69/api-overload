import { BGBeams } from "@/components/background-beams";
import { Footer } from "../../components/global/footer";
import { Header } from "@/components/global/header";
import { Button } from "@/components/ui/button";
import { FAQs } from "@/components/faq";

const Home = () => {
  return (
    <section>
      <BGBeams className="md:min-h-screen w-full">
        <Header />
        <section className="sm:px-20 py-36 md:px-12 lg:p-0 md:h-screen flex flex-col items-center justify-center gap-5 text-white">
          <div className="grid gap-3 px-10 lg:p-0">
            <h1 className="relative z-10 text-2xl md:text-5xl font-orbitron bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
              The Complete Load Testing Platform
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-base md:text-lg text-center relative z-10">
              API Overload is a scalable, flexible and easy-to-use platform that
              contains everything you need for production-grade load testing.
            </p>
          </div>
          <div className="mt-1">
            <Button
              className="uppercase text-sm font-light"
              variant="secondary"
            >
              GET STARTED — FREE
            </Button>
          </div>
          <p className="max-md:grid text-neutral-400 text-sm font-medium text-center relative z-10">
            Need help with an internal PoC?
            <a
              href="mailto:luckyrathod1137@gmail.com"
              className="cursor-pointer hover:underline hover:text-neutral-300 transition-all duration-300 ease-in ml-1"
            >
              Talk to an engineer
            </a>
          </p>
        </section>
      </BGBeams>
      <FAQs />
      <Footer />
    </section>
  );
};

export default Home;
