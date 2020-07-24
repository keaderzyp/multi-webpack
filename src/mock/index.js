import('mockjs').then(Mock => {
    console.log(Mock)
    Mock.mock('/getList',{
        hello:'aa'
    })
})
