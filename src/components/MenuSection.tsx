import { Card } from "@/components/ui/card";

interface MenuItemProps {
  title: string;
  descriptionFr: string;
  descriptionEn: string;
}

const MenuItem = ({ title, descriptionFr, descriptionEn }: MenuItemProps) => {
  return (
    <div className="mb-8 animate-fade-in text-center">
      <h3 className="text-xl md:text-2xl font-light text-primary/90 mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-sm md:text-base text-foreground/80 mb-1 leading-relaxed">
        {descriptionFr}
      </p>
      <p className="text-xs md:text-sm text-foreground/60 italic leading-relaxed">
        {descriptionEn}
      </p>
    </div>
  );
};

export const MenuSection = () => {
  const menuItems = [
    {
      title: "ÉVEIL DES PAPILLES",
      descriptionFr: "Coupe de Champagne et bouchée de thon parfumé sur riz croustillant",
      descriptionEn: "Glass of Champagne and fragrant tuna bite on crispy rice",
    },
    {
      title: "ÉCLATS NOIR & BLANC",
      descriptionFr: "Duo de ravioles de homard, beurre citronné et perles de caviar",
      descriptionEn: "Black & White Sparkles - Duo of lobster ravioli, lemon butter and caviar pearls",
    },
    {
      title: "PASTILLA D'ÉBÈNE ET D'OR",
      descriptionFr: "Magret, foie gras, amandes torréfiées et miel de fleur d'oranger",
      descriptionEn: "Ebony & Gold Pastilla - Duck breast, foie gras, toasted almonds and orange blossom",
    },
    {
      title: "LOTTE NACRÉE EN FÊTES",
      descriptionFr: "Beurre d'oranges brûlées, soufflé d'anis et feu de fenouil aux pignons",
      descriptionEn: "Festive Pearl Monkfish - Burnt orange butter, a breath of anise and flamed fennel with pine nuts",
    },
    {
      title: "FILET EN CROUTE D'HERBES DE L'ATLAS",
      descriptionFr: "Truffe noire, millefeuille de pommes de terré et mousseline parfumée de patate douce",
      descriptionEn: "Herb-Crusted Fillet from the Atlas - Black truffle, golden potato millefeuille and scented sweet potato velouté",
    },
    {
      title: "ÉCLAT DE MINUIT",
      descriptionFr: "Gourmand chocolat et mangué, velours de noisette, éclat de caramél et sorbet mangue",
      descriptionEn: "Midnight Spark - Chocolate and mango delight, hazelnut velour, caramel shard and mango sorbet",
    },
  ];

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-primary/30 p-8 md:p-12 rounded-lg shadow-luxury">
      <div className="max-w-3xl mx-auto">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
        
        <div className="mt-12 pt-8 border-t border-primary/20">
          <p className="text-2xl text-primary/90 mb-4 text-center">***</p>
          <p className="text-lg text-foreground/80 text-center mb-6">Farandole de desserts</p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="text-3xl">🎆</div>
            <p className="text-base text-foreground/70">Soirée + repas (dès 19h30)</p>
            <div className="text-3xl">🎆</div>
          </div>
          <p className="text-2xl text-primary text-center mt-4">85€ par personne all in jusqu'au bout de la nuit</p>
          <p className="text-base text-foreground/70 text-center mt-6">Soirée seule (dès 23h)</p>
        </div>
      </div>
    </Card>
  );
};
