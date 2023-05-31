import './App.css';

function Menu() {
    return (
        <aside class="main-sidebar sidebar-dark-primary elevation-4">

            <a href="index3.html" class="brand-link">
                <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8" />
                <span class="brand-text font-weight-light">Admin Panel</span>
            </a>


            <div class="sidebar">

                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">
                        </a>
                    </div>
                </div>

                <div class="form-inline">
                    <div class="input-group" data-widget="sidebar-search">
                        <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div class="input-group-append">
                            <button class="btn btn-sidebar">
                                <i class="fas fa-search fa-fw"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li class="nav-item dropdown menu-open">
                            <a href="#" class="nav-link active">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>

                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>

                            <ul class="nav nav-treeview">
                                <li class="nav-item dropdown  ">
                                    <a href="#" class="nav-link ">
                                        <i class="right fas fa-angle-left"></i>
                                        <p>Users</p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item dropdown ">
                                            <a href="admin.php" class="nav-link">
                                                <i class="far fa-circle nav-icon "></i>
                                                <p>Add New Access</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown  ">
                                    <a href="#" class="nav-link">
                                        <i class="right fas fa-angle-left"></i>
                                        <p>Products</p>
                                    </a>

                                    <ul class="nav nav-treeview">
                                        <li class="nav-item  ">
                                            <a href="/ashraful/products.php" class="nav-link ">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Products</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown ">
                                    <a href="#" class="nav-link">
                                        <i class="right fas fa-angle-left"></i>
                                        <p>Targets</p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item " >
                                            <a href="/mamun/admin_target.php" class="nav-link ">
                                                <i class="fas fa-calculator"></i>
                                                <p >Create Admin Target</p>
                                            </a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="/mamun/admin_target_list.php" class="nav-link ">
                                                <i class="fas fa-calculator"></i>
                                                <p>Admin Target List</p>
                                            </a>
                                        </li>

                                        <li class="nav-item ">
                                            <a href="/alamin/marketing_target.php" class="nav-link ">
                                                <i class="fas fa-calculator"></i>
                                                <p>Create Manager Target</p>
                                            </a>
                                        </li>

                                    </ul >
                                </li >

                                <li class="nav-item dropdown " >
                                    <a href="#" class="nav-link">
                                        <i class="right fas fa-angle-left"></i>
                                        <p>Invoice</p>
                                    </a>
                                    <ul class="nav nav-treeview">
                                        <li class="nav-item">
                                            <a href="/sifath/create_invoice.php" class="nav-link ">
                                                <i class="fas fa-calculator"></i>
                                                <p>Create Invoice </p>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="/sharmin/list_invoice.php" class="nav-link ">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Invoice List</p>
                                            </a>
                                        </li >

                                    </ul >
                                </li >

                                <li class="nav-item">
                                    <a href="/logout.php" class="nav-link">
                                        <i class="nav-icon fas fa-th"></i>
                                        <p>
                                            Logout
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul >
                </nav >

            </div >

        </aside >
    );
}

export default Menu;