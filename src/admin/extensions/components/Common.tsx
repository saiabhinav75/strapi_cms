import React from "react";
import { CommonProps } from "../types";

function Common({
  Term,
  Class,
  Subject,
  Curriculum_Goal,
  Topic,
  Subtopic,
  Explanation,
  Marks,
  Difficulty,
  Hint,
  Chapter,
  Negative_Marks,
  tags
}: CommonProps) {
  return (
    <div style={styles.container}>
      {[
        { label: "Term", value: Term },
        { label: "Class", value: Class },
        { label: "Subject", value: Subject },
        { label: "Chapter", value: Chapter },
        { label: "Topic", value: Topic },
        { label: "Subtopic", value: Subtopic },
        { label: "Marks", value: Marks },
        { label: "Negative Marks", value: Negative_Marks },
        { label: "Difficulty", value: Difficulty },
        { label: "Tags", value: tags },
      ].map(({ label, value }, idx) => (
        <div key={idx} style={styles.field}>
          <label style={styles.label}>{label}:</label>
          <input type="text" value={value} disabled style={styles.input} />
        </div>
      ))}

      {[
        { label: "Curriculum Goal", value: Curriculum_Goal },
        { label: "Hint", value: Hint },
        { label: "Explanation", value: Explanation },
      ].map(({ label, value }, idx) => (
        <div key={idx} style={styles.field}>
          <label style={styles.label}>{label}:</label>
          <textarea value={value} disabled style={styles.textarea} rows={3} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "16px",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontSize: "14px",
    color: "#333",
    fontWeight: "600",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    background: "#f3f3f3",
    cursor: "not-allowed",
    outline: "none",
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    background: "#f3f3f3",
    cursor: "not-allowed",
    resize: "none",
    outline: "none",
  },
};

export default Common;
