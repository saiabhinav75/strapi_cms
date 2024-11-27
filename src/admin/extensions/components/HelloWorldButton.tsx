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