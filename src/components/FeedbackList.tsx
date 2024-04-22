import FeebackItem from "./FeebackItem";

const feedbackItemsArr = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "this is a great place to be!",
    daysAgo: 4,
  },
  {
    upvoteCount: 69,
    badgeLetter: "S",
    companyName: "Starbucks",
    text: "The lines are ass",
    daysAgo: 0,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItemsArr.map((feedbackItem) => (
        <FeebackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
