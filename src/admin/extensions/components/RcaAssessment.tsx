import React from "react";

function RcaAssessment({
  isModalOpen,
  handleCloseModal,
  curriculumData,
}: {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  curriculumData: any;
}) {
  return (
    <div>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "24px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "600px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
              overflowY: "auto",
              maxHeight: "90vh",
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                top: "30px",
                right: "100px",
                fontSize: "20px",
                cursor: "pointer",
                backgroundColor: "white",
                border: "none",
                color: "#000000",
                padding: "10px 20px",
                borderRadius: "8px",
              }}
            >
              ✕
            </button>

            <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#333", marginBottom: "16px" }}>
              RCA Assessment Preview
            </h2>

           {curriculumData.assessment_title && <div style={{ marginBottom: "16px" }}>
              <strong style={{ display: "block", marginBottom: "8px", color: "#000000"  ,fontSize:"16px",fontFamily:"sans-serif"}}>Assessment Title
              :</strong>
              <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>{curriculumData.assessment_title }</p>
            </div>}

            <div style={{ marginBottom: "16px" }}>
              <strong style={{ display: "block", marginBottom: "8px", color: "#000000"  ,fontSize:"16px",fontFamily:"sans-serif"}}>Title:</strong>
              <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>{curriculumData.title}</p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <strong style={{ display: "block", marginBottom: "8px", color: "#000000"  ,fontSize:"16px",fontFamily:"sans-serif"}}>Time:</strong>
              <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>{curriculumData.time}</p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <strong style={{ display: "block", marginBottom: "8px", color: "#000000"  ,fontSize:"16px",fontFamily:"sans-serif"}}>Passage:</strong>
              <p style={{ margin: 0, fontSize: "16px", color: "#333" }}>{curriculumData.passage}</p>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>Part A</h3>
              <p style={{ fontSize: "16px", color: "#555",fontWeight:"bold" }}>
                {curriculumData.part_A_metadata.instruction}
              </p>
              <p style={{ fontSize: "16px", color: "#555" }}>
                {curriculumData.part_A_metadata.description}
              </p>
              <div>
                <strong style={{ display: "block", marginBottom: "8px", color: "#000000"  ,fontSize:"16px",fontFamily:"sans-serif"}}>Model Audio:</strong>
                <audio src={curriculumData.assets[0].media.url} controls style={{ width: "100%" }}></audio>
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>Part B</h3>
              <p style={{ fontSize: "16px", color: "#555" ,fontWeight:"bold"}}>
                {curriculumData.part_B_metadata.instruction}
              </p>
              <p style={{ fontSize: "16px", color: "#555" }}>
                {curriculumData.part_B_metadata.description}
              </p>
            </div>

            <Question question={curriculumData.questions} />
          </div>
        </div>
      )}
    </div>
  );
}

export default RcaAssessment;

const Question = ({ question }: any) => {
  return (
    <div>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333", marginBottom: "8px" }}>Questions</h3>
      {question.map(
        (
          question: { question: string; options: { text: string; is_answer: boolean }[] },
          index: number
        ) => (
          <div key={index} style={{ marginBottom: "16px" }}>
            <p style={{ fontSize: "16px", color: "#333",fontWeight: "bold", }}>{question.question}</p>
            {question.options.map((option, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: "15px",
                  color: option.is_answer ? "green" : "#555",
                  fontWeight: option.is_answer ? "700" : "500",
                  backgroundColor: option.is_answer ? "#c4ffc4" : "transparent",
                  marginLeft: "16px",
                  border:option.is_answer ? "1px solid green" : "1px solid transparent",
                  padding:option.is_answer ? "8px" : "0px",
                  borderRadius:option.is_answer ? "8px" : "0px",
                }}
              >
                {option.text}
              </p>
            ))}
          </div>
        )
      )}
    </div>
  );
};
