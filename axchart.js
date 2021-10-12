var nnurl, up_tip;
window.axc_env = "online", $.ajaxSetup(
{
    cache: !0
}), "undefined" == typeof nv ? window.nv = 100 : window.nv = nv, window.serurl = "https://dyimg.bosslib.com", window.runurl = "https://dy.bosslib.com", window.runverson = "axchartrun.js?0114", window.ax_l ? (console.log("has laod"), window.ax_ll = 0) : (window.ax_l = 1, window.ax_ll = 1), window.ax_ll && (!(-1 < (nnurl = window.location.href).indexOf("111299/6c2730c136281ef7009c700c9bc62fbe") || -1 < nnurl.indexOf("112187/562008f72d7d839a83ff58da3a82cdc7") || -1 < nnurl.indexOf("112917/67d21448f4c5842293e91a814083c4f6") || -1 < nnurl.indexOf("114672/34cdf8dbf279f59435747ffb41956839") || -1 < nnurl.indexOf("117187/2e42f6c022e76deb854de17d5d7c289c") || -1 < nnurl.indexOf("117729/3e4cc39138bc48a2f12c222978204efc") || -1 < nnurl.indexOf("119087/018645e5c4f5bd0f5886e214ee82b720") || -1 < nnurl.indexOf("119521/65c010b78047174ef744fe71548cbccb") || -1 < nnurl.indexOf("120048/b51f6cba7b7699ae5f0350d5ec519192")) || 0 == (up_tip = $("#up_tip")).length && $("body").append('<div id="up_tip" style="width:100%; height:100%; position: fixed; left: 0px; top: 0px;"><div class="up_tip_lay" style="width:100%; height:100%; position: fixed; left: 0px; top: 0px; background: rgba(0,0,0,0.3);"></div></div>'), $(function()
{
    var n, i, d;
    (-1 < nnurl.indexOf("axureshop.com") || -1 < nnurl.indexOf("pmdaniu.com") || -1 < nnurl.indexOf("pmlab.top")) && (n = $("#sitemapHost", window.parent.document), i = $("#clippingBounds", window.parent.document), d = $("#lsplitbar", window.parent.document), n.width() < 10 && (n.css(
    {
        width: "220px",
        display: "flex"
    }), i.css(
    {
        left: "220px",
        width: $(window).width() - 220 + "px"
    }), d.css(
    {
        left: "216px",
        display: "block"
    })))
}), $.getScript(window.serurl + "/axchart_core.js?v=0616"));
