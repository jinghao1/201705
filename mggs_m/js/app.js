/**
 * Created by Seven on 16/9/27.
 */
"use strict";
$(function () {
    window.onload = function () {

        var  ymurl = 'http://swt.xy.qichedaquan.com'; //测试
        //var  ymurl = '//xy.qichedaquan.com'; //正式
        $(".submit").click(function(){
            //名字不为空
            var name = $("input[name='name']").val();
            if(name == "" || name == "姓名" ){
                alert("请输入姓名");
                $("input[name='name']").focus();
                return false;
            }
            if (!name.match(/^([\u4E00-\u9FA5]{2,4}$)|(^[a-zA-Z]{1,8}$)/)){
                alert("抱歉，姓名需要输入2-4位汉字或八个英文字母");
                return false;
            }


            //手机号验证
            var phone = $("input[name='phone']").val();
            if (phone == "" || phone == "手机号") {
                alert("手机号码不能为空！");
                // $("input[name='phone']").focus();
                return false;
            }
            if (!phone.match(/^(((1[3|5|7|8][0-9]{1}))+\d{8})$/)) {
                alert("手机号码格式不正确！");
                //$("input[name='phone']").focus();
                return false;
            }
            //省，必选
            var province = $("select[name='provinceId']").val();
            //console.log(province);
            if(province == "0"){
                alert("请选择省份");
                // $("select[name='provinceId']").focus();
                return false;
            }
            //市，必选
            var city = $("select[name='cityId']").val();
            if(city == "0"){
                alert("请选择城市");
                // $("select[name='cityId']").focus();
                return false;
            }
            //经销商，必选
            var dealer = $("select[name='dealer']").val();
            if(dealer == "0"){
                alert("请选择经销商");
                //$("select[name='dealer']").focus();
                return false;
            }
            //pjid  为项目id
            //性别，必选


            var model = $("select[name='buycar']").val();
            if(model=="0"){
                alert("请选择意向车型");
                //$("select[name='dealer']").focus();
                return false;
            }
            var dealer_name = province+","+city+","+dealer;
            //
            var fromwh = $("input[name='fromwh']").val();
            var fself = $("input[name='fself']").val();
            // console.log(fromwh);
            var encrystr = $("input[name='encrystr']").val();
            $.getJSON(ymurl+"/medias/public/index.php/port/Mingjue/Comreg", {buycartime:0, username:name,thesex:'0',numberphone:phone,dealer:dealer_name,model:model,key:encrystr,fromwh:fromwh,pjid:'37',fself:fself}, function(json){
                //console.log(json);
                if(jQuery.type(json)=="string"){
                    var json = eval('('+json+')'); //字符串转为json格式
                }
                alert(json.msg);
                if(json.start=='2003'){
                    $("input[name='name']").val("");
                    $("input[name='phone']").val("");
                    return;

                }
            })

        })


    }

})