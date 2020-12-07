const template = (user) => {
    const html = `<div class="user-details">
                    <div class="pull-left">
                        <img src="public/assets/images/users/avatar-1.jpg" alt="" class="thumb-md img-circle">
                    </div>
                    <div class="user-info">
                        <div class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">${user}<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:void(0)"><i class="md md-settings-power"></i> Cerrar Sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </div>`

    return html
}

const UserBar = {
    template: template(localStorage.getItem('user'))
}

export default UserBar