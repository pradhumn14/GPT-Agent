import { useEffect } from "react";

const OpenAi = (setGptRes) => {
  const handleClick = async (prompt) => {
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions?",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              // "Bearer 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",
              "Bearer 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",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:
                  "You are a helpful assistant. Behave like an AI Analysis Model for analyzing questions",
              },
              { role: "user", content: prompt },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const data = await response.json();

      const gptResponse = data.choices[0].message.content;
      setGptRes(gptResponse);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return [handleClick];
};

export default OpenAi;
