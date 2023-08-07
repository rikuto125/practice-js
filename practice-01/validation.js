function removeAlphabets(str) {
    return str.replace(/[a-zA-Z]/g, '');
}

function removeUpperCases(str) {
    return str.replace(/[A-Z]/g, '');
}

function removeAllSpaces(str) {
    return str.replace(/\s+/g, '');
}

//gmは、gは全てのマッチした文字列を置換する、mは複数行にマッチする
function removeHTMLTags(str) {
    return str.replace(/<[^>]*>?/gm, '');
}

// 2回replaceを使う方法 (正規表現を使わない方法)
// giとは、gは全てのマッチした文字列を置換する、iは大文字小文字を区別しない
function removeHTMLTagsAndSpaces(str) {
    return str.replace(/(<([^>]+)>)/gi, '').replace(/\s+/g, '');
}

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validateURL(url) {
    let re = /^(https?:\/\/)?(([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$)/;
    return re.test(url);
}


module.exports = {
    removeAlphabets,
    removeUpperCases,
    removeHTMLTagsAndSpaces,
    validateEmail,
    validateURL,
    removeAllSpaces,
    removeHTMLTags
};
