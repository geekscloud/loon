console.log("每日签到开始");
for (let i = 1; i <= 3; i++) {
    $httpClient.post({
            url: 'https://opo.giant.com.cn/opo/index.php/day_pic/do_app_pic/',
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Sec-Fetch-Site": "same-site",
                "Accept-Encoding": "gzip, deflate, br",
                "Sec-Fetch-Mode": "cors",
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "https://found.giant.com.cn",
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 _giantapp/3.3.5",
                "Referer": "https://found.giant.com.cn/",
                "Sec-Fetch-Dest": "empty",
                "Cookie": "opo_frontend=606032d414fc5a74ee99a4d4274a57c49f59afbd"
            },
            body: `type=${i}&user_id=7696229`
        },
        function (errormsg, response, data) {
            console.log(`每日签到${i}, ${errormsg} res: ${response}, data: ${data.msg}`);
        });
}

$done();