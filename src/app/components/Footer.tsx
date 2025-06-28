"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} SANID - Control de Plagas. Todos los
        derechos reservados. <br />
        Creado por{" "}
        <a
          href="https://jrdeveloper.cl"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-green-400 transition-colors"
        >
          jrdeveloper
        </a>
      </p>
    </footer>
  );
}
