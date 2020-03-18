var loaderUtils = require("loader-utils")

module.exports = function (content){
    if(this.cacheable){
        this.cacheable()
    }
    var options = loaderUtils.getOptions(this) || {}
    console.log('options',options)
    var useStrictprefix = '\'use strict\';\n\n'
    return useStrictprefix+content
} 