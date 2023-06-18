<?php

namespace App\Controllers;

class Dashboard extends BaseController
{
    public function index()
    {
        return view('dashboard_view');
    }

    public function getValue(){
        $new_orders = 100;
        $bounce_rate = 75;
        $user_count = 50;
        $unique_visitors = 20;

        //format data in associative array

        $data = array (
            'success' => true,
            'new_orders' => $new_orders,
            'bounce_rate' => $bounce_rate,
            'user_count' => $user_count,
            'unique_visitors' => $unique_visitors
        );

        return $this->response->setJSON($data);
    }
}