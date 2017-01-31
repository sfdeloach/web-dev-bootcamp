//console.log("jQuery Selector Exercise");
//console.log("linked to webDevBoot-16-163.html");
//console.log("created by sfdeloach on 01/30/2017");

// Correctly include jQuery
try {
    jQuery ? console.log("jQuery loaded") : "jQuery not loaded";
} catch (err) {
    console.log("jQuery not loaded");
}
try {
    appleSauce ? console.log("appleSauce loaded") : "appleSauce not loaded";
} catch (err) {
    console.log("appleSauce not loaded");
}

// Select all divs and give them a purple background
$("div").css("backgroundColor", "purple");

// Select the divs with class "highlight" and make them 200 px wide
$(".highlight").css("width", "200px");

// Select the div with id "third" and give it an orange border
$("#third").css("border", "1px solid orange");

// Bonus: Select the first div only and change its font color to pink
$("div").first().css("color", "pink");
$("div:first-of-type").css("color", "pink");
$("div:first").css("color", "pink"); // this is a little slower
