const { I } = inject();

module.exports = {
  fields: {
    profileName: '.user > .dropdown> .dropdown-trigger> .button >.username'
  },

  async getProfileName() {
    const profileNameText = await I.grabTextFrom(this.fields.profileName);
    return profileNameText
}
  // insert your locators and methods here
}
