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
({
    isLogin:function (cmp,event,helper) {

        console.clear();

        try{
            let loginVal = cmp.get('v.contact');
            console.log('try문 시작');
            helper.apex(
                cmp, 'isLogin', 'Login', {'contact':loginVal}
            ).then(function (resData, response) {
                console.log(resData);
                console.log(response);

                helper.gfn_toast('정상적으로 저장되었습니다.', 's');
                $A.enqueueAction(cmp.get('c.isCancel'));
                helper.gfn_refresh();


                window.location.href = HomeURL;
            }).catch(function (error, response) {
                helper.gfn_ApexErrorHandle(error, response);
                console.log(error);
            });
        }catch(e){console.log(e);}

    },

    isCancel: function (cmp,event,helper) {

        window.history.forward();
    }

})