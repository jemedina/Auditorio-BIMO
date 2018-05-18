var Parking = (function($) {
    var baseUrl = "https://apis.bimo.com/parkingapi";
    var apikey = "?api_key=" + GlobalConfig.apikey;

    var cajonesPorFuncion = function(funcion_id, cb) {
        $.ajax({
            url: baseUrl + `/cajones-ocupados/${funcion_id}`+ apikey
        }).done(function(resp) {
            cb(resp);
        }).fail(function(){
            alert("Error con la conexion al servidor...");
        });
    }

    return {
        cajonesPorFuncion: cajonesPorFuncion
    }
})(jQuery);