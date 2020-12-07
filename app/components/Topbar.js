const template = (company) => {
    const html = `<div class="topbar">
                    <!-- LOGO -->
                    <div class="topbar-left">
                        <div class="text-center">
                            <a class="logo"><i class="icon-magnet icon-c-logo" id="btnHome"></i><span>${company}<i class="md md-album"></i></span></a>
                        </div>
                    </div>

                    <!-- Button mobile view to collapse sidebar menu -->
                    <div class="navbar navbar-default" role="navigation">
                        <div class="container">
                            <div class="">
                                <div class="pull-left">
                                    <button class="button-menu-mobile open-left">
                                            <i class="ion-navicon"></i>
                                        </button>
                                    <span class="clearfix"></span>
                                </div>

                                <form role="search" class="navbar-left app-search pull-left hidden-xs">
                                    <input type="text" placeholder="Search..." class="form-control">
                                    <a><i class="fa fa-search"></i></a>
                                </form>


                                <ul class="nav navbar-nav navbar-right pull-right">
                                    <li class="dropdown">
                                        <a href="" class="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="true"><img src="public/assets/images/users/avatar-1.jpg" alt="user-img" class="img-circle"> </a>
                                        <ul class="dropdown-menu">
                                            <li><a id="btnLogout"><i class="ti-power-off m-r-5"></i> Cerrar Sesión</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <!--/.nav-collapse -->
                        </div>
                    </div>
                    </div>`

    return html
}

const TopBar = {
    template: template(localStorage.getItem('company'))
}

export default TopBar