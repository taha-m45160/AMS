const {createQuiz} = require('../Create/createQuiz')

async function populateQuizzes(){
    questions = [
        {
            qs_number: 1,
            qs_type: 'MCQ',
            qs_text: `What does a dummy-variable regression analysis examine?
            (A) The relationship between one continuous dependent and one continuous independent variable     
            (B) The relationship between one categorical dependent and one continuous independent variable     
            (C) The relationship between one continuous dependent and one categorical independent variable
            (D) The relationship between one continuous dependent and one dichotomous variable`,
            correct_answer: 'C'
        },
        {
            qs_number: 2,
            qs_type: 'MCQ',
            qs_text: `Who is the project champion of the group?
            (A) Samee Arif     
            (B) Bilal Shahid     
            (C) Muhammad Taha
            (D) Faizan Elahi`,
            correct_answer: 'A'
        },
        {
            qs_number: 3,
            qs_type: 'Short',
            qs_text: `Describe Pakistan's foreign relations with Bangladesh`
        }
    ]

    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var openDate = new Date(year, month, day+10);

    await createQuiz('Quiz 1', 1, 'CS-100', 'Fall', 2022, questions, openDate, 15)
    await createQuiz('Quiz 1', 2, 'CS-100', 'Fall', 2022, questions, openDate, 15)
    await createQuiz('Classes', 1, 'CS-200', 'Fall', 2022, questions, openDate, 20)
    await createQuiz('Quiz 1', 2, 'CS-200', 'Fall', 2022, questions, openDate, 20)
    await createQuiz('Quiz 1', 1, 'CS-202', 'Spring', 2022, questions, openDate, 20)
    await createQuiz('Quiz 1', 1, 'CS-535', 'Fall', 2022, questions, openDate, 15)
    await createQuiz('Routing', 1, 'CS-368', 'Spring', 2022, questions, openDate, 15)
    await createQuiz('Reliability', 2, 'CS-368', 'Spring', 2022, questions, openDate, 15)

    await createQuiz('Quiz 2', 1, 'CS-100', 'Fall', 2022, questions, openDate, 30)
    await createQuiz('Recursion', 2, 'CS-100', 'Fall', 2022, questions, openDate, 15)
    await createQuiz('Quiz 2', 1, 'CS-200', 'Fall', 2022, questions, openDate, 15)
    await createQuiz('Quiz 2', 2, 'CS-200', 'Fall', 2022, questions, openDate, 25)
    await createQuiz('Quiz 2', 1, 'CS-202', 'Spring', 2022, questions, openDate, 15)
    await createQuiz('Quiz 2', 1, 'CS-535', 'Fall', 2022, questions, openDate, 15)
    await createQuiz('Networking', 1, 'CS-368', 'Spring', 2022, questions, openDate, 15)
    await createQuiz('Caching', 2, 'CS-368', 'Spring', 2022, questions, openDate, 15)

}

module.exports = {populateQuizzes}