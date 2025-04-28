import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export default function AdhesionPage() {
  const [votes, setVotes] = useState({ variante1: 0, variante2: 0, variante3: 0 });
  const [formData, setFormData] = useState({ prenom: "", nom: "" });
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVote = async (variant) => {
    if (!formData.prenom || !formData.nom) {
      alert("Merci de remplir votre prénom et votre nom !");
      return;
    }

    setLoading(true);

    try {
      const airtableApiKey = "patsaQJCJBGys1ann.3b52a69fc3a83049f4d1e345e904783fd06d1f9bd343040f2339b3853bdf3828";
      const airtableBaseId = "app6pIY8Zmrn0nCE1";
      const tableName = "Votes";

      const response = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/${tableName}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Prenom: formData.prenom,
            Nom: formData.nom,
            Variante: variant,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi vers Airtable");
      }

      setVotes((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
      setConfirmation(`Merci ${formData.prenom} pour ton vote (${variant}) !`);
      setFormData({ prenom: "", nom: "" });
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi du vote.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      {/* Introduction */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Système d’adhésion</h1>
        <p className="text-muted-foreground text-lg">
          Nous avons souhaité proposer un système d’adhésion simple, équitable et transparent. Le but est de permettre à tous les profils de nous rejoindre, tout en contribuant au développement de notre association.
        </p>
        <p className="text-muted-foreground text-sm">
          Le tarif varie selon l’âge ou le statut (mineur, étudiant, adulte salarié), mais aussi selon le niveau d’implication ou les avantages souhaités.
        </p>
      </div>

      {/* Formulaire */}
      <div className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Prénom"
          value={formData.prenom}
          onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
          className="border p-2 rounded w-full max-w-sm"
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          className="border p-2 rounded w-full max-w-sm"
          required
        />
      </div>

      {/* Variantes d'adhésion */}
      <Tabs defaultValue="variante1" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="variante1">Variante 1</TabsTrigger>
          <TabsTrigger value="variante2">Variante 2</TabsTrigger>
          <TabsTrigger value="variante3">Variante 3</TabsTrigger>
        </TabsList>

        {/* Variante 1 */}
        <TabsContent value="variante1">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Variante 1 : Pack uniquement pour Premium</h2>
              <div className="grid grid-cols-5 gap-4 text-sm text-center">
                <div className="font-bold">Catégorie</div>
                <div className="font-bold">Standard</div>
                <div className="font-bold">Privilège</div>
                <div className="font-bold">Premium</div>
                <div className="font-bold">Pack offert</div>
                <div>Moins de 18 ans</div><div>10 €</div><div>20 €</div><div>40 €</div><div>✅</div>
                <div>Étudiant</div><div>15 €</div><div>30 €</div><div>50 €</div><div>✅</div>
                <div>Adulte (salarié)</div><div>25 €</div><div>50 €</div><div>80 €</div><div>✅</div>
              </div>
              <Button
                className="mt-4"
                onClick={() => handleVote('Variante 1')}
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Je préfère cette option"}
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Votes : {votes.variante1}</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Variante 2 */}
        <TabsContent value="variante2">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Variante 2 : Pack pour Privilège et Premium</h2>
              <div className="grid grid-cols-5 gap-4 text-sm text-center">
                <div className="font-bold">Catégorie</div>
                <div className="font-bold">Standard</div>
                <div className="font-bold">Privilège</div>
                <div className="font-bold">Premium</div>
                <div className="font-bold">Pack offert</div>
                <div>Moins de 18 ans</div><div>10 €</div><div>30 €</div><div>45 €</div><div>✅</div>
                <div>Étudiant</div><div>15 €</div><div>40 €</div><div>55 €</div><div>✅</div>
                <div>Adulte (salarié)</div><div>25 €</div><div>60 €</div><div>85 €</div><div>✅</div>
              </div>
              <Button
                className="mt-4"
                onClick={() => handleVote('Variante 2')}
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Je préfère cette option"}
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Votes : {votes.variante2}</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Variante 3 */}
        <TabsContent value="variante3">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Variante 3 : Option pack pour tous (+10 €)</h2>
              <div className="grid grid-cols-5 gap-4 text-sm text-center">
                <div className="font-bold">Catégorie</div>
                <div className="font-bold">Standard</div>
                <div className="font-bold">Privilège</div>
                <div className="font-bold">Premium</div>
                <div className="font-bold">Pack (option +10 €)</div>
                <div>Moins de 18 ans</div><div>10 €</div><div>20 €</div><div>30 €</div><div>✅</div>
                <div>Étudiant</div><div>15 €</div><div>30 €</div><div>45 €</div><div>✅</div>
                <div>Adulte (salarié)</div><div>25 €</div><div>50 €</div><div>75 €</div><div>✅</div>
              </div>
              <Button
                className="mt-4"
                onClick={() => handleVote('Variante 3')}
                disabled={loading}
              >
                {loading ? "Envoi en cours..." : "Je préfère cette option"}
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Votes : {votes.variante3}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Confirmation */}
      {confirmation && (
        <div className="text-center text-green-600 font-semibold mt-6">{confirmation}</div>
      )}
    </div>
  );
}
