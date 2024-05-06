import FeedbackItem from "./FeedbackItem";
import Spinner from "../decorative/Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";

export default function FeedbackList() {
  const getFilteredFeedbackItems = useFeedbackItemsStore(state => state.getFilteredFeedbackItems());
  const isLoading = useFeedbackItemsStore(state => state.isLoading);
  const errorMessage = useFeedbackItemsStore(state => state.errorMessage);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}

      {getFilteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
