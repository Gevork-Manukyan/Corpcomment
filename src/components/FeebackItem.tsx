import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/types";


type FeedbackItemProps = {
    feedbackItem: TFeedbackItem
}

export default function FeebackItem({ feedbackItem }: FeedbackItemProps) {
    const { upvoteCount, badgeLetter, companyName, text, daysAgo } = feedbackItem;
    
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{companyName}</p>
        <p>
          {text}
        </p>
      </div>

      <p>{daysAgo}d</p>
    </li>
  );
}
