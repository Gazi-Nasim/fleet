<?php

use Firebase\JWT\JWT;

class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        $this->load->model('User_model');
    }

    public function index()
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $user = $this->Admin_model->login($data);
        if (isset($user)) {
            $token = array(
                "iss" => base_url(),
                "aud" => base_url(),
                "iat" => time(),
                "nbf" => time() + 5,
                "exp" => time() + 50000 * 60,
                "data" => ['name' => $user->name, 'id' => $user->id]
            );
            $t = JWT::encode($token, $this->config->item('encryption_key'), 'HS256');
            $this->output->set_content_type('application/json')->set_output(json_encode(['token' => $t, 'status' => true]));
        } else {
            $this->output->set_content_type('application/json')->set_output(json_encode(['status' => false]));
        }
    }
    public function profile()
    {
        $data = $this->input->request_headers();
        print_r($data['Authorization']);
    }

    public function carLogin()
    {
        $header = apache_request_headers();
        try {
            // Your section starts here

            $data = json_decode(file_get_contents("php://input"), true);
            $d = $this->User_model->AuthLog($data);
            $this->output->set_content_type('application/json')->set_output(json_encode(['status' => true]));

            // Your section ends here
        } catch (ExpiredException $e) {
            $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => $e->getMessage(), 'status' => false]));
        } catch (SignatureInvalidException $s) {
            $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => $s->getMessage(), 'status' => false]));
        } catch (Exception $ex) {
            $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => $ex->getMessage(), 'status' => false]));
        }
    }
}
