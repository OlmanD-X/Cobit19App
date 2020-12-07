import HttpRequest from '../helpers/http.js'
import CONST from '../helpers/consts.js'
import Router from '../router/router.js'
import Layout from './Layout.js'

function template() {
    const html = `<div class="fixed-left">
                            ${Layout.template}
                            <div class="content-page">
                                <!-- Start content -->
                                <div class="content">
                                    <div class="container">

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="card-box">
                                                    <h4 class="m-t-0 m-b-20 header-title"><b>Lista de Empresas</b></h4>
                                                    <div class="">
                                                        
                                                        <a id="btnPrueba" class="btn btn-default btn-md waves-effect waves-light m-b-30" data-animation="fadein" data-plugin="custommodal" 
                                                        data-overlaySpeed="200" data-overlayColor="#36404a"><i class="md md-add"></i> Agregar Empresa</a>
                                                    </div>
                                                    <table class="table table-bordered m-0">
                                                                    
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Empresa</th>
                                                                <th>RUC</th>
                                                                <th>Teléfono</th>
                                                                <th>Email</th>
                                                                <th>Acciones</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            ${constructTable()}
                                                        </tbody>
                                                    </table>
                                                </div>
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

async function main() {
    Companies.companies = await getCompanies()
    Companies.template = template()
    CONST.ROOT.innerHTML = Companies.template
    addEventBtn()
}

function addEventBtn() {
    if (btnPrueba)
        btnPrueba.addEventListener('click', () => Router.navigate('/Home'))
}

async function getCompanies() {
    let headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
    let companies = null

    // try {
    //     let json = await fetch(`${CONST.API_URL}Companies/getCompanies`, {
    //         method: 'GET',
    //         headers
    //     })
    //     let response = await json.json();
    //     companies = response.response.data
    // } catch (error) {

    // }
    await HttpRequest({
        url: `${CONST.API_URL}Companies/getCompanies`,
        method: 'GET',
        body: {},
        headers: headers,
        cbSuccess: (response) => {
            companies = response.response.data
        },
        cbError: (err) => { console.dir(err) }
    })
    return companies
}

function constructTable() {
    let html = ''
    Companies.companies.forEach((element, index) => {
        html += `<tr data-id="${element.COMPANY_ID}">
                    <th scope="row">${index+1}</th>
                    <td>${element.COMPANY_NAME}</td>
                    <td>${element.RUC}</td>
                    <td>${element.PHONE}</td>
                    <td>${element.EMAIL}</td>
                    <td class="text-center">
                        <a class="table-action-btn"><i class="md md-edit"></i></a>
                        <a class="table-action-btn"><i class="md md-close"></i></a>
                    </td>
                </tr>`
    })
    return html
}

const Companies = {
    template: null,
    companies: null,
    main: main
}


export default Companies