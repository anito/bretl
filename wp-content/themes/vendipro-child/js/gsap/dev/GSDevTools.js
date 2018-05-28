/*!
 * VERSION: 0.1.7
 * DATE: 2018-02-10
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * GSDevTools is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope;
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("GSDevTools", ["TweenLite", "core.Animation", "core.SimpleTimeline", "TimelineLite", "utils.Draggable", "plugins.CSSPlugin"], function(e, t, o, n, i) {
            var r, s, a, l, c, d = document,
                p = d.documentElement,
                g = "http://www.w3.org/2000/svg",
                f = "http://www.w3.org/1999/xhtml",
                u = 0,
                h = {},
                m = "GSDevTools",
                v = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
                x = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
                y = function(e) {
                    for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), o = [v, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = o.length; --n > -1;)
                        if (-1 !== e.indexOf(o[n])) return !0;
                    return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + m + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)), t
                }(window ? window.location.host : ""),
                w = function(e, t, o) {
                    var n = d.createElementNS ? d.createElementNS("svg" === e ? g : f, e) : d.createElement(e);
                    return t && ("string" == typeof t && (t = d.querySelector(t)), t.appendChild(n)), "svg" === e && (n.setAttribute("xmlns", g), n.setAttribute("xmlns:xlink", f)), o && (n.style.cssText = o), n
                },
                b = function() {
                    d.selection ? d.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
                },
                T = t._rootTimeline,
                S = function(t, o) {
                    for (var n = [], i = 0, r = t._first; r;) r instanceof e ? r.vars.id && (n[i++] = r) : (o && r.vars.id && (n[i++] = r), i = (n = n.concat(S(r, o))).length), r = r._next;
                    return n
                },
                _ = function(e) {
                    var t = 0,
                        o = e._first;
                    if (!o) return e.duration();
                    for (; o;) t = Math.max(t, o.totalDuration() > 999 ? o.endTime(!1) : o._startTime + o._totalDuration / o._timeScale), o = o._next;
                    return t
                },
                C = function(e) {
                    if (!e) return null;
                    if (e instanceof t) return e;
                    for (var o = S(T, !0), n = o.length; --n > -1;)
                        if (o[n].vars.id === e) return o[n]
                },
                k = function(e, t, o, n) {
                    var i, r, s;
                    return "string" == typeof e && ("=" === e.charAt(1) ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100), e = n / 100 * t.duration() + i) : isNaN(e) && t.getLabelTime && -1 !== t.getLabelTime(e) ? e = t.getLabelTime(e) : t === E && ((r = e.indexOf("=")) > 0 ? (i = parseInt(e.charAt(r - 1) + "1", 10) * parseFloat(e.substr(r + 1)), e = e.substr(0, r - 1)) : i = 0, (s = C(e)) && (e = L(s, o / 100 * s.duration()) + i))), e = isNaN(e) ? o : parseFloat(e), Math.min(100, Math.max(0, e / t.duration() * 100))
                },
                L = function(e, t) {
                    var o = e;
                    if (t = t || 0, o.timeline)
                        for (; o.timeline.timeline;) t = t / o._timeScale + o._startTime, o = o.timeline;
                    return t
                },
                M = function(e, t, o, n) {
                    var i, r;
                    if ("mousedown" !== t && "mouseup" !== t || (e.style.cursor = "pointer"), "mousedown" === t && (r = void 0 !== e.onpointerdown ? "pointerdown" : void 0 !== e.ontouchstart ? "touchstart" : null)) return i = function(t) {
                        "select" !== t.target.nodeName.toLowerCase() && t.type === r ? (t.stopPropagation(), s && (t.preventDefault(), o.call(e, t))) : t.type !== r && o.call(e, t), s = !0
                    }, e.addEventListener(r, i, n), void e.addEventListener(t, i, n);
                    e.addEventListener(t, o, n)
                },
                D = function(e, t, o) {
                    e.removeEventListener(t, o), (t = "mousedown" !== t ? null : void 0 !== e.onpointerdown ? "pointerdown" : void 0 !== e.ontouchstart ? "touchstart" : null) && e.removeEventListener(t, o)
                },
                P = function(e, t, o, n) {
                    var i, r = e.options,
                        s = r.length;
                    for (t += ""; --s > -1;)
                        if (r[s].innerHTML === t || r[s].value === t) return e.selectedIndex = s, o.innerHTML = r[s].innerHTML, r[s];
                    n && ((i = w("option", e)).setAttribute("value", t), i.innerHTML = o.innerHTML = "string" == typeof n ? n : t, e.selectedIndex = r.length - 1)
                },
                N = function(e, t, o) {
                    var n = e.options,
                        i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
                    return e.selectedIndex = i, o && (o.innerHTML = n[i].innerHTML), n[i].value
                },
                E = new n({
                    data: "root",
                    id: "Global Timeline",
                    autoRemoveChildren: !1,
                    smoothChildTiming: !0
                }),
                X = new n({
                    data: "root",
                    id: "Global Temp",
                    autoRemoveChildren: !1,
                    smoothChildTiming: !0
                }),
                Y = e.to(E, 1, {
                    time: 1,
                    ease: Linear.easeNone,
                    data: "root",
                    id: "_rootTween",
                    paused: !0,
                    immediateRender: !1
                }),
                O = function() {
                    var e, t, n = X._first;
                    if (n) {
                        if (a && a.animation() === E) {
                            for (e = E._duration; n;) t = n._next, "function" == typeof n.target && n.target === n.vars.onComplete && !n._duration || n.target && n.target._gsIgnore ? o.prototype.add.call(T, n, n._startTime - n._delay) : E.add(n, n._startTime - n._delay), n = t;
                            return e !== E.duration()
                        }
                        for (; n;) t = n._next, n._gc || n._totalTime === n._totalDuration ? n.kill() : o.prototype.add.call(T, n, n._startTime - n._delay), n = t
                    }
                },
                B = function() {
                    a && (a.update(), l = !1), e.ticker.removeEventListener("tick", B)
                },
                H = function(o) {
                    if (false===(this.vars = o = o || {}, o.id = o.id || ("string" == typeof o.animation ? o.animation : u++), h[o.id + ""] = this, !y)) return window.location.href = "http://" + v + x + "?plugin=" + m + "&source=codepen", !1;
                    var s, l, d, g, f, T, L, X, B, H, R, A, I, W, V, G, j, q = this,
                        U = function(t, o, n) {
                            r || (w("style", p).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}", r = !0), "string" == typeof t && (t = document.querySelector(t));
                            var i = w("div", t || p.getElementsByTagName("body")[0] || p);
                            return i.setAttribute("class", "gs-dev-tools" + (o ? " minimal" : "")), i.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg> <svg class=out-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span> <svg class=select-arrow viewBox="0 0 12.05 6.73"xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38"xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg> <svg class=play-pause viewBox="0 0 20.97 25.67"xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88"class="gs-btn-white play-1"style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85"class="gs-btn-white play-2"style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38"xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67"xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/Utilities/GSDevTools?source=GSDevTools"target=_blank title=Docs><svg class=logo viewBox="0 0 100 100"xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z"style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z"style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z"style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>', t && (i.style.position = "absolute", i.style.top = o ? "calc(100% - 42px)" : "calc(100% - 51px)"), n && ("string" == typeof n ? i.style.cssText = n : "object" == typeof n && (n.data = "root", e.set(i, n).kill()), i.style.top && (i.style.bottom = "auto"), i.style.width && e.set(i, {
                                xPercent: -50,
                                left: "50%",
                                right: "auto",
                                data: "root"
                            }).kill()), !o && i.offsetWidth < 600 && (i.setAttribute("class", "gs-dev-tools minimal"), t && (i.style.top = "calc(100% - 42px)")), i
                        }(o.container, o.minimal, o.css),
                        Z = function(e) {
                            return U.querySelector(e)
                        },
                        Q = function(e, t) {
                            return !1 !== o.persist && "undefined" != typeof sessionStorage && sessionStorage.setItem("gs-dev-" + e + o.id, t), t
                        },
                        $ = function(e) {
                            var t;
                            if (!1 !== o.persist && "undefined" != typeof sessionStorage) return t = sessionStorage.getItem("gs-dev-" + e + o.id), "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t)
                        },
                        K = Z(".playhead"),
                        J = Z(".timeline-track"),
                        ee = Z(".progress-bar"),
                        te = Z(".time"),
                        oe = Z(".duration"),
                        ne = 0,
                        ie = function(e, t, o) {
                            return function(n) {
                                var i, r = J.getBoundingClientRect(),
                                    a = e.getBoundingClientRect(),
                                    c = a.width * t,
                                    p = e._gsTransform.x,
                                    u = r.left - a.left - c + p,
                                    h = r.right - a.right + (a.width - c) + p,
                                    m = u;
                                o && (e !== se && (i = se.getBoundingClientRect()).left && (u += i.left + i.width - r.left), e !== ae && (i = ae.getBoundingClientRect()).left && (h -= r.left + r.width - i.left)), f = ve, this.applyBounds({
                                    minX: u,
                                    maxX: h
                                }), s = X.duration() / r.width, l = -m * s, g ? X.pause() : X.pause(l + s * this.x), this.target === K && (this.activated && (this.allowEventDefault = !1), this.activated = !0), d = !0
                            }
                        },
                        re = i.create(K, {
                            type: "x",
                            cursor: "ew-resize",
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            onPress: ie(K, .5, !0),
                            onDrag: function() {
                                var e = l + s * this.x;
                                e < 0 ? e = 0 : e > X._duration && (e = X._duration), g || X.time(e), ee.style.width = Math.min(de - ce, Math.max(0, e / X._duration * 100 - ce)) + "%", te.innerHTML = e.toFixed(2)
                            },
                            onRelease: function(e) {
                                ve || X.resume()
                            }
                        })[0],
                        se = Z(".in-point"),
                        ae = Z(".out-point"),
                        le = function() {
                            ce = 0, de = 100, se.style.left = "0%", ae.style.left = "100%", Q("in", ce), Q("out", de), fe(!0)
                        },
                        ce = 0,
                        de = 100,
                        pe = i.create(se, {
                            type: "x",
                            cursor: "ew-resize",
                            zIndexBoost: !1,
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            onPress: ie(se, 1, !0),
                            onDoubleClick: le,
                            onDrag: function() {
                                ce = (l + s * this.x) / X.duration() * 100, X.progress(ce / 100), fe(!0)
                            },
                            onRelease: function() {
                                ce < 0 && (ce = 0), b(), se.style.left = ce + "%", Q("in", ce), e.set(se, {
                                    x: 0,
                                    data: "root",
                                    display: "block"
                                }), ve || X.resume()
                            }
                        })[0],
                        ge = i.create(ae, {
                            type: "x",
                            cursor: "ew-resize",
                            allowNativeTouchScrolling: !1,
                            allowEventDefault: !0,
                            zIndexBoost: !1,
                            onPress: ie(ae, 0, !0),
                            onDoubleClick: le,
                            onDrag: function() {
                                de = (l + s * this.x) / X.duration() * 100, X.progress(de / 100), fe(!0)
                            },
                            onRelease: function() {
                                de > 100 && (de = 100), b(), ae.style.left = de + "%", Q("out", de), e.set(ae, {
                                    x: 0,
                                    data: "root",
                                    display: "block"
                                }), f || (xe(), X.resume())
                            }
                        })[0],
                        fe = function(e) {
                            if (!re.isPressed || e) {
                                var t = 100 * X.progress() || 0;
                                t > 100 && (t = 100), t >= de ? !T || X.paused() || re.isDragging ? (t !== de && (t = de, X.progress(t / 100)), ve || ye()) : (t = ce, X.target === L && X.target.seek(H + (R - H) * ce / 100), X.progress(t / 100, !0).resume()) : t < ce && (t = ce, X.progress(t / 100, !0)), t !== ne || e ? (ee.style.left = ce + "%", ee.style.width = Math.max(0, t - ce) + "%", K.style.left = t + "%", te.innerHTML = X._time.toFixed(2), oe.innerHTML = X._duration.toFixed(2), d && (K.style.transform = "translate(-50%,0)", K._gsTransform.x = 0, K._gsTransform.xPercent = -50, d = !1), ne = t) : X._paused !== ve && we()
                            }
                        },
                        ue = function(e) {
                            if (!re.isPressed) {
                                var t = e.target.getBoundingClientRect(),
                                    o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
                                if (o < ce) return ce = o = Math.max(0, o), se.style.left = ce + "%", void pe.startDrag(e);
                                if (o > de) return de = o = Math.min(100, o), ae.style.left = de + "%", void ge.startDrag(e);
                                X.progress(o / 100).pause(), fe(!0), re.startDrag(e)
                            }
                        },
                        he = Z(".play-pause"),
                        me = (G = he, (j = new n({
                            data: "root",
                            onComplete: function() {
                                j.kill()
                            }
                        })).to(G.querySelector(".play-1"), .5, {
                            attr: {
                                d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                            },
                            ease: Power3.easeInOut,
                            rotation: 360,
                            transformOrigin: "50% 50%"
                        }).to(G.querySelector(".play-2"), .5, {
                            attr: {
                                d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                            },
                            ease: Power3.easeInOut,
                            rotation: 360,
                            transformOrigin: "50% 50%"
                        }, .05), j),
                        ve = !1,
                        xe = function() {
                            X.progress() >= de / 100 && (X.target === L && X.target.seek(H + (R - H) * ce / 100), X.progress(ce / 100, !0)), me.play(), X.play(), ve && q.update(), ve = !1
                        },
                        ye = function() {
                            me.reverse(), X && X.pause(), ve = !0
                        },
                        we = function() {
                            ve ? xe() : ye()
                        },
                        be = function(e) {
                            re.isPressed || (X.target === L && X.target.seek(H + (R - H) * ce / 100), X.progress(ce / 100, !0), ve || X.resume())
                        },
                        Te = Z(".loop"),
                        Se = (W = Te, (V = new n({
                            data: "root",
                            paused: !0,
                            onComplete: function() {
                                V.kill()
                            }
                        })).to(W, .5, {
                            rotation: 360,
                            ease: Power3.easeInOut,
                            transformOrigin: "50% 50%"
                        }).to(W.querySelectorAll(".loop-path"), .5, {
                            fill: "#91e600",
                            ease: Linear.easeNone
                        }, 0), V),
                        _e = function(e) {
                            Q("loop", T = e), T ? (Se.play(), X.progress() >= de / 100 && (X.target === L && X.target.seek(H + (R - H) * ce / 100), X.progress(ce / 100, !0).resume())) : Se.reverse()
                        },
                        Ce = function() {
                            _e(!T)
                        },
                        ke = Z(".animation-list"),
                        Le = Z(".animation-label"),
                        Me = function() {
                            var e, t, n = S(B && !1 === o.globalSync ? B : E, !0),
                                i = ke.children,
                                r = 0;
                            for (B && !1 === o.globalSync ? n.unshift(B) : o.hideGlobalTimeline || n.unshift(E), t = 0; t < n.length; t++)(e = i[t] || w("option", ke)).animation = n[t], r = t && n[t].vars.id === n[t - 1].vars.id ? r + 1 : 0, e.setAttribute("value", e.innerHTML = n[t].vars.id + (r ? " [" + r + "]" : n[t + 1] && n[t + 1].vars.id === n[t].vars.id ? " [0]" : ""));
                            for (; t < i.length; t++) ke.removeChild(i[t])
                        },
                        De = function(n) {
                            var i, r, s = 1;
                            if (!arguments.length) return L;
                            if ("string" == typeof n && (n = C(n)), n instanceof t || console.log("GSDevTools error: invalid animation."), n !== L) {
                                if (L && (L._inProgress = ce, L._outProgress = de), L = n, X && (s = X.timeScale(), X.target === B && (B.resume(), X.kill())), ce = L._inProgress || 0, de = L._outProgress || 100, se.style.left = ce + "%", ae.style.left = de + "%", A && (Q("animation", L.vars.id), Q("in", ce), Q("out", de)), H = 0, r = Math.min(1e3, o.maxDuration || 1e3, _(L)), L === E || !1 !== o.globalSync) {
                                    if (O(), X = Y, a && a !== q && console.log("Error: GSDevTools can only have one instance that's globally synchronized."), a = q, L !== E)
                                        for ((R = (i = L).totalDuration()) > 99999999 && (R = i.duration()); i.timeline.timeline;) H = H / i._timeScale + i._startTime, R = R / i._timeScale + i._startTime, i = i.timeline;
                                    else R = E.duration();
                                    R - H > r && (R = H + r), E.pause(H), Y.vars.time = R, Y.invalidate(), Y.duration(R - H).timeScale(s), ve ? Y.progress(1).pause(0) : e.delayedCall(.01, function() {
                                        Y.resume().progress(ce / 100), ve && xe()
                                    })
                                } else {
                                    if (a === q && (a = null), L !== B && B) {
                                        for ((R = (i = L).totalDuration()) > 99999999 && (R = i.duration()); i.timeline.timeline && i !== B;) H = H / i._timeScale + i._startTime, R = R / i._timeScale + i._startTime, i = i.timeline;
                                        R - H > r && (R = H + r), B.pause(H), (X = e.to(B, R - H, {
                                            time: R,
                                            ease: Linear.easeNone,
                                            data: "root"
                                        })).timeScale(s)
                                    } else X = L;
                                    Y.pause(), E.resume(), X.seek(0)
                                }
                                oe.innerHTML = X.duration().toFixed(2), P(ke, L.vars.id, Le)
                            }
                        },
                        Pe = function(e) {
                            De(ke.options[ke.selectedIndex].animation), e.target && e.target.blur && e.target.blur(), ve && xe()
                        },
                        Ne = Z(".time-scale select"),
                        Ee = Z(".time-scale-label"),
                        Xe = function(t) {
                            var o = parseFloat(Ne.options[Ne.selectedIndex].value) || 1;
                            X.timeScale(o), Q("timeScale", o), ve || (X.progress() >= de / 100 ? (X.target === L && X.target.seek(H + (R - H) * ce / 100), X.progress(ce / 100, !0).pause()) : X.pause(), e.delayedCall(.01, function() {
                                X.resume()
                            })), Ee.innerHTML = o + "x", Ne.blur && Ne.blur()
                        },
                        Ye = e.to([Z(".gs-bottom"), Z(".gs-top")], .3, {
                            autoAlpha: 0,
                            y: 50,
                            ease: Power2.easeIn,
                            data: "root",
                            paused: !0
                        }),
                        Oe = !1,
                        Be = function(e) {
                            i.hitTest(e, U) || re.isDragging || pe.isDragging || ge.isDragging || ze.restart(!0)
                        },
                        He = function() {
                            Oe || (Ye.play(), ze.pause(), Oe = !0)
                        },
                        Re = function() {
                            ze.pause(), Oe && (Ye.reverse(), Oe = !1)
                        },
                        ze = e.delayedCall(1.3, He).pause(),
                        Ae = function(e) {
                            z && !F && (F = E._startTime), A = !e, (B = C(o.animation)) && !B.vars.id && (B.vars.id = "[no id]"), Me();
                            var t = C($("animation"));
                            t && (t._inProgress = $("in") || 0, t._outProgress = $("out") || 100), o.paused && ye(), L = null, De(B || t || E);
                            var n = o.timeScale || $("timeScale"),
                                i = t === L;
                            n && (P(Ne, n, Ee, n + "x"), Y.timeScale(n)), 100 === (ce = ("inTime" in o ? k(o.inTime, L, 0, 0) : i ? t._inProgress : 0) || 0) && !o.animation && t && (De(E), ce = k(o.inTime, L, 0, 0) || 0), ce && (se.style.left = ce + "%", se.style.display = ae.style.display = "block"), (de = ("outTime" in o ? k(o.outTime, L, 100, ce) : i ? t._outProgress : 0) || 100) < ce && (de = 100), 100 !== de && (ae.style.left = de + "%", se.style.display = ae.style.display = "block"), (T = "loop" in o ? o.loop : $("loop")) && _e(!0), o.paused && X.progress(ce / 100, !0).pause(), z && L === E && F && !1 !== o.globalSync && !ve && X.time(-F, !0), fe(!0)
                        };
                    M(ke, "change", Pe), M(ke, "mousedown", Me), M(he, "mousedown", we), M(Z(".seek-bar"), "mousedown", ue), M(Z(".rewind"), "mousedown", be), M(Te, "mousedown", Ce), M(Ne, "change", Xe), "auto" === o.visibility ? (M(U, "mouseout", Be), M(U, "mouseover", Re)) : "hidden" === o.visibility && (Oe = !0, Ye.progress(1)), !1 !== o.keyboard && (c && o.keyboard ? console.log("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (c = q, M(p, "keydown", I = function(e) {
                        var t, o = e.keyCode ? e.keyCode : e.which;
                        32 === o ? we() : 38 === o ? (t = parseFloat(N(Ne, -1, Ee)), X.timeScale(t), Q("timeScale", t)) : 40 === o ? (t = parseFloat(N(Ne, 1, Ee)), X.timeScale(t), Q("timeScale", t)) : 37 === o ? be() : 39 === o ? X.progress(de / 100) : 76 === o ? Ce() : 72 === o ? Oe ? Re() : He() : 73 === o ? (ce = 100 * X.progress(), Q("in", ce), se.style.left = ce + "%", fe(!0)) : 79 === o && (de = 100 * X.progress(), Q("out", de), ae.style.left = de + "%", fe(!0))
                    }))), e.set(K, {
                        xPercent: -50,
                        x: 0,
                        data: "root"
                    }), e.set(se, {
                        xPercent: -100,
                        x: 0,
                        data: "root"
                    }), se._gsIgnore = ae._gsIgnore = K._gsIgnore = he._gsIgnore = Te._gsIgnore = !0, e.killTweensOf([se, ae, K]), Ae(z), z && e.delayedCall(1e-4, Ae, [!1], this), e.ticker.addEventListener("tick", fe), this.update = function(e) {
                        var t, o, n;
                        a === q && (Y._paused && !e || O(), L === E && (t = E._time, E.progress(1, !0).time(t, !0), t = (Y._timeline._time - Y._startTime) * Y._timeScale, 1e3 === (n = Math.min(1e3, E.duration())) && (n = Math.min(1e3, _(E))), 1 != (o = Y.duration() / n) && n && (ce *= o, de < 100 && (de *= o), Y.seek(0), Y.vars.time = n, Y.invalidate(), Y.duration(n), Y.time(t), oe.innerHTML = n.toFixed(2), fe(!0))))
                    }, this.kill = function() {
                        D(ke, "change", Pe), D(ke, "mousedown", Me), D(he, "mousedown", we), D(Z(".seek-bar"), "mousedown", ue), D(Z(".rewind"), "mousedown", be), D(Te, "mousedown", Ce), D(Ne, "change", Xe), re.disable(), pe.disable(), ge.disable(), e.ticker.removeEventListener("tick", fe), D(U, "mouseout", Be), D(U, "mouseover", Re), D(p, "keydown", I), U.parentNode.removeChild(U), a === q && (a = null), delete h[o.id + ""]
                    }, this.minimal = function(e) {
                        var t, n = U.classList.contains("minimal");
                        if (!arguments.length || n === e) return n;
                        e ? U.classList.add("minimal") : U.classList.remove("minimal"), o.container && (U.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"), re.isPressed && (g = !0, re.endDrag(re.pointerEvent), g = !1, t = 100 * X.progress(), ee.style.width = Math.max(0, t - ce) + "%", K.style.left = t + "%", K.style.transform = "translate(-50%,0)", K._gsTransform.x = 0, K._gsTransform.xPercent = -50, re.startDrag(re.pointerEvent, !0))
                    }, this.animation = De, this.updateList = Me
                },
                R = !0,
                z = !0,
                A = e.onOverwrite,
                F = 0;
            return H.version = "0.1.7", H.logOverwrites = !1, H.globalRecordingTime = 2, H.getById = function(e) {
                return e ? h[e] : a
            }, T._startTime += T._time, E._startTime = X._startTime = T._time = T._totalTime = 0, e.delayedCall(.01, function() {
                a ? a.update() : O()
            }), e.delayedCall(2, function() {
                var t, n, i;
                if (!a)
                    for (O(), t = E._first, i = E._startTime; t;) n = t._next, t._totalDuration !== t._totalTime || 1 !== t.ratio ? o.prototype.add.call(T, t, t._startTime - t._delay + i) : t.kill(), t = n;
                H.globalRecordingTime > 2 ? e.delayedCall(H.globalRecordingTime - 2, function() {
                    a && a.update(), R = !1
                }) : R = !1, z = !1
            }), T.add = function(t, n, i, r) {
                var s = t.data;
                if (R && t.vars && "root" !== s && "ignore" !== s && "isStart" !== s && "isFromStart" !== s && "_draggable" !== s && !(z && !t._duration && t instanceof e) && (!t.vars.onComplete || t.vars.onComplete !== t.vars.onReverseComplete)) {
                    var a = E;
                    return Y._time && (Y._paused ? (a = X, t._recordedTime = E.rawTime()) : (n = (T._time - Y._startTime) * Y._timeScale, l || (e.ticker.addEventListener("tick", B), l = !0))), a.add(t, n, i, r), t.vars.repeat && (a._dirty = !0), this
                }
                return o.prototype.add.apply(this, arguments)
            }, E._enabled = X._enabled = function(e, t) {
                return o.prototype._enabled.apply(this, arguments)
            }, n.prototype._remove = function(e, t) {
                return o.prototype._remove.apply(this, arguments), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, e.onOverwrite = function(e, t, o, n) {
                H.logOverwrites && (n ? console.log("[Overwrite warning] the following properties were overwritten: ", n, "| target:", o, "| overwritten tween: ", e, "| overwriting tween:", t) : console.log("[Overwrite warning] the following tween was overwritten:", e, "by", t)), "function" == typeof A && A(e, t, o, n)
            }, H.create = function(e) {
                return new H(e)
            }, H
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e) {
        "use strict";
        var t = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).GSDevTools
        };
        "undefined" != typeof module && module.exports ? (require("../TweenLite.js"), require("../TimelineLite.js"), require("../plugins/CSSPlugin.js"), module.exports = t()) : "function" == typeof define && define.amd && define(["TweenLite", "TimelineLite", "CSSPlugin"], t)
    }(), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(e, t, o) {
            var n, i, r, s, a, l, c, d, p, g, f, u, h, m = {
                    css: {},
                    data: "_draggable"
                },
                v = {
                    css: {},
                    data: "_draggable"
                },
                x = {
                    css: {},
                    data: "_draggable"
                },
                y = {
                    css: {}
                },
                w = _gsScope._gsDefine.globals,
                b = {},
                T = {
                    style: {}
                },
                S = _gsScope.document || {
                    createElement: function() {
                        return T
                    }
                },
                _ = S.documentElement || {},
                C = function(e) {
                    return S.createElementNS ? S.createElementNS("http://www.w3.org/1999/xhtml", e) : S.createElement(e)
                },
                k = C("div"),
                L = [],
                M = function() {
                    return !1
                },
                D = 180 / Math.PI,
                P = 999999999999999,
                N = Date.now || function() {
                    return (new Date).getTime()
                },
                E = !(S.addEventListener || !S.all),
                X = S.createElement("div"),
                Y = [],
                O = {},
                B = 0,
                H = /^(?:a|input|textarea|button|select)$/i,
                R = 0,
                z = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"),
                A = 0,
                F = {},
                I = {},
                W = function(e, t) {
                    var o, n = {};
                    if (t)
                        for (o in e) n[o] = e[o] * t;
                    else
                        for (o in e) n[o] = e[o];
                    return n
                },
                V = function() {
                    for (var e = Y.length; --e > -1;) Y[e]()
                },
                G = function(e) {
                    for (var o = Y.length; --o > -1;) Y[o] === e && Y.splice(o, 1);
                    t.to(j, 0, {
                        overwrite: "all",
                        delay: 15,
                        onComplete: j,
                        data: "_draggable"
                    })
                },
                j = function() {
                    Y.length || t.ticker.removeEventListener("tick", V)
                },
                q = function() {
                    return null != window.pageYOffset ? window.pageYOffset : null != S.scrollTop ? S.scrollTop : _.scrollTop || S.body.scrollTop || 0
                },
                U = function() {
                    return null != window.pageXOffset ? window.pageXOffset : null != S.scrollLeft ? S.scrollLeft : _.scrollLeft || S.body.scrollLeft || 0
                },
                Z = function(e, t) {
                    Xe(e, "scroll", t), $(e.parentNode) || Z(e.parentNode, t)
                },
                Q = function(e, t) {
                    Ye(e, "scroll", t), $(e.parentNode) || Q(e.parentNode, t)
                },
                $ = function(e) {
                    return !(e && e !== _ && e !== S && e !== S.body && e !== window && e.nodeType && e.parentNode)
                },
                K = function(e, t) {
                    var o = "x" === t ? "Width" : "Height",
                        n = "scroll" + o,
                        i = "client" + o,
                        r = S.body;
                    return Math.max(0, $(e) ? Math.max(_[n], r[n]) - (window["inner" + o] || _[i] || r[i]) : e[n] - e[i])
                },
                J = function(e) {
                    var t = $(e),
                        o = K(e, "x"),
                        n = K(e, "y");
                    t ? e = I : J(e.parentNode), e._gsMaxScrollX = o, e._gsMaxScrollY = n, e._gsScrollX = e.scrollLeft || 0, e._gsScrollY = e.scrollTop || 0
                },
                ee = function(e, t) {
                    return e = e || window.event, b.pageX = e.clientX + S.body.scrollLeft + _.scrollLeft, b.pageY = e.clientY + S.body.scrollTop + _.scrollTop, t && (e.returnValue = !1), b
                },
                te = function(e) {
                    return e ? ("string" == typeof e && (e = t.selector(e)), e.length && e !== window && e[0] && e[0].style && !e.nodeType && (e = e[0]), e === window || e.nodeType && e.style ? e : null) : e
                },
                oe = function(e, t) {
                    var o, n, i, r = e.style;
                    if (void 0 === r[t]) {
                        for (i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5, o = t.charAt(0).toUpperCase() + t.substr(1); --n > -1 && void 0 === r[i[n] + o];);
                        if (n < 0) return "";
                        t = (3 === n ? "ms" : i[n]) + o
                    }
                    return t
                },
                ne = function(e, t, o) {
                    var n = e.style;
                    n && (void 0 === n[t] && (t = oe(e, t)), null == o ? n.removeProperty ? n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(t) : void 0 !== n[t] && (n[t] = o))
                },
                ie = S.defaultView ? S.defaultView.getComputedStyle : M,
                re = /(?:Left|Right|Width)/i,
                se = /(?:\d|\-|\+|=|#|\.)*/g,
                ae = function(e, t, o, n, i) {
                    if ("px" === n || !n) return o;
                    if ("auto" === n || !o) return 0;
                    var r, s = re.test(t),
                        a = e,
                        l = k.style,
                        c = o < 0;
                    return c && (o = -o), "%" === n && -1 !== t.indexOf("border") ? r = o / 100 * (s ? e.clientWidth : e.clientHeight) : (l.cssText = "border:0 solid red;position:" + le(e, "position", !0) + ";line-height:0;", "%" !== n && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = o + n : (a = e.parentNode || S.body, l[s ? "width" : "height"] = o + n), a.appendChild(k), r = parseFloat(k[s ? "offsetWidth" : "offsetHeight"]), a.removeChild(k), 0 !== r || i || (r = ae(e, t, o, n, !0))), c ? -r : r
                },
                le = function(e, t, o) {
                    var n, i = (e._gsTransform || {})[t];
                    return i || 0 === i ? i : (e.style[t] ? i = e.style[t] : (n = ie(e)) ? i = (i = n.getPropertyValue(t.replace(/([A-Z])/g, "-$1").toLowerCase())) || n.length ? i : n[t] : e.currentStyle && (i = e.currentStyle[t]), "auto" !== i || "top" !== t && "left" !== t || (i = function(e, t) {
                        if ("absolute" !== le(e, "position", !0)) return 0;
                        var o = "left" === t ? "Left" : "Top",
                            n = le(e, "margin" + o, !0);
                        return e["offset" + o] - (ae(e, t, parseFloat(n), (n + "").replace(se, "")) || 0)
                    }(e, t)), o ? i : parseFloat(i) || 0)
                },
                ce = function(e, t, o) {
                    var n = e.vars,
                        i = n[o],
                        r = e._listeners[t];
                    "function" == typeof i && i.apply(n[o + "Scope"] || n.callbackScope || e, n[o + "Params"] || [e.pointerEvent]), r && e.dispatchEvent(t)
                },
                de = function(e, t) {
                    var o, n, i, r = te(e);
                    return r ? De(r, t) : void 0 !== e.left ? (i = _e(t), {
                        left: e.left - i.x,
                        top: e.top - i.y,
                        width: e.width,
                        height: e.height
                    }) : {
                        left: n = e.min || e.minX || e.minRotation || 0,
                        top: o = e.min || e.minY || 0,
                        width: (e.max || e.maxX || e.maxRotation || 0) - n,
                        height: (e.max || e.maxY || 0) - o
                    }
                },
                pe = function() {
                    if (!S.createElementNS) return r = 0, void(s = !1);
                    var e, t, o, n, i = C("div"),
                        d = S.createElementNS("http://www.w3.org/2000/svg", "svg"),
                        p = C("div"),
                        g = i.style,
                        f = S.body || _,
                        u = "flex" === le(f, "display", !0);
                    S.body && ue && (g.position = "absolute", f.appendChild(p), p.appendChild(i), n = i.offsetParent, p.style[ue] = "rotate(1deg)", c = i.offsetParent === n, p.style.position = "absolute", g.height = "10px", n = i.offsetTop, p.style.border = "5px solid red", l = n !== i.offsetTop, f.removeChild(p)), g = d.style, d.setAttributeNS(null, "width", "400px"), d.setAttributeNS(null, "height", "400px"), d.setAttributeNS(null, "viewBox", "0 0 400 400"), g.display = "block", g.boxSizing = "border-box", g.border = "0px solid red", g.transform = "none", i.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;", f.appendChild(i), i.appendChild(d), t = (o = d.createSVGPoint().matrixTransform(d.getScreenCTM())).y, i.scrollTop = 100, o.x = o.y = 0, o = o.matrixTransform(d.getScreenCTM()), a = t - o.y < 100.1 ? 0 : t - o.y - 150, i.removeChild(d), f.removeChild(i), f.appendChild(d), u && (f.style.display = "block"), t = (e = d.getScreenCTM()).e, g.border = "50px solid red", e = d.getScreenCTM(), 0 === t && 0 === e.e && 0 === e.f && 1 === e.a ? (r = 1, s = !0) : (r = t !== e.e ? 1 : 0, s = 1 !== e.a), u && (f.style.display = "flex"), f.removeChild(d)
                },
                ge = "" !== oe(k, "perspective"),
                fe = oe(k, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                ue = oe(k, "transform"),
                he = ue.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
                me = {},
                ve = {},
                xe = _gsScope.SVGElement,
                ye = function(e) {
                    return !!(xe && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
                },
                we = (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)) && parseFloat(RegExp.$1) < 11,
                be = [],
                Te = [],
                Se = function(e) {
                    if (!e.getBoundingClientRect || !e.parentNode || !ue) return {
                        offsetTop: 0,
                        offsetLeft: 0,
                        scaleX: 1,
                        scaleY: 1,
                        offsetParent: _
                    };
                    if (!1 !== Fe.cacheSVGData && e._dCache && e._dCache.lastUpdate === t.ticker.frame) return e._dCache;
                    var o, n, i, l, c, d, p, g, f, u, h, m, v = e,
                        x = Ce(e);
                    if (x.lastUpdate = t.ticker.frame, e.getBBox && !x.isSVGRoot) {
                        for (v = e.parentNode, o = e.getBBox(); v && "svg" !== (v.nodeName + "").toLowerCase();) v = v.parentNode;
                        return l = Se(v), x.offsetTop = o.y * l.scaleY, x.offsetLeft = o.x * l.scaleX, x.scaleX = l.scaleX, x.scaleY = l.scaleY, x.offsetParent = v || _, x
                    }
                    for ((i = x.offsetParent) === S.body && (i = _), Te.length = be.length = 0; v && ("matrix(1, 0, 0, 1, 0, 0)" !== (c = le(v, ue, !0)) && "none" !== c && "translate3d(0px, 0px, 0px)" !== c && (Te.push(v), be.push(v.style[ue]), v.style[ue] = "none"), v !== i);) v = v.parentNode;
                    for (n = i.getBoundingClientRect(), c = e.getScreenCTM(), p = (g = e.createSVGPoint()).matrixTransform(c), g.x = g.y = 10, g = g.matrixTransform(c), x.scaleX = (g.x - p.x) / 10, x.scaleY = (g.y - p.y) / 10, void 0 === r && pe(), x.borderBox && !s && e.getAttribute("width") && (l = ie(e) || {}, f = parseFloat(l.borderLeftWidth) + parseFloat(l.borderRightWidth) || 0, u = parseFloat(l.borderTopWidth) + parseFloat(l.borderBottomWidth) || 0, h = parseFloat(l.width) || 0, m = parseFloat(l.height) || 0, x.scaleX *= (h - f) / h, x.scaleY *= (m - u) / m), a ? (o = e.getBoundingClientRect(), x.offsetLeft = o.left - n.left, x.offsetTop = o.top - n.top) : (x.offsetLeft = p.x - n.left, x.offsetTop = p.y - n.top), x.offsetParent = i, d = Te.length; --d > -1;) Te[d].style[ue] = be[d];
                    return x
                },
                _e = function(e, o) {
                    if (o = o || {}, !e || e === _ || !e.parentNode || e === window) return {
                        x: 0,
                        y: 0
                    };
                    var n = ie(e),
                        i = fe && n ? n.getPropertyValue(fe) : "50% 50%",
                        r = i.split(" "),
                        s = -1 !== i.indexOf("left") ? "0%" : -1 !== i.indexOf("right") ? "100%" : r[0],
                        a = -1 !== i.indexOf("top") ? "0%" : -1 !== i.indexOf("bottom") ? "100%" : r[1];
                    return "center" !== a && null != a || (a = "50%"), ("center" === s || isNaN(parseFloat(s))) && (s = "50%"), e.getBBox && ye(e) ? (e._gsTransform || (t.set(e, {
                        x: "+=0",
                        overwrite: !1
                    }), void 0 === e._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")), i = e.getBBox(), o.x = e._gsTransform.xOrigin - i.x, o.y = e._gsTransform.yOrigin - i.y) : (e.getBBox && -1 !== (s + a).indexOf("%") && (e = {
                        offsetWidth: (e = e.getBBox()).width,
                        offsetHeight: e.height
                    }), o.x = -1 !== s.indexOf("%") ? e.offsetWidth * parseFloat(s) / 100 : parseFloat(s), o.y = -1 !== a.indexOf("%") ? e.offsetHeight * parseFloat(a) / 100 : parseFloat(a)), o
                },
                Ce = function(e) {
                    if (!1 !== Fe.cacheSVGData && e._dCache && e._dCache.lastUpdate === t.ticker.frame) return e._dCache;
                    var o, n = e._dCache = e._dCache || {},
                        i = ie(e),
                        r = e.getBBox && ye(e),
                        s = "svg" === (e.nodeName + "").toLowerCase();
                    if (n.isSVG = r, n.isSVGRoot = s, n.borderBox = "border-box" === i.boxSizing, n.computedStyle = i, s)(o = e.parentNode || _).insertBefore(k, e), n.offsetParent = k.offsetParent || _, o.removeChild(k);
                    else if (r) {
                        for (o = e.parentNode; o && "svg" !== (o.nodeName + "").toLowerCase();) o = o.parentNode;
                        n.offsetParent = o
                    } else n.offsetParent = e.offsetParent;
                    return n
                },
                ke = function(e, t, o, n, i) {
                    if (e === window || !e || !e.style || !e.parentNode) return [1, 0, 0, 1, 0, 0];
                    var s, a, d, p, g, f, u, h, m, v, x, y, w, b, T = e._dCache || Ce(e),
                        C = e.parentNode,
                        k = C._dCache || Ce(C),
                        L = T.computedStyle,
                        M = T.isSVG ? k.offsetParent : C.offsetParent;
                    return s = T.isSVG && -1 !== (e.style[ue] + "").indexOf("matrix") ? e.style[ue] : L ? L.getPropertyValue(he) : e.currentStyle ? e.currentStyle[ue] : "1,0,0,1,0,0", e.getBBox && -1 !== (e.getAttribute("transform") + "").indexOf("matrix") && (s = e.getAttribute("transform")), (s = (s + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length > 6 && (s = [s[0], s[1], s[4], s[5], s[12], s[13]]), n ? s[4] = s[5] = 0 : T.isSVG && (g = e._gsTransform) && (g.xOrigin || g.yOrigin) && (s[0] = parseFloat(s[0]), s[1] = parseFloat(s[1]), s[2] = parseFloat(s[2]), s[3] = parseFloat(s[3]), s[4] = parseFloat(s[4]) - (g.xOrigin - (g.xOrigin * s[0] + g.yOrigin * s[2])), s[5] = parseFloat(s[5]) - (g.yOrigin - (g.xOrigin * s[1] + g.yOrigin * s[3]))), t && (void 0 === r && pe(), d = T.isSVG || T.isSVGRoot ? Se(e) : e, T.isSVG ? (p = e.getBBox(), v = k.isSVGRoot ? {
                        x: 0,
                        y: 0
                    } : C.getBBox(), d = {
                        offsetLeft: p.x - v.x,
                        offsetTop: p.y - v.y,
                        offsetParent: T.offsetParent
                    }) : T.isSVGRoot ? (x = parseInt(L.borderTopWidth, 10) || 0, y = parseInt(L.borderLeftWidth, 10) || 0, w = (s[0] - r) * y + s[2] * x, b = s[1] * y + (s[3] - r) * x, f = t.x, u = t.y, h = f - (f * s[0] + u * s[2]), m = u - (f * s[1] + u * s[3]), s[4] = parseFloat(s[4]) + h, s[5] = parseFloat(s[5]) + m, t.x -= h, t.y -= m, f = d.scaleX, u = d.scaleY, i || (t.x *= f, t.y *= u), s[0] *= f, s[1] *= u, s[2] *= f, s[3] *= u, we || (t.x += w, t.y += b), M === S.body && d.offsetParent === _ && (M = _)) : !l && e.offsetParent && (t.x += parseInt(le(e.offsetParent, "borderLeftWidth"), 10) || 0, t.y += parseInt(le(e.offsetParent, "borderTopWidth"), 10) || 0), a = C === _ || C === S.body, s[4] = Number(s[4]) + t.x + (d.offsetLeft || 0) - o.x - (a ? 0 : C.scrollLeft || 0), s[5] = Number(s[5]) + t.y + (d.offsetTop || 0) - o.y - (a ? 0 : C.scrollTop || 0), C && "fixed" === le(e, "position", L) && (s[4] += U(), s[5] += q()), !C || C === _ || M !== d.offsetParent || k.isSVG || c && "100100" !== ke(C).join("") || (d = k.isSVGRoot ? Se(C) : C, s[4] -= d.offsetLeft || 0, s[5] -= d.offsetTop || 0, l || !k.offsetParent || T.isSVG || T.isSVGRoot || (s[4] -= parseInt(le(k.offsetParent, "borderLeftWidth"), 10) || 0, s[5] -= parseInt(le(k.offsetParent, "borderTopWidth"), 10) || 0))), s
                },
                Le = function(e, t) {
                    if (!e || e === window || !e.parentNode) return [1, 0, 0, 1, 0, 0];
                    for (var o, n, i, r, s, a, l, c, d = _e(e, me), p = _e(e.parentNode, ve), g = ke(e, d, p, !1, !t);
                        (e = e.parentNode) && e.parentNode && e !== _;) d = p, p = _e(e.parentNode, d === me ? ve : me), l = ke(e, d, p), o = g[0], n = g[1], i = g[2], r = g[3], s = g[4], a = g[5], g[0] = o * l[0] + n * l[2], g[1] = o * l[1] + n * l[3], g[2] = i * l[0] + r * l[2], g[3] = i * l[1] + r * l[3], g[4] = s * l[0] + a * l[2] + l[4], g[5] = s * l[1] + a * l[3] + l[5];
                    return t && (o = g[0], n = g[1], i = g[2], r = g[3], s = g[4], a = g[5], c = o * r - n * i, g[0] = r / c, g[1] = -n / c, g[2] = -i / c, g[3] = o / c, g[4] = (i * a - r * s) / c, g[5] = -(o * a - n * s) / c), g
                },
                Me = function(e, t, o) {
                    var n = e.x * t[0] + e.y * t[2] + t[4],
                        i = e.x * t[1] + e.y * t[3] + t[5];
                    return e.x = n * o[0] + i * o[2] + o[4], e.y = n * o[1] + i * o[3] + o[5], e
                },
                De = function(e, t, o) {
                    if (!(e = te(e))) return null;
                    t = te(t);
                    var n, i, r, s, a, l, c, d, p, g, f, u, h, m, v, x, y, w, b, T, C, k, L = e.getBBox && ye(e);
                    if (e === window) s = q(), r = (i = U()) + (_.clientWidth || e.innerWidth || S.body.clientWidth || 0), a = s + ((e.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : e.innerHeight || S.body.clientHeight || 0);
                    else {
                        if (void 0 === t || t === window) return e.getBoundingClientRect();
                        i = -(n = _e(e)).x, s = -n.y, L ? (h = (u = e.getBBox()).width, m = u.height) : "svg" !== (e.nodeName + "").toLowerCase() && e.offsetWidth ? (h = e.offsetWidth, m = e.offsetHeight) : (C = ie(e), h = parseFloat(C.width), m = parseFloat(C.height)), r = i + h, a = s + m, "svg" !== e.nodeName.toLowerCase() || E || (k = (v = Se(e)).computedStyle || {}, w = (e.getAttribute("viewBox") || "0 0").split(" "), b = parseFloat(w[0]), T = parseFloat(w[1]), x = parseFloat(k.borderLeftWidth) || 0, y = parseFloat(k.borderTopWidth) || 0, r -= h - (h - x) / v.scaleX - b, a -= m - (m - y) / v.scaleY - T, i -= x / v.scaleX - b, s -= y / v.scaleY - T, C && (r += (parseFloat(k.borderRightWidth) + x) / v.scaleX, a += (y + parseFloat(k.borderBottomWidth)) / v.scaleY))
                    }
                    return e === t ? {
                        left: i,
                        top: s,
                        width: r - i,
                        height: a - s
                    } : (l = Le(e), c = Le(t, !0), d = Me({
                        x: i,
                        y: s
                    }, l, c), p = Me({
                        x: r,
                        y: s
                    }, l, c), g = Me({
                        x: r,
                        y: a
                    }, l, c), f = Me({
                        x: i,
                        y: a
                    }, l, c), i = Math.min(d.x, p.x, g.x, f.x), s = Math.min(d.y, p.y, g.y, f.y), F.x = F.y = 0, o && _e(t, F), {
                        left: i + F.x,
                        top: s + F.y,
                        width: Math.max(d.x, p.x, g.x, f.x) - i,
                        height: Math.max(d.y, p.y, g.y, f.y) - s
                    })
                },
                Pe = function(e) {
                    return !!(e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
                },
                Ne = "ontouchstart" in _ && "orientation" in window,
                Ee = function(e) {
                    for (var t = e.split(","), o = (void 0 !== k.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== k.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), n = {}, i = 4; --i > -1;) n[t[i]] = o[i], n[o[i]] = t[i];
                    return n
                }("touchstart,touchmove,touchend,touchcancel"),
                Xe = function(e, t, o, n) {
                    e.addEventListener ? (e.addEventListener(Ee[t], o, n), t !== Ee[t] && e.addEventListener(t, o, n)) : e.attachEvent && e.attachEvent("on" + t, o)
                },
                Ye = function(e, t, o) {
                    e.removeEventListener ? (e.removeEventListener(Ee[t], o), t !== Ee[t] && e.removeEventListener(t, o)) : e.detachEvent && e.detachEvent("on" + t, o)
                },
                Oe = function(e) {
                    n = e.touches && R < e.touches.length, Ye(e.target, "touchend", Oe)
                },
                Be = function(e) {
                    n = e.touches && R < e.touches.length, Xe(e.target, "touchend", Oe)
                },
                He = function(e, t, o, n, i, r) {
                    var s, a, l, c = {};
                    if (t)
                        if (1 !== i && t instanceof Array) {
                            if (c.end = s = [], l = t.length, "object" == typeof t[0])
                                for (a = 0; a < l; a++) s[a] = W(t[a], i);
                            else
                                for (a = 0; a < l; a++) s[a] = t[a] * i;
                            o += 1.1, n -= 1.1
                        } else c.end = "function" == typeof t ? function(o) {
                            var n, r, s = t.call(e, o);
                            if (1 !== i)
                                if ("object" == typeof s) {
                                    for (r in n = {}, s) n[r] = s[r] * i;
                                    s = n
                                } else s *= i;
                            return s
                        } : t;
                    return (o || 0 === o) && (c.max = o), (n || 0 === n) && (c.min = n), r && (c.velocity = 0), c
                },
                Re = function(e) {
                    var t;
                    return !(!e || !e.getAttribute || "BODY" === e.nodeName) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !e.onclick && !H.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || Re(e.parentNode))
                },
                ze = function(e, t) {
                    for (var o, n = e.length; --n > -1;)(o = e[n]).ondragstart = o.onselectstart = t ? null : M, ne(o, "userSelect", t ? "text" : "none")
                },
                Ae = (g = S.createElement("div"), f = S.createElement("div"), u = f.style, h = S.body || k, u.display = "inline-block", u.position = "relative", g.style.cssText = f.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden", g.appendChild(f), h.appendChild(g), d = f.offsetHeight + 18 > g.scrollHeight, u.width = "100%", ue || (u.paddingRight = "500px", p = g.scrollLeft = g.scrollWidth - g.clientWidth, u.left = "-90px", p = p !== g.scrollLeft), h.removeChild(g), p),
                Fe = function(r, s) {
                    e.call(this, r), r = te(r), i || (i = w.com.greensock.plugins.ThrowPropsPlugin), this.vars = s = W(s || {}), this.target = r, this.x = this.y = this.rotation = 0, this.dragResistance = parseFloat(s.dragResistance) || 0, this.edgeResistance = isNaN(s.edgeResistance) ? 1 : parseFloat(s.edgeResistance) || 0, this.lockAxis = s.lockAxis, this.autoScroll = s.autoScroll || 0, this.lockedAxis = null, this.allowEventDefault = !!s.allowEventDefault;
                    var a, l, c, p, g, f, u, h, b, T, C, k, M, H, j, q, U, K, oe, ie, re, se, ae, pe, fe, he, me, ve, xe, we, be, Te, Se = (s.type || (E ? "top,left" : "x,y")).toLowerCase(),
                        Ce = -1 !== Se.indexOf("x") || -1 !== Se.indexOf("y"),
                        ke = -1 !== Se.indexOf("rotation"),
                        Me = ke ? "rotation" : Ce ? "x" : "left",
                        De = Ce ? "y" : "top",
                        Pe = -1 !== Se.indexOf("x") || -1 !== Se.indexOf("left") || "scroll" === Se,
                        Oe = -1 !== Se.indexOf("y") || -1 !== Se.indexOf("top") || "scroll" === Se,
                        Ie = s.minimumMovement || 2,
                        We = this,
                        Ge = function(e) {
                            if ("string" == typeof e && (e = t.selector(e)), !e || e.nodeType) return [e];
                            var o, n = [],
                                i = e.length;
                            for (o = 0; o !== i; n.push(e[o++]));
                            return n
                        }(s.trigger || s.handle || r),
                        je = {},
                        qe = 0,
                        Ue = !1,
                        Ze = s.autoScrollMarginTop || 40,
                        Qe = s.autoScrollMarginRight || 40,
                        $e = s.autoScrollMarginBottom || 40,
                        Ke = s.autoScrollMarginLeft || 40,
                        Je = s.clickableTest || Re,
                        et = 0,
                        tt = function(e) {
                            if (!(We.isPressed && e.which < 2)) return e.preventDefault(), e.stopPropagation(), !1;
                            We.endDrag()
                        },
                        ot = function(e) {
                            if (We.autoScroll && We.isDragging && (Ue || K)) {
                                var t, o, n, i, s, a, c, d, p = r,
                                    g = 15 * We.autoScroll;
                                for (Ue = !1, I.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != _.scrollTop ? _.scrollTop : S.body.scrollTop, I.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != _.scrollLeft ? _.scrollLeft : S.body.scrollLeft, i = We.pointerX - I.scrollLeft, s = We.pointerY - I.scrollTop; p && !o;) t = (o = $(p.parentNode)) ? I : p.parentNode, n = o ? {
                                    bottom: Math.max(_.clientHeight, window.innerHeight || 0),
                                    right: Math.max(_.clientWidth, window.innerWidth || 0),
                                    left: 0,
                                    top: 0
                                } : t.getBoundingClientRect(), a = c = 0, Oe && ((d = t._gsMaxScrollY - t.scrollTop) < 0 ? c = d : s > n.bottom - $e && d ? (Ue = !0, c = Math.min(d, g * (1 - Math.max(0, n.bottom - s) / $e) | 0)) : s < n.top + Ze && t.scrollTop && (Ue = !0, c = -Math.min(t.scrollTop, g * (1 - Math.max(0, s - n.top) / Ze) | 0)), c && (t.scrollTop += c)), Pe && ((d = t._gsMaxScrollX - t.scrollLeft) < 0 ? a = d : i > n.right - Qe && d ? (Ue = !0, a = Math.min(d, g * (1 - Math.max(0, n.right - i) / Qe) | 0)) : i < n.left + Ke && t.scrollLeft && (Ue = !0, a = -Math.min(t.scrollLeft, g * (1 - Math.max(0, i - n.left) / Ke) | 0)), a && (t.scrollLeft += a)), o && (a || c) && (window.scrollTo(t.scrollLeft, t.scrollTop), mt(We.pointerX + a, We.pointerY + c)), p = t
                            }
                            if (K) {
                                var f = We.x,
                                    u = We.y;
                                f < 1e-6 && f > -1e-6 && (f = 0), u < 1e-6 && u > -1e-6 && (u = 0), ke ? (We.deltaX = f - me.data.rotation, me.data.rotation = We.rotation = f, me.setRatio(1)) : l ? (Oe && (We.deltaY = u - l.top(), l.top(u)), Pe && (We.deltaX = f - l.left(), l.left(f))) : Ce ? (Oe && (We.deltaY = u - me.data.y, me.data.y = u), Pe && (We.deltaX = f - me.data.x, me.data.x = f), me.setRatio(1)) : (Oe && (We.deltaY = u - parseFloat(r.style.top || 0), r.style.top = u + "px"), Pe && (We.deltaY = f - parseFloat(r.style.left || 0), r.style.left = f + "px")), !h || e || we || (we = !0, ce(We, "drag", "onDrag"), we = !1)
                            }
                            K = !1
                        },
                        nt = function(e, o) {
                            var n, i = We.x,
                                s = We.y;
                            r._gsTransform || !Ce && !ke || t.set(r, {
                                x: "+=0",
                                overwrite: !1,
                                data: "_draggable"
                            }), Ce ? (We.y = r._gsTransform.y, We.x = r._gsTransform.x) : ke ? We.x = We.rotation = r._gsTransform.rotation : l ? (We.y = l.top(), We.x = l.left()) : (We.y = parseInt(r.style.top, 10) || 0, We.x = parseInt(r.style.left, 10) || 0), (ie || re || se) && !o && (We.isDragging || We.isThrowing) && (se && (F.x = We.x, F.y = We.y, (n = se(F)).x !== We.x && (We.x = n.x, K = !0), n.y !== We.y && (We.y = n.y, K = !0)), ie && (n = ie(We.x)) !== We.x && (We.x = n, ke && (We.rotation = n), K = !0), re && ((n = re(We.y)) !== We.y && (We.y = n), K = !0)), K && ot(!0), e || (We.deltaX = We.x - i, We.deltaY = We.y - s, ce(We, "throwupdate", "onThrowUpdate"))
                        },
                        it = function() {
                            var e, t, o, n;
                            u = !1, l ? (l.calibrate(), We.minX = T = -l.maxScrollLeft(), We.minY = k = -l.maxScrollTop(), We.maxX = b = We.maxY = C = 0, u = !0) : s.bounds && (e = de(s.bounds, r.parentNode), ke ? (We.minX = T = e.left, We.maxX = b = e.left + e.width, We.minY = k = We.maxY = C = 0) : void 0 !== s.bounds.maxX || void 0 !== s.bounds.maxY ? (e = s.bounds, We.minX = T = e.minX, We.minY = k = e.minY, We.maxX = b = e.maxX, We.maxY = C = e.maxY) : (t = de(r, r.parentNode), We.minX = T = le(r, Me) + e.left - t.left, We.minY = k = le(r, De) + e.top - t.top, We.maxX = b = T + (e.width - t.width), We.maxY = C = k + (e.height - t.height)), T > b && (We.minX = b, We.maxX = b = T, T = We.minX), k > C && (We.minY = C, We.maxY = C = k, k = We.minY), ke && (We.minRotation = T, We.maxRotation = b), u = !0), s.liveSnap && (n = (o = !0 === s.liveSnap ? s.snap || {} : s.liveSnap) instanceof Array || "function" == typeof o, ke ? (ie = gt(n ? o : o.rotation, T, b, 1), re = null) : o.points ? se = ft(n ? o : o.points, T, b, k, C, o.radius, l ? -1 : 1) : (Pe && (ie = gt(n ? o : o.x || o.left || o.scrollLeft, T, b, l ? -1 : 1)), Oe && (re = gt(n ? o : o.y || o.top || o.scrollTop, k, C, l ? -1 : 1))))
                        },
                        rt = function() {
                            We.isThrowing = !1, ce(We, "throwcomplete", "onThrowComplete")
                        },
                        st = function() {
                            We.isThrowing = !1
                        },
                        at = function(e, t) {
                            var o, n, a, c;
                            e && i ? (!0 === e && (n = (o = s.snap || s.liveSnap || {}) instanceof Array || "function" == typeof o, e = {
                                resistance: (s.throwResistance || s.resistance || 1e3) / (ke ? 10 : 1)
                            }, ke ? e.rotation = He(We, n ? o : o.rotation, b, T, 1, t) : (Pe && (e[Me] = He(We, n ? o : o.points || o.x || o.left || o.scrollLeft, b, T, l ? -1 : 1, t || "x" === We.lockedAxis)), Oe && (e[De] = He(We, n ? o : o.points || o.y || o.top || o.scrollTop, C, k, l ? -1 : 1, t || "y" === We.lockedAxis)), (o.points || o instanceof Array && "object" == typeof o[0]) && (e.linkedProps = Me + "," + De, e.radius = o.radius))), We.isThrowing = !0, c = isNaN(s.overshootTolerance) ? 1 === s.edgeResistance ? 0 : 1 - We.edgeResistance + .2 : s.overshootTolerance, We.tween = a = i.to(l || r, {
                                throwProps: e,
                                data: "_draggable",
                                ease: s.ease || w.Power3.easeOut,
                                onComplete: rt,
                                onOverwrite: st,
                                onUpdate: s.fastMode ? ce : nt,
                                onUpdateParams: s.fastMode ? [We, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : L
                            }, isNaN(s.maxDuration) ? 2 : s.maxDuration, isNaN(s.minDuration) ? 0 === c || "object" == typeof e && e.resistance > 1e3 ? 0 : .5 : s.minDuration, c), s.fastMode || (l && (l._suspendTransforms = !0), a.render(a.duration(), !0, !0), nt(!0, !0), We.endX = We.x, We.endY = We.y, ke && (We.endRotation = We.x), a.play(0), nt(!0, !0), l && (l._suspendTransforms = !1))) : u && We.applyBounds()
                        },
                        lt = function(e) {
                            var t, o, n, i, s, a, l, d, g, f = fe || [1, 0, 0, 1, 0, 0];
                            fe = Le(r.parentNode, !0), e && We.isPressed && f.join(",") !== fe.join(",") && (t = f[0], o = f[1], n = f[2], i = f[3], s = f[4], a = f[5], g = c * (-o / (l = t * i - o * n)) + p * (t / l) + -(t * a - o * s) / l, p = (d = c * (i / l) + p * (-n / l) + (n * a - i * s) / l) * fe[1] + g * fe[3] + fe[5], c = d * fe[0] + g * fe[2] + fe[4]), fe[1] || fe[2] || 1 != fe[0] || 1 != fe[3] || 0 != fe[4] || 0 != fe[5] || (fe = null)
                        },
                        ct = function() {
                            var e = 1 - We.edgeResistance;
                            lt(!1), fe && (c = We.pointerX * fe[0] + We.pointerY * fe[2] + fe[4], p = We.pointerX * fe[1] + We.pointerY * fe[3] + fe[5]), K && (mt(We.pointerX, We.pointerY), ot(!0)), l ? (it(), f = l.top(), g = l.left()) : (dt() ? (nt(!0, !0), it()) : We.applyBounds(), ke ? (U = We.rotationOrigin = function(e, t, o, n, i) {
                                e = te(e);
                                var r = Le(e, !1),
                                    s = t.x,
                                    a = t.y;
                                return o && (_e(e, t), s -= t.x, a -= t.y), (n = !0 === n ? t : n || {}).x = s * r[0] + a * r[2] + r[4], n.y = s * r[1] + a * r[3] + r[5], n
                            }(r, {
                                x: 0,
                                y: 0
                            }), nt(!0, !0), g = We.x, f = We.y = Math.atan2(U.y - We.pointerY, We.pointerX - U.x) * D) : (r.parentNode && r.parentNode.scrollTop || 0, r.parentNode && r.parentNode.scrollLeft || 0, f = le(r, De), g = le(r, Me))), u && e && (g > b ? g = b + (g - b) / e : g < T && (g = T - (T - g) / e), ke || (f > C ? f = C + (f - C) / e : f < k && (f = k - (k - f) / e))), We.startX = g, We.startY = f
                        },
                        dt = function() {
                            return We.tween && We.tween.isActive()
                        },
                        pt = function() {
                            !X.parentNode || dt() || We.isDragging || X.parentNode.removeChild(X)
                        },
                        gt = function(e, t, o, n) {
                            return "function" == typeof e ? function(i) {
                                var r = We.isPressed ? 1 - We.edgeResistance : 1;
                                return e.call(We, i > o ? o + (i - o) * r : i < t ? t + (i - t) * r : i) * n
                            } : e instanceof Array ? function(n) {
                                for (var i, r, s = e.length, a = 0, l = P; --s > -1;)(r = (i = e[s]) - n) < 0 && (r = -r), r < l && i >= t && i <= o && (a = s, l = r);
                                return e[a]
                            } : isNaN(e) ? function(e) {
                                return e
                            } : function() {
                                return e * n
                            }
                        },
                        ft = function(e, t, o, n, i, r, s) {
                            return r = r && r < P ? r * r : P, "function" == typeof e ? function(a) {
                                var l, c, d, p = We.isPressed ? 1 - We.edgeResistance : 1,
                                    g = a.x,
                                    f = a.y;
                                return a.x = g = g > o ? o + (g - o) * p : g < t ? t + (g - t) * p : g, a.y = f = f > i ? i + (f - i) * p : f < n ? n + (f - n) * p : f, (l = e.call(We, a)) !== a && (a.x = l.x, a.y = l.y), 1 !== s && (a.x *= s, a.y *= s), r < P && (c = a.x - g) * c + (d = a.y - f) * d > r && (a.x = g, a.y = f), a
                            } : e instanceof Array ? function(t) {
                                for (var o, n, i, s, a = e.length, l = 0, c = P; --a > -1;)(s = (o = (i = e[a]).x - t.x) * o + (n = i.y - t.y) * n) < c && (l = a, c = s);
                                return c <= r ? e[l] : t
                            } : function(e) {
                                return e
                            }
                        },
                        ut = function(e, o) {
                            var n;
                            if (a && !We.isPressed && e && ("mousedown" !== e.type && "pointerdown" !== e.type || o || !(N() - et < 30) || !Ee[We.pointerEvent.type])) {
                                if (he = dt(), We.pointerEvent = e, Ee[e.type] ? (pe = -1 !== e.type.indexOf("touch") ? e.currentTarget || e.target : S, Xe(pe, "touchend", vt), Xe(pe, "touchmove", ht), Xe(pe, "touchcancel", vt), Xe(S, "touchstart", Be)) : (pe = null, Xe(S, "mousemove", ht)), xe = null, Xe(S, "mouseup", vt), e && e.target && Xe(e.target, "mouseup", vt), ae = Je.call(We, e.target) && !s.dragClickables && !o) return Xe(e.target, "change", vt), ce(We, "press", "onPress"), void ze(Ge, !0);
                                if (ve = !(!pe || Pe === Oe || !1 === We.vars.allowNativeTouchScrolling) && (Pe ? "y" : "x"), E ? e = ee(e, !0) : ve || We.allowEventDefault || (e.preventDefault(), e.preventManipulation && e.preventManipulation()), e.changedTouches ? (e = j = e.changedTouches[0], q = e.identifier) : e.pointerId ? q = e.pointerId : j = q = null, R++, function(e) {
                                        Y.push(e), 1 === Y.length && t.ticker.addEventListener("tick", V, this, !1, 1)
                                    }(ot), p = We.pointerY = e.pageY, c = We.pointerX = e.pageX, (ve || We.autoScroll) && J(r.parentNode), !r.parentNode || !We.autoScroll || l || ke || !r.parentNode._gsMaxScrollX || X.parentNode || r.getBBox || (X.style.width = r.parentNode.scrollWidth + "px", r.parentNode.appendChild(X)), ct(), We.tween && We.tween.kill(), We.isThrowing = !1, t.killTweensOf(l || r, !0, je), l && t.killTweensOf(r, !0, {
                                        scrollTo: 1
                                    }), We.tween = We.lockedAxis = null, (s.zIndexBoost || !ke && !l && !1 !== s.zIndexBoost) && (r.style.zIndex = Fe.zIndex++), We.isPressed = !0, h = !(!s.onDrag && !We._listeners.drag), !ke)
                                    for (n = Ge.length; --n > -1;) ne(Ge[n], "cursor", s.cursor || "move");
                                ce(We, "press", "onPress")
                            }
                        },
                        ht = function(e) {
                            var t, o, i, r, s, l, d = e;
                            if (a && !n && We.isPressed && e) {
                                if (We.pointerEvent = e, t = e.changedTouches) {
                                    if ((e = t[0]) !== j && e.identifier !== q) {
                                        for (r = t.length; --r > -1 && (e = t[r]).identifier !== q;);
                                        if (r < 0) return
                                    }
                                } else if (e.pointerId && q && e.pointerId !== q) return;
                                if (E) e = ee(e, !0);
                                else {
                                    if (pe && ve && !xe && (o = e.pageX, i = e.pageY, fe && (r = o * fe[0] + i * fe[2] + fe[4], i = o * fe[1] + i * fe[3] + fe[5], o = r), ((s = Math.abs(o - c)) !== (l = Math.abs(i - p)) && (s > Ie || l > Ie) || z && ve === xe) && (xe = s > l && Pe ? "x" : "y", !1 !== We.vars.lockAxisOnTouchScroll && (We.lockedAxis = "x" === xe ? "y" : "x", "function" == typeof We.vars.onLockAxis && We.vars.onLockAxis.call(We, d)), z && ve === xe))) return void vt(d);
                                    We.allowEventDefault || ve && (!xe || ve === xe) || !1 === d.cancelable || (d.preventDefault(), d.preventManipulation && d.preventManipulation())
                                }
                                We.autoScroll && (Ue = !0), mt(e.pageX, e.pageY)
                            }
                        },
                        mt = function(e, t) {
                            var o, n, i, r, s, a, l = 1 - We.dragResistance,
                                d = 1 - We.edgeResistance;
                            We.pointerX = e, We.pointerY = t, ke ? (r = Math.atan2(U.y - t, e - U.x) * D, (s = We.y - r) > 180 ? (f -= 360, We.y = r) : s < -180 && (f += 360, We.y = r), We.x !== g || Math.abs(f - r) > Ie ? (We.y = r, i = g + (f - r) * l) : i = g) : (fe && (a = e * fe[0] + t * fe[2] + fe[4], t = e * fe[1] + t * fe[3] + fe[5], e = a), (n = t - p) < Ie && n > -Ie && (n = 0), (o = e - c) < Ie && o > -Ie && (o = 0), (We.lockAxis || We.lockedAxis) && (o || n) && ((a = We.lockedAxis) || (We.lockedAxis = a = Pe && Math.abs(o) > Math.abs(n) ? "y" : Oe ? "x" : null, a && "function" == typeof We.vars.onLockAxis && We.vars.onLockAxis.call(We, We.pointerEvent)), "y" === a ? n = 0 : "x" === a && (o = 0)), i = g + o * l, r = f + n * l), (ie || re || se) && (We.x !== i || We.y !== r && !ke) ? (se && (F.x = i, F.y = r, i = (a = se(F)).x, r = a.y), ie && (i = ie(i)), re && (r = re(r))) : u && (i > b ? i = b + (i - b) * d : i < T && (i = T + (i - T) * d), ke || (r > C ? r = C + (r - C) * d : r < k && (r = k + (r - k) * d))), ke || fe || (i = Math.round(i), r = Math.round(r)), (We.x !== i || We.y !== r && !ke) && (ke ? (We.endRotation = We.x = We.endX = i, K = !0) : (Oe && (We.y = We.endY = r, K = !0), Pe && (We.x = We.endX = i, K = !0)), !We.isDragging && We.isPressed && (We.isDragging = !0, ce(We, "dragstart", "onDragStart")))
                        },
                        vt = function(e, o) {
                            if (a && We.isPressed && (!e || null == q || o || !(e.pointerId && e.pointerId !== q || e.changedTouches && ! function(e, t) {
                                    for (var o = e.length; --o > -1;)
                                        if (e[o].identifier === t) return !0;
                                    return !1
                                }(e.changedTouches, q)))) {
                                We.isPressed = !1;
                                var n, i, l, c, d, p = e,
                                    g = We.isDragging,
                                    f = t.delayedCall(.001, pt);
                                if (pe ? (Ye(pe, "touchend", vt), Ye(pe, "touchmove", ht), Ye(pe, "touchcancel", vt), Ye(S, "touchstart", Be)) : Ye(S, "mousemove", ht), Ye(S, "mouseup", vt), e && e.target && Ye(e.target, "mouseup", vt), K = !1, ae) return e && (Ye(e.target, "change", vt), We.pointerEvent = p), ze(Ge, !1), ce(We, "release", "onRelease"), ce(We, "click", "onClick"), void(ae = !1);
                                if (G(ot), !ke)
                                    for (i = Ge.length; --i > -1;) ne(Ge[i], "cursor", s.cursor || "move");
                                if (g && (qe = A = N(), We.isDragging = !1), R--, e) {
                                    if (E && (e = ee(e, !1)), (n = e.changedTouches) && (e = n[0]) !== j && e.identifier !== q) {
                                        for (i = n.length; --i > -1 && (e = n[i]).identifier !== q;);
                                        if (i < 0) return
                                    }
                                    We.pointerEvent = p, We.pointerX = e.pageX, We.pointerY = e.pageY
                                }
                                return p && !g ? (he && (s.snap || s.bounds) && at(s.throwProps), ce(We, "release", "onRelease"), z && "touchmove" === p.type || -1 !== p.type.indexOf("cancel") || (ce(We, "click", "onClick"), N() - et < 300 && ce(We, "doubleclick", "onDoubleClick"), c = p.target || p.srcElement || r, et = N(), d = function() {
                                    et !== be && We.enabled() && !We.isPressed && (c.click ? c.click() : S.createEvent && ((l = S.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, We.pointerEvent.screenX, We.pointerEvent.screenY, We.pointerX, We.pointerY, !1, !1, !1, !1, 0, null), c.dispatchEvent(l)))
                                }, z || p.defaultPrevented || t.delayedCall(1e-5, d))) : (at(s.throwProps), E || We.allowEventDefault || !p || !s.dragClickables && Je.call(We, p.target) || !g || ve && (!xe || ve !== xe) || !1 === p.cancelable || (p.preventDefault(), p.preventManipulation && p.preventManipulation()), ce(We, "release", "onRelease")), dt() && f.duration(We.tween.duration()), g && ce(We, "dragend", "onDragEnd"), !0
                            }
                        },
                        xt = function(e) {
                            if (e && We.isDragging && !l) {
                                var t = e.target || e.srcElement || r.parentNode,
                                    o = t.scrollLeft - t._gsScrollX,
                                    n = t.scrollTop - t._gsScrollY;
                                (o || n) && (fe ? (c -= o * fe[0] + n * fe[2], p -= n * fe[3] + o * fe[1]) : (c -= o, p -= n), t._gsScrollX += o, t._gsScrollY += n, mt(We.pointerX, We.pointerY))
                            }
                        },
                        yt = function(e) {
                            var t = N(),
                                o = t - et < 40,
                                n = t - qe < 40,
                                i = o && be === et,
                                r = !!e.preventDefault,
                                s = We.pointerEvent && We.pointerEvent.defaultPrevented,
                                a = o && Te === et,
                                l = e.isTrusted || null == e.isTrusted && o && i;
                            if (r && (i || n && !1 !== We.vars.suppressClickOnDrag) && e.stopImmediatePropagation(), o && (!We.pointerEvent || !We.pointerEvent.defaultPrevented) && (!i || l !== a)) return l && i && (Te = et), void(be = et);
                            (We.isPressed || n || o) && (r ? l && e.detail && o && !s || (e.preventDefault(), e.preventManipulation && e.preventManipulation()) : e.returnValue = !1)
                        },
                        wt = function(e) {
                            return fe ? {
                                x: e.x * fe[0] + e.y * fe[2] + fe[4],
                                y: e.x * fe[1] + e.y * fe[3] + fe[5]
                            } : {
                                x: e.x,
                                y: e.y
                            }
                        };
                    (oe = Fe.get(this.target)) && oe.kill(), this.startDrag = function(e, t) {
                        var o, n, i, s;
                        ut(e || We.pointerEvent, !0), t && !We.hitTest(e || We.pointerEvent) && (o = Ve(e || We.pointerEvent), n = Ve(r), i = wt({
                            x: o.left + o.width / 2,
                            y: o.top + o.height / 2
                        }), s = wt({
                            x: n.left + n.width / 2,
                            y: n.top + n.height / 2
                        }), c -= i.x - s.x, p -= i.y - s.y), We.isDragging || (We.isDragging = !0, ce(We, "dragstart", "onDragStart"))
                    }, this.drag = ht, this.endDrag = function(e) {
                        vt(e || We.pointerEvent, !0)
                    }, this.timeSinceDrag = function() {
                        return We.isDragging ? 0 : (N() - qe) / 1e3
                    }, this.timeSinceClick = function() {
                        return (N() - et) / 1e3
                    }, this.hitTest = function(e, t) {
                        return Fe.hitTest(We.target, e, t)
                    }, this.getDirection = function(e, t) {
                        var o, n, r, s, a, l, c = "velocity" === e && i ? e : "object" != typeof e || ke ? "start" : "element";
                        return "element" === c && (a = Ve(We.target), l = Ve(e)), o = "start" === c ? We.x - g : "velocity" === c ? i.getVelocity(this.target, Me) : a.left + a.width / 2 - (l.left + l.width / 2), ke ? o < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2, n = "start" === c ? We.y - f : "velocity" === c ? i.getVelocity(this.target, De) : a.top + a.height / 2 - (l.top + l.height / 2), s = (r = Math.abs(o / n)) < 1 / t ? "" : o < 0 ? "left" : "right", r < t && ("" !== s && (s += "-"), s += n < 0 ? "up" : "down"), s)
                    }, this.applyBounds = function(e) {
                        var t, o, n, i, a, l;
                        if (e && s.bounds !== e) return s.bounds = e, We.update(!0);
                        if (nt(!0), it(), u) {
                            if (t = We.x, o = We.y, t > b ? t = b : t < T && (t = T), o > C ? o = C : o < k && (o = k), (We.x !== t || We.y !== o) && (n = !0, We.x = We.endX = t, ke ? We.endRotation = t : We.y = We.endY = o, K = !0, ot(!0), We.autoScroll && !We.isDragging))
                                for (J(r.parentNode), i = r, I.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != _.scrollTop ? _.scrollTop : S.body.scrollTop, I.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != _.scrollLeft ? _.scrollLeft : S.body.scrollLeft; i && !l;) a = (l = $(i.parentNode)) ? I : i.parentNode, Oe && a.scrollTop > a._gsMaxScrollY && (a.scrollTop = a._gsMaxScrollY), Pe && a.scrollLeft > a._gsMaxScrollX && (a.scrollLeft = a._gsMaxScrollX), i = a;
                            We.isThrowing && (n || We.endX > b || We.endX < T || We.endY > C || We.endY < k) && at(s.throwProps, n)
                        }
                        return We
                    }, this.update = function(e, t, o) {
                        var n = We.x,
                            i = We.y;
                        return lt(!t), e ? We.applyBounds() : (K && o && ot(!0), nt(!0)), t && (mt(We.pointerX, We.pointerY), K && ot(!0)), We.isPressed && !t && (Pe && Math.abs(n - We.x) > .01 || Oe && Math.abs(i - We.y) > .01 && !ke) && ct(), We.autoScroll && (J(r.parentNode), Ue = We.isDragging, ot(!0)), We.autoScroll && (Q(r, xt), Z(r, xt)), We
                    }, this.enable = function(e) {
                        var n, c, d;
                        if ("soft" !== e) {
                            for (c = Ge.length; --c > -1;) d = Ge[c], Xe(d, "mousedown", ut), Xe(d, "touchstart", ut), Xe(d, "click", yt, !0), ke || ne(d, "cursor", s.cursor || "move"), ne(d, "touchCallout", "none"), ne(d, "touchAction", Pe === Oe ? "none" : Pe ? "pan-y" : "pan-x"), ye(d) && ne(d.ownerSVGElement || d, "touchAction", Pe === Oe ? "none" : Pe ? "pan-y" : "pan-x"), this.vars.allowContextMenu || Xe(d, "contextmenu", tt);
                            ze(Ge, !1)
                        }
                        return Z(r, xt), a = !0, i && "soft" !== e && i.track(l || r, Ce ? "x,y" : ke ? "rotation" : "top,left"), l && l.enable(), r._gsDragID = n = "d" + B++, O[n] = this, l && (l.element._gsDragID = n), t.set(r, {
                            x: "+=0",
                            overwrite: !1,
                            data: "_draggable"
                        }), me = {
                            t: r,
                            data: E ? H : r._gsTransform,
                            tween: {},
                            setRatio: E ? function() {
                                t.set(r, M)
                            } : o._internals.setTransformRatio || o._internals.set3DTransformRatio
                        }, ct(), We.update(!0), We
                    }, this.disable = function(e) {
                        var t, o, n = We.isDragging;
                        if (!ke)
                            for (t = Ge.length; --t > -1;) ne(Ge[t], "cursor", null);
                        if ("soft" !== e) {
                            for (t = Ge.length; --t > -1;) o = Ge[t], ne(o, "touchCallout", null), ne(o, "touchAction", null), Ye(o, "mousedown", ut), Ye(o, "touchstart", ut), Ye(o, "click", yt), Ye(o, "contextmenu", tt);
                            ze(Ge, !0), pe && (Ye(pe, "touchcancel", vt), Ye(pe, "touchend", vt), Ye(pe, "touchmove", ht)), Ye(S, "mouseup", vt), Ye(S, "mousemove", ht)
                        }
                        return Q(r, xt), a = !1, i && "soft" !== e && i.untrack(l || r, Ce ? "x,y" : ke ? "rotation" : "top,left"), l && l.disable(), G(ot), We.isDragging = We.isPressed = ae = !1, n && ce(We, "dragend", "onDragEnd"), We
                    }, this.enabled = function(e, t) {
                        return arguments.length ? e ? We.enable(t) : We.disable(t) : a
                    }, this.kill = function() {
                        return We.isThrowing = !1, t.killTweensOf(l || r, !0, je), We.disable(), delete O[r._gsDragID], We
                    }, -1 !== Se.indexOf("scroll") && (l = this.scrollProxy = new function(e, o) {
                        e = te(e), o = o || {};
                        var n, i, r, s, a, l, c = S.createElement("div"),
                            p = c.style,
                            g = e.firstChild,
                            f = 0,
                            u = 0,
                            h = e.scrollTop,
                            m = e.scrollLeft,
                            v = e.scrollWidth,
                            x = e.scrollHeight,
                            y = 0,
                            w = 0,
                            b = 0;
                        ge && !1 !== o.force3D ? (a = "translate3d(", l = "px,0px)") : ue && (a = "translate(", l = "px)"), this.scrollTop = function(e, t) {
                            if (!arguments.length) return -this.top();
                            this.top(-e, t)
                        }, this.scrollLeft = function(e, t) {
                            if (!arguments.length) return -this.left();
                            this.left(-e, t)
                        }, this.left = function(n, i) {
                            if (!arguments.length) return -(e.scrollLeft + u);
                            var r = e.scrollLeft - m,
                                s = u;
                            if ((r > 2 || r < -2) && !i) return m = e.scrollLeft, t.killTweensOf(this, !0, {
                                left: 1,
                                scrollLeft: 1
                            }), this.left(-m), void(o.onKill && o.onKill());
                            (n = -n) < 0 ? (u = n - .5 | 0, n = 0) : n > w ? (u = n - w | 0, n = w) : u = 0, (u || s) && (a ? this._suspendTransforms || (p[ue] = a + -u + "px," + -f + l) : p.left = -u + "px", Ae && u + y >= 0 && (p.paddingRight = u + y + "px")), e.scrollLeft = 0 | n, m = e.scrollLeft
                        }, this.top = function(n, i) {
                            if (!arguments.length) return -(e.scrollTop + f);
                            var r = e.scrollTop - h,
                                s = f;
                            if ((r > 2 || r < -2) && !i) return h = e.scrollTop, t.killTweensOf(this, !0, {
                                top: 1,
                                scrollTop: 1
                            }), this.top(-h), void(o.onKill && o.onKill());
                            (n = -n) < 0 ? (f = n - .5 | 0, n = 0) : n > b ? (f = n - b | 0, n = b) : f = 0, (f || s) && (a ? this._suspendTransforms || (p[ue] = a + -u + "px," + -f + l) : p.top = -f + "px"), e.scrollTop = 0 | n, h = e.scrollTop
                        }, this.maxScrollTop = function() {
                            return b
                        }, this.maxScrollLeft = function() {
                            return w
                        }, this.disable = function() {
                            for (g = c.firstChild; g;) s = g.nextSibling, e.appendChild(g), g = s;
                            e === c.parentNode && e.removeChild(c)
                        }, this.enable = function() {
                            if ((g = e.firstChild) !== c) {
                                for (; g;) s = g.nextSibling, c.appendChild(g), g = s;
                                e.appendChild(c), this.calibrate()
                            }
                        }, this.calibrate = function(t) {
                            var o, s, a = e.clientWidth === n;
                            h = e.scrollTop, m = e.scrollLeft, a && e.clientHeight === i && c.offsetHeight === r && v === e.scrollWidth && x === e.scrollHeight && !t || ((f || u) && (o = this.left(), s = this.top(), this.left(-e.scrollLeft), this.top(-e.scrollTop)), a && !t || (p.display = "block", p.width = "auto", p.paddingRight = "0px", (y = Math.max(0, e.scrollWidth - e.clientWidth)) && (y += le(e, "paddingLeft") + (d ? le(e, "paddingRight") : 0))), p.display = "inline-block", p.position = "relative", p.overflow = "visible", p.verticalAlign = "top", p.width = "100%", p.paddingRight = y + "px", d && (p.paddingBottom = le(e, "paddingBottom", !0)), E && (p.zoom = "1"), n = e.clientWidth, i = e.clientHeight, v = e.scrollWidth, x = e.scrollHeight, w = e.scrollWidth - n, b = e.scrollHeight - i, r = c.offsetHeight, p.display = "block", (o || s) && (this.left(o), this.top(s)))
                        }, this.content = c, this.element = e, this._suspendTransforms = !1, this.enable()
                    }(r, function(e, t) {
                        var o;
                        for (o in t) void 0 === e[o] && (e[o] = t[o]);
                        return e
                    }({
                        onKill: function() {
                            We.isPressed && vt(null)
                        }
                    }, s)), r.style.overflowY = Oe && !Ne ? "auto" : "hidden", r.style.overflowX = Pe && !Ne ? "auto" : "hidden", r = l.content), !1 !== s.force3D && t.set(r, {
                        force3D: !0
                    }), ke ? je.rotation = 1 : (Pe && (je[Me] = 1), Oe && (je[De] = 1)), ke ? (H = (M = y).css, M.overwrite = !1) : Ce && (H = (M = Pe && Oe ? m : Pe ? v : x).css, M.overwrite = !1), this.enable()
                },
                Ie = Fe.prototype = new e;
            Ie.constructor = Fe, Ie.pointerX = Ie.pointerY = Ie.startX = Ie.startY = Ie.deltaX = Ie.deltaY = 0, Ie.isDragging = Ie.isPressed = !1, Fe.version = "0.16.1", Fe.zIndex = 1e3, Xe(S, "touchcancel", function() {}), Xe(S, "contextmenu", function(e) {
                var t;
                for (t in O) O[t].isPressed && O[t].endDrag()
            }), Fe.create = function(e, o) {
                "string" == typeof e && (e = t.selector(e));
                for (var n = e && 0 !== e.length ? Pe(e) ? function(e) {
                        var t, o, n, i = [],
                            r = e.length;
                        for (t = 0; t < r; t++)
                            if (o = e[t], Pe(o))
                                for (n = o.length, n = 0; n < o.length; n++) i.push(o[n]);
                            else o && 0 !== o.length && i.push(o);
                        return i
                    }(e) : [e] : [], i = n.length; --i > -1;) n[i] = new Fe(n[i], o);
                return n
            }, Fe.get = function(e) {
                return O[(te(e) || {})._gsDragID]
            }, Fe.timeSinceDrag = function() {
                return (N() - A) / 1e3
            };
            var We = {},
                Ve = function(e, t) {
                    if (e === window) return We.left = We.top = 0, We.width = We.right = _.clientWidth || e.innerWidth || S.body.clientWidth || 0, We.height = We.bottom = (e.innerHeight || 0) - 20 < _.clientHeight ? _.clientHeight : e.innerHeight || S.body.clientHeight || 0, We;
                    var o = e.pageX !== t ? {
                        left: e.pageX - U(),
                        top: e.pageY - q(),
                        right: e.pageX - U() + 1,
                        bottom: e.pageY - q() + 1
                    } : e.nodeType || e.left === t || e.top === t ? E ? function(e) {
                        var t, o, n = 0,
                            i = 0;
                        for (t = (e = te(e)).offsetWidth, o = e.offsetHeight; e;) n += e.offsetTop, i += e.offsetLeft, e = e.offsetParent;
                        return {
                            top: n,
                            left: i,
                            width: t,
                            height: o
                        }
                    }(e) : te(e).getBoundingClientRect() : e;
                    return o.right === t && o.width !== t ? (o.right = o.left + o.width, o.bottom = o.top + o.height) : o.width === t && (o = {
                        width: o.right - o.left,
                        height: o.bottom - o.top,
                        right: o.right,
                        left: o.left,
                        bottom: o.bottom,
                        top: o.top
                    }), o
                };
            return Fe.hitTest = function(e, t, o) {
                if (e === t) return !1;
                var n, i, r, s = Ve(e),
                    a = Ve(t),
                    l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
                return l || !o ? !l : (r = -1 !== (o + "").indexOf("%"), o = parseFloat(o) || 0, (n = {
                    left: Math.max(s.left, a.left),
                    top: Math.max(s.top, a.top)
                }).width = Math.min(s.right, a.right) - n.left, n.height = Math.min(s.bottom, a.bottom) - n.top, !(n.width < 0 || n.height < 0) && (r ? (o *= .01, (i = n.width * n.height) >= s.width * s.height * o || i >= a.width * a.height * o) : n.width > o && n.height > o))
            }, X.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;", Fe
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();