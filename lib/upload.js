module.exports = function (api_key, data_array)
{
    var fs = require("fs");
    var request = require("request");
    var FormData = require("form-data");

    if (typeof (data_array) != 'object' || typeof (data_array.torrent_name) != 'string' || typeof (data_array.torrent_file) != 'string' || typeof (data_array.category_id) != 'number') return {
        "status": "failed",
        "error": "please provide a valid data array"
    };

    const BASE_URL = "https://worldwidetorrents.me/api";

    var torrent_file = fs.createReadStream(data_array.torrent_file);

    if (!torrent_file) return {
        "status": "failed",
        "error": "file does not exist"
    }

    var form = new FormData();
    var formData = {
        name: data_array.torrent_name,
        torrent_file: torrent_file,
        category_id: data_array.category_id
    };

    request.post(
        {
            url: BASE_URL + "/account/upload/",
            formData: formData,
            headers:
            {
                'x-authorization': api_key
            }
        },
        function (err, httpResponse, body)
        {
            if (err)
            {
                return {
                    "status": "failed",
                    "error": "unknown error"
                };
            }
            console.log(body);
        }
    );
};
