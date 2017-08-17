<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Builder extends CI_Controller {
	public function index()
	{
		$this->load->view('builder/core');
	}

	public function getview( $path ) {
		$path = str_replace("74_90", "/", $path);
		$this->load->view('builder/sections/'.$path);
	}

	public function getviewss( $path ) {
		$path = str_replace("74_90", "/", $path);
		$this->load->view('builder/sections/elements/grids/'.$path);
	}
}
