import Button from "../../Elements/Button";

export default function CardsKelas() {
  const cards = [
    {
      name: "HTML",
      role: "Web Developer",
      img: "/images/potokelas/html.png",
      title: "HTML untuk web developer",
    },
    {
      name: "CSS",
      role: "Web Developer",
      img: "/images/potokelas/css.png",
    },
    {
      name: "JavaScript",
      role: "Web Developer",
      img: "/images/potokelas/javascript.png",
    },
    {
      name: "PHP",
      role: "Web Developer",
      img: "/images/potokelas/php.png",
    },
    {
      name: "ReactJS",
      role: "Web Developer",
      img: "/images/potokelas/reactjs.png",
    },
    {
      name: "Laravel",
      role: "Web Developer",
      img: "/images/potokelas/laravel.jpg",
    },
    {
      name: "Python",
      role: "Web Developer",
      img: "/images/potokelas/python.png",
    },
    {
      name: "NodeJS",
      role: "Web Developer",
      img: "/images/potokelas/nodejs.png",
    },
  ];

  return (
    <div>
      <p className="px-8 mt-4 text-2xl font-bold">Daftar semua kelas</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {cards.map((card, index) => (
          <a
            href="#"
            key={index}
            className="group relative block bg-black rounded-xl overflow-hidden shadow-lg"
          >
            <img
              alt={card.name}
              src={card.img}
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <p className="text-sm font-medium tracking-widest text-white uppercase">
                {card.role}
              </p>

              <p className="text-xl font-bold text-white sm:text-2xl">
                {card.name}
              </p>

              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-white">{card.title}</p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 mt-2 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition duration-300"
                    type="submit"
                  >
                    <a href="/kelas">Mulai belajar</a>
                  </Button>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
