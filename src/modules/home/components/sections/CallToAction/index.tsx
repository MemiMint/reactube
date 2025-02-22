import { NavLink } from "react-router";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-red-700 text-white text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-primary font-semibold">
          What are you waiting for?
        </h2>
        <p className="mt-4 text-lg font-medium leading-relaxed">
          Experience a new way to stream, share, and explore content. No ads. No
          restrictions. Just pure entertainment.
        </p>
        <NavLink to="/auth/signup">
          <button className="cursor-pointer mt-6 bg-white text-red-700 font-medium text-lg px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105">
            Get Started
          </button>
        </NavLink>
      </div>
    </section>
  );
};
