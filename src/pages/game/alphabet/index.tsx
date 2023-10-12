import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { increase, answerSetting } from "../../../redux/word";
import { useState } from "react";

const Alphabet = ({ content }: { content: string }) => {
  const [isWrong, setIsWrong] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const cache = useQueryClient();

  const dispatch = useDispatch();

  const onClick = () => {
    const data = cache.getQueryData(["word"]) as string[];
    if (!data) return;
    const rightIndex = [];
    data.forEach((item, index) => {
      if (item === content) {
        rightIndex.push({ index: index, alphabet: content });
        dispatch(answerSetting({ index: index, alphabet: content }));
        setIsRight(true);
      }
    });

    if (!rightIndex.length) {
      setIsWrong(true);
      dispatch(increase());
    }
  };

  return (
    <div
      className={`text-4xl font-semibold text-center p-0.5 " +
        ${
          !isWrong
            ? "cursor-pointer"
            : "text-red-700 pointer-events-none cursor-not-allowed"
        }
        ${isRight ? "text-blue-500 pointer-events-none cursor-not-allowed" : ""}
          `}
      onClick={onClick}
    >
      {!isWrong && content}
    </div>
  );
};

export default Alphabet;
