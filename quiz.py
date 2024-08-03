import random
import json
import os

clear = lambda: os.system('cls') if os.name == 'nt' else os.system('clear')

questions = json.load(open('questions.json'))

score = 0
incorrect = 0
total_questions = len(questions)

while questions:
    clear()
    print(f'Score: {score}/{total_questions}. Incorrect: {incorrect}.')

    question_number = random.choice(list(questions))
    question = questions.pop(question_number)

    print(f'{question_number}.', question['question'], '\n')
    for letter, answer in sorted(question['answers'].items(), key = lambda x: x[0]):
        print(f'{letter}) {answer}')
    resp = input("Select your answer (enter letter): ")
    while not resp.upper() in list(question['answers'].keys()):
        print('Invalid choice. Select from:', ', '.join(resp.keys()))
        resp = input("Select your answer (enter letter): ")
    
    if resp.upper() == question['correct']:
        score += 1
        print('Correct!')
    else:
        incorrect += 1
        print('Sorry, the correct answer was:', question['correct'])
    
    input('Press [Enter] to continue...')

print('The test is over!')
print('Final score:', score, '/', total_questions)
input('Press [Enter] to exit...')