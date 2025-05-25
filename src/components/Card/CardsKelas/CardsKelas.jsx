import { useState } from "react";
import Button from "../../Elements/Button";

export default function CardsKelas() {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      name: "HTML",
      role: "Web Developer",
      img: "/images/potokelas/html.png",
      title: "HTML dasar untuk web",
    },
    {
      name: "CSS",
      role: "Web Developer",
      img: "/images/potokelas/css.png",
      title: "CSS dasar styling web",
    },
    {
      name: "JavaScript",
      role: "Web Developer",
      img: "/images/potokelas/javascript.png",
      title: "Dasar JS untuk logika web",
    },
    {
      name: "PHP",
      role: "Web Developer",
      img: "/images/potokelas/php.png",
      title: "PHP backend dasar",
    },
    {
      name: "ReactJS",
      role: "Web Developer",
      img: "/images/potokelas/reactjs.png",
      title: "Belajar React",
    },
    {
      name: "Laravel",
      role: "Web Developer",
      img: "/images/potokelas/laravel.jpg",
      title: "Laravel untuk pemula",
    },
    {
      name: "Python",
      role: "Web Developer",
      img: "/images/potokelas/python.png",
      title: "Bahasa Python dasar",
    },
    {
      name: "NodeJS",
      role: "Web Developer",
      img: "/images/potokelas/nodejs.png",
      title: "Backend dengan Node",
    },
    {
      name: "TailwindCSS",
      role: "Web Developer",
      img: "/images/potokelas/tailwind.png",
      title: "Utility-first CSS",
    },
    {
      name: "MySQL",
      role: "Database Admin",
      img: "/images/potokelas/MySQL.png",
      title: "Dasar-dasar MySQL",
    },
    {
      name: "MongoDB",
      role: "Database Admin",
      img: "/images/potokelas/MongoDB.png",
      title: "Belajar MongoDB",
    },
    {
      name: "NextJS",
      role: "Web Developer",
      img: "/images/potokelas/nextjs.png",
      title: "Fullstack dengan NextJS",
    },
    {
      name: "VueJS",
      role: "Web Developer",
      img: "/images/potokelas/vue.png",
      title: "VueJS untuk frontend",
    },
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 12);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <p className="mt-6 text-2xl font-bold text-gray-800">
        Daftar Semua Kelas
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-[1.01]"
          >
            <div className="w-full aspect-video overflow-hidden">
              <img
                src={card.img}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-blue-600 uppercase font-semibold tracking-wide">
                {card.role}
              </p>
              <h3 className="text-lg font-bold text-gray-800">{card.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{card.title}</p>
              <Button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-md">
                <a href="/kelashtml ">Mulai Belajar</a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-center mt-8 mb-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
          >
            Lihat Semua Kelas
          </button>
        </div>
      )}
    </div>
  );
}
