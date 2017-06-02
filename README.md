#Code-forum
===========

This is a question and answer forum for code and tech questions. It allows users to post questions and answers, and vies other users questions and answers. Created as a solo project for Epicodus EmberJS using Ember, Firebase, HTML, CSS and Bootstrap.

## Current Version Date:

5.2.2017

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd code-forum`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Contact
  _Feel free to email with any suggestions, questions, or concerns- lewis.start0905@gmail.com_
#### Copyright 2017 Starlynne Start
#### License: MIT

## Planning
1. Specs

* Questions will include the content of the question itself, an author, and additional notes.
* Answers will include the content of the answer and the author.
* Site will include a navbar that appears on all pages.
* Site will list all questions on the homepage, displaying only the question and the name of the author.
* Site will allow users to click a question, to be routed to another page containing additional information and question details.
* Site will allow users to add and edit questions.
* Site will allow users to add answers to a question.
* Answers will be added and viewed on the same page as the question they respond to.

2. Integration

* Routes/components:
  * Question model
  * Answer model
    * Index route/html as home page, to display question-tile component and new-question component.
      * New-question component/html page for adding new question to model.
      * Question-tile component/html displayed on index to create linked list to specific Question.

    * Question route/html page as landing page for a specific question and it's interactions including adding new answers to question, edit and delete for both questions and answers.
      * Update-question component/html page for updating question.
      * Answer-tile component/html page for showing answers.
      * New-answer component/html page for adding new answers to a question.

3. UX/UI
  * Include and modify with bootstrap.
  * Utilize custom styles.
  * Link everything for simple navigation.
  * Include about and contact info.
