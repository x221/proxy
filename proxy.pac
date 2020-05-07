function FindProxyForURL(url, host) {
  var aa = [
    "rutracker.org",
    "nnmclub.to",
    "nnm-club.me",
    "telegram.org",
    "t.me",
    "telegram.me",
    "*.cobos.ml",
    "*.aliexpress.com"
  ];

  for (var i = 0; i < aa.length; i++) {
    if (shExpMatch(host, aa[i])) return "SOCKS5 127.0.0.1:9050";
  }

  return "DIRECT";
}
