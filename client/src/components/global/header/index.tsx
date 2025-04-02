import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";

export const Header = () => {
  return (
    <>
      <header className="hidden lg:flex w-full items-center justify-between px-4 py-2 md:h-20 md:px-28 backdrop-blur-sm sticky top-0 left-0 right-0 z-50">
        <figure>
          <a href="/">
            <img
              src="/assets/brand-loogo.svg"
              alt="logo"
              width={150}
              height={150}
            />
          </a>
        </figure>
        <nav className="flex items-center md:text-sm lg:text-base md:gap-2 lg:gap-8">
          {NAV_ITEMS.map(({ id, title, href }) => (
            <a
              key={title}
              href={href}
              className={`text-gray-400 px-3 py-2 text-sm font-normal rounded-sm box-hover cursor-pointer ${
                id === 1 && "bg-background-darkGray text-gray-300"
              }`}
            >
              {title}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 font-inter">
          <Button className="bg-background-darkGray text-xs max-md:px-3 md:text-sm font-light">
            GitHub
          </Button>
          <Button
            variant="outline"
            className="text-xs max-md:px-3 md:text-sm font-light"
          >
            Sign In
          </Button>
        </div>
      </header>

      <div className="backdrop-blur-sm lg:hidden w-full flex flex-col fixed top-0 left-0 right-0 z-50">
        <header className="flex w-full items-center justify-between px-4 py-2 md:h-20 md:px-28">
          <figure>
            <a href="/">
              <img
                src="/assets/brand-loogo.svg"
                alt="logo"
                width={150}
                height={150}
              />
            </a>
          </figure>

          <div className="flex items-center gap-3 font-inter">
            <Button className="bg-background-darkGray text-xs max-md:px-3 md:text-sm font-light">
              GitHub
            </Button>
            <Button
              variant="outline"
              className="text-xs max-md:px-3 md:text-sm font-light"
            >
              Sign In
            </Button>
          </div>
        </header>
        <nav className="w-full flex gap-4 px-4 md:px-28">
          {NAV_ITEMS.map(({ id, title, href }) => (
            <a
              key={title}
              href={href}
              className={`text-gray-400 py-2 md:px-3 md:py-2 text-xs md:text-sm font-normal rounded-sm box-hover cursor-pointer border border-gray-900 flex-grow text-center ${
                id === 1 && "bg-background-darkGray text-gray-300"
              }`}
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
