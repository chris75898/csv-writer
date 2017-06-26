
'use strict';

const ArrayCsvStringifier = require('./csv-stringifiers/array');
const FieldStringifier = require('./field-stringifier');
const ObjectCsvStringifier = require('./csv-stringifiers/object');

class CsvStringifierFactory {

    createArrayCsvStringifier(params) {
        return new ArrayCsvStringifier({
            fieldStringifier: new FieldStringifier(),
            header: params.header,
            fieldDelimiter: params.fieldDelimiter,
            recordDelimiter: params.recordDelimiter

        });
    }

    createObjectCsvStringifier(params) {
        return new ObjectCsvStringifier({
            fieldStringifier: new FieldStringifier(),
            header: params.header,
            fieldDelimiter: params.fieldDelimiter,
            recordDelimiter: params.recordDelimiter
        });
    }

}

module.exports = CsvStringifierFactory;
