/**
 * @property {string} URI 
 */

class UnEntity{
    /** @type UnDataset */
    dataset = null;

    /** 
     *  TRUE - on server side exist and local dataset
     *  FALSE - exists only in the local dataset
     */
    remoteExists = false;

    /**
     * REST URI for this data Entity object
     */
    URI = null;

    /**
     * Object hash with values
     * @type {Object}
     */
    data = null;

    constructor(data, params){
        this.data = data;
    };
}