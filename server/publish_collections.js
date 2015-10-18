Meteor.publish('languageCodes', function() {
    return LanguageCodes.find();
});
