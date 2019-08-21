const future = message => {
    $("#message").text(message);
}

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let unluckyChecked = $("input:checkbox[name=food]:checked").length;
        let luckyChecked = $("input:checkbox[name=animal]:checked").length;
        let cityChecked = $("input:checkbox[name=city]:checked").length;
        let seeChecked = $("input:checkbox[name=see]:checked").length;
        
        if(unluckyChecked >= 5 && luckyChecked > 4 && cityChecked >= 3 && seeChecked > 4) {
            future("You'll be really successful!")
        } else if (unluckyChecked >= 4 && luckyChecked > 3 && cityChecked > 4 && seeChecked > 3) {
            future("You'll achieve your current goal!")
        } else if (unluckyChecked >= 3 && luckyChecked > 2 && cityChecked > 5 && seeChecked > 2) {
            future ("You'll be respected by many people.")
        } else if (unluckyChecked >= 2 && luckyChecked > 1 && cityChecked >= 1 && seeChecked >= 1) {
            future("You'll become a big star.")
        } else {
            future("You'll be rich!")
        }

        $("form").hide();
        $("#result").show();
    });
});