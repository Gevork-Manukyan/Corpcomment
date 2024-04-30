import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../decorative/Logo";
import PageHeading from "../decorative/PageHeading";
import Pattern from "../decorative/Pattern";
import { useFeedbackItemsContext } from "../../lib/hooks";

export default function Header() {
  const { handleAddToList } = useFeedbackItemsContext();

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
