import request from '@/router/axios'
import { serialize } from '@/util/util'
/**
 * 部门分页查询
 * @param query
 * @constructor
 */
export function getPageList(data) {
    return request({
        url: '/mantuoluo/consultation/pageList',
        method: 'put',
        data: data
    })
}
/**
 * 带条件查询分页查询
 * @param query
 * @constructor
 */
export function searchPageList(data) {
    console.log()
    return request({
        url: '/mantuoluo/consultation/searchPageList',
        method: 'put',
        data: data
    })
}
/**
 * 查询所有
 *
 */
export function getAll() {
    return request({
        url: '/mantuoluo/consultation/allList' ,
        method: 'get'
    })
}
/**
 * 查询详情
 * @param id
 */
export function getObj(id) {
    return request({
        url: '/mantuoluo/consultation/' + id,
        method: 'get'
    })
}

/**
 * 新增
 * @param params
 */
export function add(params) {
    return request({
        url: '/mantuoluo/consultation/add',
        method: 'post',
        data: params
    })
}

/**
 * 删除部门
 * @param id
 */
export function del(id) {
    return request({
        url: '/mantuoluo/consultation/' + id,
        method: 'delete'
    })
}

/**
 * 修改
 * @param params
 */
export function edit(params) {
    return request({
        url: '/mantuoluo/consultation/edit',
        method: 'put',
        data: params
    })
}

