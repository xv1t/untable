/**
 * 
 */

class UnDataset{

    URL = null;

    entities = [];

    changes = [];

    objectIdField = 'id';

    static templates = {
        URI: '{URL}'
    };

    constructor(URL, params = {}) {

    };

    create(data, params){
        var _entity = new UnEntity(data);

        this.entities.push(_entity);
    }
};