import Alphabet from "../alphabet";

function Alphabets() {
  return (
    <div className="row-span-5 ">
      <div className="w-full h-3/4 grid grid-cols-6 gap-1 lg:grid-cols-4 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
        <Alphabet key={"A"} content="A"></Alphabet>
        <Alphabet key={"B"} content="B"></Alphabet>
        <Alphabet key={"C"} content="C"></Alphabet>
        <Alphabet key={"D"} content="D"></Alphabet>
        <Alphabet key={"E"} content="E"></Alphabet>
        <Alphabet key={"F"} content="F"></Alphabet>
        <Alphabet key={"G"} content="G"></Alphabet>
        <Alphabet key={"H"} content="H"></Alphabet>
        <Alphabet key={"I"} content="I"></Alphabet>
        <Alphabet key={"J"} content="J"></Alphabet>
        <Alphabet key={"K"} content="K"></Alphabet>
        <Alphabet key={"L"} content="L"></Alphabet>
        <Alphabet key={"M"} content="M"></Alphabet>
        <Alphabet key={"N"} content="N"></Alphabet>
        <Alphabet key={"O"} content="O"></Alphabet>
        <Alphabet key={"P"} content="P"></Alphabet>
        <Alphabet key={"Q"} content="Q"></Alphabet>
        <Alphabet key={"R"} content="R"></Alphabet>
        <Alphabet key={"S"} content="S"></Alphabet>
        <Alphabet key={"T"} content="T"></Alphabet>
        <Alphabet key={"U"} content="U"></Alphabet>
        <Alphabet key={"V"} content="V"></Alphabet>
        <Alphabet key={"W"} content="W"></Alphabet>
        <Alphabet key={"X"} content="X"></Alphabet>
        <Alphabet key={"Y"} content="Y"></Alphabet>
        <Alphabet key={"Z"} content="Z"></Alphabet>
      </div>
    </div>
  );
}

export default Alphabets;
