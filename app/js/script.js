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
		$('.navMenu').removeClass('show');
		$('.sandwich').removeClass('clicked');
	})

	$(window).scroll(function(event){
		var st = $(window).scrollTop();
		// alert('st = ' + st + ' lt = ' + lt + ' isItMobileTime = ' + isItMobileTime + ' (st > lt) and isItMobileTime = ' + ((st > lt) || isItMobileTime));
		if((st > lt) && isItMobileTime) {
			$('.navbar').stop(true).fadeOut();
		}else{
			$('.navbar').stop(true).fadeIn();
		}
		lt = $(window).scrollTop();//обновляем переменную.
	})

	//Левый слайдер
	setSlider(initialValue = 5000, sliderName = "#grivn-slider", sMin = 200, sMax = 15000, sStep = 50, amountName = '#grivn-amount');
	//Правый слайдер
	setSlider(initialValue = 10, sliderName = "#days-slider", sMin = 1, sMax = 30, sStep = 1, amountName = '#days-amount');

	//Активация шестерни и выдвиганию списка инструментов сортировки 
	var $activator = $('.gear, .text-for-gear');
	var $gear = $('.gear');
	var $hiddenPannel = $('.sort-lists , .sortirovka');
	$activator.click(function(){
		$gear.toggleClass('rotated');
		console.log("clicked");
		if($hiddenPannel.css('display') == 'none'){
			console.log("display was none");
			$hiddenPannel.slideDown('normal');
		}else{
			console.log("display was visible");
			$hiddenPannel.slideUp('normal');
		}
	})

})

function isItMobileTimeFunc(){
 	//Если ширина экрана не более 991px(т.е. меньше на 1 px чем lg) то проверяем как работает 
	if($(window).width() <= 991){return true;}
	else { return false;}
}

function setSlider(initialValue,sliderName,sMin,sMax,sStep,amountName){//программирование бегунка с рисками за объяснениями смотри готовые решения-> ползунки бегунки калькулятор
	$(sliderName).slider({
		range: "min",
		value: initialValue,
		min: sMin,
		max: sMax,
		step: sStep,
		slide: function(event, ui){
			$(amountName).text(ui.value).trigger("change");
		}
	})
	$(amountName).text(initialValue);
}