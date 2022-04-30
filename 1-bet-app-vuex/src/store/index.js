import {
    createStore
} from "vuex";
import matches from './modules/matches'
import coupon from './modules/coupon'
const store = createStore({
    state: {

    },
    getters: {

    },
    modules: {
        matches,
        coupon
    }
});
export default store;