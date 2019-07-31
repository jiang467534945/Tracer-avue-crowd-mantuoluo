import request from '@/router/axios';
export const getWebSite = () => {
    return request({
        url: '/mantuoluo/index/webSite',
        method: 'get',
    })
}
