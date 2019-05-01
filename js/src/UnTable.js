/**
 * 
 */

'use strict';

class UnTable{
    
    /** @type UnDataset */
    dataset;
    
    /** @type Object Main <DIV> container object*/
    container;
    
    fields = [];
    
    /**
     * Untable main constructor
     * 
     * @param {object} params
     * @returns {UnTable}
     */
    constructor(params = {}){
        
    }
    
    /**
     * Create visual table component
     * 
     * @param {type} container
     * @returns {undefined}
     */
    init(container, params = {}){
        this.container = container;
    }
}
