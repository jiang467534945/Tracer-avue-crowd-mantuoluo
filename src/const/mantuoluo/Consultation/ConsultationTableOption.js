import {DIC }from '@/const/dic.js';


export const consultationOption = {
    border: true,
    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,
    menuWidth:200,
    menuAlign:'center',
    align:'center',
    dicData:DIC,
    stripe:true,
    column: [
    {
                label: "编号",
                prop: "id",
                fixed: true,
                hide:true,
                visdiplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        /**类型0咨询类型1计算类型*/
        {
        label:"类型",
        prop:"type",
            type:"select",
       dicData:DIC.consultType,
            rules: [{
                   required: true,
                   message: "类型0咨询类型1计算类型",
                   trigger: "blur"
               }]
        },
        /**生日日期*/
        {
        label:"生日日期",
        prop:"birthDay",
            rules: [{
                   required: true,
                   message: "生日日期",
                   trigger: "blur"
               }]
        },
        /**生日码*/
        {
        label:"生日码",
        prop:"birthNum",
            rules: [{
                   required: true,
                   message: "生日码",
                   trigger: "blur"
               }]
        },
        /**用户id*/
        {
        label:"用户名称",
        prop:"memberId",
            type:"select",

            dicUrl:'/mantuoluo/memberUser/allList',
            dicMethod:'get',
            props:{
                label: "nickName",
                value: "id",
            },
            rules: [{
                   required: true,
                   message: "用户id",
                   trigger: "blur"
               }]
        },
        /**导师id*/
        {
        label:"导师名称",
        prop:"tutorId",
            type:"select",

            dicUrl:'/mantuoluo/tutor/allList',
            dicMethod:'get',
            props:{
                label: "name",
                value: "userId",
            },

            rules: [{
                   required: true,
                   message: "导师id",
                   trigger: "blur"
               }]
        },


        {
        label:"姓名",
        prop:"name",
            type:"text",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
            label:"婚姻",
            prop:"sex",
            type:"text",

            rules: [{
                required: true,
                message: "",
                trigger: "blur"
            }]
        },
        /**创建时间*/
        {
            label:"时间",
            prop:"creatTime",
            type:'date',
            rules: [{
                required: true,
                message: "创建时间",
                trigger: "blur"
            }],
            format: "yyyy-MM-dd hh:mm",
        },
    ]

};

