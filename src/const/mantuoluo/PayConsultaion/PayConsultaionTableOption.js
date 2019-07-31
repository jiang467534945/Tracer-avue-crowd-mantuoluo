import {DIC }from '@/const/dic.js';

export const payConsultaionOption = {
    border: true,

    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,
    menuWidth:300,
    menuAlign:'center',
    formWidth: '60%',
    align:'center',
    stripe:true,
    column: [
    {
                label: "编号",
                prop: "id",
                width: "150",
                fixed: true,
                hide:true,
                visdiplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        {
        label:"订单号",
        prop:"orderNo",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"标题",
        prop:"orderName",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"订单类型",
        prop:"type",
        dicData:DIC.pay_type,
         type:'select',
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"订单状态",
        prop:"status",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"主商品",
        prop:"consultationId",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"用户",
        prop:"memberId",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**创建时间*/
        {
        label:"创建时间",
        prop:"creatTime",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "创建时间",
                   trigger: "blur"
               }]
        },
        /**是否已读  0 未读,  1已读 ,  默认 0未读*/
        {
        label:"状态",
        prop:"readed",

            rules: [{
                   required: true,
                   message: "是否已读  0 未读,  1已读 ,  默认 0未读",
                   trigger: "blur"
               }]
        },
        {
        label:"金额",
        prop:"totalFee",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"支付Id",
        prop:"prepayId",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
    ]

};

