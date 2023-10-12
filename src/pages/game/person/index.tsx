import { useSelector } from "react-redux";
import { stateType } from "../../../redux/word";

const Person = () => {
  const deathCounter = useSelector((state: stateType) => state.deathCounter);

  return (
    <div className="w-full h-full row-span-4 lg:row-start-1 lg:row-end-2">
      {/* 교수대 */}
      <div
        className={`w-[160px] absolute top-[10px] left-[55px]  border-solid border-2 border-green-950 
          ${deathCounter >= 1 ? "" : "invisible"}`}
      ></div>
      <div
        className={`w-[4px] h-[24px] absolute top-[10px] left-[200px] border-solid border-2 border-green-950 ${
          deathCounter >= 1 ? "" : "invisible"
        }`}
      ></div>
      <div
        className={`w-[4px] h-[180px] absolute top-[10px] left-[55px] border-solid border-2 border-green-950 ${
          deathCounter >= 1 ? "" : "invisible"
        }`}
      ></div>
      <div
        className={`w-[160px] top-[190px] absolute left-[55px] border-solid border-2 border-green-950 ${
          deathCounter >= 1 ? "" : "invisible"
        }`}
      ></div>

      {/* 머리 */}
      <div
        className={`absolute w-[50px] h-[50px] top-[33px] left-[175px] rounded-full border-solid border-2 border-green-800 ${
          deathCounter >= 2 ? "" : "invisible"
        } `}
      ></div>

      {/* 몸 */}
      <div
        className={`absolute w-[50px] h-[60px] top-[83px] left-[175px] rounded-full border-solid  border-2 border-green-800 ${
          deathCounter >= 3 ? "" : "invisible"
        } `}
      ></div>

      {/* 왼쪽 팔 */}
      <div
        className={`absolute w-[80px] h-[50px] top-[120px] left-[148px] border-solid transform rotate-45  border-l-2 border-green-800 ${
          deathCounter >= 4 ? "" : "invisible"
        }`}
      ></div>

      {/* 오른쪽 팔 */}
      <div
        className={`absolute w-[50px] h-[80px] top-[105px] left-[188px] border-solid transform rotate-45  border-t-2 border-green-800  ${
          deathCounter >= 5 ? "" : "invisible"
        }`}
      ></div>

      {/* 왼 다리 */}
      <div
        className={`absolute w-[80px] h-[50px] top-[160px] left-[160px] border-solid transform rotate-45  border-l-2 border-green-800 ${
          deathCounter >= 6 ? "" : "invisible"
        }`}
      ></div>

      {/* 오른 다리 */}
      <div
        className={`absolute w-[50px] h-[80px] top-[145px] left-[175px] border-solid transform rotate-45  border-t-2 border-green-800 ${
          deathCounter >= 7 ? "" : "invisible"
        }`}
      ></div>

      {/* 
      <div className="head"></div>
      <div className="arms"></div>
      <div className="fingers"></div>
      <div className="body"></div>
      <div className="legs"></div>
      <div className="toes"></div> */}
    </div>
  );
};

export default Person;
