const Hero = () => {
  return (
    <section className="px-5 h-screen relative pt-5 top-16">
      <div
        className="max-h-screen h-8/12 relative rounded-md"
        style={{
          backgroundImage: "url('/kai-pilger-tL92LY152Sk-unsplash.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.65
        }}
      >
        {/* <div className="w-full absolute right-0 left-0 top-0 bottom-0 bg-black/70 z-10 opacity-25" /> */}
        <div className="absolute left-12 bottom-12">
          <h1 className="text-7xl text-white">
            <span className="font-livret-sans">Zarp </span> it, Get it there,
            Fast.
            {/* Experience deliveries like never before with{" "} */}
          </h1>
          <p className="text-white text-xl">
            The fastest way to send, receive, and deliver goods — whether you’re
            a vendor, a zapper, or the zapped.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
