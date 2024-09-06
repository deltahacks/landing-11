import Question from "./Question";

const questions: Array<{
  question: string;
  answer: string;
}> = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a type of technical competition! We provide our attendees with the opportunity to work with new people on cool ideas, and the resources necessary to make those ideas come to life. We do not condone, nor do we allow any actual hacking or other illegal activities! DeltaHacks is an official MLH event. The MLH code of conduct can be found here: http://mlh.io/code-of-conduct",
  },
  {
    question: "What is DeltaHacks?",
    answer:
      "The word “delta Δ” stands for change, and we used this definition to name DeltaHacks - McMaster’s annual Hackathon for Change. This year, DeltaHacks will be a 600-participant event taking place the second week of January 2024. We hope to inspire students to hack for positive changes that align with their passions - whether it's for the environment, health, inequality, education, or more!",
  },
  // Add more questions and answers here...
];

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto flex h-fit min-h-screen max-w-3xl flex-col items-center justify-center p-6 text-white lg:max-w-6xl">
      <h2 className="font-display mb-10 text-center text-[52px] font-bold leading-none lg:text-[80px]">
        <span className="text-fill-transparent text-stroke-white text-stroke-2">
          GOT
        </span>{" "}
        QUESTIONS?
      </h2>
      <div className="grid w-full gap-4 md:grid-cols-2">
        {questions.map(({ question, answer }) => (
          <Question question={question} answer={answer} key={question} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
