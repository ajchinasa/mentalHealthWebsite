import PageHeader from "@/components/PageHeader";

const Header = () => {
  const headerText = `Talk, Heal Grow \u2014 Right from Whatsapp`;
  const headerP1 =
    "Access your mental health support anytime with Pal, your AI companion on Whatsapp.";
  const headerP2 =
    "No downloads, No long queues, Just real conversations when you need them.";
  return (
    <PageHeader
      headerText={headerText}
      headerParagraph1={headerP1}
      headerParagraph2={headerP2}
    />
  );
};

export default Header;
