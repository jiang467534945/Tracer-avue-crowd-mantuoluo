import {DIC }from '@/const/dic.js';
export const numCodeOption = {
    border: true,

    selection: true,
    columnBtn:false,
    refreshBtn:false,
    addBtn:false,
    delBtn:false,
    editBtn:false,
    menuWidth:150,
    menuAlign:'center',
    formWidth: '100%',
    align:'center',
    stripe:true,
    column: [
    {
                label: "编号",
                prop: "id",
                width: "150",
                fixed: true,
                hide:true,
                visdiplay:true,
                addDisplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        {
        label:"数字",
        prop:"numberCode",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
            label:"类型",
            prop:"type",
            type:'select',
            dicData:DIC.code_type,
            span:34,
            rules: [{
                required: true,
                message: "",
                trigger: "blur"
            }]
        },
        {
        label:"优点",
        prop:"advantage",
            component: "ueditor",
            overHidden:true,
            span:34,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"缺点",
        prop:"shortcoming",
            span:34,

            overHidden:true,
            component: "ueditor",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"建议",
        prop:"proposal",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },

        {
        label:"天赋",
        prop:"talent",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"性格",
        prop:"charactert",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"婚姻",
        prop:"marriage",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"亲子",
        prop:"parenting",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"事业",
        prop:"cause",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"人脉",
        prop:"connections",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"健康",
        prop:"healthy",
            span:34,

            overHidden:true,
            component: "ueditor",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"成长",
        prop:"grow",
            span:34,
            component: "ueditor",

            overHidden:true,

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
    ]

};

