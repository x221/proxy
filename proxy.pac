function FindProxyForURL(url, host) {
  var aa = [
    "rutracker.org",
    "nnmclub.to",
    "nnm-club.me",
    "tut.by",
    "Xtelegram.org",
    "Xt.me",
    "*.zzrbc.ru",
    "*.cobos.ml",
    "*.linkedin.com",
    "*.twitter.com",
    "twitter.com",
    "t.co",
    "*.t.co",
    "*.twimg.com"
  ];

  for (var i = 0; i < aa.length; i++) {
    if (shExpMatch(host, aa[i])) return "SOCKS5 127.0.0.1:9050";
  }

  return "DIRECT";
}
