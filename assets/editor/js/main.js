/*
Copyright (c) 2016 leadmoksha
------------------------------------------------------------------
[Master Javascript]

Project:	leadmoksha

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
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
		},
		
		/*-------------- leadmoksha Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		Elem_dragable: function () {
			$( "#sortable" ).sortable({ handle: ".emement_move" });	
			$( "#sortable" ).disableSelection();

			/*popup dragable*/
			$( ".ed_element_popup" ).draggable({ 
				handle: ".ed_ele_popup_header",
				containment: "body"
			});	
		},
		Elem_dragable_destroy: function (){
			$( "#sortable" ).sortable('destroy');
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
			$('.ed_element_wrapper > .add_element').on('click', function(){
				$('.ed_element_popup').addClass('popup_open');
			});
			$('.ed_ele_popup_close').on('click', function(){
				$('.ed_element_popup').removeClass('popup_open');
			});
			// close popup by ESCAPE key pressed
			$(document).keydown(function(e) {
				if (e.keyCode == 27) {
					$('.ed_element_popup').removeClass('popup_open');
				}
			});
		},
		AppendAddElementBtn: function(){
			$('.ed_section').append('<div class="add_element"><a><i class="fa fa-plus" aria-hidden="true"></i></a><div class="ed_add_grid"><h3>Insert a new row below</h3><ul class="ed_grid_columns_layout"><li class="" data-layout="4_4"><span data-layout="4_4" class="column-block-wrap" style="width: 100%;"><span class="column-block" data-layout="4_4" data-section="regular"></span></span></li><li class="" data-layout="1_2,1_2"><span data-layout="1_2,1_2" class="column-block-wrap" style="width: 50%;"><span class="column-block" data-layout="1_2,1_2" data-section="regular"></span></span><span data-layout="1_2,1_2" class="column-block-wrap" style="width: 50%;"><span class="column-block" data-layout="1_2,1_2" data-section="regular"></span></span></li><li class="" data-layout="1_3,1_3,1_3"><span data-layout="1_3,1_3,1_3" class="column-block-wrap" style="width: 33.3333%;"><span class="column-block" data-layout="1_3,1_3,1_3" data-section="regular"></span></span><span data-layout="1_3,1_3,1_3" class="column-block-wrap" style="width: 33.3333%;"><span class="column-block" data-layout="1_3,1_3,1_3" data-section="regular"></span></span><span data-layout="1_3,1_3,1_3" class="column-block-wrap" style="width: 33.3333%;"><span class="column-block" data-layout="1_3,1_3,1_3" data-section="regular"></span></span></li><li class="" data-layout="1_4,1_4,1_4,1_4"><span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_4,1_4,1_4" data-section="regular"></span></span><span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_4,1_4,1_4" data-section="regular"></span></span><span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_4,1_4,1_4" data-section="regular"></span></span><span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_4,1_4,1_4" data-section="regular"></span></span></li><li class="" data-layout="2_3,1_3"><span data-layout="2_3,1_3" class="column-block-wrap" style="width: 66.6667%;"><span class="column-block" data-layout="2_3,1_3" data-section="regular"></span></span><span data-layout="2_3,1_3" class="column-block-wrap" style="width: 33.3333%;"><span class="column-block" data-layout="2_3,1_3" data-section="regular"></span></span></li><li class="" data-layout="1_3,2_3"><span data-layout="1_3,2_3" class="column-block-wrap" style="width: 33.3333%;"><span class="column-block" data-layout="1_3,2_3" data-section="regular"></span></span><span data-layout="1_3,2_3" class="column-block-wrap" style="width: 66.6667%;"><span class="column-block" data-layout="1_3,2_3" data-section="regular"></span></span></li><li class="" data-layout="1_4,3_4"><span data-layout="1_4,3_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,3_4" data-section="regular"></span></span><span data-layout="1_4,3_4" class="column-block-wrap" style="width: 75%;"><span class="column-block" data-layout="1_4,3_4" data-section="regular"></span></span></li><li class="" data-layout="3_4,1_4"><span data-layout="3_4,1_4" class="column-block-wrap" style="width: 75%;"><span class="column-block" data-layout="3_4,1_4" data-section="regular"></span></span><span data-layout="3_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="3_4,1_4" data-section="regular"></span></span></li><li class="" data-layout="1_2,1_4,1_4"><span data-layout="1_2,1_4,1_4" class="column-block-wrap" style="width: 50%;"><span class="column-block" data-layout="1_2,1_4,1_4" data-section="regular"></span></span><span data-layout="1_2,1_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_2,1_4,1_4" data-section="regular"></span></span><span data-layout="1_2,1_4,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_2,1_4,1_4" data-section="regular"></span></span></li><li class="" data-layout="1_4,1_4,1_2"><span data-layout="1_4,1_4,1_2" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_4,1_2" data-section="regular"></span></span><span data-layout="1_4,1_4,1_2" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_4,1_2" data-section="regular"></span></span><span data-layout="1_4,1_4,1_2" class="column-block-wrap" style="width: 50%;"><span class="column-block" data-layout="1_4,1_4,1_2" data-section="regular"></span></span></li><li class="" data-layout="1_4,1_2,1_4"><span data-layout="1_4,1_2,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_2,1_4" data-section="regular"></span></span><span data-layout="1_4,1_2,1_4" class="column-block-wrap" style="width: 50%;"><span class="column-block" data-layout="1_4,1_2,1_4" data-section="regular"></span></span><span data-layout="1_4,1_2,1_4" class="column-block-wrap" style="width: 25%;"><span class="column-block" data-layout="1_4,1_2,1_4" data-section="regular"></span></span></li></ul></div></div>');
		},
		AppendGrid: function(){
			$('.add_element ul.ed_grid_columns_layout > li').on('click', function(){
				var li_attr1 = $(this).attr('data-layout');
				if(li_attr1 == '4_4'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-12 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 =='1_2,1_2'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_3,1_3,1_3'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_4,1_4,1_4,1_4'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '2_3,1_3'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-8 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_3,2_3'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-8 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_4,3_4'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-2 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-10 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '3_4,1_4'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-10 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-2 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_2,1_4,1_4'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_4,1_4,1_2'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr1 == '1_4,1_2,1_4'){
					$(this).parent().parent().parent().parent().after('<div class="ed_section new_section_adding"><div class="container"><div class="row sortable_div_wrapper"><div id="sortable"><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.AppendAddElementBtn();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}

			});
		},
		EditGrid: function(){
			$('.ed_ele_popup_body_inner > .ed_ele_wrapper > ul > li').on('click', function(){
				$('.ed_ele_popup_body_inner > .ed_ele_wrapper > ul > li').removeClass('active');	
				$(this).addClass('active');	
				var li_attr = $(this).attr('data-layout');
				if(li_attr == '4_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-12 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr =='1_2,1_2'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_3,1_3,1_3'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_4,1_4,1_4,1_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 col-sm-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '2_3,1_3'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-8 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_3,2_3'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-4 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-8 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_4,3_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-2 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-10 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '3_4,1_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-10 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-2 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_2,1_4,1_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_4,1_4,1_2'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}
				else if(li_attr == '1_4,1_2,1_4'){
					$('.sortable_div_wrapper > div').replaceWith('<div id="sortable"><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-6 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div><div class="col-md-3 sortable_div"><div class="ed_element_wrapper"><a class="add_element"><span><i class="fa fa-plus" aria-hidden="true"></i></span></a></div></div></div>');
					leadmoksha.AppendEleOption();
					leadmoksha.Elem_dragable_destroy();
					leadmoksha.Elem_dragable();
				}

			});
		},
		AppendEleOption: function(){
			// ed_element_wrapper
			$('.ed_element_wrapper').append('<div class="ed_element_option"><ul><li><a class="emement_move ui-sortable-handle" title="Move"><svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"><g><path d="M12.968 17.968a.747.747 0 0 0-1.057 0 .747.747 0 0 0 0 1.057l1.835 1.835a.308.308 0 0 0 .437 0l1.836-1.835a.749.749 0 0 0 0-1.057.752.752 0 0 0-1.06 0v-2.994h3a.747.747 0 0 0 0 1.057.747.747 0 0 0 1.056 0l1.836-1.835a.31.31 0 0 0 0-.437l-1.836-1.835a.747.747 0 0 0-1.057 0 .747.747 0 0 0 0 1.057h-3V9.987a1.28 1.28 0 0 0 1.057 0 .749.749 0 0 0 0-1.057l-1.827-1.84a.308.308 0 0 0-.437 0l-1.835 1.836a.747.747 0 0 0 0 1.057.747.747 0 0 0 1.057 0v2.994h-2.99a.747.747 0 0 0 0-1.057.747.747 0 0 0-1.058 0L7.09 13.755a.31.31 0 0 0 0 .437l1.835 1.835a.747.747 0 0 0 1.057 0 .747.747 0 0 0 0-1.057h2.991l-.005 2.998z" fill-rule="evenodd"></path></g></svg></a></li><li><a href="" title="Setting"><svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"><g><path d="M20.426 13.088l-1.383-.362a.874.874 0 0 1-.589-.514l-.043-.107a.871.871 0 0 1 .053-.779l.721-1.234a.766.766 0 0 0-.116-.917 6.682 6.682 0 0 0-.252-.253.768.768 0 0 0-.917-.116l-1.234.722a.877.877 0 0 1-.779.053l-.107-.044a.87.87 0 0 1-.513-.587l-.362-1.383a.767.767 0 0 0-.73-.567h-.358a.768.768 0 0 0-.73.567l-.362 1.383a.878.878 0 0 1-.513.589l-.107.044a.875.875 0 0 1-.778-.054l-1.234-.722a.769.769 0 0 0-.918.117c-.086.082-.17.166-.253.253a.766.766 0 0 0-.115.916l.721 1.234a.87.87 0 0 1 .053.779l-.043.106a.874.874 0 0 1-.589.514l-1.382.362a.766.766 0 0 0-.567.731v.357a.766.766 0 0 0 .567.731l1.383.362c.266.07.483.26.588.513l.043.107a.87.87 0 0 1-.053.779l-.721 1.233a.767.767 0 0 0 .115.917c.083.087.167.171.253.253a.77.77 0 0 0 .918.116l1.234-.721a.87.87 0 0 1 .779-.054l.107.044a.878.878 0 0 1 .513.589l.362 1.383a.77.77 0 0 0 .731.567h.356a.766.766 0 0 0 .73-.567l.362-1.383a.878.878 0 0 1 .515-.589l.107-.044a.875.875 0 0 1 .778.054l1.234.721c.297.17.672.123.917-.117.087-.082.171-.166.253-.253a.766.766 0 0 0 .116-.917l-.721-1.234a.874.874 0 0 1-.054-.779l.044-.107a.88.88 0 0 1 .589-.513l1.383-.362a.77.77 0 0 0 .567-.731v-.357a.772.772 0 0 0-.569-.724v-.005zm-6.43 3.9a2.986 2.986 0 1 1 2.985-2.986 3 3 0 0 1-2.985 2.987v-.001z" fill-rule="evenodd"></path></g></svg></a></li><li><a href="" title="Duplicate"><svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"><g><path d="M16.919 15.391c.05-.124.074-.257.072-.39v-6a1.02 1.02 0 0 0-.072-.389.969.969 0 0 0-.893-.612H7.969a.97.97 0 0 0-.893.611c-.05.124-.076.256-.076.39v6c0 .134.026.266.076.39.146.365.5.604.893.605h8.057a.968.968 0 0 0 .893-.605zm3.074-3.413a1 1 0 0 0-1 1v5.011h-7.008a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1v-6.013a1 1 0 0 0-.992-.998zm-5.016 2.013H8.991v-3.988h5.986v3.993-.005z" fill-rule="evenodd"></path></g></svg></a></li><li><a href="" title="Reset Section"><svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"><g><path d="M18.95 9.051a1 1 0 1 0-1.414 1.414 5 5 0 1 1-7.07 0A1 1 0 0 0 9.05 9.051a7 7 0 1 0 9.9.001v-.001zm-5.378 8.235a.5.5 0 0 0 .857 0l2.117-3.528a.5.5 0 0 0-.429-.758H15V8a1 1 0 0 0-2 0v5h-1.117a.5.5 0 0 0-.428.758l2.117 3.528z" fill-rule="evenodd"></path></g></svg></a></li><li><a href="" title="Remove"><svg viewBox="0 0 28 28" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision"><g><path d="M19 9h-3V8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1H9a1 1 0 1 0 0 2h10a1 1 0 0 0 .004-2H19zM9 20c.021.543.457.979 1 1h8c.55-.004.996-.45 1-1v-7H9v7zm2.02-4.985h2v4h-2v-4zm4 0h2v4h-2v-4z" fill-rule="evenodd"></path></g></svg></a></li></ul></div>');
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
		leadmoksha.AppendEleOption();
		
		
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