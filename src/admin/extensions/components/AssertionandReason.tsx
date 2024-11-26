import React from 'react';
import Common from './Common';


function AssertionandReason({ isModalOpen, handleCloseModal, curriculumData }:Props) {
    return (
        <div style={{ padding: '16px' }}>
         
      
          {/* Modal */}
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
                paddingTop: '900px',
          
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


              
          {/* Data fields */}
          
          
          <Common  Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks}  /> 
          






      
              {/* Assertion and Reason Question */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
                  Assertion and Reason
                </h3>
      
                {/* Render Assertion */}
                <div style={{ marginBottom: '16px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    Assertion:
                  </h4>
                  <p style={{ fontSize: '16px', color: '#555' }}>
                    {curriculumData.Question[0].Assertion[0].children[0].text}
                  </p>
                </div>
      
                {/* Render Reason */}
                <div style={{ marginBottom: '16px' }}>
                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                    }}
                  >
                    Reasoning:
                  </h4>
                  <p style={{ fontSize: '16px', color: '#555' }}>
                    {curriculumData.Question[0].Reasoning[0].children[0].text}
                  </p>
                </div>
      
                {/* Render Options */}
                <div>
                  {curriculumData.Question[0].options.map((option: { id: React.Key | null | undefined; is_answer: any; option_text: { children: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[]; }[]; }) => (
                    <div
                      key={option.id}
                      style={{
                        backgroundColor: option.is_answer ? '#D1FAE5' : '#F3F4F6',
                        padding: '12px 16px',
                        marginBottom: '10px',
                        borderRadius: '8px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        border: option.is_answer ? '1px solid #10B981' : '1px solid #E5E7EB',
                        transition: 'background-color 0.3s ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.backgroundColor = '#E6F9EC')}
                      onMouseLeave={(e) => (e.target.style.backgroundColor = option.is_answer ? '#D1FAE5' : '#F3F4F6')}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontWeight: option.is_answer ? '600' : '400',
                          color: option.is_answer ? '#064E3B' : '#6B7280',
                        }}
                      >
                        {option.option_text[0].children[0].text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}

export default AssertionandReason;
