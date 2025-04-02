import { FOOTER_ITEMS } from "@/constants";

export const Footer = () => {
  return (
    <div className="flex flex-col p-8 md:px-28 md:pt-10 md:pb-8 border-t border-gray-900 bg-neutral-900">
      <div className="grid grid-cols-1 gap-7 lg:flex lg:gap-0 justify-between">
        <div>
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
          <p className="text-gray-400 text-sm font-medium mt-1">
            Keep{" "}
            <span className="bg-green-900 text-green-400 shadow-md px-[.21rem] py-[.16rem] rounded-sm">
              production
            </span>{" "}
            reliable, customers happy, and pagers silent.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 text-gray-400 text-sm font-medium">
          {FOOTER_ITEMS.map(({ id, title, href }) => (
            <a key={id} href={href} className="hover:underline">
              {title}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 lg:flex justify-between md:mt-14 text-xs text-gray-500 border-t border-dashed border-gray-600 pt-4">
        <p>
          © 2025 API Overload Software Inc or its affiliates. 169 Madison
          Avenue, #2096, New York, NY 10016
        </p>
        <p>XYZ™ is a trademark of XYZ Software Inc</p>
      </div>
    </div>
  );
};
