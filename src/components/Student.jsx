import React from 'react';
import Score from '../components/Score';

function Student({ student }) {
    return (
      <div>
        <h2>{student.name}</h2>
        <p>{student.bio}</p>
        <h3>Scores:</h3>
        <ul>
          {student.scores.map((score, idx) => (
            <Score key={idx} score={score}/>
          ))}
        </ul>
      </div>
    )
  }

export default Student;