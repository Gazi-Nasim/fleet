<?php
class User_model extends CI_Model
{
    public function list()
    {
        return $this->db->get('admin')->result();
    }

    public function saveuser($data)
    {
        return $this->db->insert('admin', $data);
    }

    

    public function deleteuser($id)
    {
        $this->db->where('id', $id)->delete('admin');
    }

    public function edituser($id)
    {
        return $this->db->where('id', $id)->get('admin')->row();
    }

    public function AuthLog($data)
    {
        return $this->db->where('email', $data['email'])
            ->where('password', $data['password'])
            ->get('admin');
    }

    public function save_user($data)
    {
        return $this->db->insert('admin',$data);
    }
}
