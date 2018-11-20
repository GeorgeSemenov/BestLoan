console.log("work");
$(document).ready(function(){
	var lt = $(window).scrollTop();//Инициализируем положение пользователя на сайте
	var isItMobileTime = isItMobileTimeFunc(); // обьявляем и инициализируем 

	$('.sandwich').click(function(){
	    $('.sandwich').toggleClass('clicked');
	    $('.navMenu').toggleClass('show');
	});

	//Если окно меняет свое разрешение
	$(window).on('resize',function(){
		isItMobileTime = isItMobileTimeFunc();
		$('.navbar').stop(true, true).fadeIn();//Эта строка нужна, чтобы если ты смотрел на сайт в мобилковой версии и крутанул вниз, navbar изчез, а затем перешёл в дектоп, то navbar бы появился снова.
	})

	$(window).scroll(function(event){
		var st = $(window).scrollTop();
		// alert('st = ' + st + ' lt = ' + lt + ' isItMobileTime = ' + isItMobileTime + ' (st > lt) and isItMobileTime = ' + ((st > lt) || isItMobileTime));
		if((st > lt) && isItMobileTime) {
			console.log("downscroll code");
			$('.navbar').stop(true).fadeOut();
		}else{
			console.log("upscroll code");
			$('.navbar').stop(true).fadeIn();
		}
		lt = $(window).scrollTop();//обновляем переменную.
	})

	$(function(){//программирование бегунка с грывнами за объяснениями смотри готовые решения-> ползунки бегунки калькулятор
		$("#grivn-slider").slider({
			range: "min",
			value: 5000,
			min: 200,
			max: 15000,
			step: 50,
			slide: function(event, ui){
				$('#grivn-amount').val(ui.value).trigger("change");
			}
		})
	})
})

function isItMobileTimeFunc(){
 	//Если ширина экрана не более 991px(т.е. меньше на 1 px чем lg) то проверяем как работает 
	if($(window).width() <= 991){return true;}
	else { return false;}
}