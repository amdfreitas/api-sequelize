const jsonxml = require('jsontoxml')

const serializarjson = (dados) => {
    return JSON.stringify(dados);
}
const serializarxml = (dados) => {
        dados =  dados.map((item) => {
            return {
                'fornecedor':item
            }
        });
    return jsonxml({['fornecedores']:dados});
}

module.exports = (app) => {

    let serielizar = {

        tipSerielizador :['application/json','application/xml','*/*'],
        serializar: (dados,contentType) => {

            if(contentType === 'application/json'){
               return  serializarjson(dados);
            }else if(contentType === 'application/xml'){
               return serializarxml(dados);
            }
        }
    }

return serielizar;
}