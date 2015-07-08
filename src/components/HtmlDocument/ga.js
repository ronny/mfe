// Code for google analytics to dangerously set into a script tag in HtmlDocument.js
// The {trackingId} must be replaced with that found in /config/*

const code = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', '{gaTrackingId}', 'auto');
  ga('send', 'pageview');
`;

export default code;
