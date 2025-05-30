import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Elements/Button";
import Footer from "../components/Fragments/Footer/Footer";
import Navbar from "../components/Fragments/Navbar/Navbar";
import CardHome from "../components/Card/CardHome/CardHome";

const HomePage = () => {
  const images = [
    "/images/courses.png",
    "/images/kursus4.png",
    "/images/kursus3.png",
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <Navbar />
      <section className="bg-white lg:grid lg:place-content-center px-2 mt-5">
        <div className="mx-auto w-screen max-w-screen-xl px-8 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1
              data-aos="fade-right"
              className="text-4xl font-bold text-gray-900 sm:text-5xl"
            >
              Selamat datang di
              <strong className="text-blue-600"> Kursus </strong>
              Coding
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed"
            >
              Belajar coding dengan menyenangkan dan seru pastinya, ayo
              bergabung sekarang juga untuk belajar coding agar makin jago
              dibidang IT.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-7 rounded-lg transition duration-300"
                href="/login"
              >
                Mulai belajar
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mt-6 md:mt-0">
            <img
              src={images[currentImage]}
              alt={`courses-${currentImage}`}
              className="w-full max-w-md mx-auto rounded-lg shadow-md transition-all duration-500"
            />

            {/* Tombol kiri */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 text-gray-800 p-2 rounded-full transition duration-300"
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Tombol kanan */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 text-gray-800 p-2 rounded-full transition duration-300"
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      {/* Card */}

      <CardHome />
      <Footer />
    </div>
  );
};

export default HomePage;
