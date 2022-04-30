const matches = {
    namespaced: true,
    state() {
        return {
            list: [{
                    id: 1,
                    matchName: "Fenerbahçe x Galatasaray",
                    home: 1.5,
                    draw: 2.5,
                    away: 2.3,
                    hour: "19:00",
                },
                {
                    id: 2,
                    matchName: "Fenerbahçe x Beşiktaş",
                    home: 1.3,
                    draw: 2.9,
                    away: 2.1,
                    hour: "20:00",
                },
                {
                    id: 3,
                    matchName: "Fenerbahçe x Başakşehir",
                    home: 1.2,
                    draw: 3.1,
                    away: 2.2,
                    hour: "21:00",
                },
            ]
        }
    },
    getters: {
        _getList(state) {
            return state.list;
        }
    },
}
export default matches;