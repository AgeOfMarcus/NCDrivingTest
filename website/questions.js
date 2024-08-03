const questions = {
    '1': {
      question: ' A driver\'s license is required for which of the following?\n1. Sitting in the driver\'s seat of a car while the engine is running.\n2. Steering a car while it is being pushed or towed by another car.',
      answers: {
        A: ' 1 Only ',
        C: ' both 1 and 2',
        B: ' 2 Only ',
        D: ' neither 1nor 2'
      },
      correct: 'C'
    },
    '2': {
      question: ' If a law enforcement officer swears that a driver has refused a legal chemical test, the\nDivision of Motor Vehicles must',
      answers: {
        A: ' place the driver on probation',
        B: ' wait for a court decision before taking action',
        C: ' assign the driver to the Driver Improvement Clinic',
        D: ' revoke the driver\'s license for at least 12 months'
      },
      correct: 'D'
    },
    '3': {
      question: ' Which of the following happen(s) under the point system?\n1. A driver is sent a warning letter when he gets 4 points within 3 years\n2. A driver who gets 12 points within 3 years may lose his license',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: '2 onlyÂ· ',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '4': {
      question: ' When a driver has a total of 7 points, which of the following may happen?\n1. The driver can be required\'\nto file proof of financial responsibility.\n2. The driver can have 3 points deducted if he satisfactorily completes a Driver\nImprovement Clinic.',
      answers: {
        A: ' 1 only',
        B: '2 only',
        C: ' both 1and 2',
        D: ' neither 1nor 2'
      },
      correct: 'B'
    },
    '5': {
      question: ' Conviction for which of the following carries the highest number of points?',
      answers: {
        A: ' reckless driving',
        B: ' hit and run with property damage',
        C: ' driving without a license',
        D: ' passing a stopped school bus unloading children'
      },
      correct: 'D'
    },
    '6': {
      question: ' A driver will lose his license if he is convicted of',
      answers: {
        A: ' driving without a license',
        B: ' passing a stopped school bus',
        C: ' failing to yield the right of way',
        D: ' speeding more than 70 mph in a 55 mph zone'
      },
      correct: 'B'
    },
    '7': {
      question: ' To get a revoked driver\'s license restored, a person must do which of the following?\n1. Obtain permission from the Driver License Section in Raleigh to reapply for a\nlicense.\n2. Goto a driver license office, pay a restoration fee, and reapply for a license.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '8': {
      question: ' Roughly half of all traffic fatalities involve which of the following?\n1. A drunken person.\n2. More than one car.',
      answers: {
        A: ' 1 only',
        B: '2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '9': {
      question: ' The percentage of highway deaths caused by drunken person is',
      answers: {
        A: ' almost 10 % ',
        C: ' almost 50 %',
        B: ' almost 25 % ',
        D: ' almost 67 %'
      },
      correct: 'C'
    },
    '10': {
      question: ' Which ofthe following statements about pedestrian deaths is (are) correct?\n1. In cities, 2 out of 5 people killed in motor vehicle accident are pedestrians.\n2. Most of the pedestrians killed in all traffic accidents are teenagers.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '11': {
      question: ' When you are walking at night along a road without sidewalks, you should do which of\nthe following?\n1. Wear or carry something white.\n2. Keep your back to oncoming traffic.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '12': {
      question: ' Recreational vehicles',
      answers: {
        A: ' need more room to turn corners.',
        B: ' need less room to turn corners.',
        C: ' should never go around corners.',
        D: ' back up easier than cars.'
      },
      correct: 'A'
    },
    '13': {
      question: ' If you are walking along a road at night, what should you do?\n1. Walk on the right-hand side with the traffic.\n2. Wear or carry something white.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor'
      },
      correct: 'B'
    },
    '14': {
      question: ' A safe driver does which of the following?\nexpressway',
      answers: {
        A: ' watches the side of the road over the hood to stay in lane',
        B: ' frequently checks the rear view and side mirrors',
        C: ' drinks coffee while driving at night to stay alert',
        D: ' keeps 2 car lengths between his car and the next car on the'
      },
      correct: 'D'
    },
    '15': {
      question: ' As you approach an intersection to make a right turn, you should turn on your car\'s right\nturn signal and do which of the following?\n1. Steer slightly toward the center of the road to give yourself room to clear the\ncorner.\n2. Hold your arms straight out the window.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'D'
    },
    '16': {
      question: ' If you begin to feel sleepy while driving on a long trip, you should do which of the\nfollowing?\n1. Open a window or vent to let fresh air in.\n2. Increase your speed.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '17': {
      question: ' When driving on a long trip, you should',
      answers: {
        A: ' rest your eyes from time to time by rubbing them',
        B: ' avoid looking at any one thing for more than a few seconds',
        C: ' keep your eyes on the center of the road straight ahead',
        D: ' spend as much time looking in your mirrors as you do looking in front of you'
      },
      correct: 'B'
    },
    '18': {
      question: ' In order to avoid being hit in the rear by another vehicle, you should do which of the\nfollowing?\n1. Drive cautiously and use your break often.\n2. Check your rear view mirrors often.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '19': {
      question: ' Studies have shown which of the following to be serious traffic hazard?\n1. Middle-aged drivers\n2. Slow drivers',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '20': {
      question: ' Very slow driving is especially dangerous in which of the following situations?\n1. Just after passing a crest of a hill.\n2. Just after rounding a curve.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '21': {
      question: ' Which of the following statements concerning speed limits on the open road in North\nCarolina is (are) correct?\n1. Unless otherwise posted, the speed limit for passenger cars and pickup trucks is\n65 mph.\n2. The speed limit for a school activity bus is 35 mph.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'D'
    },
    '22': {
      question: ' Which of the following statements about speed limits for cars in North Carolina is (are)\ncorrect?\n1. The speed limit outside a city is 55 mph unless otherwise posted.\n2. The speed limit inside a city is 25 mph unless otherwise posted.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '23': {
      question: ' Which of the following statements about speed limits in North Carolina is (are) correct?\n1. Unless otherwise posted, the speed limit inside a city is 35 mph.\n2. Unless otherwise posted, the speed limit for a school activity bus is 25 mph.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '24': {
      question: ' If the alternator warning light stays on as you drive, the problem may be due to',
      answers: {
        A: ' low engine oil level ',
        C: ' poor ignition condition',
        B: ' a loose or broken fan belt ',
        D: ' a defective engine diagnosis computer'
      },
      correct: 'B'
    },
    '25': {
      question: ' When rounding a curve, a car tends to',
      answers: {
        A: ' speed up',
        B: ' move to the inside of the curve',
        C: ' stay in the center of the lane',
        D: ' move to the outside of the curve'
      },
      correct: 'D'
    },
    '26': {
      question: ' When rounding a sharp curve, you should do which of the following?\n1. Stay as far to the left of your lane as possible.\n2. Apply your break in the sharpest part of the curve.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'D'
    },
    '27': {
      question: ' The driver of a car going down a hill should',
      answers: {
        A: ' use a lower gear when coming down the hill',
        B: ' pump his brake when he reaches the curve',
        C: ' apply the brake firmly and steadily going down the hill',
        D: ' speed up slightly on the curve to maintain control of the car'
      },
      correct: 'A'
    },
    '28': {
      question: ' To reduce speed while going down a steep hill, you should do which of the following?\n1. Use a lower gear.\n2. Drive in a zigzag pattern.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '29': {
      question: ' Which of the following is one of the most important facts known about the effect of\nalcohol on driving ability?',
      answers: {
        A: ' After a period of time. Drivers develop immunity to the effects of alcohol.',
        B: ' Most people drive slower after a drink or two.',
        C: ' Any amount of alcohol lowers a user\'s ability without the person realizing it.',
        D: ' It takes several drinks to make noticeable effects on a driver\'s ability.'
      },
      correct: 'C'
    },
    '30': {
      question: ' If you wish to pass the car ahead on a two-lane road, you should do which of the\nfollowing?\n1. Blow your horn to signal your intention to the driver of the cars ahead.\n2. Give a left turn signal to let the driver behind you know your intention.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '31': {
      question: ' Drivers who take medicine should',
      answers: {
        A: ' not drive unless someone is with them.',
        B: ' drive only during the daytime.',
        C: ' learn about the possible side effects before deciding to drive.',
        D: ' not drive under any circumstances.'
      },
      correct: 'C'
    },
    '32': {
      question: ' Carbon monoxide is present in',
      answers: {
        A: ' upholstery materials.',
        B: ' motor oil.',
        C: ' gasoline.',
        D: ' an engine\'s exhaust gases.'
      },
      correct: 'D'
    },
    '33': {
      question: ' To be a safe driver in any environment, you need to',
      answers: {
        A: ' use your horn frequently to warn others to clear the roadway ahead.',
        B: ' make sure you avoid changing lanes.',
        C: ' seldom use more than one mirror to check traffic.',
        D: ' establish and maintain an ample space cushion between your vehicle and possible hazards.'
      },
      correct: 'D'
    },
    '34': {
      question: ' Passing on the right is legal on which of the following?\n1. A four-lane highway with 2 lanes going in each direction.\n2. On a one-way street.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '35': {
      question: ' It is illegal to pass on a two-lane, two-way street',
      answers: {
        A: ' over a broken yellow line.',
        B: ' over a broken white line.',
        C: ' over a double yellow center line.',
        D: ' over a double white center line.'
      },
      correct: 'C'
    },
    '36': {
      question: ' You are driving in heavy traffic and up ahead you see another car pulling out of a parallel\nparking space. You should:',
      answers: {
        A: ' speed up to pass the car pulling out.',
        B: ' move a little into the left lane to get out of the way.',
        C: ' Slow down and be prepared to stop.',
        D: ' Blow your horn and keep going.'
      },
      correct: 'C'
    },
    '37': {
      question: ' What should you do to avoid hydroplaning?',
      answers: {
        A: ' let out some air of the tires',
        B: ' apply hard brake pressure',
        C: ' accelerate',
        D: ' reduce speed'
      },
      correct: 'D'
    },
    '38': {
      question: ' The important type of car insurance to buy is',
      answers: {
        A: ' uninsured motorist insurance.',
        B: ' comprehensive insurance.',
        C: ' no-fault insurance.',
        D: ' liability insurance.'
      },
      correct: 'D'
    },
    '39': {
      question: ' Highway accidents occur most frequently',
      answers: {
        A: ' on hills',
        B: ' on curves',
        C: ' at intersections',
        D: ' at bridges'
      },
      correct: 'C'
    },
    '40': {
      question: ' The major factor in young drivers\' poor driving records is',
      answers: {
        A: ' slower reaction times.',
        B: ' inability to pay for insurance.',
        C: ' lack of driving experience.',
        D: ' poor roadway conditions.'
      },
      correct: 'C'
    },
    '41': {
      question: ' When checking tires prior to a long distance trip, remember to',
      answers: {
        A: ' Check the spare tire air pressure.',
        B: ' Wash and dry all tires.',
        C: ' Check the balance of all tires.',
        D: ' Increase tire air pressure a bit.'
      },
      correct: 'A'
    },
    '42': {
      question: ' Some common examples of signs with orange backgrounds are',
      answers: {
        A: ' DO NOT ENTER, NO PARKING, ONE WAY',
        B: ' BUMP, PAVEMENT ENDS, SOFT SHOULDER',
        C: ' NO RIGHT TURN, PASS WITH CARE, SPEED LIMIT',
        D: ' DETOUR 1000 FEET, ROAD CONSTRUCTION AHEAD, ROAD CLOSED 500 FEET'
      },
      correct: 'D'
    },
    '43': {
      question: ' If you come to an unmarked intersection where it is hard to see in all directions because\nof trees or buildings, you should',
      answers: {
        A: ' drive at the posted speed limit',
        B: ' stop near the center of the intersection and continue if it is safe',
        C: ' slow down and blow your horn to warn drivers who cannot see you',
        D: ' stop at the intersection and move forward slowly'
      },
      correct: 'D'
    },
    '44': {
      question: ' When driving on a city street, you should watch out for which of the following?\n1. Traffic coming from side streets.\n2. Animals or small children darting from between parked cars.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '45': {
      question: ' When driving in heavy traffic, you should do which of the following?\n1. Watch out for drivers who make quick stops.\n2. Yield to pedestrians only at marked crosswalks.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '46': {
      question: ' If you are in the wrong lane for making a left turn at an intersection, you should',
      answers: {
        A: ' go to the next intersection and turn there',
        B: ' back up and move into the correct lane for turning',
        C: ' wait until all other cars have cleared the intersection and turn',
        D: ' signal the driver in the car beside you that you intend to turn in front of him'
      },
      correct: 'A'
    },
    '47': {
      question: ' The most frequent type of accident on interstate highway is',
      answers: {
        A: ' sideswipe collision',
        B: ' running off the road',
        C: ' rear-end collision',
        D: ' head-on collision'
      },
      correct: 'C'
    },
    '48': {
      question: ' When taking a long trip on an interstate highway, you should plan on doing which of the\nfollowing\n1. Stopping every 100 miles at a rest area.\n2. Scheduling some hours of night driving to avoid heavy traffic.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '49': {
      question: ' You are driving on an interstate highway when a breakdown forces you to the shoulder.\nYou should',
      answers: {
        A: ' sit in the car until help arrives',
        B: ' tie a handkerchief to the left handle and stand beside the left front fender',
        C: ' raise the hood and tie a white handkerchief to the left door handle',
        D: ' raise the hood and stand behind the car so drivers of on-coming cars can see you'
      },
      correct: 'C'
    },
    '50': {
      question: ' Studies have shown that under normal conditions the chances of a car being involved in\nan accident on an interstate highway is greater if the driver',
      answers: {
        A: ' maintains a steady speed',
        B: ' travels considerably below the posted speed limit',
        C: ' travels at the posted speed limit',
        D: ' maintains his position relative to cars in front and behind him in his lane'
      },
      correct: 'B'
    },
    '51': {
      question: ' If you miss your exit on an interstate highway, you can do which of the following?\n1. Make a u turn.\n2. Go on to the next exit.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '52': {
      question: ' A driver may be temporarily blinded at night by which of the following?\n1. Glare from the headlights of other cars.\n2. Flame from a match he strikes to light a cigarette.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '53': {
      question: ' In which of the following situations should you use your low beams?\n1. At night in the city.\n2. In foggy or misty weather.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '54': {
      question: ' If the driver of an approaching car fails to dim his headlights, you should do which of the\nfollowing?\n1. Watch the road ahead to avoid looking at the lights of the other car.\n2. Flick your headlight beams up and down one time.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '55': {
      question: ' When driving on a highway at night, you should never use your high-beam headlights if\nyou are',
      answers: {
        A: ' slowing down for a turn',
        B: ' traveling on a road with no median',
        C: ' going down a hill',
        D: ' following another car'
      },
      correct: 'D'
    },
    '56': {
      question: ' If it starts to drizzle while you are driving, you should do which of the following?\n1. Slow down because the rain wi" loosen oil and gravel on the road.\n2. Allow at least twice the normal following distance.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '57': {
      question: ' Roads are likely to be especially slick',
      answers: {
        A: ' just after the have been paved',
        B: ' just after it has begun to rain or drizzle',
        C: ' after it has been raining for several hours',
        D: ' in exceptionally cold, dry weather'
      },
      correct: 'B'
    },
    '58': {
      question: ' When driving through heavy fog, you should',
      answers: {
        A: ' turn on your bright lights',
        B: ' slow down',
        C: ' follow the car in front of you closely',
        D: ' turn on your parking lights'
      },
      correct: 'B'
    },
    '59': {
      question: ' When driving in a heavy snowstorm during the day, you should use',
      answers: {
        A: ' parking lights',
        B: ' low-beam headlights',
        C: ' four-way flashers',
        D: ' high-beam headlights'
      },
      correct: 'B'
    },
    '60': {
      question: ' The best way to get good traction on hard packed snow is to',
      answers: {
        A: ' put chains on your tires',
        B: ' use snow tires',
        C: ' have lower than usual air pressure in your tires',
        D: ' carry heavy weights in your trunk'
      },
      correct: 'A'
    },
    '61': {
      question: ' When trying to pull away from a slippery surface in a car with a manual shift, you should\ndo which of the following?\n1. Start in second or high gear.\n2. Accelerate rapidly.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '62': {
      question: ' When pulling a trailer down a long, steep hill, you should do which of the following?\n1. Drive in a lower gear.\n2. Keep in the right lane.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '63': {
      question: ' If your breaks fail, you should do which of the following?\n1. Shift into a lower gear.\n2. Use the emergency break.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '64': {
      question: ' Wet brakes can be dried out by doing which of the following?\n1. Turn on the heater.\n2. Shifting into a lower gear and keeping light pressure on the break pedal',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '65': {
      question: ' If you have a blowout while traveling at a high speed, you should do which of the\nfollowing?\n1. Apply the break firmly as soon as you notice the blowout.\n2. Grip the steering wheel firmly to keep the car from swerving.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '66': {
      question: ' When changing a flat tire, you should do which of the following?\n1. Put the vehicle in neutral gear.\n2. Block the wheels.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '67': {
      question: ' If your car breaks down on the highway at night, what should you do?\n1. Park the car completely off the road.\n2. Turn of the high-beam lights.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '68': {
      question: ' If your car breaks down on the highway at night, you should do which of the following?\n1. Raise the hood and tie a white handkerchief to the left door handle.\n2. Switch on the parking lights.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '69': {
      question: ' If your vehicle has run off the road onto the shoulder, you should',
      answers: {
        A: ' shift quickly to a lower gear',
        B: ' brake with heavy constant pressure',
        C: ' apply the emergency brake',
        D: ' take your foot off the gas pedal gradually'
      },
      correct: 'D'
    },
    '70': {
      question: ' Skids are likely to occur on which of the following roads?\n1. One on which snow has become packed.\n2. One that has just been paved.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'A'
    },
    '71': {
      question: ' If you have to come to a stop on an icy road, you should',
      answers: {
        A: ' use your hand break',
        B: ' put the brake on hard',
        C: ' apply the brake in short hard jabs',
        D: ' pump the brake pedal lightly'
      },
      correct: 'D'
    },
    '72': {
      question: ' What should you do when you begin to skid?\n1. Turn the steering wheel in the direction in which the rear end of the car is\nskidding.\n2. Reduce pressure on the gas pedal.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '73': {
      question: ' A driver who is involved in an accident should do which of the following?\n1. Make an immediate report to the nearest law enforcement agency.\n2. Notify his insurance company.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '74': {
      question: ' A flashing red traffic signal at an intersection means which of the following?\n1. Slow down and proceed with caution.\n2. Stop only if it is necessary to yield the right-of-way.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'D'
    },
    '75': {
      question: ' A flashing yellow traffic signal at an intersection means',
      answers: {
        A: ' no right turn',
        B: ' yield the right-of-way',
        C: ' no left turn',
        D: ' slow down and proceed with caution'
      },
      correct: 'D'
    },
    '76': {
      question: ' A diamond-shaped sign would be used to warn drivers of which of the following driving\nhazards?\n1. A railroad crossing.\n2. A deer crossing.',
      answers: {
        A: ' 1 only',
        B: ' 2 only',
        C: ' both 1 and 2',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '77': {
      question: ' A diamond-shaped traffic sign means',
      answers: {
        A: ' no left turn',
        B: ' come to a full stop',
        C: ' yield the right-of-way',
        D: ' slow down and drive with care'
      },
      correct: 'D'
    },
    '78': {
      question: ' When can you disregard a signal given by a police officer directing traffic?\n1. An emergency vehicle is approaching.\n2. The officer\'s signal is in conflict with a traffic signal.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'D'
    },
    '79': {
      question: ' What is the main color for signs in highway work zone?',
      answers: {
        A: ' red',
        B: ' white',
        C: ' orange',
        D: ' green'
      },
      correct: 'C'
    },
    '80': {
      question: ' When does the law give a blind pedestrian special consideration at intersections where\nthere are no traffic lights?\n1. Only when he is alone.\n2. If he holds a white cane or has a guide dog with him.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '81': {
      question: ' Which of the following statements about bicycle riders is (are) correct?\n1. They must ride their bicycles facing traffic.\n2. They are likely to be seriously injured in almost any collision with a car.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'B'
    },
    '82': {
      question: ' In North Carolina, which of the following are required on all cars?',
      answers: {
        A: ' license plate lights',
        B: ' courtesy lights',
        C: ' fender lights',
        D: ' backup lights'
      },
      correct: 'A'
    },
    '83': {
      question: ' Your brakes need checking if',
      answers: {
        A: ' there is a strong smell of gasoline in the car',
        B: ' the engine stalls at stoplights',
        C: ' light gusts of wind make the car difficult to control',
        D: ' there is a squeaking noise when you step on the brake'
      },
      correct: 'D'
    },
    '84': {
      question: ' Which of the following statements about horns and sirens is (are) correct?\n1. Every licensed motor vehicle must have a horn.\n2. Only law enforcement and emergency vehicle may have sirens.',
      answers: {
        A: ' 1 only ',
        C: ' both 1 and 2',
        B: ' 2 only ',
        D: ' neither 1 nor 2'
      },
      correct: 'C'
    },
    '85': {
      question: ' Every motor vehicle must be equipped with',
      answers: {
        A: ' a muffler',
        B: ' 4-ply tires',
        C: ' Mudguards',
        D: ' Shoulder harnesses'
      },
      correct: 'A'
    },
    '86': {
      question: ' The system that carries harmful fumes from the engine to the rear of the car and releases\nthem is called the',
      answers: {
        A: ' ignition system',
        B: ' fuel system',
        C: ' suspension system',
        D: ' exhaust system'
      },
      correct: 'D'
    },
    '87': {
      question: ' A leaky exhaust system should be repaired because it',
      answers: {
        A: ' wastes gas and oil',
        B: ' causes the engine to run hot',
        C: ' may allow dangerous fumes to enter the car',
        D: ' makes the engine hard to start and likely to stall'
      },
      correct: 'C'
    },
    '88': {
      question: ' A car that pitches and tosses in normal driving and leans heavily to the side on turns is\nlikely to have trouble in which of the following systems?',
      answers: {
        A: ' ignition',
        B: ' steering',
        C: ' brake',
        D: ' suspension'
      },
      correct: 'D'
    },
    '89': {
      question: ' Which traffic is required to stop if a school bus makes a passenger stop in the far right\nlane on a five lane street?',
      answers: {
        A: ' All lanes of traffic.',
        B: ' Lanes going in the same direction as the school bus.',
        C: ' Lanes going the opposite direction of bus.',
        D: ' Turning lane only'
      },
      correct: 'B'
    },
    '90': {
      question: ' Maximum speed limit for a full sized public school bus in North Carolina is:',
      answers: {
        A: ' 55 MPH ',
        C: ' 35 MPH',
        B: ' 45 MPH ',
        D: ' 25 MPH'
      },
      correct: 'B'
    }
  }