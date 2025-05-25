import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const content = {
    "What is HTML": `HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. HTML digunakan untuk menentukan struktur dasar dari sebuah dokumen web, seperti heading, paragraf, tautan, gambar, dan elemen lainnya.

Contoh:
<pre>
<!DOCTYPE html>
<html>
  <head>
    <title>Contoh HTML</title>
  </head>
  <body>
    <h1>Halo Dunia!</h1>
    <p>Ini paragraf pertama saya.</p>
  </body>
</html>
</pre>`,

    "HTML History": `HTML pertama kali dikembangkan oleh Tim Berners-Lee pada tahun 1991. Versi pertama HTML sangat sederhana dan hanya memiliki beberapa tag. HTML kemudian terus dikembangkan dan saat ini telah mencapai versi HTML5 yang mendukung multimedia, grafik, dan interaktivitas.

HTML5 dirilis secara resmi pada tahun 2014 oleh W3C dan WHATWG.`,

    "Basic Structure": `Struktur dasar HTML terdiri dari elemen:

1. <!DOCTYPE html> untuk mendeklarasikan tipe dokumen
2. <html> sebagai elemen induk
3. <head> berisi metadata, title, link, script
4. <body> berisi konten utama

Contoh:
<pre>
<!DOCTYPE html>
<html>
  <head>
    <title>Contoh Struktur</title>
  </head>
  <body>
    <h1>Judul</h1>
    <p>Isi halaman</p>
  </body>
</html>
</pre>`,

    "Heading Tags": `Tag heading digunakan untuk membuat judul atau subjudul. HTML memiliki enam tingkatan heading dari <h1> hingga <h6>.

Contoh:
<pre>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
</pre>`,

    "Paragraph Tags": `<p> digunakan untuk membuat paragraf dalam HTML.

Contoh:
<pre>
<p>Ini adalah sebuah paragraf.</p>
</pre>`,

    "Link, Image, and List Tags": `1. <a> digunakan untuk membuat tautan:
<pre><a href="https://www.example.com">Kunjungi</a></pre>

2. <img> digunakan untuk menyisipkan gambar:
<pre><img src="gambar.jpg" alt="Deskripsi Gambar" /></pre>

3. <ul>/<ol>/<li> digunakan untuk daftar:
<pre>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
</pre>`,

    "Form Tag": `<form> digunakan untuk membuat formulir input dari pengguna.

Contoh:
<pre>
<form action="/submit" method="POST">
  <input type="text" name="nama" />
  <button type="submit">Kirim</button>
</form>
</pre>`,

    "Input Types": `HTML menyediakan banyak jenis input seperti:
- text
- password
- email
- number
- checkbox
- radio

Contoh:
<pre>
<input type="email" name="email" placeholder="Masukkan email" />
</pre>`,

    "Labels & Validation": `<label> digunakan untuk memberi label pada input.
Validasi dapat dilakukan dengan atribut seperti required, pattern, minlength.

Contoh:
<pre>
<label for="username">Nama Pengguna:</label>
<input id="username" required />
</pre>`,

    Image: `<img> digunakan untuk menyisipkan gambar dalam HTML.

Contoh:
<pre>
<img src="https://via.placeholder.com/150" alt="Contoh Gambar" />
</pre>`,

    Audio: `<audio> digunakan untuk menyisipkan file audio.

Contoh:
<pre>
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
</audio>
</pre>`,

    Video: `<video> digunakan untuk menyisipkan video.

Contoh:
<pre>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
</video>
</pre>`,
  };

  const renderContent = () => {
    if (!activeContent) return null;
    return (
      <div className="p-4 md:ml-64">
        <h2 className="text-xl font-semibold mb-2">{activeContent}</h2>
        <div
          className="prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: content[activeContent] }}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row">
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 m-2 text-white bg-blue-500 rounded-lg focus:outline-none"
      >
        {isOpen ? "Tutup" : "Buka"} Sidebar
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block h-screen overflow-y-auto border-e border-gray-100 bg-white md:w-64 w-full fixed md:static z-10`}
      >
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            Logo
          </span>

          <ul className="mt-6 space-y-4">
            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-4 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
                  📘 HTML Introduction
                </summary>
                <ul className="mt-2 ml-10 space-y-1 text-sm text-gray-600">
                  <li
                    onClick={() => setActiveContent("What is HTML")}
                    className="cursor-pointer hover:underline"
                  >
                    What is HTML
                  </li>
                  <li
                    onClick={() => setActiveContent("HTML History")}
                    className="cursor-pointer hover:underline"
                  >
                    HTML History
                  </li>
                  <li
                    onClick={() => setActiveContent("Basic Structure")}
                    className="cursor-pointer hover:underline"
                  >
                    Basic Structure
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  🏷️ HTML Tags
                </summary>
                <ul className="mt-2 ml-10 space-y-1 text-sm text-gray-600">
                  <li
                    onClick={() => setActiveContent("Heading Tags")}
                    className="cursor-pointer hover:underline"
                  >
                    Heading Tags
                  </li>
                  <li
                    onClick={() => setActiveContent("Paragraph Tags")}
                    className="cursor-pointer hover:underline"
                  >
                    Paragraph Tags
                  </li>
                  <li
                    onClick={() =>
                      setActiveContent("Link, Image, and List Tags")
                    }
                    className="cursor-pointer hover:underline"
                  >
                    Link, Image, and List Tags
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  📝 HTML Forms
                </summary>
                <ul className="mt-2 ml-10 space-y-1 text-sm text-gray-600">
                  <li
                    onClick={() => setActiveContent("Form Tag")}
                    className="cursor-pointer hover:underline"
                  >
                    Form Tag
                  </li>
                  <li
                    onClick={() => setActiveContent("Input Types")}
                    className="cursor-pointer hover:underline"
                  >
                    Input Types
                  </li>
                  <li
                    onClick={() => setActiveContent("Labels & Validation")}
                    className="cursor-pointer hover:underline"
                  >
                    Labels & Validation
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-4 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                  🎬 HTML Media
                </summary>
                <ul className="mt-2 ml-10 space-y-1 text-sm text-gray-600">
                  <li
                    onClick={() => setActiveContent("Image")}
                    className="cursor-pointer hover:underline"
                  >
                    Image
                  </li>
                  <li
                    onClick={() => setActiveContent("Audio")}
                    className="cursor-pointer hover:underline"
                  >
                    Audio
                  </li>
                  <li
                    onClick={() => setActiveContent("Video")}
                    className="cursor-pointer hover:underline"
                  >
                    Video
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-4 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt="User profile"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=64&q=80"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-700">Asepshan</p>
              <p className="text-xs text-gray-500">HTML Instructor</p>
            </div>
          </a>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};

export default Sidebar;
