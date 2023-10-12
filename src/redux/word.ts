import { Action } from "redux";

interface ActionType extends Action {
  payload: any;
}

export interface stateType {
  deathCounter: number;
  wordLength: number;
  wordAnswerArray: String[];
  answer: string;
}

//액션 타입 만들기
const INCREASE = "count/INCREASE";
const LENGTHSETTING = "count/LENGTHSETTING";
const ANSWERSETTING = "count/ANSWERSETTING";
const WORDSETTING = "count/WORDSETTING";
const RESET = "count/RESET";

//액션 생성함수 만들기
export const increase = () => ({ type: INCREASE });
export const lengthSetting = (wordLength: number) => ({
  type: LENGTHSETTING,
  payload: wordLength,
});
export const answerSetting = (answerObject: {
  index: number;
  alphabet: string;
}) => ({
  type: ANSWERSETTING,
  payload: answerObject,
});
export const wordSetting = (word: string) => ({
  type: WORDSETTING,
  payload: word,
});
export const resetSetting = () => ({ type: RESET });

// 초기상태 선언
const initialState = {
  deathCounter: 0,
  wordLength: 0,
  wordAnswerArray: [],
  answer: "",
};

// 리듀서 선언
export default function wordCountReducer(
  state = initialState,
  action: ActionType
) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        deathCounter: state.deathCounter + 1,
      };
    case LENGTHSETTING:
      return {
        ...state,
        wordLength: action.payload,
      };
    case ANSWERSETTING:
      return {
        ...state,
        wordAnswerArray: state.wordAnswerArray.concat(action.payload),
      };
    case WORDSETTING:
      return {
        ...state,
        answer: action.payload,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
