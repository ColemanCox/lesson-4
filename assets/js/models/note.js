var Note = Backbone.Model.extend({
  defaults: {
      title: '',
      body: ''
    }
});

var NoteBook = Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/evernote'

});
