import { createContext } from "react";
import { TFeedbackItem } from "../lib/types";
import { useFeedbackItems } from "../lib/hooks";

type TFeedbackItemsContext = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

// If you use it in the provide it will be the first type, but if you use it outside it will be null
export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedbackItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    
  const {
    filteredFeedbackItems,
    isLoading,
    errorMessage,
    companyList,
    handleAddToList,
    handleSelectCompany
  } = useFeedbackItems();

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems: filteredFeedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
