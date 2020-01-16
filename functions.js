const compatibleDevices = ["Android", "Iphone", "iPad"];
const deviceOS = () => {
  var useragent = navigator.userAgent;

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
    return "Appen är inte kompatibel med er enhet";
  }
};
let os = deviceOS();
let error = "";
const goToAppStore = os => {
  if (os === "iphone" || os === "ipad" || os === "ipod") {
    window.location.href =
      "https://apps.apple.com/se/app/fortnite/id1261357853";
  } else {
    error = "Kunde inte hämta app";
  }
};
