<!DOCTYPE html>
<html ng-app="main">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta name="description"  content=""/>
	<meta name="keywords" content="">
	<meta name="author"  content=""/>
	<meta name="MobileOptimized" content="320">
	<title>Web page engine - Editor</title>
	<link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900" rel="stylesheet">
	<link rel="icon" type="image/ico" href="<?php echo base_url('assets/images/favicon.png'); ?>" />
	<link href="<?php echo base_url('assets/editor/css/bootstrap.min.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/editor/css/font-awesome.min.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/editor/css/jquery.mCustomScrollbar.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/editor/css/style.css'); ?>" rel="stylesheet">
	<link href="<?php echo base_url('assets/editor/css/template/temp_style.css'); ?>" rel="stylesheet">
</head>
<base href="<?php echo base_url();?>">
<body>
<div ng-view></div>


	<script src="<?php echo base_url('assets/editor/js/lib/angular.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/editor/js/lib/angular-route.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/editor/js/lib/angular-sanitize.min.js'); ?>"></script>

	<script src="<?php echo base_url('assets/editor/js/lib/jquery-3.2.1.min.js'); ?>"></script>
	<script src="<?php echo base_url('assets/editor/js/lib/jquery-ui.js'); ?>"></script>
	<script src="<?php echo base_url('assets/editor/js/plugin/custom_scrollbar/jquery.mCustomScrollbar.concat.min.js'); ?>"></script>

	<script src="<?php echo base_url('assets/editor/js/editor.js'); ?>"></script>
	<script src="<?php echo base_url('assets/editor/js/main.js'); ?>"></script>
</body>
</html> 