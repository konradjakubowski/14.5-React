// ContactForm to reactowa Klasa, contact to obiekt / jeden item.

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name',
          value: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Last Name',
          value: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Add a contact")
      )
    )
  },
})

/*
<form class="contactForm">
    <input type="text" placeholder="Email" value="contact.email">  x3
</form>

<button type="submit">Add a contact</button>
*/