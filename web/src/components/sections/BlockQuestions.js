import React from 'react';
import PortableText from '../PortableText';

export default function BlockQuestions({ title, questionsList }) {
  console.log(questionsList);
  return (
    <div className="container container--md">
      <h2 className="section-title">{title}</h2>
      {questionsList.map((question) => (
        <>
          <h3>{question.title}</h3>
          <PortableText blocks={question._rawReponse} />
        </>
      ))}
    </div>
  );
}
