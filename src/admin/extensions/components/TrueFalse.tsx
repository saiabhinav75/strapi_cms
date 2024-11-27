import React from 'react';
import Common from './Common';

function TrueFalse({ isModalOpen, handleCloseModal, curriculumData }) {
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
  
          
          <Common tags={curriculumData.tags} Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks}  /> 
          

      
          {/* True/False Question */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px',color:"black" }}>
              True/False Question
            </h3>
            <div style={{ marginBottom: '16px',color:'black', fontSize: '17px' }}>
              {/* Render Question */}
              <p>
                {curriculumData.Question[0].Question[0].children[0].text}
              </p>
              {/* Render Answer */}
              <div style={{ marginTop: '16px' }}>
                <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block',color:'black'  }}>
                  Answer:
                </label>
                <p
                  style={{
                    backgroundColor:curriculumData.Question[0].Answer ? '#F0FDF4':"white",
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: curriculumData.Question[0].Answer ? '1px solid #10B981':'1px solid #ad0523',
                    fontWeight: '600',
                    color: curriculumData.Question[0].Answer ? '#064E3B' : 'red',
                    fontSize: '17px'
                    
                  }}
                >
                  {curriculumData.Question[0].Answer ? 'True' : 'False'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default TrueFalse;
