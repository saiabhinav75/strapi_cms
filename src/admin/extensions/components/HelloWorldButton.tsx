import React, { useEffect, useState } from 'react';
import { Button, Modal, Typography, Field } from '@strapi/design-system';
import { unstable_useContentManagerContext } from '@strapi/strapi/admin';
import McqPreviewModal from './McqPreview';
import MtfPreviewModal from './MtfPreview';
import MtfPreview from './MtfPreview';
import FibPreview from './FibPreview';
import SubjectivePreview from './SubjectivePreview';
import TrueFalse from './TrueFalse';
import AssertionandReason from './AssertionandReason';
import MediaBase from './MediaBase';
import CaseBasedQuestion from './CaseBasedQuestion';

const initialCurriculumData = {
  Term: 1,
  Class: 1,
  Curriculum_Goal: "11",
  Marks: 1,
  Hint: "This language is widely used for creating interactive and dynamic behavior on websites.\n\n",
  Explanation: "JavaScript is the core programming language for web development, allowing developers to create interactive elements like forms, animations, and real-time updates on web pages.\n\nPython is often used for backend development and data science.\nJava is used for enterprise applications and mobile apps (Android).\nC++ is mostly used in system programming, gaming, and performance-critical applications.\nJavaScript works seamlessly with HTML and CSS, making it essential for client-side web development.",
  Negative_Marks: -2,
  Topic: "Verb",
  Subtopic: "Verbs",
  Stage: "Foundational",
  Subject: "English",
  Chapter: "1",
  Difficulty: "Easy",
  tags: "verb",
  Question: [
    {
      __component: "block.mcq-question",
      id: 1,
      Question_Type: "MCQ",
      question_text: [
        {
          type: "paragraph",
          children: [{ text: "Which programming language is primarily used for web development?", type: "text" }]
        }
      ],
      options: [
        {
          id: 1,
          is_answer: false,
          option_text: [{ type: "paragraph", children: [{ text: "C", type: "text" }] }],
          media_option: null,
          __temp_key__: "a0"
        },
        {
          id: 2,
          is_answer: false,
          option_text: [{ type: "paragraph", children: [{ text: "C++", type: "text" }] }],
          media_option: null,
          __temp_key__: "a1"
        },
        {
          id: 3,
          is_answer: false,
          option_text: [{ type: "paragraph", children: [{ text: "Java", type: "text" }] }],
          media_option: null,
          __temp_key__: "a2"
        },
        {
          id: 4,
          is_answer: true,
          option_text: [{ type: "paragraph", children: [{ text: "JavaScript", type: "text" }] }],
          media_option: null,
          __temp_key__: "a3"
        }
      ],
      __temp_key__: "a0"
    }
  ]
};

export default function QuestionPreviewModal() {
  const { form: modifiedData } = unstable_useContentManagerContext();
  const [data, setData] = useState(modifiedData?.values || {});

  const [curriculumData, setCurriculumData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const isMCQ = data?.Question?.[0]?.Question_Type === "MCQ";
  const isMTF = data?.Question?.[0]?.Question_Type === "MTF";
  const isFIB = data?.Question?.[0]?.Question_Type === "FIB";
  const isAssertionandReason = data?.Question?.[0]?.Question_Type === "AssesrtionReason";
  const isTrueFalse = data?.Question?.[0]?.__component === "block.true-false";
  const isMediaBase = data?.Question?.[0]?.__component === "block.media-input";
  const isCaseBase = data?.Question?.[0]?.__component === "block.case-base";
  const isLA = data?.Question?.[0]?.Question_Type === "LA" || data?.Question?.[0]?.Question_Type === "VSA" || data?.Question?.[0]?.Question_Type === "SA";
  const Subjective = data?.Question?.[0]?.Question_Type


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {


  }, [data])
  console.log(data)


  return (
    <div style={{ padding: '16px' }}>
      <button
        onClick={handleOpenModal}
        style={{
          backgroundColor: '#1D4ED8',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          border: 'none',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#2563EB'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#1D4ED8'}
      >
        Preview
      </button>

      {/* Modal */}
      {
        isMCQ ? (
          <McqPreviewModal
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}
          />
        ) : null
      }

      {
        isMTF ? (
          <MtfPreview
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}
          />
        ) : null
      }
      {
        // FibPreview
        isFIB ? (
          <FibPreview
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}
          />
        ) : null
      }
      {
        // FibPreview
        isLA ? (
          <SubjectivePreview
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}
            isLA={Subjective}
          />
        ) : null
      }

      {
        // FibPreview
        isTrueFalse ? (
          <TrueFalse
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}

          />
        ) : null
      }
      {
        // FibPreview
        isAssertionandReason ? (
          <AssertionandReason
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}

          />
        ) : null
      }
      {
        // FibPreview
        isMediaBase ? (
          <MediaBase
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            curriculumData={curriculumData}

          />
        ) : null
      }
      {
        // FibPreview
        isCaseBase ? (
          <CaseBasedQuestion isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          curriculumData={curriculumData}/>
        ) : null
      }

      


    </div>

  );

}