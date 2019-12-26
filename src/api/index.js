import axios from 'axios';
// 响应拦截器
axios.interceptors.response.use(({ data }) => {
    if (data.code === 200) {
        return data.data;
    }
    return window.Promise.reject({ message: data.message });
}, (error) => {
    // error.response
    // debugger;
    if (error.response.status === 403) {
        return window.Promise.reject(error.response.data);
    }
    return window.Promise.reject({ message: error.message });
});

// 例子  此文件需在main.js里挂载基本路径到axios上
/**
 * 获取人员基本信息
 */
export const selectById = userId => axios.get(`admin/user/selectById/${userId}`);
