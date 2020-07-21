// Vue.mixin() 可以把你创建的自定义方法混入所有的 Vue 实例。
import methods from './methods';

export default {
    methods,
    data() {
        return {
            qxzErrorText: '',
            qxzIsErrorText: false
        };
    }
};
