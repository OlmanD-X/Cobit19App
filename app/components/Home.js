import HttpRequest from '../helpers/http.js'
import CONST from '../helpers/consts.js'
import Router from '../router/router.js'
import Layout from './Layout.js'

const template = () => {
    const html = `<div class="fixed-left">
                        ${Layout.template}
                        <div class="content-page">
                            <!-- Start content -->
                            <div class="content">
                                <div class="container">

                                    <!-- Page-Title -->
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <h4 class="page-title">Inicio</h4>

                                        </div>
                                    </div>
                                </div>
                                <!-- container -->

                            </div>
                            <!-- content -->

                            <footer class="footer text-right">
                                2020 © Olman Quispe.
                            </footer>

                        </div>
                    </div>`
    return html
}

const main = () => {
    CONST.ROOT.innerHTML = Home.template
}

const Home = {
    template: template(),
    main: main
}

export default Home