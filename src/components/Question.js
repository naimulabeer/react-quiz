import Option from "./Option";

export default function Question({ question }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} />
    </div>
  );
}
