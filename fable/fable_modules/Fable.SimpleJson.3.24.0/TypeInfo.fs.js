import { Union, Record } from "../fable-library.4.1.4/Types.js";
import { union_type, tuple_type, lambda_type, unit_type, array_type, record_type, class_type, string_type } from "../fable-library.4.1.4/Reflection.js";

export class RecordField extends Record {
    constructor(FieldName, FieldType, PropertyInfo) {
        super();
        this.FieldName = FieldName;
        this.FieldType = FieldType;
        this.PropertyInfo = PropertyInfo;
    }
}

export function RecordField_$reflection() {
    return record_type("Fable.SimpleJson.RecordField", [], RecordField, () => [["FieldName", string_type], ["FieldType", TypeInfo_$reflection()], ["PropertyInfo", class_type("System.Reflection.PropertyInfo")]]);
}

export class UnionCase extends Record {
    constructor(CaseName, CaseTypes, Info) {
        super();
        this.CaseName = CaseName;
        this.CaseTypes = CaseTypes;
        this.Info = Info;
    }
}

export function UnionCase_$reflection() {
    return record_type("Fable.SimpleJson.UnionCase", [], UnionCase, () => [["CaseName", string_type], ["CaseTypes", array_type(TypeInfo_$reflection())], ["Info", class_type("Microsoft.FSharp.Reflection.UnionCaseInfo")]]);
}

export class TypeInfo extends Union {
    constructor(tag, fields) {
        super();
        this.tag = tag;
        this.fields = fields;
    }
    cases() {
        return ["Unit", "Char", "String", "UInt16", "UInt32", "UInt64", "Int32", "Bool", "Float32", "Float", "Decimal", "Short", "Long", "Byte", "SByte", "DateTime", "DateTimeOffset", "DateOnly", "TimeOnly", "BigInt", "TimeSpan", "Guid", "Uri", "Object", "Any", "Async", "Promise", "Option", "List", "Set", "Array", "Seq", "Tuple", "Map", "Dictionary", "ResizeArray", "HashSet", "Func", "Enum", "Record", "Union"];
    }
}

export function TypeInfo_$reflection() {
    return union_type("Fable.SimpleJson.TypeInfo", [], TypeInfo, () => [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [["Item", lambda_type(unit_type, class_type("System.Type"))]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, array_type(TypeInfo_$reflection()))]], [["Item", lambda_type(unit_type, tuple_type(TypeInfo_$reflection(), TypeInfo_$reflection()))]], [["Item", lambda_type(unit_type, tuple_type(TypeInfo_$reflection(), TypeInfo_$reflection(), class_type("System.Type")))]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, TypeInfo_$reflection())]], [["Item", lambda_type(unit_type, array_type(TypeInfo_$reflection()))]], [["Item", lambda_type(unit_type, tuple_type(TypeInfo_$reflection(), class_type("System.Type")))]], [["Item", lambda_type(unit_type, tuple_type(array_type(RecordField_$reflection()), class_type("System.Type")))]], [["Item", lambda_type(unit_type, tuple_type(array_type(UnionCase_$reflection()), class_type("System.Type")))]]]);
}

