/**
 * Created by ms on 2020-04-21.
 */
({

    Search: function (component, event, helper) {
        console.clear();
        console.log(component.find('v.reqData'));

        console.log(component.get('v.labelMap'));

        console.log(event.getSource().get("v.reqData"));

/*        alert("입력한 이름: " + event.getSource().get("v.label"));*/
    },

    handleShowActiveSectionName: function (cmp, event, helper) {
        alert(cmp.find("accordion").get('v.activeSectionName'));
    },
    handleSetActiveSectionC: function (cmp) {
        cmp.find("accordion").set('v.activeSectionName', 'C');
    },

    isRegister: function (cmp, event, helper) {
        alert("You clicked: " + event.getSource().get("v.label"));

    }
})