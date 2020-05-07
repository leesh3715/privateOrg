/**
 * Created by ms on 2020-04-21.
 */

public with sharing class shTest {
    @AuraEnabled
        public static String register(Contact contact) {
        System.debug('contact : ' + JSON.serializePretty(contact));


        User newUser = new User();
        newUser.ContactId = contact.Id;
        newUser.LastName = contact.LastName;
        newUser.Alias = '123';
        newUser.Username = contact.Email;
        newUser.CommunityNickname = contact.Email;
        //newUser.UserLicense.Id ='1002x000000ldkIAAQ';
        newUser.ProfileId = '00e2x0000011TIb';


//        Required fields are missing: [Email, Time Zone, Locale, Email Encoding, Language]

        //1002x000000ldkIAAQ Identity
        //2F00e2x0000011TIb IdentityUser
        if(contact != null) {

        insert contact;
        insert newUser;
    }
    String homeURL = 'https://shtest123-developer-edition.ap17.force.com/Dev1/s/home';

        return homeURL;
    }
}