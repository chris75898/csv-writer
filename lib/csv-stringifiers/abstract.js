
'use strict';

var FIELD_DELIMITER = ',';
var RECORD_DELIMITER = '\n';

class AbstractCsvStringifier {

    constructor(params) {
        this._fieldStringifier = params.fieldStringifier;
        this.FIELD_DELIMITER = params.fieldDelimiter || ',';
        this.RECORD_DELIMITER = params.recordDelimiter || '\n';
    }

    getHeaderString() {
        const headerRecord = this._getHeaderRecord();
        return headerRecord ? this.stringifyRecords([headerRecord]) : null;
    }

    stringifyRecords(records) {
        const csvLines = records
            .map(record => this._getRecordAsArray(record))
            .map(record => this._getCsvLine(record));
        return csvLines.join(this.RECORD_DELIMITER) + this.RECORD_DELIMITER;
    }

    /* istanbul ignore next */_getRecordAsArray(_record) {
        throw new Error('Must be overridden in subclasses');
    }

    /* istanbul ignore next */_getHeaderRecord() {
        throw new Error('Must be overridden in subclasses');
    }

    _getCsvLine(record) {
        return record
            .map(fieldValue => this._fieldStringifier.stringify(fieldValue))
            .join(this.FIELD_DELIMITER);
    }

}

module.exports = AbstractCsvStringifier;
