function carInfo(manufacturer, modelName) {
    var arg = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg[_i - 2] = arguments[_i];
    }
    var carObj = {
        manufacturer: manufacturer,
        model: modelName,
        color: arg
    };
    return console.log(carObj);
}
carInfo('honda', 'reborn', 'red');
