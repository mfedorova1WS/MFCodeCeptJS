const { I } = inject();

module.exports = {
button: {
login: ".is-primary"
},
fields: {
  password: "#password",
  username: "#username"

},

async login(username, password) {
  await I.click(this.fields.username);
  await I.fillField(this.fields.username, 'demo');
  await I.click(this.fields.password);
  await I.fillField(this.fields.password, 'demo');
  await I.click(this.button.login);
}
  // insert your locators and methods here
}
