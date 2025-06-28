"use client";

import Image from "next/image";
import { Phone, Mail, Share2, ClipboardCopy } from "lucide-react";
import { useState } from "react";

const shareUrl = "https://sanid.vercel.app/"; // 🔁 Reemplaza con tu URL real
const email = "robin.olguin62@gmail.com"; // Email para el botón
const whatsappNumber = "56978478737"; // Sin + ni espacios
const instagramUrl = "https://instagram.com/sanid.2025"; // Cambia por tu IG real

const WhatsappIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.906 11.906 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.552 4.144 1.6 5.927L0 24l6.338-1.572a11.91 11.91 0 005.66 1.466c6.627 0 12-5.373 12-12 0-3.205-1.25-6.22-3.48-8.426zm-8.52 16.02a9.94 9.94 0 01-5.083-1.38l-.363-.217-3.76.932.946-3.66-.236-.372a9.936 9.936 0 1110.496 5.7 9.859 9.859 0 01-2.004-.204zm5.092-6.75c-.278-.138-1.645-.812-1.9-.905-.255-.093-.44-.138-.625.139-.186.276-.718.904-.88 1.09-.162.186-.325.208-.603.069-.278-.139-1.174-.433-2.238-1.386-.827-.738-1.385-1.65-1.548-1.927-.162-.276-.017-.425.12-.562.123-.123.278-.322.417-.483.139-.162.185-.276.278-.46.093-.186.047-.347-.023-.485-.07-.138-.625-1.51-.855-2.07-.224-.543-.453-.47-.625-.48l-.537-.01c-.184 0-.485.069-.739.347-.255.276-.974.952-.974 2.315 0 1.362.997 2.68 1.136 2.868.14.186 1.96 2.99 4.75 4.196.663.286 1.178.456 1.58.583.663.21 1.266.18 1.744.109.532-.081 1.645-.67 1.879-1.317.233-.648.233-1.202.162-1.317-.07-.116-.255-.186-.533-.325z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm8.5 1.5c1.247 0 2.25 1.003 2.25 2.25v8.5c0 1.247-1.003 2.25-2.25 2.25h-8.5c-1.247 0-2.25-1.003-2.25-2.25v-8.5c0-1.247 1.003-2.25 2.25-2.25h8.5zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z" />
  </svg>
);

export default function TarjetaPresentacion() {
  const [copied, setCopied] = useState(false);

  const copiarAlPortapapeles = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const compartirNativo = async () => {
    if (navigator.canShare && navigator.canShare({ files: [] })) {
      try {
        const response = await fetch("/logo/logo-sin-fondo.png");
        const blob = await response.blob();
        const file = new File([blob], "logo-sanid.png", { type: blob.type });

        await navigator.share({
          title: "SANID - Control de plagas",
          text: "Revisa la tarjeta digital de SANID.",
          url: shareUrl,
          files: [file],
        });
      } catch (error) {
        console.error("Error compartiendo archivo:", error);
        await navigator.share({
          title: "SANID - Control de plagas",
          text: "Revisa la tarjeta digital de SANID.",
          url: shareUrl,
        });
      }
    } else if (navigator.share) {
      await navigator.share({
        title: "SANID - Control de plagas",
        text: "Revisa la tarjeta digital de SANID.",
        url: shareUrl,
      });
    } else {
      copiarAlPortapapeles();
    }
  };

  // Aquí puedes cambiar el texto de la Resolución Sanitaria
  const resolucionSanitaria = "Resolución Sanitaria Nº 2513240909";

  return (
    <div className="min-h-screen bg-[#91d1db] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transition-all">
        {/* Encabezado */}
        <div className="p-8 flex flex-col items-center text-center space-y-4">
          <Image
            src="/logo/logo-sin-fondo.png"
            alt="Logo SANID"
            width={150}
            height={150}
            className="object-contain drop-shadow-md"
          />
          <h1 className="text-4xl font-extrabold text-green-600">SANID</h1>
          <h2 className="text-xl font-medium text-blue-900 tracking-wide">
            ROBINSON OLGUIN
          </h2>
          <p className="uppercase text-sm font-semibold text-green-600 tracking-widest">
            Control de Plagas y Fumigaciones
          </p>

          {/* Nueva línea para Resolución Sanitaria */}
          <p className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">
            {resolucionSanitaria}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 mb-6 px-6 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
          <button
            onClick={compartirNativo}
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-all"
          >
            <Share2 className="w-5 h-5" />
            Compartir
          </button>

          <button
            onClick={copiarAlPortapapeles}
            className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-lg transition-all"
          >
            <ClipboardCopy className="w-5 h-5" />
            {copied ? "Copiado!" : "Copiar enlace"}
          </button>

          <a
            href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
              "Hola, quiero contactarte desde tu tarjeta digital SANID."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 focus-visible:ring-4 focus-visible:ring-green-300 text-white py-2 px-5 rounded-lg transition-shadow font-semibold shadow-md"
            aria-label="Enviar mensaje por WhatsApp"
          >
            <WhatsappIcon />
            WhatsApp
          </a>

          <a
            href="tel:+56978478737"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all"
          >
            <Phone className="w-5 h-5" />
            Llamar
          </a>

          {/* Botón correo directo */}
          <a
            href={`mailto:${email}?subject=Contacto desde Tarjeta SANID&body=Hola Robinson, te escribo desde tu tarjeta digital.`}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Enviar correo
          </a>

          {/* Botón Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 focus-visible:ring-4 focus-visible:ring-pink-300 text-white py-2 px-5 rounded-lg transition-shadow font-semibold shadow-md"
            aria-label="Instagram"
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
