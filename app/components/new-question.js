import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
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
        author: this.get('author'),

      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params)
    }
  }
});
