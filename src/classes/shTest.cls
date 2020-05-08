/**
 * Created by ms on 2020-04-21.
 */

public with sharing class shTest {
    @AuraEnabled
        public static void register(Contact contact) {
        System.debug('contact : ' + JSON.serializePretty(contact));

        User newUser = new User();
        newUser.ContactId = contact.Id;
        newUser.LastName = contact.LastName;
        newUser.Alias = '123';
        newUser.Username =  randomString() + '@i2max.co.kr';
        newUser.CommunityNickname = contact.Email;
        //newUser.UserLicense.Id ='1002x000000ldkIAAQ';
        newUser.ProfileId = '00e2x0000011TIb';
        newUser.Email = contact.Email;
        newUser.EmailEncodingKey='UTF-8';
        newUser.TimeZoneSidKey = 'Asia/Seoul';
        newUser.LocaleSidKey='eu';
        newUser.LanguageLocaleKey='en_US';

        //1002x000000ldkIAAQ Identity
        //00e2x0000011TIb IdentityUser
        if(contact != null) {
        insert contact;
        insert newUser;
        }

    }

    // 랜덤 스트링을 생성하기 위한 메서드
    private static String randomString() {
        return '' + math.rint( math.random() * 100000 );
    }
}