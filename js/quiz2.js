let quiz = [
    {
		question: "How many trailing zeros are in the number 5! (5 factorial)",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 1 trailing zero.......... EXPLANATION: The factorial of 5 is 120. (5 x 4 x 3 x 2 x 1)"
	},
	{
		question: "There are 50 bikes, each with a tank that holds enough gas to go 100 km. Using these 50 bikes, what is the maximum distance that you can go?",
		option: [
			"Hyper Text Markup Language",
		],	
        answer: "ANSWER: 350 km.........EXPLANATION: You might initially think of just making a simple multiplication of the number of bikes and capacities. But remember each has 100 km capacity and they are all in the same place. You could set all 50 bikes off but they'd all only travel 100 km.Now, one solution would be to move all bikes 50 km. Then empty half the bikes' fuel tanks into the other to fill them up. Keep doing this until you have 1 bike with a full tank to finish the trek.Of course, you'll have the odd bike stranded when dividing odd numbers. This way you'll get the last bike of the 50 to have traveled 350 km in total.",
    },
    
	{
		question: "You have two light bulbs in a 100-story building. You want to find out what floor the bulb will break on, using the least number of drops.",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 16............EXPLANATION: You will need to start moving up the building in increments of floors for the first bulb. This could be 10 floors at a time, say.Once you find the point where the first bulb breaks, start again in smaller increments from the last previous incremental floor. So, say you went up in 10-floor increments and it breaks at floor 20, move back to floor ten with the second bulb. Then start dropping it in 1-floor increments.This will give you a worst case of 19. But we can improve on this.Say you tried floor 16 first. Let's say it breaks. Go back to floor one and move up in one-floor increments (floors 1-15). This will give you a worst case of 16 drops, if floor 16 was the breaking point, for the second bulb, in the worst case.You can, of course, extend this principle if it doesn't break at floor 16. You could move to floor 31, 45, 58 etc. for the first bulb etc. Given the use of the same method, you'll always reach a worst case of 16 drops to find the floor.",
	},
	
	{
		question: ": If you had an infinite supply of water and a 5-liter and 3-liter bucket, how would you measure exactly 4 liters? The buckets do not have any intermediate markings.",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A lot of wasted water............EXPLANATION: You may already know the answer or have worked it out, but we are obliged to give you an answer. Fill the 5-liter bucket first. Then using that bucket fill the 3-liter bucket, being careful not to spill any. This leaves 2 liters in the 5-liter bucket.Now chuck away the water in the 3-liter bucket and refill with the remaining 2 liters from the bigger bucket. Once again, fill the 5-liter bucket and then use this fill the second 3-liter bucket. This will leave you with 4 liters in the 5-liter bucket. Simples!",
	},
	{
		question: "f you had 5,623 participants in a tournament, how many games would need to be played to determine the winner?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 1............EXPLANATION: Again another example of the interviewer not looking for the correct answer. They are looking for how you think. It would probably be a good idea to get some more information.You could ask 'What team sizes are we talking about here?', for example. Or 'Does the number of participants represents the number of teams or individuals?', so on so forth. If we were to ask directly, or assume it was a direct elimination tournament, then all teams will lose one game except for the championsRight? So the answer will be the number of teams - 1.",
	},
	{
		question: "The probability of finding the parking slot occupied is 1/3. You find it empty for 9 consecutive days. Find the probability that it will be empty on the 10th day.",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 1/3............EXPLANATION: At first this may seem to be a trick question. With probability, you would be forgiven for thinking this, but often it's not. The fact the parking space has been empty for 9 consecutive days doesn't influence the probability of it's 'condition' on the 10th day.",
	},
	{
		question: "There are 20 different socks, of two types, in a drawer in a completely dark room. What is the minimum number of socks you should grab to ensure you have a matching pair?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 11............EXPLANATION: The suggested answer given here is more to show an appreciation of the real world rather than an understanding of theory, statistics, etc. With this in mind, the only way to safely 'ensure you have a matching pair' is to pick 11 socks.",
	},
	{
		question: "Imagine that you have three boxes, one containing two black marbles, one containing two white marbles, and the third, one black marble and one white marble. The boxes were labeled for their contents - BB, WW, BW - but someone has switched the labels so that every box is now incorrectly labeled. You are allowed to take one marble at a time out of any box, without looking inside, and by this process of sampling, you need to determine the contents of all three boxes. What is the smallest number of drawings needed to do this?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 1............EXPLANATION: ead the question again carefully. The main thing to remember is that all the boxes are incorrectly labeled. You can then guarantee the contents of each box with one draw.et's say you draw a marble from the box labeled BW. You know this is wrong initially, thus it can only by BB or WW, right? If you draw a white marble you know this box must be WW. That leaves two more unknown boxes. The box labeled BB cannot be BB as the labels are wrong. This must, therefore, be BW.Continue with this logic and you can ascertain the correct label for the last one. 'Bada bing', cool right?",
	},
	{
		question: "You toss two coins. If you get heads with the first coin, you stop. If you get tails, you toss it again. The second coin is tossed regardless. What is the ratio of heads to tails?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 1 to 1............EXPLANATION:  Another probability question from Amazon. You would expect the odds of heads or tails to be 50/50 for any tossed coin. You would then expect to toss the first coin at least twice. This should, by rights, give you a ratio of 1 to 1. The second coin is continuously tossed and it should also have a ratio of 1 to 1.Hence the ratio of the two must, therefore, also be 1 to 1.",
	},
	{
		question: "If you have a square room with no roof, and you had four flagpoles you had to plant on the walls so that each flagpole touched two walls, how would you do it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Put them in the corners dummy............EXPLANATION: Yup, you probably got this one right off the bat. Plant the flagpoles in the corners and they are automatically touching two walls each. ",
	},
	{
		question: "Given 9 balls, all of which weigh the same except for one, what is the minimum of weighings necessary to find the ball with the different weight?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: ............EXPLANATION: Theoretically you should be able to do this in two weighings, so long as the scale uses a two-pan balance. Firstly, take two groups of three balls and weigh them with one group in each pan. If the groups balance, you know the 'odd' ball is in the last set of three balls. From that group take two balls and weigh them against each other. Again if they balance it the last one remaining. If however, the first six balls don't balance, grab the set that is lighter or heavier and repeat the second step above.",
	},
	{
		question: "You're in a boat and you throw out a suitcase. Does the water level increase?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  Nope............EXPLANATION: Water is already being displaced, if you like, by the weight and density of the submerged part of the boat's hull. So, by throwing the suitcase overboard, its weight/density will not alter the situation. If the suitcase is denser than water, it will sink and displace its total volume, and if it's lighter, it will displace the portion of its volume dictated by its weight/density. In either case, there will be no change compared to its existing effect on the displacement of the boat prior to being unceremoniously evicted.",
	},
	{
		question: "You have 2 pieces of rope, each of which burns from one end to the other in 30 minutes (no matter which end is lit). If the two  pieces touch, the flame will transfer from one to the other. You cannot assume any properties of the rope that were not stated. Given only 1 match, can you use the ropes to time 45 minutes?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Place one of the ropes at the midpoint between the other and light. You can use either one rope in a circle, or form them in a T shape.............EXPLANATION: Depending on the accuracy you are after, either solution will work. You could form the first rope into a circle with both ends touching. Then place the other rope, more or less straight, at 180 degrees directly opposite the touching ends. Then light the circular rope where the ends touch.Alternatively, you could form a T with one of the ropes bisecting the other at its exact midpoint, and light the end of the 'vertical' rope, or indeed simultaneously light both ends of the 'horizontal' one.In both cases, you get 30 minutes/2 for the circular or 'horizontal' rope, plus 30 minutes for the other rope, to give you a total of 45 minutes.",
	},
	{
		question: "In front of you are three light switches. Only one does anything, and it turns on the light downstairs. From where you are standing, you can't see the downstairs light, and it makes no sound. You must determine which switch operates the light, BUT you can only go check it once. How do you figure out which switch is for the light?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: It takes 2 flicks of the switch and a portion of time you can't get back ............EXPLANATION: Light bulbs convert electricity into light and heat right? So, it doesn't matter which switches you turn on or in what order. Try one and wait 5-10 minutes. This should be enough time to warm up the light bulb if it is on. If it's not that one, the light will be off and cold right?Click the second switch. Wait another 5-10 minutes.Now go and check. If the light is on, great you know it's the second one. If it is off but hot, then you know the first switch was the one that worked. If it's off and cold (assuming it won't lose its 'heat' in the time that's passed), then neither of the first two worked and the working switch must be the last, un-flicked, one. ",
	},
	{
		question: "You have 1,000 bottles of juice. One contains poison and tastes bitter. How do you find the poisoned bottle using the smallest number of sips?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: 10............EXPLANATION: Another one from Microsoft here, apparently. The answer is similar to some of the others on the list, but is about juice, so it's different, ok?Take a small sample from each of the first 500 bottles, mix them together and take a sip. If it tastes bitter, it's one of those 500, if not it's the other 500. Then take samples from 250 of the 500 that tasted bitter and keep halving until you find the exact bottle.Easy peasy.",
	},
	{
		question: "One night, Aunt Judy was reading a book in the living room. Uncle Jim turned off the light, leaving the room completely dark. Aunt Judy continued to read. How is this possible?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Aunt Judy is blind and reading in Braille............EXPLANATION: A rather simpler one here, but fun. We are not told what type of book Aunt Judy is reading, intentionally. Obviously, if she is blind it does not matter to her whether the light is on or off.Though we might further question Uncle Jim's motives. Is it night time and he is going to bed? Shouldn't he be helping her? Of course, in our current tablet age, she could also be reading off an iPad or a backlit Kindle. Either way, Uncle Jim needs to reflect on his life",
	},
	{
		question: " A farmer challenges an engineer, a physicist, and a mathematician to fence off the largest amount of area using the least amount of fence. The engineer made his fence in a circle and said it was the most efficient. The physicist made a long line and said that the length was infinite. Then he said that fencing half of the earth was the best. The mathematician laughed at the others and, with his design, beat them in the challenge. What did he do?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: The mathematician trolls the other two.............EXPLANATION: A fun example of brainteasers for engineers here from TheBrainTeasers. Well, it made us chuckle, at least. As we know, the engineer built a nice circular fence and claimed it was efficient. The physicist claimed that half the earth should be fenced off for best results.Ok so what about the mathematician?Well, this cheeky chappy decided to build a fence around himself. He then claimed he was outside of the fence.",
	},
	{
		question: "A man is sitting in a pub feeling rather poor. He sees the man next to him pull a wad of $50 notes out of his wallet. He turns to the rich man and says to him, 'I have an amazing talent: I know almost every song that has ever existed.' The rich man laughs.The poor man says, 'I am willing to bet you all the money you have in your wallet that I can sing a genuine song with a lady's name of your choice in it. 'The rich man laughs again and says, 'OK, how about my daughter's name, Joanna Armstrong-Miller?'The rich man goes home poor. The poor man goes home rich. What song did he sing?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Happy birthday to you",
	},
	{
		question: "A bloke in a restaurant decides to challenge a waiter. He asks him to bring a glass, plate, water, a match and a lemon wedge. He then proceeds to pour enough water onto the plate to cover it.'If you, good sir, can get the water into the glass from the plate without touching or moving it, you'll get $100', he challenges the waiter. 'You can use all of the items here'.Shortly after the waiter walks away with the cash. What did he do?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Created a vacuum in the glass.............EXPLANATION: The answer is to put the match in the lemon slice so it stands up vertically on the plate. Then light it and put the glass over it. As the match consumes the oxygen in the glass, it will suck the surrounding water into the glass.",
	},
	{
		question: "This object has holes in its top and bottom. It also has holes on its sides and bottom. Not only that, it is riddled with holes in the middle. Despite this, it can still hold water. What is it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  A sponge, obviously.",
	},
	{
		question: "What has to be broken before you can use it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  An egg",
	},
	{
		question: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A candle",
	},
	{
		question: " What month of the year has 28 days?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: All of them",
	},
	{
		question: "What is full of holes but still holds water?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A sponge",
	},
	{
		question: "What question can you never answer yes to?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  Are you asleep yet?",
	},
	{
		question: "What is always in front of you but can’t be seen?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: The future",
	},
	{
		question: "What has many keys but can’t open a single lock?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A piano",
	},
	{
		question: "What is black when it’s clean and white when it’s dirty?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A chalkboard",
	},
	{
		question: " I’m light as a feather, yet the strongest person can’t hold me for five minutes. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Your breath",
	},
	{
		question: "Where does today come before yesterday?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: The dictionary",
	},
	{
		question: "What goes up and down but doesn’t move?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A staircase",
	},
	{
		question: " It belongs to you, but other people use it more than you do. What is it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Your name",
	},
	{
		question: " I am an odd number. Take away a letter and I become even. What number am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Seven",
	},
	{
		question: "What three numbers, none of which is zero, give the same result whether they’re added or multiplied?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: One, two and three",
	},
	{
		question: "Mary has four daughters, and each of her daughters has a brother. How many children does Mary have?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Five—each daughter has the same brother.",
	},
	{
		question: "Which is heavier: a ton of bricks or a ton of feathers?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Neither—they both weigh a ton.",
	},
	{
		question: "Three doctors said that Bill was their brother. Bill says he has no brothers. How many brothers does Bill actually have?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  None. He has three sisters.",
	},
	{
		question: "Two fathers and two sons are in a car, yet there are only three people in the car. How?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: They are a grandfather, father and son.",
	},
	{
		question: "What five-letter word becomes shorter when you add two letters to it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  Short",
	},
	{
		question: "What would you find in the middle of Toronto?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: The letter “o”",
	},
	{
		question: "What is so fragile that saying its name breaks it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Silence.",
	},
	{
		question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  A river",
	},
	{
		question: "Speaking of rivers, a man calls his dog from the opposite side of the river. The dog crosses the river without getting wet, and without using a bridge or boat. How?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: The river was frozen.",
	},
	{
		question: "What can fill a room but takes up no space?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Light",
	},
	{
		question: "If you drop me I’m sure to crack, but give me a smile and I’ll always smile back. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  A mirror",
	},
	{
		question: "The more you take, the more you leave behind. What are they?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  Footsteps",
	},
	{
		question: "I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A key",
	},
	{
		question: "People make me, save me, change me, raise me. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Money",
	},
	{
		question: "What breaks yet never falls, and what falls yet never breaks?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  Day, and night",
	},
	{
		question: "What goes through cities and fields, but never moves?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A road",
	},
	{
		question: " I am always hungry and will die if not fed, but whatever I touch will soon turn red. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  Fire",
	},
	{
		question: " The person who makes it has no need of it; the person who buys it has no use for it. The person who uses it can neither see nor feel it. What is it?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER:  A coffin",
	},
	{
		question: "A man looks at a painting in a museum and says, “Brothers and sisters I have none, but that man’s father is my father’s son.” Who is in the painting?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: The man’s son",
	},
	{
		question: "With pointed fangs I sit and wait; with piercing force I crunch out fate; grabbing victims, proclaiming might; physically joining with a single bite. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A stapler",
	},
	{
		question: " I have lakes with no water, mountains with no stone and cities with no buildings. What am I?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: A map",
	},
	{
		question: "What does man love more than life, hate more than death or mortal strife; that which contented men desire; the poor have, the rich require; the miser spends, the spendthrift saves, and all men carry to their graves?",
		option: [
			"Hyper Text Markup Language",
		],
		answer: "ANSWER: Nothing",
	},
]