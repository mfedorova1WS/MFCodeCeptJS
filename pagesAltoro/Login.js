const { signInLink } = require("./Header");
const { I, headerPage } = inject();

module.exports = {
  fields: {
    username: "#uid",
    password: "#passw"
  },
  loginBtn: "input[type=submit][value=Login]",
  loginFailedBanner: '#_ctl0__ctl0_Content_Main_message',

  async login(inputUsername, inputPassword) {
    await I.click(signInLink);
    await I.click(this.fields.username);
    await I.fillField(this.fields.username, inputUsername);
    await I.click(this.fields.password);
    await I.fillField(this.fields.password, inputPassword);
    await I.click(this.loginBtn);

  }
}
