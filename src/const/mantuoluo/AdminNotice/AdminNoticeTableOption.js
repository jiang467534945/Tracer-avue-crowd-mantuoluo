export const adminNoticeOption = {
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
        {
        label:"",
        prop:"content",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"createTime",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"type",

            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
    ]

};

