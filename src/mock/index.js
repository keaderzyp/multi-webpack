import(/* webpackChunkName:"mock" */'mockjs').then(Mock => {
    Mock.mock('/getList',{
        hello:'aa'
    })
})
