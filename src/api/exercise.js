import fetch from '@/utils/fetch'

// function selectTabList(data) {
//     return fetch({
//         url: '/exercise/list',
//         method: 'post',
//         data: data
//     })
// }
 function selectList(data) {
    return fetch({
        url: '/exercise/list',
        method: 'post',
        data: data
    })
}

function selectTabList(data) {
    return fetch({
        url: '/exercise/tab/list',
        method: 'get',
        data: data
      })
}
export {
    selectTabList,
    selectList
}
