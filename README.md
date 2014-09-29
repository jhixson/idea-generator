# idea-generator

a [Sails](http://sailsjs.org) application. Yay!

This will serve as a micro-service for Westmoreland Open Hack to create (and possibly vote on) ideas for future events, talks, etc.

To set up dependencies: `npm install`

To run the app: `sails lift`

To run tests: `mocha`

I didn't intend for the service itself to have any front-end to it. Rather, we can just read/write stuff via the API.

For example:

* Get all ideas:
        GET http://localhost:1337/idea
* Create an idea:
        POST http://localhost:1337/idea
        {
            "title": "My great idea",
            "description: "More information...",
            "user": "Joe Fox"
        }
* Get all votes:
        GET http://localhost:1337/vote
* Vote on an idea
        POST http://localhost:1337/vote
        {
            "idea": 1,
            "userId": "some-session-id"
        }

### To-do:
* Configure testing to use separate database
* Get deployment working
* Set up cors to allow remote posting from http://westmoreland-open-hack.github.io/