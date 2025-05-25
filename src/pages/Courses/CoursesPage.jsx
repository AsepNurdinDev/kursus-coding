import Button from "../../components/Elements/Button";
import Navbar from "../../components/Fragments/Navbar/Navbar";
import CardsKelas from "../../components/Card/CardsKelas/CardsKelas";
import Footer from "../../components/Fragments/Footer/Footer";
import Profile from "../../components/Fragments/Profile/Profile";

const CoursesPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Informasi */}
      <section className="bg-blue-100 lg:grid lg:place-content-center mt-4">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Selamat datang di
              <strong className="text-blue-600"> Kursus </strong>
              Coding
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Belajar coding dengan menyenangkan dan seru pastinya, ayo
              bergabung sekarang juga untuk belajar coding agar makin jago
              dibidang IT.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 mt-2 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition duration-300"
              type="submit"
            >
              <a href="/kelas">Mulai belajar</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Card */}
      <CardsKelas />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursesPage;
