$(document).ready(function(e) {
	
	var itrix=countdown(new Date("February 28, 2013 09:00:00"),new Date(),countdown.DAYS |countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
	//alert(itrix);
	var days=itrix.days;
	//alert(itrix.days+" "+itrix.hours+" "+itrix.minutes+" "+itrix.seconds);
	//alert(days);
	var hours=itrix.hours;
	
	var minutes=itrix.minutes;
	
	var seconds=itrix.seconds;
	
	
    $("body").removeClass("play");
	
	var aa = $("ul.dayPlay1 li").eq(days%10);
	aa.addClass("active")
		.prev("li")
		.addClass("before");
	
	var aa = $("ul.dayPlay10 li").eq(days/10);
	aa.addClass("active")
		.prev("li")
		.addClass("before");
	
	var aa = $("ul.hourPlay1 li").eq(hours%10);
	aa.addClass("active")
		.prev("li")
		.addClass("before");
	
	var aa = $("ul.hourPlay10 li").eq(hours/10);
	aa.addClass("active")
		.prev("li")
		.addClass("before");
	
	var aa = $("ul.minutePlay1 li").eq(minutes%10);
	aa.addClass("active")
		.next("li")
		.addClass("before");
	
	var aa = $("ul.minutePlay10 li").eq(minutes/10);
	aa.addClass("active")
		.next("li")
		.addClass("before");
	
	var aa = $("ul.secondPlay1 li").eq(seconds%10);
	aa.addClass("active")
		.prev("li")
		.addClass("before");
	
	var aa = $("ul.secondPlay10 li").eq(seconds/10);
	aa.addClass("active")
		.prev("li")
		.addClass("before");
		
	
    $("body").addClass("play");
	
});
	
	setInterval(function () {
        secondPlay1()
    }, 1000);


function secondPlay1() {
    $("body").removeClass("play");
    var aa = $("ul.secondPlay1 li.active");

    if (aa.is(":first-child")) {
        $("ul.secondPlay1 li").removeClass("before");
        aa.addClass("before").removeClass("active");
		secondPlay10();
        aa = $("ul.secondPlay1 li").eq(9);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.secondPlay1 li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .prev("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }

}

function secondPlay10() {
    var aa = $("ul.secondPlay10 li.active");

    if (aa.is(":first-child")) {
        $("ul.secondPlay10 li").removeClass("before");
        aa.addClass("before").removeClass("active");
		minutePlay1();
        aa = $("ul.secondPlay10 li").eq(5);
        aa.addClass("active");
    }
    else {
        $("ul.secondPlay10 li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .prev("li")
            .addClass("active");
    }
}

function minutePlay1() {
	
    var aa = $("ul.minutePlay1 li.active");

    if (aa.is(":first-child")) {
        $("ul.minutePlay1 li").removeClass("before");
        aa.addClass("before").removeClass("active");
		minutePlay10();
        aa = $("ul.minutePlay1 li").eq(9);
        aa.addClass("active");
    }
    else {
        $("ul.minutePlay1 li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .prev("li")
            .addClass("active");
    }
}

function minutePlay10() {
	
    var aa = $("ul.minutePlay10 li.active");

    if (aa.is(":first-child")) {
        $("ul.minutePlay10 li").removeClass("before");
        aa.addClass("before").removeClass("active");
		hourPlay1();
        aa = $("ul.minutePlay10 li").eq(5);
        aa.addClass("active");
    }
    else {
        $("ul.minutePlay10 li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .prev("li")
            .addClass("active");
    }

}

function hourPlay1()
{
	var hour1=$("ul.hourPlay1 li.active");
	var hour10=$("ul.hourPlay10 li.active");
	//alert(hour1.is(":first-child") +" "+ hour10.is(":first-child"));
	if(hour1.is(":first-child") && hour10.is(":first-child"))
	{
		$("ul.hourPlay1 li").removeClass("before");
		hour1.addClass("before")
			.removeClass("active");
		hourPlay10();
		
		hour1=$("ul.hourPlay1 li").eq(3)
			.addClass("active");
	}
	else if(hour1.is(":first-child"))
	{
		$("ul.hourPlay1 li").removeClass("before");
		hour1.addClass("before")
			.removeClass("active");
		hourPlay10();
		hour1=$("ul.hourPlay1 li").eq(9)
			.addClass("active");
	}
	else
	{
		$("ul.hourPlay1 li").removeClass("before");
		hour1.addClass("before")
			.removeClass("active")
			.prev("li")
			.addClass("active");
	}
	
}

function hourPlay10()
{
	var hour10=$("ul.hourPlay10 li.active");
	
	if(hour10.is(":first-child"))
	{
		$("ul.hourPlay10 li").removeClass("before");
		hour10.addClass("before")
			.removeClass("active");
			
		dayPlay1();
		
		hour10=$("ul.hourPlay10 li").eq(2)
			.addClass("active");
	}
	else
	{
		$("ul.hourPlay10 li").removeClass("before");
		hour10.addClass("before")
			.removeClass("active")
			.prev("li")
			.addClass("active");
	}
	
}

function dayPlay1()
{
	var aa=$("ul.dayPlay1 li.active");
	if(aa.is(":first-child"))
	{
		$("ul.dayPlay1 li").removeClass("before");
		aa.addClass("before")
			.removeClass("active");
		
		dayPlay10();
		
		aa=$("ul.dayPlay1 li").eq(9)
			.addClass("active");
	}
	else
	{
		$("ul.dayPlay1 li").removeClass("before");
		aa.addClass("before")
			.removeClass("active")
			.prev("li")
			.addClass("active");
	}
}

function dayPlay10()
{
	var aa=$("ul.dayPlay10 li.active");
	if(aa.is(":first-child"))
	{
		$("ul.hourPlay10 li").removeClass("before");
		aa.addClass("before")
			.removeClass("active");
		
		aa=$("ul.dayPlay1 li").eq(9)
			.addClass("active");
	}
	else
	{
		$("ul.hourPlay10 li").removeClass("before");
		aa.addClass("before")
			.removeClass("active")
			.prev("li")
			.addClass("active");
	}
}