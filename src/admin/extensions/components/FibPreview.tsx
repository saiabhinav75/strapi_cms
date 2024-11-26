import React from 'react';
import Common from './Common';
type QuestionType = {
  __component: string;
  id: number;
  Question: string;
  Answer: string;
  Question_Type: string;
  __temp_key__: string;
};

type DataType = {
  Term: number;
  Class: number;
  Curriculum_Goal: string;
  Marks: number;
  Hint: string;
  Explanation: string;
  Negative_Marks: number;
  Topic: string;
  Subtopic: string;
  Stage: string;
  Subject: string;
  Chapter: string;
  Difficulty: string;
  tags: string;
  Question: QuestionType[];
};

interface Props {
  children: React.ReactNode
  isModalOpen:string
  handleCloseModal:() => void
  curriculumData:DataType
}
function FibPreview({ isModalOpen, handleCloseModal, curriculumData }:Props) {

  console.log(curriculumData)


  return (
    <div style={{ padding: '16px' }}>
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
            backgroundColor: '#fff',
            padding: '24px',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
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
              border: 'none',
              color: '#333',
            }}
          >
            &times;
          </button>
          <h2
            style={{
              fontSize: '28px',
              fontWeight: '600',
              marginBottom: '24px',
              color: '#333',
            }}
          >
            Curriculum Preview
          </h2>


         


          <Common tags={curriculumData.tags}  Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks}  /> 
          


          {/* FIB Question */}
          <div style={{ marginBottom: '24px', color: "black" }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>
              Fill in the Blank Question
            </h3>
            <div style={{ marginBottom: '16px', color: "black", fontSize: '14px' }}>
              <p style={{ fontWeight: '600', marginBottom: '8px' ,fontSize: '14px'}}>Question</p>
              <p>{curriculumData.Question[0].Question}</p>
              <p style={{ fontWeight: '600', marginBottom: '8px' ,fontSize: '14px'}}>Answer</p>
              <input
                type="text"
                value={curriculumData.Question[0].Answer}
                disabled
                style={{
                  padding: '8px',
                  borderRadius: '8px',
                  border: '1px solid #ddd',
                  width: '100%',
                  boxSizing: 'border-box', color: "black", fontSize: '14px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default FibPreview;
