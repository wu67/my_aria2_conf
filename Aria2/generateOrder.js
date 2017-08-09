let u = "https://*********",
    cPath = "/Users/wk/.aria2/bdy.conf",
    sNum = 22,
    domainArr = [
        "allall01.baidupcs.com",
        "nj01ct01.baidupcs.com",
        "allall02.baidupcs.com",
        "bjbgp01.baidupcs.com",
        "allall03.baidupcs.com",
        "nj02all01.baidupcs.com",
        "nj01ct02.baidupcs.com",
        "nj01ct03.baidupcs.com",
        "nj01ct04.baidupcs.com",
        "bjbgp02.baidupcs.com",
        "nj02all02.baidupcs.com",
        "nj02all03.baidupcs.com",
        "nj02all04.baidupcs.com",
        "yqall01.baidupcs.com",
        "yqall02.baidupcs.com",
        "qdcache00.baidupcs.com",
        "scheduler.dcdn.baidu.com",
        "qdcu01.baidupcs.com",
        "d1.baidupcs.com",
        "d3.baidupcs.com",
        "d6.baidupcs.com",
        "d7.baidupcs.com"
    ]

function generateOrder(originURL, splitNum, confPath) {
    let aOrder = "aria2c --conf-path=\"" + confPath.toString() + "\" -s " + splitNum,
        URLHead = " \"https://",
        webFilePath = originURL.split(/^http.*baidupcs.com/)[1];

    for (let i = 0; i < splitNum; i++) {
        aOrder = aOrder + URLHead + domainArr[i] + webFilePath + "\"";
    }

    return aOrder;
}

generateOrder(u, sNum, cPath);
