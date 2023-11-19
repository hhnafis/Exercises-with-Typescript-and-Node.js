function carInfo(manufacturer:string,modelName:string,...arg:any) {
    let carObj:{manufacturer:string,model:string,color:any}={
        manufacturer:manufacturer,
        model:modelName,
        color:arg
        
    }
    return console.log(carObj)
}
carInfo('honda','reborn','red')