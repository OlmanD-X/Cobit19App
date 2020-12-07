import MenuBar from './MenuBar.js'
import UserBar from './UserBar.js'

const template = () => {
    let html = `<div class="left side-menu">
                    <div class="sidebar-inner slimscrollleft">
                        ${UserBar.template+MenuBar.template}
                    </div>
                </div>`
    return html
}

const LeftSideBar = {
    template: template()
}

export default LeftSideBar