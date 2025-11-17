import { Card } from "@/components/ui/card";

interface MenuItemProps {
  title: string;
  descriptionFr: string;
  descriptionEn: string;
}

const MenuItem = ({ title, descriptionFr, descriptionEn }: MenuItemProps) => {
  return (
    <div className="mb-8 animate-fade-in p-6 rounded-lg bg-card/30 backdrop-blur-sm shadow-3d hover:shadow-3d-hover transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 border border-border/20" style={{ transformStyle: 'preserve-3d' }}>
      <h3 className="text-2xl md:text-3xl font-light text-primary mb-3 tracking-wider drop-shadow-lg">
        {title}
      </h3>
      <p className="text-sm md:text-base text-foreground/90 mb-1 leading-relaxed">
        {descriptionFr}
      </p>
      <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
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
    <div className="max-w-3xl mx-auto p-8 md:p-12">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};
