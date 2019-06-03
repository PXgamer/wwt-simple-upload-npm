export default (apiKey, dataArray) => {
  const fs = require('fs')
  const request = require('request')

  if (
    typeof (dataArray) !== 'object' ||
    typeof (dataArray.torrent_name) !== 'string' ||
    typeof (dataArray.torrent_file) !== 'string' ||
    typeof (dataArray.category_id) !== 'number'
  ) {
    return {
      'status': 'failed',
      'error': 'please provide a valid data array'
    }
  }

  const BASE_URL = 'https://worldwidetorrents.to/api'

  const torrentFile = fs.createReadStream(dataArray.torrent_file)

  if (!torrentFile) {
    return {
      'status': 'failed',
      'error': 'file does not exist'
    }
  }

  const formData = {
    name: dataArray.torrent_name,
    torrent_file: torrentFile,
    category_id: dataArray.category_id
  }

  request.post(
    {
      url: `${BASE_URL}/account/upload/`,
      formData,
      headers:
      {
        'x-authorization': apiKey
      }
    },
    (err, httpResponse, body) => {
      if (err) {
        return {
          'status': 'failed',
          'error': 'unknown error'
        }
      }
    }
  )
}
