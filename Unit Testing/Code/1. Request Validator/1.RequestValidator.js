function requestValidator(obj){

    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let urlPattern = /[^A-Za-z0-9\.\*]+/;
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let invalidSymbol = /[<>\\\&\'\"]+/;

    if(!validMethod.includes(obj.method)){
throw new Error (`Invalid request header: Invalid Method`);
}
if ((obj.uri === undefined) || obj.uri == '' || urlPattern.test(obj.uri)) {
      throw new Error ('Invalid request header: Invalid URI');
      };
if(!validVersion.includes(obj.version)){
    throw new Error(`Invalid request header: Invalid Version`)
}
if(!obj.hasOwnProperty("message")){
    throw new Error(`Invalid request header: Invalid Message`)
}
for(let el of obj.message){
    if(invalidSymbol.includes(el)){
        throw new Error(`Invalid request header: Invalid Message`)
    }
}
return obj
}



