import type { Struct, Schema } from '@strapi/strapi';

export interface VocabWord extends Struct.ComponentSchema {
  collectionName: 'components_vocab_words';
  info: {
    displayName: 'Word';
    icon: 'clock';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    assets: Schema.Attribute.Component<'vocab.assets', true>;
    Meaning: Schema.Attribute.Component<'vocab.assets-and-text', true>;
    Example: Schema.Attribute.Component<'vocab.assets-and-text', true>;
  };
}

export interface VocabVocaCommon extends Struct.ComponentSchema {
  collectionName: 'components_vocab_voca_commons';
  info: {
    displayName: 'adjectives';
    description: '';
  };
  attributes: {
    Word: Schema.Attribute.Component<'vocab.word', true>;
  };
}

export interface VocabSynonymantonyms extends Struct.ComponentSchema {
  collectionName: 'components_vocab_synonymantonyms';
  info: {
    displayName: 'synonymantonyms';
    icon: 'book';
    description: '';
  };
  attributes: {
    word: Schema.Attribute.Component<'vocab.word', true> &
      Schema.Attribute.Required;
    type: Schema.Attribute.Component<
      'vocab.synonym-and-antonyms-common-schema',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface VocabSynonymAndAntonymsCommonSchema
  extends Struct.ComponentSchema {
  collectionName: 'components_vocab_synonym_and_antonyms_common_schemas';
  info: {
    displayName: 'Synonym&Antonyms_Common_Schema';
    icon: 'apps';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    audio: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['Antonyms', 'Synonym']>;
  };
}

export interface VocabSingularplurals extends Struct.ComponentSchema {
  collectionName: 'components_vocab_singularplurals';
  info: {
    displayName: 'singularplurals';
    icon: 'book';
  };
  attributes: {
    words: Schema.Attribute.Component<'vocab.word', true>;
  };
}

export interface VocabSightwords extends Struct.ComponentSchema {
  collectionName: 'components_vocab_sightwords';
  info: {
    displayName: 'sightwords';
    icon: 'discuss';
  };
  attributes: {
    word: Schema.Attribute.Component<'vocab.word', true>;
  };
}

export interface VocabPrefixsuffixes extends Struct.ComponentSchema {
  collectionName: 'components_vocab_prefixsuffixes';
  info: {
    displayName: 'prefixsuffixes';
    icon: 'apps';
    description: '';
  };
  attributes: {
    topic: Schema.Attribute.String & Schema.Attribute.Required;
    word: Schema.Attribute.Component<'vocab.word', false>;
  };
}

export interface VocabOpposites extends Struct.ComponentSchema {
  collectionName: 'components_vocab_opposites';
  info: {
    displayName: 'opposites';
    icon: 'book';
    description: '';
  };
  attributes: {
    Positives: Schema.Attribute.Component<'vocab.word', false>;
    Negative: Schema.Attribute.Component<'vocab.word', false>;
  };
}

export interface VocabCompoundnouns extends Struct.ComponentSchema {
  collectionName: 'components_vocab_compoundnouns';
  info: {
    displayName: 'compoundnouns';
    icon: 'calendar';
  };
  attributes: {
    Topic: Schema.Attribute.String & Schema.Attribute.Required;
    word: Schema.Attribute.Component<'vocab.word', true> &
      Schema.Attribute.Required;
  };
}

export interface VocabAssets extends Struct.ComponentSchema {
  collectionName: 'components_vocab_assets';
  info: {
    displayName: 'assets';
    icon: 'picture';
  };
  attributes: {
    UK: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    IN: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    US: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    Img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface VocabAssetsAndText extends Struct.ComponentSchema {
  collectionName: 'components_vocab_assets_and_texts';
  info: {
    displayName: 'Assets&text';
    icon: 'discuss';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    assets: Schema.Attribute.Component<'vocab.assets', true>;
  };
}

export interface VocabAdverbs extends Struct.ComponentSchema {
  collectionName: 'components_vocab_adverbs';
  info: {
    displayName: 'adverbs';
    icon: 'attachment';
  };
  attributes: {
    Word: Schema.Attribute.Component<'vocab.word', true>;
  };
}

export interface RcaPolicy extends Struct.ComponentSchema {
  collectionName: 'components_rca_policies';
  info: {
    displayName: 'policy';
  };
  attributes: {
    weightage: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    negative_weightage: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface RcaPartB extends Struct.ComponentSchema {
  collectionName: 'components_rca_part_bs';
  info: {
    displayName: 'Part B';
    description: '';
  };
  attributes: {
    Instruction: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read, comprehend the passage and choose the right answer for the following questions'>;
    passage: Schema.Attribute.RichText & Schema.Attribute.Required;
    mcq: Schema.Attribute.Component<'block.mcq-question', true>;
  };
}

export interface RcaPartA extends Struct.ComponentSchema {
  collectionName: 'components_rca_part_as';
  info: {
    displayName: 'Part A';
    description: '';
  };
  attributes: {
    Instruction: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Read and record the passage'>;
    passage: Schema.Attribute.RichText & Schema.Attribute.Required;
    model_reading: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface RcaOption extends Struct.ComponentSchema {
  collectionName: 'components_rca_options';
  info: {
    displayName: 'Option';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
    is_answer: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface RcaMcq extends Struct.ComponentSchema {
  collectionName: 'components_rca_mcqs';
  info: {
    displayName: 'mcq';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    question_type: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'MCQ'>;
    tag: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'1m'>;
    policy: Schema.Attribute.Component<'rca.policy', false> &
      Schema.Attribute.Required;
    options: Schema.Attribute.Component<'rca.option', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    question: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface QbComponentsMtfColAOption extends Struct.ComponentSchema {
  collectionName: 'components_qb_components_mtf_col_a_options';
  info: {
    displayName: 'mtf_colA_option';
    description: '';
  };
  attributes: {
    right_column_options: Schema.Attribute.Component<'block.option', true>;
    left_column_option: Schema.Attribute.Component<'block.option', false> &
      Schema.Attribute.Required;
  };
}

export interface BlockTrueFalse extends Struct.ComponentSchema {
  collectionName: 'components_block_true_falses';
  info: {
    displayName: 'True_False';
  };
  attributes: {
    Question: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Answer: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlockSubjective extends Struct.ComponentSchema {
  collectionName: 'components_block_subjectives';
  info: {
    displayName: 'Subjective';
    description: '';
  };
  attributes: {
    Question_Type: Schema.Attribute.Enumeration<['VSA', 'SA', 'LA']> &
      Schema.Attribute.Required;
    Question: Schema.Attribute.Blocks & Schema.Attribute.Required;
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlockOption extends Struct.ComponentSchema {
  collectionName: 'components_block_options';
  info: {
    displayName: 'Option';
    description: '';
  };
  attributes: {
    is_answer: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    media_option: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    option_text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlockMtf extends Struct.ComponentSchema {
  collectionName: 'components_block_mtfs';
  info: {
    displayName: 'MTF';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Component<'qb-components.mtf-col-a-option', true>;
    Question_Type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'MTF'>;
  };
}

export interface BlockMediaInput extends Struct.ComponentSchema {
  collectionName: 'components_block_media_inputs';
  info: {
    displayName: 'Media_Question';
    icon: 'picture';
    description: '';
  };
  attributes: {
    media_file: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.String;
  };
}

export interface BlockMcqQuestion extends Struct.ComponentSchema {
  collectionName: 'components_block_mcq_questions';
  info: {
    displayName: 'MCQ';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Component<'block.option', true>;
    Question_Type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'MCQ'>;
    question_text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface BlockFib extends Struct.ComponentSchema {
  collectionName: 'components_block_fibs';
  info: {
    displayName: 'FIB';
    description: '';
  };
  attributes: {
    Question: Schema.Attribute.RichText & Schema.Attribute.Required;
    Answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    Question_Type: Schema.Attribute.String & Schema.Attribute.DefaultTo<'FIB'>;
  };
}

export interface BlockCaseBase extends Struct.ComponentSchema {
  collectionName: 'components_block_case_bases';
  info: {
    displayName: 'Case_Base';
    description: '';
  };
  attributes: {
    Case_Text: Schema.Attribute.Text & Schema.Attribute.Required;
    mcq: Schema.Attribute.Component<'block.mcq-question', true>;
  };
}

export interface BlockAudioQuestion extends Struct.ComponentSchema {
  collectionName: 'components_block_audio_questions';
  info: {
    displayName: 'Audio_Question';
  };
  attributes: {
    audio_question: Schema.Attribute.String;
  };
}

export interface BlockAssertionAndReason extends Struct.ComponentSchema {
  collectionName: 'components_block_assertion_and_reasons';
  info: {
    displayName: 'Assertion_Reason';
    description: '';
  };
  attributes: {
    Assertion: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Reasoning: Schema.Attribute.Blocks & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'block.option', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 4;
        },
        number
      >;
    Question_Type: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'AssesrtionReason'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'vocab.word': VocabWord;
      'vocab.voca-common': VocabVocaCommon;
      'vocab.synonymantonyms': VocabSynonymantonyms;
      'vocab.synonym-and-antonyms-common-schema': VocabSynonymAndAntonymsCommonSchema;
      'vocab.singularplurals': VocabSingularplurals;
      'vocab.sightwords': VocabSightwords;
      'vocab.prefixsuffixes': VocabPrefixsuffixes;
      'vocab.opposites': VocabOpposites;
      'vocab.compoundnouns': VocabCompoundnouns;
      'vocab.assets': VocabAssets;
      'vocab.assets-and-text': VocabAssetsAndText;
      'vocab.adverbs': VocabAdverbs;
      'rca.policy': RcaPolicy;
      'rca.part-b': RcaPartB;
      'rca.part-a': RcaPartA;
      'rca.option': RcaOption;
      'rca.mcq': RcaMcq;
      'qb-components.mtf-col-a-option': QbComponentsMtfColAOption;
      'block.true-false': BlockTrueFalse;
      'block.subjective': BlockSubjective;
      'block.option': BlockOption;
      'block.mtf': BlockMtf;
      'block.media-input': BlockMediaInput;
      'block.mcq-question': BlockMcqQuestion;
      'block.fib': BlockFib;
      'block.case-base': BlockCaseBase;
      'block.audio-question': BlockAudioQuestion;
      'block.assertion-and-reason': BlockAssertionAndReason;
    }
  }
}
