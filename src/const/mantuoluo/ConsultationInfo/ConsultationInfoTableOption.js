import {DIC }from '@/const/dic.js';

export const consultationInfoOption = {
    border: true,

    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,
    menuWidth:100,
    menuAlign:'center',

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
        /**用户id*/
        {
            label:"用户",
            prop:"memberId",
            dicUrl:'/mantuoluo/memberUser/allList',
            type:'select',
            dicMethod:'get',
            props:{
                label: "openId",
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
            label:"导师",
            prop:"tutorId",
            type:'select',

            dicUrl:'/mantuoluo/tutor/allList',
            dicMethod:'get',
            props:{
                label: "name",
                value: "id",
            },
            rules: [{
                required: true,
                message: "导师id",
                trigger: "blur"
            }]
        },
        /**咨询类型*/
        {
        label:"类型",

        prop:"ctype",
            rules: [{
                   required: true,
                   message: "咨询类型",
                   trigger: "blur"
               }]
        },
        /**用户姓名*/
        {
        label:"姓名",
        prop:"memberName",
            rules: [{
                   required: true,
                   message: "用户姓名",
                   trigger: "blur"
               }]
        },
        /**用户手机号*/
        {
        label:"手机号",
        prop:"memberPhone",
            rules: [{
                   required: true,
                   message: "用户手机号",
                   trigger: "blur"
               }]
        },
        {
        label:"性别",
        prop:"memberSex",
            type:'select',

            dicData:DIC.SEX,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        /**婚姻状况*/
        {
        label:"婚姻",
        prop:"marriage",
            type:'select',

            dicData:DIC.HUNYIN,

            rules: [{
                   required: true,
                   message: "婚姻状况",
                   trigger: "blur"
               }]
        },
        /**子女数量*/
        {
        label:"子女",
        prop:"childNum",
            rules: [{
                   required: true,
                   message: "子女数量",
                   trigger: "blur"
               }]
        },


        /**生日日期*/
        {
        label:"生日",
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
        /**问题备注*/
        {
            label:"备注",
            prop:"context",
            rules: [{
                required: true,
                message: "问题备注",
                trigger: "blur"
            }]
        },
    ]

};

