const express = require("express");

const app = express();
app.use(express.static("assets"));

const htmlPageWithAppLinks = `<div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;"><a href="http://apple.com"><img style="width: 50vw; max-width:568px" src="images/Download_on_the_App_Store_Badge_SE_RGB_blk_100317.svg" /></a><a href="http://google.com"><img style="width: 57vw; max-width:646px" src="images/google-play-badge.png" /></a></div>`;

app.get("/", (req, res) => {
  let os = deviceOS(req);
  if (req.query.facility && req.query.door && (os === "iphone" || os === "ipad" || os === "ipod")) {
    res.redirect(
      `exp://192.168.137.173:19000?facility=${req.params.facility}&door=1`
    );
  }
  else {
    res.send(htmlPageWithAppLinks);
  }
});

app.listen(5000, () => {
  console.log("App listening on port 5000!");
});

const deviceOS = req => {
  var useragent = req.headers["user-agent"];

  if (useragent.match(/Android/i)) {
    return "android";
  } else if (useragent.match(/webOS/i)) {
    return "webos";
  } else if (useragent.match(/iPhone/i)) {
    return "iphone";
  } else if (useragent.match(/iPod/i)) {
    return "ipod";
  } else if (useragent.match(/iPad/i)) {
    return "ipad";
  } else if (useragent.match(/Windows Phone/i)) {
    return "windows phone";
  } else if (useragent.match(/SymbianOS/i)) {
    return "symbian";
  } else if (useragent.match(/RIM/i) || useragent.match(/BB/i)) {
    return "blackberry";
  } else {
    return "okänd";
  }
};
