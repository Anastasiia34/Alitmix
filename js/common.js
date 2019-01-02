$(function() {
	$( "#searchInput").keypress(function(){
		$('#searchMenu').show()
	});
	$( "#searchInput").on('keydown', function(){
		$('#searchMenu').show()
	});

	$('#searchInput').focusout(function(){
		$('#searchMenu').hide()
	});

	$(document).click(function(event) {
		if (!$(event.target).closest(".modal-dialog").length) {
			$("#enter-cabinet").modal('hide');
		}
	});

	$(document).click(function(event) {
		if (!$(event.target).closest(".modal-dialog").length) {
			$("#registration").modal('hide');
		}
	});
	$('a#reg').click(function(){
		$("#enter-cabinet").modal('hide');
	});
	$('.fa-plus').click(function(){
		let newVal = parseInt($(event.target).siblings('.plus-minus').val()) + 1;
		$(event.target).siblings('.plus-minus').val(newVal)
	})
	$('.fa-minus').click(function(){
		let newVal = parseInt($(event.target).siblings('.plus-minus').val()) - 1;
		if(parseInt($(event.target).siblings('.plus-minus').val())>0){
			$(event.target).siblings('.plus-minus').val(newVal)
		}
	})
	$('#bill').modal('show')

	$('.password .fa-pen').click(function(){
		$('.change .form-control, .change label').css('pointer-events', 'auto');
		$('.change .form-control').css('border-bottom', '0.7px solid #B4B4B4').css('padding-bottom', '8px');
		$('.change .btn-light').css('display', 'block')
	});


    $('[type="submit"]').click(function(){
    	$('input').prop('required', true);
    	
    });
	


});
