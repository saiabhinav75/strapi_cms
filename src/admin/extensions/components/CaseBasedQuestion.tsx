import React from 'react';
import Common from './Common';
import { CommonProps } from '../types';

interface DataType {
  isModalOpen:boolean
  
handleCloseModal:()=> void
curriculumData :CommonProps
}


function CaseBasedQuestion({ isModalOpen, handleCloseModal, curriculumData }:DataType) {
  const question = curriculumData.Question[0]; 
  const mcq = question.mcq[0];
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

          {/* Data fields */}

          <Common tags={curriculumData.tags} Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks} />



          {/* Questions Section */}

          <div>
            <h3 style={{
              color: 'black',
              fontSize: '15px',
              paddingTop: '15px',
            }}>Case-Based Question</h3>
            <div style={{ marginBottom: '20px', padding: '10px', background: '#fffafa', borderRadius: '5px',color: 'black' }}>
              <p>{question.Case_Text}</p>
            </div>

            <h4 style={{
              color: 'black',
              fontSize: '15px',
            }}>MCQ</h4>
            <div>
              <p style={{
              color: 'black',
            }}><strong style={{
              color: 'black',
              fontSize: '15px',
            }}>Question:</strong> {mcq.question_text[0].children[0].text}</p>
              <div style={{ marginTop: '10px' }}>
                {mcq.options.map((option: { is_answer: any; option_text: any[]; }, index: React.Key | null | undefined) => (
                  <div
                    key={index}
                    style={{
                      padding: '10px',
                      margin: '5px 0',
                      background: option.is_answer ? '#4bf372' : '#fbfbfb',
                      borderRadius: '5px',
                    }}
                  >
                    {option.option_text.map((textObj: { children: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[]; }, idx: React.Key | null | undefined) => (
                      <p style={{
                        color: 'black',
                      }} key={idx}>{textObj.children[0].text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>


  );
}

export default CaseBasedQuestion;
