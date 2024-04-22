import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProps = {
    feedbackItem: {
        upvoteCount: number;
        badgeLetter: string;
        companyName: string;
        text: string;
        daysAgo: number;
    }
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
