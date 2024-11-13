import { Main, Box, Button, Typography } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTranslation } from '../utils/getTranslation';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [hintVisible, setHintVisible] = useState(false);
  const [explanationVisible, setExplanationVisible] = useState(false);

  // Toggle functions
  
  const toggleHint = () => setHintVisible(!hintVisible);
  const toggleExplanation = () => setExplanationVisible(!explanationVisible);

  const handleSubmit = () => {
    alert("Your answer has been submitted!");
  };

  const handleNavigate = () => {
    setLoading(true);
    const questionId = localStorage.getItem('questionId');
    const url = `http://localhost:1337/api/question-builders/${questionId}?populate=Question`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    handleNavigate();
  }, []);

  console.log(data.Question)
  return (
    <div style={{ maxWidth: '768px', margin: '0 auto', padding: '24px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
          <span style={{ color: '#2980b9' }}>Subject:</span> {data.Subject}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>Term: {data.Term}</span>
          <span style={{ fontSize: '14px', color: '#666' }}>Class: {data.Class}</span>
        </div>
      </div>

      <div style={{ borderBottom: '2px solid #eee', paddingBottom: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Curriculum Goal:</span>
          <span style={{ marginLeft: '8px', color: '#666' }}>{data.Curriculum_Goal}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#555' }}>Stage:</span>
          <span style={{ marginLeft: '8px', color: '#666' }}>{data.Stage}</span>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
          <span style={{ color: '#2980b9' }}>Topic:</span> {data.Topic}
        </h2>
        <h3 style={{ fontSize: '16px', color: '#555', marginBottom: '16px' }}>
          <span style={{ color: '#2980b9' }}>Subtopic:</span> {data.Subtopic}
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#666' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Marks:</span>
            <span style={{ marginLeft: '8px' }}>{data.Marks}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>Negative Marks:</span>
            <span style={{ marginLeft: '8px' }}>{data.Negative_Marks}</span>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '16px' }}>Question:</h3>
        <div style={{ color: '#555', lineHeight: '1.6' }}>

          {/* {
            data && data.Question.map((res) => {
              res && res.Question.map((q, i) => {

                <p key={idx}>{q.Question.map((q, i) => <span key={i}>{q.children[0].text}</span>)}</p>

              })
            })
          } */}


          {/* {data.Question.map((questionItem, idx) => (
            <p key={idx}>{questionItem.Question.map((q, i) => <span key={i}>{q.children[0].text}</span>)}</p>
          ))} */}
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button
          style={{ backgroundColor: '#2980b9', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={toggleHint}
        >
          {hintVisible ? 'Hide Hint' : 'Show Hint'}
        </button>
        {hintVisible && (
          <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '6px', color: '#555' }}>
            {/* {data.Hint.map((hintItem, idx) => (
              <p key={idx}>{hintItem.children[0].text}</p>
            ))} */}
          </div>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <button
          style={{ backgroundColor: '#27ae60', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={toggleExplanation}
        >
          {explanationVisible ? 'Hide Explanation' : 'Show Explanation'}
        </button>
        {explanationVisible && (
          <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#f0f0f0', borderRadius: '6px', color: '#555' }}>
            {/* {data.Explanation.map((expItem, idx) => (
              <p key={idx}>{expItem.children[0].text}</p>
            ))} */}
          </div>
        )}
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label htmlFor="answer" style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>
          Answer:
        </label>
        <textarea
          id="answer"
          style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', resize: 'vertical', fontSize: '14px', color: '#555' }}
          rows="4"
          placeholder="Enter your answer here..."
        ></textarea>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ backgroundColor: '#2980b9', color: 'white', padding: '12px 24px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          onClick={handleSubmit}
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export { HomePage };


