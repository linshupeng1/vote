//投票
function vote() {
	$(".cnt li .btn-vote").on("click", function() {
		var voteNum = parseInt($(this).siblings().find(".num").text());
		if($(this).attr("data-num") == 1) {
			$(".popup-voted").fadeIn();
		} else {
			$(this).attr("data-num",1);
			$(".popup-success").fadeIn();
			voteNum = voteNum+1;
			$(this).siblings().find(".num").text(voteNum);
		}
	});
}

//确认按钮
function confirm() {
	$(".btn-confirm").on("click",function(){
		$(".popup").fadeOut();
	})
}

$(document).ready(function(){
	vote();
	confirm();
});
