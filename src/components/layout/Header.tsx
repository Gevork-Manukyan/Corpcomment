import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../decorative/Logo";
import PageHeading from "../decorative/PageHeading";
import Pattern from "../decorative/Pattern";

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
