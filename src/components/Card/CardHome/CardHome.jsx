import { useEffect, useState } from "react";
import img1 from "/images/kursus3.png";
import img2 from "/images/kursus4.png";
import img3 from "/images/kursus2.png";
import img5 from "/images/kursus3.png";

const images = [img1, img2, img3, img5];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div>
      <div className="relative w-3/4 mx-auto mt-10">
        {/* Carousel wrapper */}
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-blue-600 sm:text-5xl">
            Belajar coding di
            <strong className="text-blue-600"> Acode </strong>
            pastinya menyenangkan
          </h1>
          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            #Ayo bergabung sekarang juga untuk belajar coding agar makin jago
            dibidang IT dan dapatkan berbagai materi menarik yang pastinya mudah
            dipahami.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-7 rounded-lg transition duration-300"
              href="/login"
            >
              Cari Kelas
            </a>
          </div>
        </div>
        <div className="relative h-56 overflow-hidden mt-4 rounded-lg md:h-96">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`carousel-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* Prev button */}
      </div>
      <div className="space-y-4 w-3/4 mx-auto mt-10">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
            <h2 className="text-lg font-medium">Apa itu kursus coding?</h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900">
            Kursus coding adalah program pembelajaran yang dirancang untuk
            membantu siapa saja—baik pemula maupun yang sudah
            berpengalaman—untuk memahami dan menguasai bahasa pemrograman. Di
            kursus ini, peserta akan belajar cara membuat aplikasi, website,
            hingga sistem perangkat lunak dengan pendekatan yang terstruktur dan
            mudah dipahami.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
            <h2 className="text-lg font-medium">
              Bagaimana cara mendaftar kursus coding?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900">
            Mendaftar kursus coding sangat mudah. Cukup ikuti langkah berikut:
            Buka halaman utama website kami. Klik tombol "Daftar" atau
            "Register". Isi data diri seperti nama, email, dan password. Pilih
            kursus yang ingin diikuti. Klik "Mulai Belajar" dan Anda siap untuk
            mengikuti kelas coding! Jika Anda sudah memiliki akun, cukup login
            dan langsung pilih kursus yang tersedia.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900">
            <h2 className="text-lg font-medium">
              Apa saja materi yang diajarkan di kursus coding?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900">
            Materi yang diajarkan mencakup berbagai topik penting dalam dunia
            pemrograman, antara lain: Dasar-dasar HTML, CSS, dan JavaScript –
            Fondasi utama dalam pembuatan website. React.js & TailwindCSS –
            Untuk membangun tampilan website yang modern dan responsif. Node.js
            & Express.js – Untuk membuat backend atau logika server. MySQL &
            Database Management – Untuk menyimpan dan mengelola data pengguna.
            Project Akhir (Final Project) – Pembuatan aplikasi lengkap sebagai
            bukti kompetensi. Setiap materi disusun secara bertahap, lengkap
            dengan contoh, latihan, dan kuis untuk memastikan pemahaman yang
            mendalam.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Carousel;
