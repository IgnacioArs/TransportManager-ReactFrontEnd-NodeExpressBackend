//aqui nosotros especificar que va hacer la biblioteca o module 
//time ago

const {format}= require('timeago.js')


const helpers = {}

//aqui utilizamos el objeto helpers y luego le asignamos su metodo timeago -- y le retornamos su formato
helpers.timeago = (timestamp) => {
return format(timestamp);
}

module.exports = helpers;