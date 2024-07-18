export default class Database {
    constructor() {
        this.data = [
            {
                id: 1,
                nome: "Maria Antonia",
                username: "mant",
                gn: "F",
                tlf: "351939445999"
            },
            {
                id: 2,
                nome: "Josefa Maria",
                username: "josm",
                gn: "F",
                tlf: "351939445888"
            },
            {
                id: 3,
                nome: "Mario Joao",
                username: "mj",
                gn: "M",
                tlf: "351939445666"
            }
        ];
    }

    get userData() {
        return this._data = this.data;
    }

    set userData(userData) {
        this._data = userData;
    }

}