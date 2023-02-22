function pauseAllExcept(class_name)
{
    $("." + class_name).removeClass("pauseA");
    for (var i = 0; i < numberOfAudios - 1; i++)
    {
        $(".pauseA")[i].pause();
    }
    $("." + class_name).addClass("pauseA");
}


function scrollTo(elementId)
{
    $('html, body').animate({
        scrollTop: $("#" + elementId).offset().top
    }, 10);
}


function autoPlay()
{
    if(autoPlayFlag === false)
    {
        currentSurah = 0;
    }
    $("#ruqyahStart").prop( "disabled", true );
    autoPlayFlag = true;
    var play_list = document.querySelectorAll("audio");
    play_list[currentSurah].play();


}


function crnt_time()
{
    var sound1 = $("." + soundClass);
    exact_time = sound1[0].currentTime;
    exact_time = Math.floor(exact_time);
    if (exact_time < condition[0])
    {
        $(".high").removeClass("red-color");
        $("." + classes[0]).addClass("red-color");
    }
    else if (exact_time < condition[1])
    {

        $(".high").removeClass("red-color");
        $("." + classes[1]).addClass("red-color");
    }
    else if (exact_time < condition[2])
    {

        $(".high").removeClass("red-color");
        $("." + classes[2]).addClass("red-color");
    }
    else if (exact_time < condition[3])
    {

        $(".high").removeClass("red-color");
        $("." + classes[3]).addClass("red-color");
    }
    else if (exact_time < condition[4])
    {

        $(".high").removeClass("red-color");
        $("." + classes[4]).addClass("red-color");
    }
    else if (exact_time < condition[5])
    {

        $(".high").removeClass("red-color");
        $("." + classes[5]).addClass("red-color");
    }
    else if (exact_time < condition[6])
    {

        $(".high").removeClass("red-color");
        $("." + classes[6]).addClass("red-color");
    }
    else if (exact_time < condition[7])
    {

        $(".high").removeClass("red-color");
        $("." + classes[7]).addClass("red-color");
    }
    else if (exact_time < condition[8])
    {

        $(".high").removeClass("red-color");
        $("." + classes[8]).addClass("red-color");
    }
    else if (exact_time < condition[9])
    {

        $(".high").removeClass("red-color");
        $("." + classes[9]).addClass("red-color");
    }
          
}

//---------------------------surahs---------------------------
//nas
function surah_nas()
{ 
    scrollTo("surah-Nas")
    
    currentSurah = 5;
    soundClass = "an";
    condition = [12,19,24,30,38,47,57,63,66,73];
    classes = ["1n","2n","3n","4n","5n","6n","7n","8I","9I","10I"];
    pauseAllExcept(soundClass);
    
     interval_6 = setInterval(crnt_time, 1000);
}
//falaq
function surah_falaq()
{ 
    scrollTo("surah-Falaq");
    currentSurah = 4;
    soundClass = "audio_falaq";
    condition = [13,16,20,25,32,39,57,63,66,73];
    classes = ["1f","2f","3f","4f","5f","6f","7f","8I","9I","10I"];
    pauseAllExcept(soundClass);
     interval_6 = setInterval(crnt_time, 1000);
}
//ikhlas

function surah_ikhlas()
{ 
    scrollTo("surah-Ikhlas");
    currentSurah = 3;
    soundClass = "ai";
    condition = [12,16,18,21,29,47,57,63,66,73];
    classes = ["1I","2I","3I","4I","5I","6I","7I","8I","9I","10I"];
    pauseAllExcept(soundClass);
    
     interval_6 = setInterval(crnt_time, 1000);
}
//ayatul kursi
function surah_kursi()
{ 
    scrollTo("surah-Kursi");
    currentSurah = 2;
    soundClass = "ak";
    condition = [11,20,27,33,41,47,57,63,66,73];
    classes = ["1k","2k","3k","4k","5k","6k","7k","8k","9k","10k"];
    pauseAllExcept(soundClass);
    
     interval_6 = setInterval(crnt_time, 1000);

}
//fatiha
function surah_fatiha()
{ 
    scrollTo("Al-Fatiha");
    currentSurah = 1;
    soundClass = "af";
    condition = [5,12,18,27,33,42,51,70,80,90];
    classes = ["1","2","3","4","5","6","7", "0","0","0"];
    pauseAllExcept(soundClass);
    
    
    interval_6 = setInterval(crnt_time, 1000);
}


//-----------------------------------------------------------
                        //variables
setTimeout(function(){alert("Open this site on 'Google Chrome'")} ,4000);
var soundClass = "abcd";
var condition = [];
var classes = [];
var exact_time = 0;
var currentSurah = 0;
var autoPlayFlag = false;
var interval_6;
var numberOfAudios = $("audio").length;
//-----------------------------------------------------------
                        //Al-Fatiha

$(".af").on("play", surah_fatiha);

//-----------------------------------------------------------
                        //Surah Kursi

$(".ak").on("play", surah_kursi);

//-----------------------------------------------------------
                        //Surah Ikhlas

$(".ai").on("play", surah_ikhlas);

//-----------------------------------------------------------
                        //Surah Falaq.

$(".audio_falaq").on("play", surah_falaq);

//-----------------------------------------------------------
                        //Surah nas.

$(".an").on("play",surah_nas);


$("#ruqyahStart").on("click", autoPlay);

$("audio").on("pause", function()
{
    clearInterval(interval_6);
})

$("audio").on("ended", function(){
    $(".high").removeClass("red-color");
    if (autoPlayFlag === true && currentSurah < 5)
    {
        autoPlay(currentSurah);
    }
    if(currentSurah === 5)
    {
        alert("After reciting all the duas blow on your hands 3 times and rub your hands all over your body.");
        autoPlayFlag = false;
        $("#ruqyahStart").prop( "disabled", false );
        currentSurah = 0;
    }
    
})
