import React, { useEffect } from 'react';
import Common from './Common';


function SubjectivePreview({ isModalOpen, handleCloseModal, curriculumData,isLA }) {

  useEffect(() => {
    console.log(curriculumData,"curriculumData")
  },[curriculumData])
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
  
          {/* Data fields */}
          
          <Common tags={curriculumData.tags}  Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks}  /> 
          


          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px',color:"black" }}>
              Subjective Question :  {isLA=="LA"?"Long Answer":isLA=="SA"?"Short Answer":"Very Short Answer"}
            </h3>
            <div style={{ marginBottom: '16px',color:"black" ,
                      fontSize:"17px"}}>
              {/* Render Question */}
              <p>
                {curriculumData.Question[0].Question[0].children[0].text}
              </p>
              {/* Render Answer */}
              <div style={{ marginTop: '16px',color:"black" ,
                      fontSize:"17px"}}>
                <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block',color:"black" }}>
                  Answer:
                </label>
                {curriculumData?.Question[0]?.answer.map((answerParagraph: { children: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }[]; }, index: React.Key | null | undefined) => (
                  <p
                    key={index}
                    style={{
                      backgroundColor: '#F9FAFB',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      marginBottom: '8px',color:"black",
                      fontSize:"17px"
                    }}
                  >
                    {answerParagraph.children[0].text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default SubjectivePreview;
