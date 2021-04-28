const axios = require('axios')

function getLocal(key) {
    return `http://localhost:5500/${key}`
}
const url = getLocal(1234567890)
axios({
    url,
    method: 'post',
    data: {road: 'box car rd'},
})
.then( success, error)

function success(res) {
    console.log(res.data);
}
function error(err) {
    console.log(err);
}

