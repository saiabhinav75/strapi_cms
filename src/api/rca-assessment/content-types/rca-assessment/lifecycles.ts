const { ValidationError } = require('@strapi/utils').errors;


function validateMCQOptions(questions: any) {
    if (questions && questions.length) {
        console.log(questions.length)
        for(let qIndex=0;qIndex<questions.length;qIndex++){
            if(questions[qIndex].question_type === "MCQ"){
                const options = questions[qIndex].options || [];
                console.log(options)
                const hasCorrectAnswer = options.some((option: any) => option.is_answer);
                console.log(hasCorrectAnswer)
                if (!hasCorrectAnswer) {
                    return false
                }
            }
        }
        return true
    }
}

export default {
    async afterUpdate(event) {
        console.log("after Update")
        const questions = event.result?.questions || []
        if(questions.length && !validateMCQOptions(questions)){
            throw new ValidationError("At least one option must be marked as the correct answer.");
        }
    },
  };