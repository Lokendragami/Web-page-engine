<div class="ed_element_popup popup_open">
	<div class="ed_ele_popup_inner">
		<div class="ed_ele_popup_header">
			<h3>Insert Module</h3>
			<div class="ed_ele_popup_action">
				<div class="ed_ele_popup_action_btn ed_ele_popup_sidebar">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div class="ed_ele_popup_action_btn ed_ele_popup_close" ng-click="hidepopup()">
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
		<div class="ed_ele_popup_body ed_custom_scrollbar">
			<div class="ed_ele_popup_body_inner">
				

				<div ng-show="elementsListView">
					<!--search element start-->
					<div class="ed_ele_search">
						<div class="ed_input_wrapper">
							<input type="text" class="form-control" ng-model="elementSearch" placeholder="Search..."/> 
						</div>
					</div>
					<!--search element end-->

					<!--Insert Module start-->
					<div class="ed_ele_wrapper">
						<ul>
							<li ng-repeat="soloList in elementsList | filter : elementSearch">
								<a ng-click="insertTheElement(soloList)">{{soloList}}</a>
							</li>
						</ul>
					</div>
					<!--Insert Module end-->

				</div>


				<!--Element setting start-->
				<div class="ed_ele_wrapper" ng-hide="gridLayoutView">
					<div class="ed_ele_title">
						<h3>Grid Settings</h3>
						<p>Select and customize grid layout.</p>
					</div>
					<ul class="ed_grid_columns_layout">
						<li ng-click="appendrows('1')" data-layout="4_4">
							<span class="column-block-wrap" style="width: 100%;"><span></span></span>
						</li>
						
						<li ng-click="appendrows('1by2')" data-layout="1_2,1_2">
							<span data-layout="1_2,1_2" class="column-block-wrap" style="width: 50%;">
								<span data-layout="1_2,1_2"></span>
							</span>
							<span data-layout="1_2,1_2" class="column-block-wrap" style="width: 50%;">
								<span data-layout="1_2,1_2"></span>
							</span>
						</li>
						
						<li data-layout="1_3,1_3,1_3">
							<span data-layout="1_3,1_3,1_3" class="column-block-wrap" style="width: 33.3333%;">
								<span data-layout="1_3,1_3,1_3"></span>
							</span>
							<span data-layout="1_3,1_3,1_3" class="column-block-wrap" style="width: 33.3333%;">
								<span data-layout="1_3,1_3,1_3"></span>
							</span>
							<span data-layout="1_3,1_3,1_3" class="column-block-wrap" style="width: 33.3333%;">
								<span data-layout="1_3,1_3,1_3"></span>
							</span>
						</li>
						
						<li data-layout="1_4,1_4,1_4,1_4">
							<span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_4,1_4,1_4"></span>
							</span>
							<span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_4,1_4,1_4"></span>
							</span>
							<span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_4,1_4,1_4"></span>
							</span>
							<span data-layout="1_4,1_4,1_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_4,1_4,1_4"></span>
							</span>
						</li>
						
						<li data-layout="2_3,1_3">
							<span data-layout="2_3,1_3" class="column-block-wrap" style="width: 66.6667%;">
								<span data-layout="2_3,1_3"></span>
							</span>
							<span data-layout="2_3,1_3" class="column-block-wrap" style="width: 33.3333%;">
								<span data-layout="2_3,1_3"></span>
							</span>
						</li>
						
						<li data-layout="1_3,2_3">
							<span data-layout="1_3,2_3" class="column-block-wrap" style="width: 33.3333%;">
								<span data-layout="1_3,2_3"></span>
							</span>
							<span data-layout="1_3,2_3" class="column-block-wrap" style="width: 66.6667%;">
								<span data-layout="1_3,2_3"></span>
							</span>
						</li>
						
						<li data-layout="1_4,3_4">
							<span data-layout="1_4,3_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,3_4"></span>
							</span>
							<span data-layout="1_4,3_4" class="column-block-wrap" style="width: 75%;">
								<span data-layout="1_4,3_4"></span>
							</span>
						</li>
						
						<li data-layout="3_4,1_4">
							<span data-layout="3_4,1_4" class="column-block-wrap" style="width: 75%;">
								<span data-layout="3_4,1_4"></span>
							</span>
							<span data-layout="3_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="3_4,1_4"></span>
							</span>
						</li>
						
						<li data-layout="1_2,1_4,1_4">
							<span data-layout="1_2,1_4,1_4" class="column-block-wrap" style="width: 50%;">
								<span data-layout="1_2,1_4,1_4"></span>
							</span>
							<span data-layout="1_2,1_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_2,1_4,1_4"></span>
							</span>
							<span data-layout="1_2,1_4,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_2,1_4,1_4"></span>
							</span>
						</li>
						
						<li data-layout="1_4,1_4,1_2">
							<span data-layout="1_4,1_4,1_2" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_4,1_2"></span>
							</span>
							<span data-layout="1_4,1_4,1_2" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_4,1_2"></span>
							</span>
							<span data-layout="1_4,1_4,1_2" class="column-block-wrap" style="width: 50%;">
								<span data-layout="1_4,1_4,1_2"></span>
							</span>
						</li>
						
						<li data-layout="1_4,1_2,1_4">
							<span data-layout="1_4,1_2,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_2,1_4"></span>
							</span>
							<span data-layout="1_4,1_2,1_4" class="column-block-wrap" style="width: 50%;">
								<span data-layout="1_4,1_2,1_4"></span>
							</span>
							<span data-layout="1_4,1_2,1_4" class="column-block-wrap" style="width: 25%;">
								<span data-layout="1_4,1_2,1_4"></span>
							</span>
						</li>
					</ul>
				</div>
				<!--Element setting end-->


			</div>
		</div> 

	</div>
</div>