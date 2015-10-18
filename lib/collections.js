LanguageCodes = new Mongo.Collection("languageCodes");

LanguageCodes.allow({
    insert: function(userId, data) { return true; },
    remove: function(userId, data) { return true; },
    update: function(userId, data) { return true; }
});
