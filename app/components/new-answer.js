import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question'),
        createdAt: moment().format('LLLL')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params)
    }
  }
});
