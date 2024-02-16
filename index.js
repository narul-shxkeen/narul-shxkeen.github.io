$("#one").click(function () {
    $(this).css("display","none");
    $(".op").css("display","block");
    $(".productName").text("Select Product")
});
$(".others").click(function (){
    $(".item_").css("display","none");
    $(".otherText").css("display","block");
})