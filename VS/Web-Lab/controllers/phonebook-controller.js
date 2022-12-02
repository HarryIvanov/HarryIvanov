const phonebook = require('../phonebook');
const Contact = require("../models/Contact");

module.exports = {
  index: (req, res) => {
    const contacts = phonebook.getPhonebook();
    res.render('index', {contacts});
    
  },
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect("/")
  }

}