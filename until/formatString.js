const formatString = (str) => {
    return unescape(str.replace(/&#x/g, '%u').replace(/;/g, ''))
}


module.exports = formatString