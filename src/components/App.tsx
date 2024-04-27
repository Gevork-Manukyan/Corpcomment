import Container from "./Container";
import Footer from "./Footer";
import HashtagList from "./HashtagList";
import { useEffect, useState } from "react";
import { TFeedbackItem } from "../lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      companyName: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems((prev) => [...prev, newItem]);
  };

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!res.ok) {
          throw new Error();
        }
        const data = await res.json();

        setFeedbackItems(data.feedbacks);
      } catch (error) {
        // network error, not 2xx response, or JSON parsing error
        setErrorMessage("Something went wrong");
      }

      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <div className="app">
      <Footer />

      <Container feedbackItems={feedbackItems} isLoading={isLoading} errorMessage={errorMessage} handleAddToList={handleAddToList} />

      <HashtagList />
    </div>
  );
}

export default App;
