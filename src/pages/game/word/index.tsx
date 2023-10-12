import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { lengthSetting, stateType, wordSetting } from "../../../redux/word";
import AnswerWord from "../answerWord";

const getRandomWord = async () => {
  // 1부터 6까지의 랜덤길이 단어 불러오기
  const requestApi = "https://random-word-api.herokuapp.com/word?length=";
  const wordLength = Math.floor(Math.random() * 6) + 1;

  const response = await axios.get(requestApi + wordLength);

  return response.data[0].toUpperCase().split("");
};

const Word = () => {
  const { data, isLoading } = useQuery<AxiosResponse, AxiosError, any>(
    ["word"],
    getRandomWord,
    {
      refetchOnWindowFocus: false,
    }
  );
  const dispatch = useDispatch();

  const wordLength = useSelector((state: stateType) => state.wordLength);
  const wordAnswerArray = useSelector(
    (state: stateType) => state.wordAnswerArray
  );
  const answerWordsObjectValues = wordAnswerArray
    ? Object.values(wordAnswerArray)
    : [];

  useEffect(() => {
    if (!isLoading) {
      dispatch(lengthSetting(data.length));
      dispatch(wordSetting(data.join("")));
    }
  }, [data, dispatch, isLoading]);

  return (
    <div className="row-span-1 flex justify-center items-center lg:h-full   lg:items-end lg:row-start-2 lg:row-end-3 ">
      {!isLoading && data && wordLength
        ? data.map((alphabet: string, idx: any) => {
            if (answerWordsObjectValues.find((item: any) => item.index === idx))
              return (
                <AnswerWord
                  key={`${alphabet}_${idx}`}
                  answer={alphabet}
                  valid={true}
                ></AnswerWord>
              );
            else
              return (
                <AnswerWord
                  key={`${alphabet}_${idx}`}
                  answer={alphabet}
                  valid={false}
                ></AnswerWord>
              );
          })
        : ""}
    </div>
  );
};

export default Word;
