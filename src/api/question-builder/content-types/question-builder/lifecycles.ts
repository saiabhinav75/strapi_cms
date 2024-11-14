// import { ValidationError } from '@strapi/utils/errors';
const { ValidationError } = require('@strapi/utils');

const query:string = `query Query {
  questionBuilders {
    Question {
      ... on ComponentBlockSubjective {
        subQ:Question,
        Question_Type
      }
      ... on ComponentBlockFib{
        FIBQ:Question,
        Answer
      }
    }
    publishedAt
  }
}`

export default {
    async beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        console.log("before Create")
        console.log(select)
        validateMCQOptions(data);
    },
    async beforeUpdate(event) {
        const { data, where, select, populate } = event.params;
        console.log("before Update")
        const ctx = strapi.requestContext.get()
        const entity = await strapi.query('api::question-builder.question-builder').findOne({
            where:  {id:where.id } ,
            populate: {
              componentField: { // Populate the parent component
                populate: {
                  nestedComponentField: { // Populate the nested component
                    populate: {
                      deepNestedComponentField: true, // Populate the deeply nested component
                    },
                  },
                },
              },
              // You can add more components or relations here if needed
            },
          });
        console.log(entity)
        // const response = await fetch('http://localhost:1337/graphql', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ query }),
        //   });
        // const dta = await response.json()
        // console.log(dta)
        validateMCQOptions(data);
    },
  };

  function validateMCQOptions(data: any) {
    if (data && data.Question.length && data.Question[0].Question_Type === "MCQ") {
      const options = data.Question[0].options || [];
      const hasCorrectAnswer = options.some((option: any) => option.is_answer);
        console.log(hasCorrectAnswer)
      if (!hasCorrectAnswer) {
        throw new ValidationError("At least one option must be marked as the correct answer.");
      }
    }
  }
  