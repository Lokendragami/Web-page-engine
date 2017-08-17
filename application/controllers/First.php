<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class First extends CI_Controller {
	public function index()
	{
		echo 'this is the first controller <br/> <a href="'.base_url('builder').'"> go to editor</a>';
	}

}
