import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswer: false,
  actions: {
    updateAnswerFormShow() {
        if(confirm("Are you the author/an authorized editor for this answer?")){
        this.set('updateAnswer', true);
        }
      },
      delete(answer) {
        if (confirm('Are you sure you want to delete this answer?')) {
          this.sendAction('destroyAnswer', answer);
        }
      },
      update(answer) {
        var params = {
          content: this.get('content'),
        };
        this.set('updateAnswer', false);
        this.sendAction('update', answer, params)
      }
    }
});
