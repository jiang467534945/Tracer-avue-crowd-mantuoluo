export const orderTutorOption = {
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

                hide:true,
                visdiplay:false,
                rules: [{
                    required: true,
                    message: "请输入编号",
                    trigger: "blur"
                }]
            },
        /**导师ID*/
        {
        label:"导师ID",
        prop:"tutorId",

            rules: [{
                   required: true,
                   message: "导师ID",
                   trigger: "blur"
               }]
        },
        /**用户ID*/
        {
        label:"用户ID",
        prop:"memberId",

            rules: [{
                   required: true,
                   message: "用户ID",
                   trigger: "blur"
               }]
        },
        /**金额*/
        {
        label:"金额",
        prop:"tofee",

            rules: [{
                   required: true,
                   message: "金额",
                   trigger: "blur"
               }]
        },
        /**分润关联*/
        {
        label:"分润关联",
        prop:"conId",

            rules: [{
                   required: true,
                   message: "分润关联",
                   trigger: "blur"
               }]
        },
        /**分润类型*/
        {
        label:"分润类型",
        prop:"type",

            rules: [{
                   required: true,
                   message: "分润类型",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"payId",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
    ]

};

