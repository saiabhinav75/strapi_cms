import React, { useEffect } from 'react';
import Common from './Common';



 const QuestionComponent = ({ question }) => {
    const { question_text, options } = question;
    console.log(question)
    return (
      <div style={{ marginBottom: '16px' , color: '#000000'}}>
        <div>
          {question_text.map((textBlock, index) => (
           
            <h3 key={index} style={{ marginBottom: '8px', fontSize: '16px', color: '#0f0808' }}>{textBlock.children[0].text}</h3>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '16px', color: '#0f0808' }}>Options</p>
          {options.map(option => (
            <div key={option.id} style={{ marginBottom: '8px', color: '#000000' }}>
              <label style={{ display: 'flex', alignItems: 'center' }} >
  
                <span style={{ backgroundColor: option.is_answer ? 'green' :   'white', fontSize: '16px',color:option.is_answer ? 'white' :   'black ', }}>{option.option_text.map((textBlock, index) => (
                  <span key={index} >{textBlock.children[0].text}</span>
                ))}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };
const McqPreviewModal = ({ isModalOpen, handleCloseModal, curriculumData }) => {
useEffect(() => {
  
  console.log(curriculumData.tags,"curriculumData")
},[curriculumData])
  if (!curriculumData) return null; // Ensure curriculumData exists before rendering

  return (
    <div
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: isModalOpen ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '9999',
      overflowY: 'auto',
      height: '80%',
      margin: 'auto',
      paddingTop: '829px',

    }}
  >
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '16px',
        maxWidth: '800px',
        width: '100%',
        position: 'relative',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        paddingTop: '100px',
      }}
    >
      <button
        onClick={handleCloseModal}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          fontSize: '24px',
          cursor: 'pointer',
          backgroundColor: 'transparent',
          border: '2px solid #37087d',
          color: '#000000',
        }}
      >
        &times;
      </button>
      <h2 style={{
        fontSize: '28px',
        fontWeight: '600',
        marginBottom: '24px',
        color: '#000000'
      }}>Curriculum Preview</h2>


          <Common tags={curriculumData.tags} Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks}  /> 
          

      <div
        style={{
          maxHeight: '400px',
          overflowY: 'auto',
        }}
      >
        <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '16px', color: '#000000' }}>Questions</h3>
        {curriculumData.Question.map((question) => (
          <QuestionComponent key={question.id} question={question} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default McqPreviewModal;
