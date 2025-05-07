import React, { useState } from 'react';

const resources = [
  {
    theme: "L'alphabet",
    videos: [
      { title: "Alphabet en LSF", url: "https://www.youtube.com/embed/watch?v=pQO0oCFLeiA" }
    ],
    pdf: [
      { name: "Fiche Alphabet LSF", link: "/https://hbaai.vercel.app/" }
    ]
  },
  {
    theme: "La famille",
    videos: [
      { title: "Vocabulaire Famille", url: "https://www.youtube.com/embed/7mA4b1XcMI4" }
    ],
    pdf: [
      { name: "Famille en langue des signes", link: "/pdf/template_pitch.pdf" }
    ]
  },
  {
    theme: "Les émotions",
    videos: [
      { title: "Exprimer ses émotions", url: "https://www.youtube.com/embed/rYutZNm9SXY" }
    ],
    pdf: []
  },
];

const Aide = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50 py-10 px-6">
      <h1 className="text-4xl font-bold text-emerald-700 text-center mb-12">Centre d'Aide - Langue des Signes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
            <h2 className="text-2xl font-semibold text-emerald-800 mb-4">{section.theme}</h2>

            <div className="space-y-4">
              {section.videos.map((vid, vIdx) => (
                <div key={vIdx}>
                  <p className="font-medium text-gray-700 mb-2">🎥 {vid.title}</p>
                  <iframe
                    src={vid.url}
                    width="100%"
                    height="200px"
                    title={vid.title}
                    allowFullScreen
                  ></iframe>
                </div>
              ))}

              {section.pdf.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mt-4 text-emerald-700">📄 Ressources PDF :</h3>
                  <ul className="list-disc pl-5 mt-2 text-emerald-600 space-y-1">
                    {section.pdf.map((doc, pIdx) => (
                      <li key={pIdx}>
                        {/* Modification ici : Ouvrir le PDF dans un nouvel onglet */}
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-emerald-800 transition"
                        >
                          {doc.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bouton pour ouvrir la modal avec le PDF */}
      <button onClick={() => setShowPdf(true)}>
        Ouvrir le guide PDF
      </button>
      {showPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg max-w-3xl w-full relative">
            <button
              onClick={() => setShowPdf(false)}
              className="absolute top-2 right-2 text-xl"
            >
              ✖
            </button>
            {/* Prévisualisation du PDF dans une iframe */}
            <iframe
              src="/pdf/nom_de_ton_fichier.pdf"
              width="100%"
              height="600px"
              title="Guide PDF"
            />
          </div>
        </div>
      )}

      {/* Avatar fixe en bas à droite */}
      <img
        src="/pdf/avatar.png"
        alt="Avatar"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 80,
          height: 80,
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default Aide;
