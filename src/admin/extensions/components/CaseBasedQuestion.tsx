import React from 'react';
import Common from './Common';


const exampleData = {
  Term: 1,
  Class: 1,
  Curriculum_Goal: '1',
  Marks: 1,
  Hint: '1',
  Explanation: '1',
  Negative_Marks: 0,
  Topic: '1',
  Subtopic: '1',
  Stage: 'Foundational',
  Subject: 'English',
  Chapter: '1',
  Difficulty: 'Easy',
  tags: '1,2',
  Question: [
    {
      __component: 'block.case-base',
      id: 1,
      Case_Text:
        'You are managing a development team building a Netflix-like platform with real-time syncing using Socket.io. During a team meeting, it becomes clear that some users experience delays in playback synchronization. What should you prioritize to solve this issue?',
      mcq: [
        {
          id: 11,
          Question_Type: 'MCQ',
          question_text: [
            {
              type: 'paragraph',
              children: [
                {
                  text: 'Optimize the server infrastructure to handle more concurrent users.',
                  type: 'text',
                },
              ],
            },
          ],
          options: [
            {
              id: 86,
              is_answer: false,
              option_text: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Optimize the server infrastructure to handle more concurrent users.',
                      type: 'text',
                    },
                  ],
                },
              ],
              media_option: null,
              __temp_key__: 'a0',
            },
            {
              id: 87,
              is_answer: false,
              option_text: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Implement client-side buffering to reduce sync issues.',
                      type: 'text',
                    },
                  ],
                },
              ],
              media_option: null,
              __temp_key__: 'a1',
            },
            {
              id: 88,
              is_answer: true,
              option_text: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Add logging and monitoring to identify the root cause.',
                      type: 'text',
                    },
                  ],
                },
              ],
              media_option: null,
              __temp_key__: 'a2',
            },
            {
              id: 89,
              is_answer: false,
              option_text: [
                {
                  type: 'paragraph',
                  children: [
                    {
                      text: 'Upgrade to a faster database for storing playback events.',
                      type: 'text',
                    },
                  ],
                },
              ],
              media_option: null,
              __temp_key__: 'a3',
            },
          ],
          __temp_key__: 'a0',
        },
      ],
      __temp_key__: 'a0',
    },
  ],
};

function CaseBasedQuestion({ isModalOpen, handleCloseModal, curriculumData }) {
  const question = exampleData.Question[0]; 
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
                {mcq.options.map((option, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '10px',
                      margin: '5px 0',
                      background: option.is_answer ? '#d4edda' : '#f8d7da',
                      borderRadius: '5px',
                    }}
                  >
                    {option.option_text.map((textObj, idx) => (
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
