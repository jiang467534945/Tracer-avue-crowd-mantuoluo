export const numTypeOption = {
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
        label:"",
        prop:"name",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
        {
        label:"",
        prop:"imagerPath",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "",
                   trigger: "blur"
               }]
        },
    ]

};

