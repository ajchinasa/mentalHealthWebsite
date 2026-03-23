import PageHeader from "@/components/PageHeader";

const Header = () => {
  const headerText = `What problem is FriendnPal solving for Africans?`;
  const headerP1 =
    "FriendnPal is addressing the silent struggles around mental health, emotional support, and accessible wellness services\u2014making it easier for Africans to connect, heal, and grow..";
  const headerP2 = "";
  return (
    <PageHeader
      headerText={headerText}
      headerParagraph1={headerP1}
      headerParagraph2={headerP2}
    />
  );
};

export default Header;
