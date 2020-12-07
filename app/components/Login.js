import HttpRequest from '../helpers/http.js'
import CONST from '../helpers/consts.js'
import Router from '../router/router.js'

const template = `<div ng-app="login" ng-controller="loginCtrl">
                    <div class="account-pages"></div>
                    <div class="clearfix"></div>
                    <div class="wrapper-page">
                        <div class=" card-box">
                            <div class="panel-heading">
                                <h3 class="text-center"> Iniciar Sesión <strong class="text-custom"></strong> </h3>
                            </div>

                            <div class="panel-body">
                                <form class="form-horizontal m-t-20" action="index.html">

                                    <div class="form-group ">
                                        <div class="col-xs-12">
                                            <input class="form-control" type="text" required="" placeholder="Username" id="username">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-xs-12">
                                            <input class="form-control" type="password" required="" placeholder="Password" id="pass">
                                        </div>
                                    </div>

                                    <div class="form-group ">
                                        <div class="col-xs-12">
                                            <div class="checkbox checkbox-primary">
                                                <input id="checkbox-signup" type="checkbox">
                                                <label for="checkbox-signup">
                                                    Recordarme
                                                </label>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="form-group text-center m-t-40">
                                        <div class="col-xs-12">
                                            <button class="btn btn-default btn-block text-uppercase waves-effect waves-light" type="submit" id="btnLogin">Ingresar</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    </div>`

const successLogin = response => {
    if (response.status == 200) {
        let dataUser = response.response.data
        localStorage.setItem('user', dataUser.user)
        localStorage.setItem('type', dataUser.type)
        localStorage.setItem('company', dataUser.company)
        localStorage.setItem('companyId', dataUser.companyId)
        localStorage.setItem('token', dataUser.token)
        Router.navigate('/home')
    } else {
        console.dir(response.response.message)
    }
}

const failedLogin = err => {
    console.dir(err)
}

const validateLogin = function(user, password) {
    let data = new FormData()
    data.append('username', user)
    data.append('pass', password)
    HttpRequest({ url: `${CONST.API_URL}Login/login`, method: 'POST', body: data, headers: {}, cbSuccess: successLogin, cbError: failedLogin })
}

const main = () => {
    CONST.ROOT.innerHTML = Login.template
    if (btnLogin) {
        btnLogin.addEventListener('click', e => {
            e.preventDefault()
            const user = username.value
            const password = pass.value
            validateLogin(user, password)
        })
    }
}

const Login = {
    name: 'Login',
    template: template,
    main: main
}

export default Login