import { Text } from "@chakra-ui/react";

export const TextWithFormmating = ({ text }: { text: string }) => {
  const boldString = (str: string): string => {
    return str.replace(/\*\*(.*?)\*\*/g, (_, group) => {
      return `<b>${group}</b>`;
    });
  };

  const formattedText = boldString(text);

  return (
    <Text
      fontSize='medium'
      wordBreak='break-word'
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
};
