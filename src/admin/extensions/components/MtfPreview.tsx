import Common from "./Common";



const MtfPreview = ({ isModalOpen, handleCloseModal, curriculumData }) => {
  const question = curriculumData.Question[0]; // Assuming there's only one question in the array
console.log(question)
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
          <h3 style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '16px',
            marginTop: '16px',

          }}>Matching the Following</h3>
          <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
            <div>
              <h4 style={{
            fontSize: '15px',
            color: '#333',
            marginBottom: '16px',
            marginTop: '16px',
            
          }}>Left Column</h4>
              {question.options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    background: '#f0f0f0',
                    borderRadius: '5px',
                  }}
                >
                  {option.left_column_option.option_text.map((textObj, idx) => (
                    <p  style={{
                      fontSize: '13px',
                      color: '#333',
                      
                      
                    }}  key={idx}>{textObj.children[0].text}</p>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <h4 style={{
            fontSize: '15px',
            color: '#333',
            marginBottom: '16px',
            marginTop: '16px',
            
          }}>Right Column</h4>
              {question.options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    background: '#d4edda',
                    borderRadius: '5px',
                  }}
                >
                  {option.right_column_options.map((rightOption, idx) =>
                    rightOption.option_text.map((textObj, textIdx) => (
                      <p style={{
                        fontSize: '13px',
                        color: '#333',
                        
                        
                      }} key={textIdx}>{textObj.children[0].text}</p>
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MtfPreview;