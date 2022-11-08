"use strict";
var ObjectType;
(function (ObjectType) {
    ObjectType["PEN"] = "pen";
    ObjectType["PAPER"] = "paper";
})(ObjectType || (ObjectType = {}));
function prepareObject(data, type) {
    return {
        type,
        manufactured: 2022,
        data,
    };
}
const prepareColoredPen = (color) => prepareObject({ color }, ObjectType.PEN);
const preparePaper = (color, size) => prepareObject({ color, size }, ObjectType.PAPER);
prepareColoredPen('red');
preparePaper('white', 'A4');
//# sourceMappingURL=task_12.js.map