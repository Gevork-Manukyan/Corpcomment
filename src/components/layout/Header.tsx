import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../decorative/Logo";
import PageHeading from "../decorative/PageHeading";
import Pattern from "../decorative/Pattern";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function Header() {

  const addItemToList = useFeedbackItemsStore(state => state.addItemToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
