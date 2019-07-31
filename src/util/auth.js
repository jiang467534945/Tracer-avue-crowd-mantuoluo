import Cookies from 'js-cookie'
const TokenKey = 'x-access-token'
const RefreshtokenKey = 'x-refresh_token'


var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
export function getToken() {
    return Cookies.get(TokenKey)
}
export function getRefreshtokenKey() {
    return Cookies.get(RefreshtokenKey)
}
export function setToken(token) {
    return Cookies.set(TokenKey, token, { expires: inFifteenMinutes })
}
export function setRefreshtokenKey(refreshtoken) {
    return Cookies.set(RefreshtokenKey, refreshtoken, { expires: inFifteenMinutes })
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
