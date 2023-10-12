import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetSetting, stateType } from "../../../redux/word";

const Modal = () => {
  const deathCounter = useSelector((state: stateType) => state.deathCounter);
  const wordLength = useSelector((state: stateType) => state.wordLength);
  const wordAnswerArray = useSelector(
    (state: stateType) => state.wordAnswerArray
  );
  const answer = useSelector((state: stateType) => state.answer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`relative z-10 ${
        deathCounter === 7
          ? ""
          : wordLength && wordAnswerArray.length === wordLength
          ? ""
          : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ">
            <div className=" bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-2xl font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {wordAnswerArray.length !== wordLength
                      ? "아쉬워요 😥"
                      : "대단해요 😻"}
                  </h3>
                  <div className="mt-2">
                    <p className="text-lg text-gray-500">
                      정답은 {answer} 이었어요.
                      {wordAnswerArray.length !== wordLength
                        ? " 아쉽지만 잘했어요! "
                        : " 정말 잘했어요! "}
                      <br />
                      다시 도전 해볼까요?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => {
                  dispatch(resetSetting());
                  navigate("/");
                }}
              >
                다시 도전하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
