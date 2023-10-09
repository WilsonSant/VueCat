import { Record } from "../fable_modules/fable-library.4.1.4/Types.js";
import { list_type, record_type, int32_type, string_type } from "../fable_modules/fable-library.4.1.4/Reflection.js";
import { empty, head } from "../fable_modules/fable-library.4.1.4/List.js";
import { SimpleJson_tryParse } from "../fable_modules/Fable.SimpleJson.3.24.0/./SimpleJson.fs.js";
import { Convert_fromJson } from "../fable_modules/Fable.SimpleJson.3.24.0/./Json.Converter.fs.js";
import { createTypeInfo } from "../fable_modules/Fable.SimpleJson.3.24.0/./TypeInfo.Converter.fs.js";
import { fetch$ } from "../fable_modules/Fable.Fetch.2.6.0/Fetch.fs.js";

export class catReturn extends Record {
    constructor(id, height, url, width) {
        super();
        this.id = id;
        this.height = (height | 0);
        this.url = url;
        this.width = (width | 0);
    }
}

export function catReturn_$reflection() {
    return record_type("DataRequest.Request.catReturn", [], catReturn, () => [["id", string_type], ["height", int32_type], ["url", string_type], ["width", int32_type]]);
}

export function findList(responseList) {
    let matchValue;
    return head((matchValue = SimpleJson_tryParse(responseList), (matchValue != null) ? Convert_fromJson(matchValue, createTypeInfo(list_type(catReturn_$reflection()))) : (() => {
        throw new Error("Couldn\'t parse the input JSON string because it seems to be invalid");
    })())).url;
}

export function getCatPhoto(url) {
    let pr_1;
    const pr = fetch$(url, empty());
    pr_1 = (pr.then((response) => response.text()));
    return pr_1.then(findList);
}

