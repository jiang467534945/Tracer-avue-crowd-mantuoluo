export const dDetailsOption = {
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
        /**用户ID*/
        {
        label:"用户ID",
        prop:"memberId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "用户ID",
                   trigger: "blur"
               }]
        },
        /**导师id*/
        {
        label:"导师id",
        prop:"tutorId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "导师id",
                   trigger: "blur"
               }]
        },
        /**支付金额*/
        {
        label:"支付金额",
        prop:"payment",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "支付金额",
                   trigger: "blur"
               }]
        },
        /**问题ID*/
        {
        label:"问题ID",
        prop:"consultationId",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "问题ID",
                   trigger: "blur"
               }]
        },
        /**创建时间*/
        {
        label:"创建时间",
        prop:"createTime",
        width:"150",
       fixed: true,
            rules: [{
                   required: true,
                   message: "创建时间",
                   trigger: "blur"
               }]
        },
    ]

};

