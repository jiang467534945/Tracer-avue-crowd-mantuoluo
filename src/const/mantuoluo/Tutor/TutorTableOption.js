import {DIC }from '@/const/dic.js';

export const vTutorOption = {
    border: true,
    index: true,
    indexLabel: '序号',
    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,
    menuWidth:300,
    menuAlign:'center',
    align:'center',
    stripe:true,
    column: [
    {
                label: "编号",
                prop: "id",
                hide:true,
                visdiplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        /**用户ID(关联用户表)*/
        {
        label:"用户",
        prop:"userId",
            dicUrl:'/mantuoluo/memberUser/allList',
            dicMethod:'get',
            props:{
                label: "openId",
                value: "id",
            },
            rules: [{
                   required: true,
                   message: "用户ID(关联用户表)",
                   trigger: "blur"
               }]
        },
        /**导师姓名*/
        {
        label:"姓名",
        prop:"name",
            rules: [{
                   required: true,
                   message: "导师姓名",
                   trigger: "blur"
               }]
        },
        /**微信信息*/
        {
        label:"二维码",
        prop:"message",
            accept:"image",
            type: 'upload',
            listType:'picture-img',


            rules: [{
                   required: true,
                   message: "微信信息",
                   trigger: "blur"
               }]
        },
        /**导师联系方式*/
        {
        label:"联系方式",
        prop:"phone",
            rules: [{
                   required: true,
                   message: "导师联系方式",
                   trigger: "blur"
               }]
        },
        /**微信收款二维码*/
        {
        label:"收款二维码",
        prop:"image",
            type: 'upload',
            listType:'picture-img',
            propsHttp: {
                name: 'label',
                url: 'url'
            },
            props: {
                label: 'label',
                value: 'url'
            },
            action: 'http://localhost:3000/file/fileUplod?projectName=Tracer&modelName=UserHead',
            rules: [{
                   required: true,
                   message: "微信收款二维码",
                   trigger: "blur"
               }]
        },
        /**是否审核(0.未审核  1.已审核)*/
        {
        label:"审核状态",
        prop:"status",
            dicData:DIC.checkStatusType,
            rules: [{
                   required: true,
                   message: "是否审核(0.未审核  1.已审核)",
                   trigger: "blur"
               }]
        },
        /**是否通过(0.未通过 1.已通过)*/
        {
        label:"状态",
        prop:"pass",
            dicData:DIC.checkSuccessType,

            rules: [{
                   required: true,
                   message: "是否通过(0.未通过 1.已通过)",
                   trigger: "blur"
               }]
        },
        {
        label:"领域",
        prop:"typeId",
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },


    ]

};

