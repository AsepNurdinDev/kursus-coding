import React from "react";
import { useState } from "react";

import SidebarMateri from "../../../components/Fragments/SidebarKelas/index.jsx";
export default function KelasHTML() {
  const [selectedMateri, setSelectedMateri] = useState(
    "Pilih materi di sebelah kiri."
  );

  const isiMateri = {
    "Apa itu HTML?":
      "HTML adalah singkatan dari HyperText Markup Language, yaitu bahasa markup standar yang digunakan untuk membuat dan menyusun halaman web. HTML bukan bahasa pemrograman, melainkan bahasa penanda (markup) yang digunakan untuk menentukan struktur dan isi dari sebuah dokumen web.  Siapa Penemu HTML dan Kapan Diciptakan?",
    "Struktur Dasar HTML": `Struktur dasar HTML terdiri dari tag <!DOCTYPE html>, <html>, <head>, dan <body>.`,
    "Tag & Atribut":
      "Tag HTML menandai elemen, sedangkan atribut memberikan informasi tambahan seperti class, id, src, dan lainnya.",
    Heading: "Tag heading digunakan untuk judul, seperti <h1> sampai <h6>.",
    Paragraf: "Tag <p> digunakan untuk membuat paragraf.",
  };

  return (
    <div className="flex">
      <SidebarMateri onSelect={setSelectedMateri} />
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {selectedMateri}
        </h1>
        <p className="text-gray-700 text-base leading-relaxed">
          {isiMateri[selectedMateri] ||
            "Silakan pilih sub-materi dari daftar di kiri."}
        </p>
      </div>
    </div>
  );
}
