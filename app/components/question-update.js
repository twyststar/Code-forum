import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestionFormShow() {
      this.set('updateQuestion', true);
    },

    update(question) {
      var preview = [];
      var content = this.get('content')
      var prep = content.split('');
      for (var i = 0; i <= 20; i++){
        preview.push(prep[i]);
      }
      console.log(preview)
      preview = preview.join('');
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        preview: preview,
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params)
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
