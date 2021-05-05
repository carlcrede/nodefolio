const router = require('express').Router();

router.get('/api/projects', (req, res) => {
    res.send({projects});
});

/*
    Project Schema

    Title - (string)
    Description: (string)
    Creation date: (date)
    Language(s): (array)
    Tech used: (array)
    Image: (string)
    HostedLink: (string)
    GitLink: (string)
*/

const projects = [
    {
        title: 'Pitchdraw',
        description: 'Mandatory assignment for Creative Code - Drawing on canvas plays synth music notes - made with Howler & Tone.js.',
        gitLink: 'https://github.com/carlcrede/pitchdraw',
        hostedLink: 'https://pitchdraw.herokuapp.com/',
        img: '/img/p.PNG'
    },
    {
        title: 'Started from the bottom',
        description: 'Mandatory assignment for Creative Code elective - This is a simple platformer made with Matter.js.',
        gitLink: 'https://github.com/carlcrede/creative_code_mandatory1',
        hostedLink: 'https://carlcrede.github.io/creative_code_mandatory1/',
        img: 'bottom.PNG'
    },
    {
        title: 'How to Node',
        description: 'Mandatory assignment where I should document what I had learned so far in the course.',
        gitLink: 'https://github.com/carlcrede/nodejs_mandatory01',
        hostedLink: 'https://how-to-node.herokuapp.com/',
        img: 'howtonode.PNG'
    },
];

module.exports = {
   router 
};