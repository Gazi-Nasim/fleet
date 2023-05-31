import React from "react";
import Menu from "./Menu";
const Dashboard = () => {
    return (

        <div class="hold-transition sidebar-mini">
            <div class="wrapper">
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="navbar-search" href="#" role="button">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="navbar-search-block">
                                <form class="form-inline">
                                    <div class="input-group input-group-sm">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <button class="btn btn-navbar" type="submit">
                                                <i class="fas fa-search"></i>
                                            </button>
                                            <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                                <i class="fas fa-th-large"></i>
                            </a>
                        </li>
                    </ul>
                </nav>


                <Menu />


                <div class="content-wrapper">

                    <div class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1 class="m-0">Welcome </h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-right">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">CRM Software</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        <div class="container-fluid">
                            <div class="row">

                                <div class="col-lg-12">
                                    <div class="card card-primary card-outline">
                                        <div class="card-header">
                                            <h5 class="m-0">Thank You For Login !</h5>
                                        </div>
                                        <div class="card-body">
                                            <h6 class="card-title">You will find all your necessities on the <strong>left sidebar Menu</strong> </h6>
                                            <p class="card-text"></p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <aside class="control-sidebar control-sidebar-dark">

                    <div class="p-3">
                        <h5>Title</h5>
                        <p>Sidebar content</p>
                    </div>
                </aside>

                <footer class="main-footer">

                    <div class="float-right d-none d-sm-inline">

                    </div>

                    <strong>Copyright &copy; 2014-2023 <a href="https://adminlte.io">IsDB-BISEW</a>.</strong> All rights reserved.
                </footer>
            </div>
        </div>
    );
}
export default Dashboard;