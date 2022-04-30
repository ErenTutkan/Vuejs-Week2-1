const coupon = {
    namespaced: true,
    state() {
        return {
            list: []
        }
    },
    getters: {
        _getList(state) {
            return state.list;
        },
        _getCouponRate(state) {
            const couponlist = state.list
            var rate = 1;
            for (var i = 0; i < couponlist.length; i++) {
                rate = rate * couponlist[i].rate
            }
            return rate;
        }
    },
    mutations: {
        deleteItem(state, id) {
            if (state.list.filter(i => i.id === id).length > 0) {
                state.list = state.list.filter(i => i.id !== id)
            }
        }
    },
    actions: {
        addItem(context, item) {
            context.commit('deleteItem', item.id)
            context.state.list.push(item);
        }
    }

}
export default coupon;