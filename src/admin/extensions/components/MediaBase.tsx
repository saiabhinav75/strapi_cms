import React from 'react';
import Common from './Common';



function MediaBase({ isModalOpen, handleCloseModal, curriculumData }) {

    console.log(curriculumData.Question[0].media_file[0].formats.medium.url)
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
                    
          <Common tags={curriculumData.tags}  Term={curriculumData.Term} Class={curriculumData.Class} Subject={curriculumData.Subject} Curriculum_Goal={curriculumData.Curriculum_Goal} Topic={curriculumData.Topic} Subtopic={curriculumData.Subtopic} Explanation={curriculumData.Explanation} Marks={curriculumData.Marks} Difficulty={curriculumData.Difficulty} Hint={curriculumData.Hint} Chapter={curriculumData.Chapter} Stage={curriculumData.Stage} Negative_Marks={curriculumData.Negative_Marks}  /> 
          

                    
                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
                            Media Base
                        </h3>

                        <div>
                            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
                                Description
                            </h6>
                            <p style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>
                                {curriculumData?.Question?.[0]?.description || 'No description available'}
                            </p>
                        </div>

                        <div>
                            {/* {curriculumData && curriculumData.Question[0]?.media_file?.[0]?.formats?.medium?.url ? ( */}
                                <img
                                    src="https://www.w3schools.com/tags/img_girl.jpg"
                                    alt="Media"
                                    // style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                                />
                            {/* ) : (
                                <p style={{ color: '#ff0000' }}>Image not available</p>
                            )} */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MediaBase;
