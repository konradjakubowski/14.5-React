var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
        return React.createElement(Contact, {item: contact, key: contact.id});
    });

        return (
        React.createElement('ul', {className: 'contactsList'}, contacts)
    );
  }
});

/*
Metoda .map() bierze każdy element z tablicy this.props.items i przekształca je odpowiednią funkcją tworząc nową listę elementów. 
Map() metodą, którą wywołujemy w kontekście dowolnej tablicy (Array) - w efekcie możemy stworzyć nową tablicę modyfikując dowolnie każdy z jej elementów.
*/