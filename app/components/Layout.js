import TopBar from './TopBar.js'
import LeftSideBar from './LeftSideBar.js'

const template = () => {
    const html = `<div id="wrapper">
                    ${TopBar.template}${LeftSideBar.template}
                    </div>`
    return html
}


const Layout = {
    template: template()
}

export default Layout