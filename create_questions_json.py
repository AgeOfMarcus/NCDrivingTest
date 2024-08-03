import json
import re

questions_text = open('reformatted_questions.txt').read()
question_blocks = questions_text.split('\n\n')
questions = {}

for block in question_blocks:
    lines = block.split('\n')
    question_number = lines[0].split('.')[0]
    question = '.'.join(lines[0].split('.')[1:])
    answers = {}

    for line in lines[1:]:
        if bool(re.match(r"\d\.", line)):
            question += '\n' + line
        elif bool(re.match(r"^[A-Z]\)", line)):
            letter = line.split(')')[0]
            answers[letter] = line[2:]
        else:
            question += '\n' + line
    
    questions[question_number] = {
        'question': question,
        'answers': answers
    }

answers_text = open('answers.txt').read()

for line in answers_text.split('\n'):
    question_number = line.split('.')[0]
    letter = line.split('.')[1]

    questions[question_number]['correct'] = letter

with open('questions.json', 'w') as f:
    f.write(json.dumps(questions))