/**
 * Created by ms on 2020-04-21.
 */
({
    doInit: function(cmp, event,helper){
        /*
        console.log(JSON.parse(JSON.stringify(newCon)));
        console.log('input value?');
                console.log(newCon.FirstName);
                console.log(newCon.LastName);
                console.log(newCon.AccountId);
                console.log(newCon.isChecked1__c);
                console.log(newCon.isChecked2__c);
                console.log(newCon.isChecked3__c);
                console.log('input value? end');*/

    },

    /* 회원 등록(가입) function*/
    isRegister: function (cmp, event, helper) {
        console.clear();

        // 회원 가입 후 리턴하기 위한 HOME URL -> 헬퍼에서 리턴할수 있을 듯
        let HomeURL = window.location.protocol + "//" + window.location.host + "/"+ "Dev1/s/shhome";
        //https://sh0518-dev-ed.livepreview.salesforce-communities.com/
        //https://shtest123-developer-edition.ap17.force.com/Dev1/s/
        //https://shtest123-developer-edition.ap17.force.com/Dev1/s/shregister
        try{
            let newCon = cmp.get('v.contact');
            helper.apex(
                cmp, 'isRegister', 'register', {'contact':newCon}
            ).then(function (resData, response) {
                helper.gfn_toast('정상적으로 저장되었습니다.', 's');
                $A.enqueueAction(cmp.get('c.doCancel'));
                helper.gfn_refresh();
                window.location.href = HomeURL;
            }).catch(function (error, response) {
                helper.gfn_ApexErrorHandle(error, response);
                console.log(error);
            });
        }catch(e){console.log(e);}
    },

    doCancel : function (component, event, helper){
        helper.gfn_closeQuickActionModal(component);
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