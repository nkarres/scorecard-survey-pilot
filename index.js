//surveyjs javascript
Survey
    .StylesManager
    // .applyTheme("default");
    .applyTheme("winterstone");

var surveyJSON = { 
	// cookieName: 'bf5b7f38-60fe-4ad9-b80a-a2e0e9652069', 
	surveyId: 'bf5b7f38-60fe-4ad9-b80a-a2e0e9652069'
}


// send results dxService
// var surveySendResult = function (s, options) {
//     if (options.success) {
//         s.getResult('7cafcce8-4bfb-4cbd-ac4d-84d1f1cd35ea', 'langs');
//     }
// };

function sendDataToServer(survey) {
    survey.sendResult('f4362cfd-402d-40f6-a562-bb76aecf595a');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});


// save local storage
var storageName = "survey_water_funds_scorecard";
function saveSurveyData(survey) {
    var data = survey.data;
    data.pageNo = survey.currentPageNo;
    window
        .localStorage
        .setItem(storageName, JSON.stringify(data));
}

survey
    .onPartialSend
    .add(function (survey) {
        saveSurveyData(survey);
    });

survey
    .onComplete
    .add(function (survey, options) {
        saveSurveyData(survey);
    });

survey.sendResultOnPageNext = true;
var prevData = window
    .localStorage
    .getItem(storageName) || null;
if (prevData) {
    var data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
        survey.currentPageNo = data.pageNo;
    }
}

// show nav bar after first page
survey.onPartialSend.add(function () {
  $("nav").css("display", "block")
});

survey.onAfterRenderPage.add(function(){
		$("html,body").scrollTop(0);
	});


// trying to do error checking
$(document).ready(function(){
	});

// go to pages
$(function(){
	$("nav li").eq(0).click(function () {
	  survey.currentPageNo = 0;
	});
	$("nav li").eq(1).click(function () {
	  survey.currentPageNo = 1;
	});
	$("nav li").eq(2).click(function () {
	  survey.currentPageNo = 2;
	});
	$("nav li").eq(3).click(function () {
	  survey.currentPageNo = 3;
	});
	$("nav li").eq(4).click(function () {
	  survey.currentPageNo = 4;
	});
	$("nav li").eq(5).click(function () {
	  survey.currentPageNo = 5;
	});
	$("nav li").eq(6).click(function () {
	  survey.currentPageNo = 6;
	});
	$("nav li").eq(7).click(function () {
	  survey.currentPageNo = 7;
	});
	$("nav li").eq(8).click(function () {
	  survey.currentPageNo = 8;
	});
	$("nav li").eq(9).click(function () {
	  survey.currentPageNo = 9;
	});
	$("nav li").eq(10).click(function () {
	  survey.currentPageNo = 10;
	});
	$("nav li").eq(11).click(function () {
	  survey.currentPageNo = 11;
	});
})




/*    jQuery.holdReady(true);
    setTimeout(function(){ jQuery.holdReady(false); }, 500);
    $(document).ready(function(){
        $("button#guide").click(function(){
            $("div.guide").slideToggle();
        });
    });*/
    $(function(){
       $("button.guide").click(function () {
          $(this).text(function(i, text){
              return text === "Guidance" ? "Hide Guidance" : "Guidance";
          })
       });
    })



//impacts opt groups
survey
    .onAfterRenderQuestion
    .add(function () {
            opt1 = "Ecosystem function impacts";
            opt2 = "Habitat impacts";
            opt3 = "Biodiversity impacts";
            opt4 = "Ecosystem benefit impacts";
            opt5 = "Other beneficial impacts";

            $( "option:contains('" + opt1 + "')" ).replaceWith( "<optgroup label='" + opt1 + "'" );
            $( "option:contains('" + opt2 + "')" ).before( "</optgroup>" );
            
            $( "option:contains('" + opt2 + "')" ).replaceWith( "<optgroup label='" + opt2 + "'" );
            $( "option:contains('" + opt3 + "')" ).before( "</optgroup>" );
            
            $( "option:contains('" + opt3 + "')" ).replaceWith( "<optgroup label='" + opt3 + "'" );
            $( "option:contains('" + opt4 + "')" ).before( "</optgroup>" );

            $( "option:contains('" + opt4 + "')" ).replaceWith( "<optgroup label='" + opt4 + "'" );
            $( "option:contains('" + opt5 + "')" ).before( "</optgroup>" );

            $( "option:contains('" + opt5 + "')" ).replaceWith( "<optgroup label='" + opt5 + "'" );
            $( "option:contains('" + opt5 + "')" ).after( "</optgroup>" );
    });

//interventions opt groups
survey
    .onAfterRenderQuestion
    .add(function () {
            opt1 = "Natural areas";
            optLast1 = "Artificial areas";
            opt3 = "Habitat Protection";
            opt4 = "Habitat Management";
            optLast2 = "Behavior Management";

            $( "option:contains('" + opt1 + "')" ).replaceWith( "<optgroup label='" + opt1 + "'" );
            $( "option:contains('" + optLast1 + "')" ).before( "</optgroup>" );

            $( "option:contains('" + optLast1 + "')" ).replaceWith( "<optgroup label='" + optLast1 + "'" );
            $( "option:contains('" + optLast1 + "')" ).after( "</optgroup>" );

            $( "option:contains('" + opt3 + "')" ).replaceWith( "<optgroup label='" + opt3 + "'" );
            $( "option:contains('" + opt4 + "')" ).before( "</optgroup>" );

            $( "option:contains('" + opt4 + "')" ).replaceWith( "<optgroup label='" + opt4 + "'" );
            $( "option:contains('" + optLast2 + "')" ).before( "</optgroup>" );

            $( "option:contains('" + optLast2 + "')" ).replaceWith( "<optgroup label='" + optLast2 + "'" );
            $( "option:contains('" + optLast2 + "')" ).after( "</optgroup>" );

    });

