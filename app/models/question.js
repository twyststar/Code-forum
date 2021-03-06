import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  preview: DS.attr(),
  author: DS.attr(),
  createdAt: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
