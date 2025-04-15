import React from 'react';

export default function AdhesionPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Système d’adhésion</h1>
        <p className="text-gray-600 text-lg">
          Une adhésion adaptée à tous les profils pour soutenir notre association moto.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Nos objectifs</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>Promouvoir la pratique responsable de la moto</li>
            <li>Agir en faveur de la prévention routière</li>
            <li>Créer un espace d’échange et de solidarité</li>
            <li>Offrir des avantages concrets à nos membres</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Formules d’adhésion</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li><strong>Standard :</strong> accès aux balades, ateliers, rencontres et campagnes de prévention routière.</li>
            <li><strong>Privilège :</strong> + réductions partenaires et accès prioritaire à certaines formations.</li>
            <li><strong>Premium :</strong> + événements exclusifs, contenus réservés et pack de bienvenue.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Tarification annuelle</h2>
          <table className="w-full text-sm text-center border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 py-1">Catégorie</th>
                <th className="border px-2 py-1">Standard</th>
                <th className="border px-2 py-1">Privilège</th>
                <th className="border px-2 py-1">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">Moins de 18 ans</td><td>10 €</td><td>20 €</td><td>30 €</td></tr>
              <tr><td className="border px-2 py-1">Étudiant</td><td>15 €</td><td>30 €</td><td>45 €</td></tr>
              <tr><td className="border px-2 py-1">Adulte (salarié)</td><td>25 €</td><td>50 €</td><td>75 €</td></tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Pourquoi ces tarifs ?</h2>
          <p className="text-sm text-gray-700">
            Ces montants permettent à l’association de proposer des cotisations accessibles tout en garantissant la pérennité de nos activités. Ils valorisent aussi l’engagement des membres les plus actifs.
          </p>
        </section>
      </div>
    </div>
  );
}
