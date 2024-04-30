import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check for hashtag
    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true);
      setTimeout(() => setShowValidIndicator(false), 1000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => setShowInvalidIndicator(false), 1000);
      return;
    }

    onAddToList(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form 
        ${showValidIndicator ? "form--valid" : ""} 
        ${showInvalidIndicator ? "form--invalid" : ""}
      `}
    >
      <textarea
        id="feedback-textarea"
        value={text}
        placeholder="_"
        spellCheck={false}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
