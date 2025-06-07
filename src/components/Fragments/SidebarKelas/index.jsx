import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, LogOut } from "lucide-react";

export default function SidebarMateri({ onSelect }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const materi = [
    {
      title: "1. Pengenalan HTML",
      sub: ["Apa itu HTML?", "Struktur Dasar HTML", "Tag & Atribut"],
    },
    {
      title: "2. Tag-Teg Dasar",
      sub: ["Heading", "Paragraf", "Link dan Gambar", "List"],
    },
    {
      title: "3. Form dan Input",
      sub: ["Form Dasar", "Input Teks", "Textarea dan Select"],
    },
    {
      title: "4. Media",
      sub: ["Gambar", "Audio & Video", "Iframe"],
    },
    {
      title: "5. Tabel",
      sub: ["Struktur Tabel", "thead, tbody, tfoot"],
    },
    {
      title: "6. Semantic HTML",
      sub: ["Apa itu Semantic?", "Elemen Semantic Penting"],
    },
    {
      title: "7. Layout HTML",
      sub: ["Div & Span", "Struktur Layout Umum"],
    },
    {
      title: "8. Best Practice",
      sub: ["Komentar", "Validasi", "Kerapian Kode"],
    },
    {
      title: "9. HTML + CSS & JS",
      sub: ["Link ke CSS", "Script JS"],
    },
    {
      title: "10. Proyek Mini",
      sub: ["Biodata", "Form Pendaftaran", "Blog Layout"],
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeluar = () => {
    navigate("/kelas");
  };

  return (
    <div className="w-72 h-screen bg-white border-r shadow-md p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Materi HTML</h2>
        <ul className="space-y-3">
          {materi.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between w-full text-left text-gray-800 font-semibold hover:text-blue-600 transition"
              >
                {item.title}
                {activeIndex === index ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeIndex === index && (
                <ul className="ml-4 mt-2 space-y-1 text-sm text-gray-600">
                  {item.sub.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      onClick={() => onSelect(subItem)}
                      className="hover:text-blue-500 cursor-pointer"
                    >
                      • {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          onClick={handleKeluar}
          className="flex items-center justify-center w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Keluar
        </button>
      </div>
    </div>
  );
}
