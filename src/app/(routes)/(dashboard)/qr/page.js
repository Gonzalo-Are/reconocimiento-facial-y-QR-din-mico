"use client";

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrPage() {
  const [qrValidity, setQrValidity] = useState("");
  const [qrPayload, setQrPayload] = useState(null);

  const timeOptions = [
    { label: "5 minutos", value: "5m" },
    { label: "15 minutos", value: "15m" },
    { label: "30 minutos", value: "30m" },
    { label: "1 hora", value: "1h" },
    { label: "2 horas", value: "2h" },
    { label: "24 horas", value: "24h" },
  ];

  const handleGenerateQr = () => {
    if (!qrValidity) {
      alert(
        "Por favor, selecciona un tiempo de validez antes de generar el QR."
      );
      return;
    }

    const payloadObj = {
      permiso: "acceso-puerta-principal",
      validoPor: qrValidity,
      generadoEn: new Date().toISOString(),
    };

    const payloadString = JSON.stringify(payloadObj);

    setQrPayload(payloadString);

    console.log("Payload QR:", payloadString);
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Gestión de Permisos</h1>

      <div className="mb-6">
        <label htmlFor="qr-validity" className="block mb-1 font-medium">
          Tiempo de validez para el QR:
        </label>
        <select
          id="qr-validity"
          value={qrValidity}
          onChange={(e) => setQrValidity(e.target.value)}
          className="
            block w-60
            rounded border-gray-300
            py-2 px-3
            focus:outline-none focus:ring-2 focus:ring-indigo-400
            disabled:opacity-50
          "
        >
          <option value="">-- Selecciona un tiempo --</option>
          {timeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleGenerateQr}
        className="
          bg-indigo-600 hover:bg-indigo-700
          text-white font-medium
          py-2 px-4 rounded
          disabled:opacity-50
        "
      >
        Generar QR
      </button>

      {qrPayload && (
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-4">
            Aquí está tu QR (válido por {qrValidity}):
          </h2>
          <div className="bg-white p-4 inline-block rounded shadow">
            <QRCode value={qrPayload} size={160} />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            <strong>Payload codificado:</strong> {qrPayload}
          </p>
        </div>
      )}
    </main>
  );
}
