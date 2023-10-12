const AnswerWord = ({ answer, valid }: { answer: string; valid: boolean }) => {
  return (
    <div
      className={`w-[100px] h-3/4 lg:h-10 m-1 text-3xl lg:text-4xl  border-b-4 border-indigo-600`}
    >
      {valid && answer}
    </div>
  );
};

export default AnswerWord;
