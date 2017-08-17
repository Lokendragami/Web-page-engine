<div class="ed_alert_wrapper ed_error">
	<div class="ed_alert_inner">
		<div class="icon"><i class="fa fa-exclamation" aria-hidden="true"></i></div>
		<div class="message">
			<p>Enter something nice!!</p>
		</div>
	</div>
</div>

<div class="ed_main_wrapper">
	<div class="ed_header">
		<div class="ed_logo">
			<a href="<?php echo base_url();?>"><img src="assets/editor/images/logo.png" alt="" /> Web page engine</a>
		</div>
		<div class="ed_header_right">
			<a class="ed_btn ed_check_alert" ng-click="savetemplate()">Save & Preview</a>
		</div>
	</div>

	<div class="ed_content_wrapper">
		<!--template area start-->
		<div class="ed_template_area">
			

			<div class="ed_grid_structure">
				<div class="ed_empty_template" id="emptyContent">
					<h2>Hey there! It seems there's nothing to display here.</h2>
					<span>Start building your contents by adding a row below.</span>

					<div class="add_element">
						
						<a ng-click="showthepopup=true"><i class="fa fa-plus" aria-hidden="true"></i></a>
						
					</div>

				</div>


				<div id="newElement"></div>



			</div>

		</div>
		<!--template area ends-->
	</div>
	s
</div>

<div ng-show="showthepopup">
	<?php include_once('popup.php');?>
</div>>
