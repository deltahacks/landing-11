import Header from "~/components/Header";
import Question, { type QuestionType } from "../components/Question";

const faq_questions: QuestionType[] = [
  {
    question: "What is a hackathon?",
    answer:
      "A hackathon is a type of technical competition! We provide our attendees with the opportunity to work with new people on cool ideas, and the resources necessary to make those ideas come to life. We do not condone, nor do we allow any actual hacking or other illegal activities! DeltaHacks is an official MLH event. The MLH code of conduct can be found here: http://mlh.io/code-of-conduct",
  },
  {
    question: "What is DeltaHacks?",
    answer:
      "The word “delta Δ” stands for change, and we used this definition to name DeltaHacks - McMaster’s annual Hackathon for Change. This year, DeltaHacks will be a 600-participant event taking place the second week of January 2025. We hope to inspire students to hack for positive changes that align with their passions - whether it's for the environment, health, inequality, education, or more!",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone who is willing to learn and have fun! If you have an idea - or even if you don't, you're invited! All university and high school students over 13 during the date of the event are welcome at DeltaHacks!",
  },
  {
    question: "I have never been to a hackathon before, what should I do?",
    answer:
      "We love first time hackers! We will be providing mentors during the hackathon and running workshops, so you’re welcome no matter your skill or experience level.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Absolutely nothing! All you need is a personal computer to bring along with you to the event!",
  },
  {
    question: "Will DeltaHacks 11 be in person or virtual?",
    answer: "DeltaHacks 11 will be taking place fully in person this year.",
  },
  {
    question: "Will attendees still get awesome swag?",
    answer:
      "Yes! There will be awesome swag for participants, mentors, and sponsors.",
  },
  {
    question: "What's the event schedule like?",
    answer:
      "We'll be putting up one closer to the event, you can expect a lot of talks and presentations, fun events, and a lot of chances to meet new people and win prizes!",
  },
  {
    question: "What do I need to participate?",
    answer:
      "DeltaHacks 11 will be in person. Bring in your laptop, reusable water bottle, and prepare to build some amazing projects!",
  },
  {
    question: "Will hardware be provided?",
    answer:
      "Yes, we will have hardware available provided by MLH! Feel free to bring your own hardware if you have the material to include into your hack. ",
  },
  {
    question: "When will hacker applications be released?",
    answer:
      "Hacker applications will be released in mid-October. Follow us on socials to stay up to date and find out as soon as applications open.",
  },
  {
    question: "How big can a team be?",
    answer:
      "Hackers may form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any school, country, or experience level. Teams can be formed before or during the event at hackers’ own discretion. ",
  },
  {
    question: "Do I have to have a team going into the event?",
    answer:
      "Nope! If you do, great! If not, there will be opportunities to network before and during the event to find some other hackers to build a project with.",
  },
  {
    question: "What am I allowed to hack?",
    answer:
      "Your hack can be absolutely anything! There will be certain challenges your team can work towards, and you can win amazing prizes (to be released later) if your submission wins the category!",
  },
  {
    question: "How are projects judged?",
    answer:
      "Projects are judged by event sponsors and experts from the tech sector. Projects are presented to judges at the exposition and evaluated on multiple factors such as presentation, creativity, practical application, and originality.",
  },
  {
    question: "What's happening January 10th?",
    answer:
      "Our IN PERSON Hackathon event days are January 11th-12th. Friday, January 10 will consist of VIRTUAL Pre Hackathon Events to get you prepped and excited for the main hackathon!",
  },
];

const FAQ: React.FC = () => {
  return (
    <div
      id="FAQ"
      className="container mx-auto flex h-fit min-h-screen max-w-3xl flex-col items-center justify-center p-6 text-black lg:max-w-6xl"
    >
      <Header className="mb-10">ANY QUESTIONS?</Header>
      <div className="flex w-full flex-col text-[#533688] lg:flex-row lg:gap-4">
        <div className="flex w-full flex-col flex-wrap text-[#533688] lg:w-1/2 lg:pr-4">
          {faq_questions
            .slice(0, faq_questions.length / 2)
            .map(({ question, answer }) => (
              <Question question={question} answer={answer} key={question} />
            ))}
        </div>
        <div className="flex w-full flex-col flex-wrap lg:w-1/2 lg:pl-4">
          {faq_questions
            .slice(faq_questions.length / 2, faq_questions.length)
            .map(({ question, answer }) => (
              <Question question={question} answer={answer} key={question} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

// const FAQ: React.FC = () => {
//   return (
//     <div className="container mx-auto flex h-fit min-h-screen max-w-3xl flex-col items-center justify-center bg-slate-400 p-6 text-black lg:max-w-6xl">
//       <h2 className="font-display mb-10 text-center text-[52px] font-bold leading-none lg:text-[80px]">
//         <span className="text-fill-transparent text-stroke-white text-stroke-2">
//           GOT
//         </span>{" "}
//         QUESTIONS?
//       </h2>
//       <div className="grid w-full gap-4 md:grid-cols-2">
//         {faq_questions.map(({ question, answer }) => (
//           <Question question={question} answer={answer} key={question} />
//         ))}
//       </div>
//     </div>
//   );
// };
