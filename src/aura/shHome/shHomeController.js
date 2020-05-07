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
    goLogin:function (cmp,event,helper) {

        let LoginURL = window.location.protocol + "//" + window.location.host + "/"+ "/Dev1/s/shlogin";

        window.location.href = LoginURL;
    },

    goRegister:function (cmp,event,helper) {

        let RegisterURL = window.location.protocol + "//" + window.location.host + "/"+ "/Dev1/s/shregister";

        window.location.href = RegisterURL;
    },

})