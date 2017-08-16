let fileURL = "https://**********",
    confPath = '/Users/wk/.aria2/bdy.conf',
    connectionNum = 31,
    domainArr = [
        'allall01.baidupcs.com',
        'nj01ct01.baidupcs.com',
        'allall02.baidupcs.com',
        'bjbgp01.baidupcs.com',
        'allall03.baidupcs.com',
        'nj02all01.baidupcs.com',
        'nj01ct02.baidupcs.com',
        'nj01ct03.baidupcs.com',
        'nj01ct04.baidupcs.com',
        'nj01ct05.baidupcs.com',
        'bjbgp02.baidupcs.com',
        'nj02all02.baidupcs.com',
        'nj02all03.baidupcs.com',
        'nj02all04.baidupcs.com',
        'yqall01.baidupcs.com',
        'yqall02.baidupcs.com',
        'yqall03.baidupcs.com',
        'yqall04.baidupcs.com',
        'qdcache00.baidupcs.com',
        'qdcache02.baidupcs.com',
        'scheduler.dcdn.baidu.com',
        'qdcu01.baidupcs.com',
        'd1.baidupcs.com',
        'd6.baidupcs.com',
        'd7.baidupcs.com',
        'd2.baidupcs.com',
        'd4.baidupcs.com',
        'd8.baidupcs.com',
        'd9.baidupcs.com',
        'nbcache00.baidupcs.com',
        'nbcache03.baidupcs.com'
    ];

(function (originURL, splitNum, confPath) {
    let ariaOrder = `aria2c --conf-path=\"${confPath}\" -s ${splitNum}`,
        URLHead = ' \"https://',
        webFilePath = originURL.split(/^http.*baidupcs.com/)[1].split(/&bflag/)[0];

    for (let i = 0; i < splitNum; i++) {
        ariaOrder = ariaOrder + URLHead + domainArr[i] + webFilePath + '\"';
    }

    return ariaOrder;
})(fileURL, connectionNum, confPath)
