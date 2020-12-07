const template = () => {
    const html = `<div id="sidebar-menu">
                    <ul>
                        <li class="text-muted menu-title">Navegación</li>

                        <li class="has_sub">
                            <a href="#" class="waves-effect active"><i class="ti-home"></i> <span> Principal </span> </a>
                            <ul class="list-unstyled">
                                <li class="active"><a href="vInicio.html">Inicio</a></li>
                                <li><a href="vProcesos.html">Procesos</a></li>
                                <li><a href="vEmpUsuarios.html">Usuarios</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="clearfix"></div>`

    return html
}

const MenuBar = {
    template: template()
}

export default MenuBar