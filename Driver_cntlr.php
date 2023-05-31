<?php

use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\SignatureInvalidException;
use Firebase\JWT\Key;

class Driver_cntlr extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: *');
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        $this->load->model('Driver_model');
    }

    public function AdminName()
    {

        $data = $this->Driver_model->getAdmin();
        $this->output->set_content_type('application/json')->set_output(json_encode(['adminName' => $data, 'status' => true]));
    }

    // public function AdminName()
    // {

    //     $header = apache_request_headers();
    //     $token = $header['Authorization'];
    //     try {
    //         $decoded = JWT::decode($token, new Key($this->config->item('encryption_key'), 'HS256'));
    //         // Your section starts here

    //         $data = json_decode(file_get_contents("php://input"), true);
    //         $d = $this->Driver_model->getAdmin();
    //         $this->output->set_content_type('application/json')->set_output(json_encode(['adminName' => $d, 'status' => true]));

    //         // Your section ends here
    //     } catch (ExpiredException $e) {
    //         $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => $e->getMessage(), 'status' => false]));
    //     } catch (SignatureInvalidException $s) {
    //         $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => $s->getMessage(), 'status' => false]));
    //     } catch (Exception $ex) {
    //         $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => $ex->getMessage(), 'status' => false]));
    //     }
    // }


    public function saveDriver()
    {

        $header = apache_request_headers();
        $token = $header['Authorization'];
        try {
            $decoded = JWT::decode($token, new Key($this->config->item('encryption_key'), 'HS256'));
            // Your section starts here

            $data = json_decode(file_get_contents("php://input"), true);
            $d = $this->Driver_model->insDriver($data);
            $this->output->set_content_type('application/json')->set_output(json_encode(['msg' => 'Successfully Inserted!', 'status' => true]));

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
