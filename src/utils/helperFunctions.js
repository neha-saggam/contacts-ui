export function extend(obj, src) {
    for (const key in src) {
        if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
}

export function isFormValid(errors) {
    for (const key in errors) {
        if(errors[key].length != 0) {
            return false;
        }
    }
    return true;
}

export function convertKeyToLabel(text) {
    const result = text.replace( /([A-Z])/g, " $1" );
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
}

export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
