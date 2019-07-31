import {DIC }from '@/const/dic.js';

export const siteSettingOption = {
    border: true,

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
        addDisplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        /**计算付款*/
        {
        label:"计算付款",
        prop:"onePrice",

            rules: [{
                   required: true,
                   message: "计算付款",
                   trigger: "blur"
               }]
        },
        /**导师*/
        {
        label:"咨询付款",
        prop:"twoPrice",

            rules: [{
                   required: true,
                   message: "导师",
                   trigger: "blur"
               }]
        },
        /**计算分成*/
        {
        label:"计算分成",
        prop:"oneProportion",

            rules: [{
                   required: true,
                   message: "计算分成",
                   trigger: "blur"
               }]
        },
        /**咨询分成*/
        {
        label:"咨询分成",
        prop:"twoProportion",

            rules: [{
                   required: true,
                   message: "咨询分成",
                   trigger: "blur"
               }]
        },
    ]

};

