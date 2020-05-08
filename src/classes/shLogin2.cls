
/****************************************************************************************
 * @filename      : 
 * @projectname   : 
 * @author        : i2max.sh.Lee
 * @date          : 2020-05-07
 * @group         :
 * @group-content :
 * @description   :
 * @tester        :
 * @reference     :
 * @copyright     : Copyright © I2max. All Rights Reserved.
 * @modification Log
 * ===============================================================
 * ver     date                     author              description
 * ===============================================================
 0.1     2020-05-07     i2max.sh.Lee          Create
 ****************************************************************************************/

public with sharing class shLogin2 {
    @AuraEnabled
    public static void Login(Contact contact) {

        if(contact !=null){
            List<User> Users = [ SELECT LastName,FirstName,Email From User WHERE Email =:contact.email AND LastName =:contact.LastName LIMIT 1];
        }


    }
}