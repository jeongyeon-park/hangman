import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex justify-center content-center">
      <div>
        <h1 className="font-bold text-8xl">Hangman</h1>
        <div>안녕하세요 행맨게임 입니다</div>
        <div>당신에게 8번의 기회가 있습니다.</div>
        <div>단어를 추론 해보세요 !</div>
        <button
          onClick={() => navigate("/game")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-11"
        >
          시작하기
        </button>
      </div>
    </div>
  );
};
