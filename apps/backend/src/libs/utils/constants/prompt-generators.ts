interface IGenerateIdeaContentPrompt {
  lectureTitle: string;
learningMethod: string;
}
export const generateIdeaContentPrompt = ({lectureTitle, learningMethod}: IGenerateIdeaContentPrompt) => {
  return `Generate a comprehensive and well-explained set of ideas to give a complete understanding of ${lectureTitle}, namely the text explaining the idea itself, (the text is the main explainer of the idea it was actually teaches a user) a short image description that tries to make the idea clearer (optional), do note that the image generated would be for an image model so it doesn't have to be so long, and an optional quiz section that tests the understanding of the idea. If an idea doesn't have an image or quiz section, just leave the section empty. The Quiz section should consisit of sections: question, options, explanation, and correct answer aslo ensure for every questions there is a minimum of 4 options, if you don't have sufficient you can as well leave the Quiz section blank. Ensure that every time every Idea is generated every content section(meaning that an Idea should look like this =
    ###Idea
    ##Idea Text : An explanation of the idea (that is mandatory)
    ##Image Description : A description of the image that explains the idea that is optional(if you don't deem it necessary you can leave the object with a blank string like so - "" if the learning method doesn't demand it) but ensure the section is present
    ##Quiz Section : A section that tests the understanding of the idea that is optional(if you don't deem it necessary you can leave it blank,on an occasion where it is blank, it should be left as an object with just an empty string like so - ""  however if it is present,
    the Quiz Section must look like this
    #Question : The question that is being asked
    #Options : The options for the question separated by a semicolon(;) minimum of 4 options
    #Explanation : The explanation for the question
    #Correct Answer : The correct answer for the question
    ) but ensure the section is present)
     Also note that a question can have a single answer, on an occasion where a question is an open ended question without options, in this scenario the option should represent a blank string like so - "". and the correct answer should be the answer to the question.

     You are generating ideas to be consumed by a user, but then different users learn in various different ways, they are accustomed to. based on this learning method: ${learningMethod}, generate content to effectively explain each concept to the user. There are 4 main learning methods, Visual, Auditory, Reading/Writing, and Kinesthetic. Based on the specified method, let the text, image description and quiz and all suit the user. For example a visual learner would prefer more images and diagrams, an auditory learner would prefer more audio and text(however, you could just generate normal content for an auditory learner, we intend to transcribe the text to audio for people like this), a reading/writing learner would prefer more text and quizzes, and a kinesthetic learner would prefer more interactive content and quizzes. Ensure that the content generated is in line with the learning method specified.

    Make the output of your response be in JSON format.
    that is the output should be in this format
    follow this format strictly and do not deviate from it or add irrelevant information to it.
    therei no need to add json or any character to the response, just the JSON object

    Generate as much ideas as possible for the lecture ${lectureTitle} to give a comprehensive understanding of the topic.

 starting here-> {
    "ideaContent": [
        {
            "text": "Operators are special symbols that perform specific operations on values.",
            "imageDescription": "A diagram showing different types of operators with their symbols and descriptions.",||"imageDescription":"" (if an image isn't intended for the idea content)
            "quiz": {
                "question": "Which of the following is NOT a valid arithmetic operator?",
                "options": ["+", "-", "*", "/", "%", "^"] || ""(if the question is open ended),
                "explanation": "The caret symbol (^) is used for bitwise XOR.",
                "correct_answer": "^"
            }||"quiz":{""} (if the quiz section is not present)
        }
        {
            "text": "Operators are special symbols that perform specific operations on values.",
            "imageDescription": "A diagram showing different types of operators with their symbols and descriptions.",
            "quiz": {
                "question": "Which of the following is NOT a valid arithmetic operator?",
                "options": ["+", "-", "*", "/", "%", "^"],
                "explanation": "The caret symbol (^) is used for bitwise XOR.",
                "correct_answer": "^"
            }
        }
    ]
}<-ending here`
}
