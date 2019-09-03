let HOST_URL = window.location.protocol + '//' + window.location.host + '/r/';
let APITool = {};

APITool['setting'] = {
    getMenuTree: {
        url: HOST_URL + 'setting/menuTree',
        method: 'GET'
    }
};

APITool['user'] = {
    //登录
    login: {
        url: HOST_URL + 'api/v1/api-auth',
        method: 'POST'
    },

    //退出
    loginOut: {
        url: HOST_URL + 'api/v1/api-auth',
        method: 'GET'
    },
};

APITool['custom'] = {
    //获取账户列表
    getAccountList: {
        url: HOST_URL + 'api/v1/custom/list',
        method: 'GET'
    },

    //获取账户详情
    getAccountDetail: {
        url: HOST_URL + 'api/v1/custom/detail',
        method: 'GET'
    },

    //添加账户
    addAccount: {
        url: HOST_URL + 'api/v1/custom/add',
        method: 'POST'
    },

    //删除
};

export default APITool;
