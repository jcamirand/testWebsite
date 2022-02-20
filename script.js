document.addEventListener("DOMContentLoaded", function(){
    $(".gridItem").click(event => {
        console.log(event.currentTarget);
        let img = $(event.currentTarget).find("img")[0];
        let newSrc = img.src.replace("thumb", "big");
        $("#bigImg").attr("src", newSrc);
    });
});