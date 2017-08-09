/*
Copyright (c) 2017 leadmoksha
------------------------------------------------------------------
[Master Javascript]

Project:	leadmoksha

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
    var targetEditButton;

	var leadmoksha = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- leadmoksha Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			//this.navToggle();
			this.Elem_dragable();
			this.ed_Scrollbar();
			this.AddElement();
            this.RemoveSection();
            this.DuplicateSection();
		},
		
		/*-------------- leadmoksha Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		Elem_dragable: function () {
			$( ".sortable" ).sortable({ handle: ".emement_move" });	
			$( ".sortable" ).disableSelection();

			/*popup dragable*/
			$( ".ed_element_popup" ).draggable({ 
				handle: ".ed_ele_popup_header",
				containment: "body"
			});	
		},
		Elem_dragable_destroy: function (){
			$( ".sortable" ).sortable('destroy');
		},
		ed_Scrollbar: function () {
			if($(".ed_custom_scrollbar").length){
				$(".ed_custom_scrollbar").mCustomScrollbar({
					scrollInertia:200,
				});
			}
			if($(".ed_custom_scrollbar_x").length){
				$(".ed_custom_scrollbar_x").mCustomScrollbar({
					scrollInertia:200,
					axis:"x"
				});
			}
			
		},
		AddElement: function(){ 
			$(document).on('click', '.ed_element_wrapper > .add_element' , function(){
                var random_id = (new Date).getTime(); 
                var targetParentDiv = $(this).closest('.ed_section');
                $('.ed_section').removeAttr('id');
                targetParentDiv.attr('id', random_id);    
                $('.ed_ele_popup_body_inner ul.ed_grid_columns_layout li').removeClass('active'); 
                $('.ed_ele_popup_body_inner ul.ed_grid_columns_layout').find('li[data-layout="'+targetParentDiv.attr('aection-type')+'"]').addClass('active');
				$('.ed_element_popup').addClass('popup_open').attr('target-div' , random_id); 
			});
  
			$(document).on('click', '.ed_ele_popup_close' , function(){
				$('.ed_element_popup').removeClass('popup_open');
			});

			// close popup by ESCAPE key pressed
			$(document).keydown(function(e) {
				if (e.keyCode == 27) {
					$('.ed_element_popup').removeClass('popup_open');
				}
			});
		},
		AppendAddElementBtn: function(_this){
			$(_this).closest('.ed_section').append($('.add_element:first')[0].outerHTML);
		},
		AppendGrid: function(){
			$(document).on('click' , '.add_element ul.ed_grid_columns_layout > li' , function(){
				var li_attr = $(this).attr('data-layout').split(',');
                var append_date = '';
                for(var i = 1; i <= li_attr.length; i++){
                    append_date += '<div class="col-md-'+li_attr[i-1]+' sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div>';
                }

                $(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding" aection-type="'+li_attr+'"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable">'+append_date+'</div></div></div></div>');
                leadmoksha.AppendEleOption();
                leadmoksha.AppendAddElementBtn(this);
                leadmoksha.Elem_dragable_destroy();
                leadmoksha.Elem_dragable();

			});
		},
        RemoveSection: function(){
            $(document).on('click' , 'a.removeSection' , function(){
                var conf = confirm('Are you sure to remove this section?');
                if(conf == true){
                    $(this).closest($(this).attr('data-target')).remove();
                }
            });
        },
        DuplicateSection: function(){
            console.log('dup');
            $(document).on('click' , 'a.duplicateSection' , function(){
                var btnAttr = $(this).attr('data-target');
                $(this).closest(btnAttr).after($(this).closest(btnAttr)[0].outerHTML);
            });
        } ,
		EditGrid: function(){
			$(document).on('click' , '.ed_ele_popup_body_inner > .ed_ele_wrapper > ul > li' , function(){
				$('.ed_ele_popup_body_inner > .ed_ele_wrapper > ul > li').removeClass('active');	
				$(this).addClass('active');	
				var li_attr = $(this).attr('data-layout');
				if(li_attr == '4_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div class="sortable"><div class="col-md-12 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
				}
                leadmoksha.AppendEleOption();
                leadmoksha.Elem_dragable_destroy(this);
                leadmoksha.Elem_dragable();
			});
		},
		AppendEleOption: function(_this){
			// ed_element_wrapper
            var targetSection = (typeof _this != 'undefined' && _this != '')?$(_this):$('.ed_element_wrapper'); 
            targetSection.each(function(){
                console.log($(this).text());    
                if(!$(this).find('.ed_element_option').length){
                    $(this).append($('div#elementOption').html());     
                }
            });
		}
		
	};

	// ready function
	$(document).ready(function() {
		leadmoksha.init();
	});
	

	// Load Event
	$(window).on('load', function() {
		/* Trigger side menu scrollbar */
		//leadmoksha.menuScrollbar();

		//$(".ml_loading_wrapper").delay(350).fadeOut("slow");
		
		var body_h = window.innerHeight;
		$('body').css('min-height',body_h);
		
		// add class on body
		setTimeout(function(){
			$('body').addClass('lm_site_loaded');
		},300);

		
		leadmoksha.AppendAddElementBtn();
		leadmoksha.AppendGrid();
		leadmoksha.EditGrid();
		leadmoksha.AppendEleOption('');
		
		
	});

	// Resize Event
	$(window).on('resize', function () {
		var body_h = window.innerHeight;
		$('body').css('min-height',body_h);
	});

	// Scroll Event
	$(window).on('scroll', function () {
		
	});
	
	

})(jQuery);