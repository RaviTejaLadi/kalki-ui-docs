import { useState, useEffect } from 'react';

type Option = {
  id: number;
  text: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  correctAnswerId: number;
  timeLimit: number;
};

type QuizProps = {
  name: string;
  questions: Question[];
  totalTime: number;
  onComplete?: (score: number, totalQuestions: number) => void;
};

const Quiz = ({ name, questions, totalTime, onComplete }: QuizProps) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<Array<{ selected: number | null; isCorrect: boolean }>>([]);

  useEffect(() => {
    let timer = 0;
    let questionTimer = 0;

    if (quizStarted && !quizCompleted) {
      setQuestionTimeLeft(questions[currentQuestionIndex].timeLimit);

      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setQuizCompleted(true);
            onComplete?.(score, questions.length);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      questionTimer = setInterval(() => {
        setQuestionTimeLeft((prev) => {
          if (prev <= 1) {
            handleNextQuestion();
            return questions[currentQuestionIndex + 1]?.timeLimit || 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      clearInterval(questionTimer);
    };
  }, [quizStarted, currentQuestionIndex]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(totalTime);
    setQuestionTimeLeft(questions[0].timeLimit);
  };

  const handleAnswerSelect = (optionId: number) => {
    setSelectedAnswer(optionId);
    const isCorrect = optionId === questions[currentQuestionIndex].correctAnswerId;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === questions[currentQuestionIndex].correctAnswerId;
      setAnswers([...answers, { selected: selectedAnswer, isCorrect }]);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setQuestionTimeLeft(questions[currentQuestionIndex + 1].timeLimit);
    } else {
      setQuizCompleted(true);
      onComplete?.(score, questions.length);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!quizStarted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-blue-600">{name}</h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">{questions.length}</p>
                  <p className="text-sm text-gray-500">Questions</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-800">{formatTime(totalTime)}</p>
                  <p className="text-sm text-gray-500">Duration</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleStartQuiz}
              className="w-full py-4 px-6 bg-blue-600 text-white rounded-xl font-semibold 
                       shadow-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Quiz Completed!</h2>
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full border-8 border-blue-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-blue-600">{percentage.toFixed(0)}%</span>
              </div>
            </div>
            <p className="text-xl mb-2">
              You scored {score} out of {questions.length}
            </p>
          </div>

          <div className="space-y-4">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  answer.isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">Question {index + 1}</span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center
                    ${answer.isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                  >
                    {answer.isCorrect ? '✓' : '✕'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-blue-600">⏱</div>
              <span className="font-medium">Quiz Time: {formatTime(timeLeft)}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 text-blue-600">⏱</div>
              <span className="font-medium">Question Time: {formatTime(questionTimeLeft)}</span>
            </div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-2">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 
                  ${
                    selectedAnswer === option.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                  }`}
              >
                <span className="font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedAnswer === null && (
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">⚠️ Select an answer to proceed to the next question</p>
          </div>
        )}

        <button
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
          className={`w-full py-4 rounded-xl transition-all duration-200 font-semibold
            ${
              selectedAnswer === null
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
            }`}
        >
          {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
