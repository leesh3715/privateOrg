/**
 * Created by ms on 2020-04-21.
 */

public with sharing class shTest {
    @AuraEnabled
    public static String register(Contact contact) {
        System.debug('contact : ' + JSON.serializePretty(contact));

        if(contact != null) {
            insert contact;
        }
        String homeURL = 'https://shtest123-developer-edition.ap17.force.com/Dev1/s/home';

        return homeURL;
    }
}