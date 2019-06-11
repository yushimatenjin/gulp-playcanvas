const Ui = pc.createScript("ui");

Ui.attributes.add("css", {
  type: "asset",
  assetType: "css",
  title: "CSS Asset"
});
Ui.attributes.add("html", {
  type: "asset",
  assetType: "html",
  title: "HTML Asset"
});

Ui.prototype.initialize = function() {
  const body = document.getElementsByTagName("body")[0];
  const head = document.getElementsByTagName("head")[0];
  const style = `<style>${this.css.resource}</style>`;
  body.insertAdjacentHTML("afterbegin", this.html.resource);
  head.insertAdjacentHTML("afterbegin", style);
};

Ui.prototype.swap = function(old) {
  window.location.reload();
};
