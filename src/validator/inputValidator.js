const isValidReqBody = obj => (!obj || Object.keys(obj).length == 0) ? false : true

const isString = st => (typeof st != "string" || st.trim().length === 0) ? false : true


const isOptionalString = st => (st && !isString(st)) ? false : true

const isNumber = num => (typeof num != "number") ? false : true

const isParticularString = (st, arr) => (!isString(st) || !arr.includes(st)) ? false : true

const isDefined = obj => {
    for (let i in obj)
        if (!obj[i]) return `${i} is mandatory field`
}

const isDefinedAndString = obj => {
    for (let i in obj) {
        if (!obj[i])
            return `${i} is mandatory field`
        if (!isString(obj[i]))
            return `${i} should have string datatype and must be non-empty`
    }
}

module.exports = { isValidReqBody, isString, isParticularString, isNumber, isDefined, isDefinedAndString, isOptionalString }