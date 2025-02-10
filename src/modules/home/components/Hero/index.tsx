export const Hero = () => {
  return (
    <section className="w-full h-screen">
      <div className="mt-24 text-center">
        <h2 className="text-balance leading-relaxed font-primary text-4xl font-medium max-w-lg mx-auto">
          Reactube: Your Ultimate Video Experience
        </h2>
        <p className="font-medium text-gray-500 mt-4 max-w-md mx-auto leading-relaxed whitespace-pre-line mb-6">
          Stream, Explore, and Share your favorite content with a sleek, fast,
          and modern video platform built for the next generation. Enjoy a
          seamless experience powered by cutting-edge technology
        </p>
        <button
          className="
              font-primary 
              font-medium 
              py-2 px-10 
              w-auto h-auto 
              bg-red-700 text-white 
              rounded-full 
              outline-none
              cursor-pointer
              transition-transform 
              duration-300 
              hover:scale-105
            "
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
