import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";

export default function AdhesionPage() {
  const [votes, setVotes] = useState({ variante1: 0, variante2: 0, variante3: 0 });

  const handleVote = (variant) => {
    setVotes((prev) => ({ ...prev, [variant]: prev[variant] + 1 }));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Système d’adhésion</h1>
        <p className="text-muted-foreground text-lg">
          Une adhésion adaptée à tous les profils pour soutenir notre association moto.
        </p>
      </div>

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
              <div className="text-sm text-muted-foreground mt-4">
                <p><strong>Avantages :</strong> Valorise fortement l'adhésion Premium, simple à gérer.</p>
                <p><strong>Inconvénients :</strong> Peut décourager ceux qui voudraient un pack en formule Privilège.</p>
              </div>
              <Button className="mt-4" onClick={() => handleVote('variante1')}>Je préfère cette option</Button>
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
              <div className="text-sm text-muted-foreground mt-4">
                <p><strong>Avantages :</strong> Rend la formule Privilège plus attractive, incite à prendre au moins le niveau moyen.</p>
                <p><strong>Inconvénients :</strong> Coût logistique plus important si beaucoup de membres Privilège.</p>
              </div>
              <Button className="mt-4" onClick={() => handleVote('variante2')}>Je préfère cette option</Button>
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
              <div className="text-sm text-muted-foreground mt-4">
                <p><strong>Avantages :</strong> Très flexible, chacun décide s'il veut payer pour le pack.</p>
                <p><strong>Inconvénients :</strong> Logistique légèrement plus complexe pour gérer qui a payé le pack ou non.</p>
              </div>
              <Button className="mt-4" onClick={() => handleVote('variante3')}>Je préfère cette option</Button>
              <p className="text-sm text-muted-foreground mt-2">Votes : {votes.variante3}</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

