import { randomDate } from './date';
import { getRandomId, randomInteger } from './random';

const mockTitle = [
    "Teen who turned down $5,000 from Elon Musk to shut down a Twitter account tracking the billionaire's jet says he gets too much work satisfaction to settle for less than $50,000",
    "Are Tesla's Promises of Self-Driving Cars Risky for Investors?",
    'Toyota heading to moon with cruiser, robotic arms, dreams',
    'Aehr Test Systems Post-Q2 Selloff Opens Up A New Opportunity',
    "Some Tesla customers who paid $100 to reserve a Cybertruck 2 years ago say they're frustrated with customer service but still prepared to wait",
    'Elites Vs. Blue collar, or Maybe Canada’s Yellow Vest Day: Here’s What the Media Won’t Say About the Truckers Convoy',
];

const mockDescription = [
    'Interestingly, the more the media and the cultural elites try to disparage the convoy on whatever flimsy grounds they find, the stronger support gets.',
    'Aehr Test Systems is in the early innings of a tremendous growth story. See why I think the sell-off in AEHR stock is a good buying opportunity.',
    'Hundreds of trucks and thousands of people blocked the streets of central Ottawa on Saturday as part of a self-titled “Freedom Convoy” to protest vaccine mandates required to cross the US border.',
    '"I\'ve done a lot of work on this and $5k is not enough," the teen behind the Elon Musk\'s Jet Twitter account told Insider.',
    "If Tesla gets this right, it's going to be miles ahead of the competition.",
];

export const generateMockNews = () => ({
    id: getRandomId(),
    title: mockTitle[randomInteger(0, mockTitle.length - 1)],
    description: mockDescription[randomInteger(0, mockDescription.length - 1)],
    publishedAt: randomDate(new Date(2012, 0, 1), new Date()).toISOString(),
});
