<?php
class Parts_model extends CI_Model
{
    public function list()
    {
        return $this->db->get('parts')->result();
    }

    public function get_stock_out()
    {
        $this->db->select('parts_stock_out.id as stockId, parts_stock_out.parts_id, parts_stock_out.qty, parts_stock_out.out_date, parts.name');
        $this->db->from('parts_stock_out');
        $this->db->join('parts', 'parts.id = parts_stock_out.parts_id');
        // $query = $this->db->get();
        return $this->db->get()->result();
    }

    public function save_stock($data)
    {
        return $this->db->insert('parts_stock_out', $data);
    }

    public function deleteparts($id)
    {
        $this->db->where('id', $id)->delete('parts_stock_out');
    }

    public function editparts($id)
    {
        //         $this->db->select('parts_id, qty, out_date');
        //         $this->db->from('parts_stock_out');
        //         $this->db->where('id', $id);
        //         $d = $this->db->get()->row();

        //         $this->db->select('*');
        //         $this->db->from('parts');
        //         $this->db->where('id', $d->parts_id);
        //         $da = $this->db->get()->row();

        // return ['stk'=>$d,'info'=>$da];

        // foreach ($d->result() as $a) {
        //     $this->db->select('name');
        //     $this->db->from('parts');
        //     $this->db->where('id', $a->parts_id);
        //      $q= $this->db->get()->row();
        // }

        $this->db->select('parts_stock_out.id as stockID, parts_stock_out.parts_id, parts_stock_out.qty, parts_stock_out.out_date, parts.name');
        $this->db->from('parts_stock_out');
        $this->db->join('parts', 'parts.id=parts_stock_out.parts_id');
        $this->db->where('parts_stock_out.id', $id);
        $query = $this->db->get();
        return $query->row();
    }

    public function updatestockout($data)
    {
        $this->db->where('id', $data['id'])->update('parts_stock_out', $data);
    }

    public function get_stock()
    {

        // $this->db->select('parts.name, parts.details, parts.status,(parts_stock_in.qty - parts_stock_out.qty - parts_in_maintenance.qty) as stock');
        // $this->db->from('parts');
        // $this->db->join('parts_stock_in', 'parts_stock_in.parts_id = parts.id');
        // $this->db->join('parts_stock_out', 'parts_stock_out.parts_id = parts.id');
        // $this->db->join('parts_in_maintenance', 'parts_in_maintenance.parts_id = parts.id');
        // $query = $this->db->get();
        // return $query->result();

        $this->db->select('parts.id, parts.name, parts.details, parts.status, (SELECT COALESCE(SUM(qty), 0) FROM parts_stock_in WHERE parts_id = parts.id) AS stock_in, (SELECT COALESCE(SUM(qty), 0) FROM parts_stock_out WHERE parts_id = parts.id) AS stock_out, (SELECT COALESCE(SUM(qty), 0) FROM parts_in_maintenance WHERE parts_id = parts.id) AS maintenance_qty');
        $this->db->from('parts');
        $data = $this->db->get()->result_array();

        foreach ($data as &$d) {
            $stock = $d['stock_in'] - $d['stock_out'] - $d['maintenance_qty'];
            $d['stock'] = $stock;
            unset($d['stock_in']);
            unset($d['stock_out']);
            unset($d['maintenance_qty']);
        }
        return $data;
    }

    public function stockDetails($id, $startDate, $endDate)
    {


        $this->db->select('name');
        $this->db->from('parts');
        $this->db->where('id', $id);
        $a = $this->db->get()->row()->name;

        $this->db->select('qty AS stock_in, purchase_date AS date');
        $this->db->from('parts_stock_in');
        $this->db->where('parts_id', $id);
        $this->db->where('date(purchase_date) >=', $startDate);
        $this->db->where('date(purchase_date) <=', $endDate);
        $b = $this->db->get();
        // if(isset($b)){

        //     $b=$b->stock_in;
        // }else{
        //     $b=0;
        // }

        $this->db->select('qty AS stock_out, out_date AS date');
        $this->db->from('parts_stock_out');
        $this->db->where('parts_id', $id);
        $this->db->where('date(out_date) >=', $startDate);
        $this->db->where('date(out_date) <=', $endDate);
        $c = $this->db->get();
        // if(isset($c)){
        //     $c=$c->stock_out;
        // }else{
        //     $c=0;
        // }

        $this->db->select('qty AS stock_maintanence, maintain_date AS date');
        $this->db->from('parts_in_maintenance');
        $this->db->where('parts_id', $id);
        $this->db->where('date(maintain_date) >=', $startDate);
        $this->db->where('date(maintain_date) <=', $endDate);
        $d = $this->db->get();
        // if(isset($d)){
        //     $d=$d->stock_maintanence;
        // }else{
        //     $d=0;
        // }

        // return ['name' => $a, 'stk_in' => $b, 'stk_out' => $c, 'stk_maintain' => $d];
        $res = array_merge($b->result_array(), $c->result_array(), $d->result_array());
        return $res;

        // $data['2023-04-25']=['stock_in'=>15,'stock_out'=>5,'maintanance'=>1];
        // $data['2023-04-26']=['stock_in'=>0,'stock_out'=>1,'maintanance'=>0];
    }
    public function get_stk($id, $date)
    {
        $this->db->select('qty AS stock_in');
        $this->db->from('parts_stock_in');
        $this->db->where('parts_id', $id);
        $this->db->where('date(purchase_date)', $date);
        $b = $this->db->get()->row();
        if (isset($b->stock_in)) {
            $data['in'] = $b->stock_in;
        } else {
            $data['in'] = 0;
        }

        $this->db->select('qty AS stock_out');
        $this->db->from('parts_stock_out');
        $this->db->where('parts_id', $id);
        $this->db->where('date(out_date)', $date);
        $c = $this->db->get()->row();
        if (isset($c->stock_out)) {
            $data['out'] = $c->stock_out;
        } else {
            $data['out'] = 0;
        }


        $this->db->select('qty AS stock_maintanence');
        $this->db->from('parts_in_maintenance');
        $this->db->where('parts_id', $id);
        $this->db->where('date(maintain_date)', $date);
        $d = $this->db->get()->row();
        if (isset($d->stock_maintanence)) {
            $data['main'] = $d->stock_maintanence;
        } else {
            $data['main'] = 0;
        }
        $data['date'] = $date;
        return $data;
    }
    public function test()
    {
        $this->db->select('qty AS stock_in');
        $this->db->from('parts_stock_in');
        $this->db->where('parts_id', 2);
        $this->db->where('date(purchase_date)', '2023-03-24');
        $b = $this->db->get()->row();
        return $b;
    }
}
