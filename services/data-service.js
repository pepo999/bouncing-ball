class DataService {

    static getRecord() {
        return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/bouncing-ball')
            .then(resp => resp.json())
    }

    static putSerie(record) {
        return fetch('https://6436c5228205915d34fc6fd5.mockapi.io/bouncing-ball/1', { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify(record) })
            .then(resp => resp.json())
    }

}