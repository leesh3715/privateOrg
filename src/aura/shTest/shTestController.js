/**
 * Created by ms on 2020-04-21.
 */
({


    /* 약관 동의 액션 function1 */
    handleShowActiveSectionName: function (cmp, event, helper) {
        alert(cmp.find("accordion").get('v.activeSectionName'));
    },

    /* 약관 동의 액션 function2 */
    handleSetActiveSectionC: function (cmp) {
        cmp.find("accordion").set('v.activeSectionName', 'C');
    },

    /* 회원 등록 function*/
    isRegister: function (cmp, event, helper) {
        console.clear();
        const e = event.getSource();

        let test  = e.get('v.newAcc');
        console.log(test);

    }
})