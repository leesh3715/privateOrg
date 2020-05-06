/**
 * Created by ms on 2020-04-21.
 */
({
    doInit: function(cmp, event,helper){



    },

    /* 회원 등록(가입) function*/
    isRegister: function (cmp, event, helper) {
        console.clear();

        let newCon = cmp.get('v.contact');

        console.log(JSON.parse(JSON.stringify(newCon)));

        console.log('input value?');
        console.log(newCon.FirstName);
        console.log(newCon.LastName);
        console.log(newCon.AccountId);
        console.log(newCon.isChecked1__c);
        console.log(newCon.isChecked2__c);
        console.log(newCon.isChecked3__c);
        console.log('input value? end');


    },

    /* 약관 동의 액션 function1 */
    handleShowActiveSectionName: function (cmp, event, helper) {
        alert(cmp.find("accordion").get('v.activeSectionName'));
    },

    /* 약관 동의 액션 function2 */
    handleSetActiveSectionC: function (cmp) {
        cmp.find("accordion").set('v.activeSectionName', 'C');
    }
})