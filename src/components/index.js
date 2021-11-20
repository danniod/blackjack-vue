import Vue from 'vue'
import HelloJack from "./core/HelloJack"
import Desk from "./core/Desk"
import Login from "./land/Login"


Vue.component('helloJack', HelloJack)
Vue.component('desk', Desk)


const login = new Vue(Login)
login.$mount()
document.body.appendChild(login.$el)
Vue.prototype.$login = login
export default login