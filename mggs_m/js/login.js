

$(document).ready(function(){
	 
	var kkurl = "//xy.qichedaquan.com/medias/public/index.php/port/";
	//var kkurl = "http://swt.xy.qichedaquan.com/medias/public/index.php/port/";
	 
	var proid = "37";
	$.getJSON(kkurl+"Mingjue/CarClass", {brand_id:70}, function(end){ //循环输出，并追加到购买时间
		//console.log(end);
		$.each(end,function(id,val){ 
			var option_html = '<option value='+val.brand_id+'>'+val.brand_name+'</option>';
			$("#buycar").append(option_html);
		});
		 
	});
	//默认状态下，将‘省’的值传入
	$.getJSON(kkurl+"Bwuser/listdata", { han: "list",proid:proid}, function(json){
		//console.log(json);
		$.each(json,function(index,value){
			//console.log(index,value);
			if(index == "DealerData"){
				$.each(value,function(i,v){
					var option_html = '<option value='+v.dealer_id+'>'+v.dealer_name+'</option>';
	  				$("#province").append(option_html);
				})
			}
		})
	})
	//点击‘省’之后，将‘市’遍历进去
	$("#province").change(function(){
		var dealer_id = $("#province").val();
		if(dealer_id == "省份"){
			var option_htmls = '<option>'+"城市"+'</option>';
		  		$("#city").html(option_htmls);
	  		var option_htmlss = '<option>'+"经销商"+'</option>';
	  			$("#dealer").html(option_htmlss);
		}else if(dealer_id != "省份"){
		$.getJSON(kkurl+"Bwuser/procitydeal", { han: "dealist",proid:proid,dealer_id:dealer_id}, function(json){ 
				$("#city").html("<option>请选择</option>");
				//console.log(json);
				$.each(json.city,function(index,value){ 
					var option_html = '<option value='+value.dealer_id+'>'+value.dealer_name+'</option>';
		  			$("#city").append(option_html); 
				}) 
				//$("#dealer").html("");
				//$("#dealer").html("<option>请选择</option>");
			//$("#city").trigger("click"); //模拟点击
				var dealer_id = $("#city").val();
				if(dealer_id == '城市'){
			  		var option_htmlss = '<option>'+"经销商"+'</option>';
			  			$("#dealer").html(option_htmlss);
				}else if(dealer_id != "城市"){
					$.getJSON(kkurl+"Bwuser/procitydeal", { han: "dealist",proid:proid,dealer_id:dealer_id}, function(json){
						//console.log(dealer_id);
						$("#dealer").html("<option>请选择</option>");
						$.each(json.city,function(index,value){
							var option_html = '<option value='+value.dealer_id+'>'+value.dealer_name+'</option>';
				  			$("#dealer").append(option_html); 
						})
					})	
				}
		})
		}		
	})
	//点击‘市’之后，将‘经销商’遍历进去
	$("#city").click(function(){
		var dealer_id = $("#city").val();
		if(dealer_id == '城市'){
	  		var option_htmlss = '<option>'+"经销商"+'</option>';
	  			$("#dealer").html(option_htmlss);
		}else if(dealer_id != "城市"){
		$.getJSON(kkurl+"Bwuser/procitydeal", { han: "dealist",proid:proid,dealer_id:dealer_id}, function(json){
			//console.log(dealer_id);
			$("#dealer").html("<option>请选择</option>");
			$.each(json.city,function(index,value){
				var option_html = '<option value='+value.dealer_id+'>'+value.dealer_name+'</option>';
	  			$("#dealer").append(option_html); 
			})
		})	
		}
	})
	$("#city").change(function(){
		var dealer_id = $("#city").val();
		if(dealer_id == '城市'){
	  		var option_htmlss = '<option>'+"经销商"+'</option>';
	  			$("#dealer").html(option_htmlss);
		}else if(dealer_id != "城市"){
		$.getJSON(kkurl+"Bwuser/procitydeal", { han: "dealist",proid:proid,dealer_id:dealer_id}, function(json){
			//console.log(dealer_id);
			$("#dealer").html("<option>请选择</option>");
			$.each(json.city,function(index,value){
				var option_html = '<option value='+value.dealer_id+'>'+value.dealer_name+'</option>';
	  			$("#dealer").append(option_html); 
			})
		})	
		}
	})
	//选中好‘经销商’之后，将‘意向车型’遍历进去
 
	//鼠标放入input框值清空
	$('input').each(function(){
		var default_value = this.value;
		$(this).focus(function(){  
            if(this.value == default_value) {  
                this.value = '';  
            }  
        });
        $(this).blur(function(){  
            if(this.value == '') {  
                this.value = default_value;  
            }  
        });    
	})
 
	
	
})