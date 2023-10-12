import Alphabets from "./alphabets";
import Modal from "./modal";
import Person from "./person";
import Word from "./word";

function Game() {
  return (
    <div className="grid grid-cols-1 grid-rows-10 overflow-hidden  md:grid-cols-2 md:grid-rows-2 ">
      <Person />
      <Word />
      <Alphabets />
      <Modal />
    </div>
  );
}

export default Game;
