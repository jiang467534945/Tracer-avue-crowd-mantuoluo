import { setToken, removeToken,setRefreshtokenKey } from '@/util/auth'
import { setStore, getStore } from '@/util/store'
import { isURL } from '@/util/validate'
import {deepClone } from '@/util/util'
import webiste from '@/const/website'
import { loginByUsername, getUserInfo, getMenu, logout, getMenuAll, RefeshToken } from '@/api/user'


function addPath(ele, first) {
    const propsConfig = webiste.menu.props;
    const propsDefault = {
        label: propsConfig.label || 'label',
        path: propsConfig.path || 'path',
        icon: propsConfig.icon || 'icon',
        children: propsConfig.children || 'children'
    }
    const isChild = ele[propsDefault.children] && ele[propsDefault.children].length !== 0;
    if (!isChild && first) {
        ele[propsDefault.path] = ele[propsDefault.path] + '/index'
        return
    }
    ele[propsDefault.children].forEach(child => {
        if (!isURL(child[propsDefault.path])) {
            child[propsDefault.path] = `${ele[propsDefault.path]}/${child[propsDefault.path]?child[propsDefault.path]:'index'}`
        }
        addPath(child);
    })
}
const user = {
    state: {
        userInfo: {},
        permission: {},
        roles: [],
        menu: getStore({ name: 'menu' }) || [],
        menuAll: [],
        token: getStore({ name: 'token' }) || '',
        refreshToken:getStore({ name: 'refreshToken' }) || '',
    },
    actions: {
        //根据用户名登录
        LoginByUsername({ commit }, userInfo) {
            return new Promise((resolve) => {
                loginByUsername(userInfo.username, userInfo.password).then(res => {
                    const data = res.data;
                    commit('SET_TOKEN', data.access_token);
                    commit('SET_REFRESH_TOKEN', data.refresh_token);
                    commit('DEL_ALL_TAG');
                    commit('CLEAR_LOCK');
                    resolve(data);
                })
            })
        },
        //根据手机号登录
        LoginByPhone({ commit }, userInfo) {
            return new Promise((resolve) => {
                loginByUsername(userInfo.phone, userInfo.code).then(res => {

                })
            })
        },
        GetUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getUserInfo().then((res) => {
                    const data = res.data.data;
                    commit('SET_USERIFNO', data.user);
                    commit('SET_ROLES', data.roles);
                    commit('SET_PERMISSION', data.permissions)
                    resolve(data);
                }).catch(err => {
                    reject(err);
                })
            })
        },
        //刷新token
        RefeshToken({ commit }) {
            return new Promise((resolve, reject) => {
                var token =getStore({
                    name: 'refreshToken',
                });

                RefeshToken(token,"refresh_token").then(res => {
                    const data = res.data;
                    commit('SET_TOKEN', data.access_token);
                    commit('SET_REFRESH_TOKEN', data.refresh_token);

                    resolve(data);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        LogOut({ commit }) {
            return new Promise((resolve, reject) => {
                logout().then(() => {
                    console.log(3);

                    commit('SET_TOKEN', '')
                    commit('SET_MENU', [])
                    commit('SET_ROLES', [])
                    commit('DEL_ALL_TAG');
                    commit('CLEAR_LOCK');
                    removeToken()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //注销session
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                console.log(4);

                commit('SET_TOKEN', '')
                commit('SET_MENU', [])
                commit('SET_ROLES', [])
                commit('DEL_ALL_TAG');
                commit('CLEAR_LOCK');
                removeToken()
                resolve()
            })
        },
        //获取系统菜单
        GetMenu({ commit }, parentId) {
            return new Promise(resolve => {
                getMenu(parentId).then((res) => {
                    const data = res.data
                    let menu = deepClone(data);
                    menu.forEach(ele => {
                        addPath(ele, true);
                    })
                    commit('SET_MENU', menu)
                    resolve(menu)
                })
            })
        },
        //获取全部菜单
        GetMenuAll({ commit }) {
            return new Promise(resolve => {
                getMenuAll().then((res) => {
                    const data = res.data.data;
                    commit('SET_MENU_ALL', data);
                    resolve(data);
                })
            })
        },

    },
    mutations: {
        SET_TOKEN: (state, token) => {
            console.log(1);

            setToken(token);
            state.token = token;
            setStore({ name: 'token', content: state.token, type: 'session' })
        },
        SET_REFRESH_TOKEN: (state, token) => {
            setRefreshtokenKey(token);
            state.refreshToken = token;
            setStore({ name: 'refreshToken', content: state.refreshToken, type: 'session' });
        },
        SET_USERIFNO: (state, userInfo) => {
            state.userInfo = userInfo;
        },
        SET_MENU: (state, menu) => {
            state.menu = menu
            setStore({ name: 'menu', content: state.menu, type: 'session' })
        },
        SET_MENU_ALL: (state, menuAll) => {
            state.menuAll = menuAll;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
            setStore({ name: 'roles', content: state.roles, type: 'session' })

        },
        SET_PERMISSION: (state, permission) => {
            state.permission = {};
            permission.forEach(ele => {
                state.permission[ele] = true;
            });
        }
    }

}
export default user
