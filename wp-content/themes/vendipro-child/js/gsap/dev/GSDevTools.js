/*!
 * VERSION: 0.1.9
 * DATE: 2019-02-07
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * GSDevTools is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope;
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("GSDevTools", ["TweenLite", "core.Animation", "core.SimpleTimeline", "TimelineLite", "utils.Draggable", "plugins.CSSPlugin"], function(ge, fe, s, ue, he) {
        var me, a, ve, l, xe, i = document, ye = i.documentElement, r = "http://www.w3.org/2000/svg", c = "http://www.w3.org/1999/xhtml", we = 0, be = {}, Te = "GSDevTools", Se = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), _e = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47), Ce = function(e) {
            for (var t = -1 !== (window ? window.location.href : "").indexOf(String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107)) && -1 !== e.indexOf(String.fromCharCode(108, 111, 99, 97, 108, 104, 111, 115, 116)), o = [Se, String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), String.fromCharCode(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), String.fromCharCode(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), String.fromCharCode(99, 100, 112, 110, 46, 105, 111), String.fromCharCode(103, 97, 110, 110, 111, 110, 46, 116, 118), String.fromCharCode(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), String.fromCharCode(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), String.fromCharCode(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), String.fromCharCode(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), String.fromCharCode(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), String.fromCharCode(116, 119, 101, 101, 110, 108, 105, 116, 101, 46, 99, 111, 109), String.fromCharCode(112, 108, 110, 107, 114, 46, 99, 111), String.fromCharCode(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), String.fromCharCode(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), String.fromCharCode(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), String.fromCharCode(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), String.fromCharCode(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), String.fromCharCode(99, 111, 100, 105, 101, 114, 46, 105, 111), String.fromCharCode(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], n = o.length; -1 < --n; )
                if (-1 !== e.indexOf(o[n]))
                    return !0;
            return t && window && window.console && console.log(String.fromCharCode(87, 65, 82, 78, 73, 78, 71, 58, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + Te + String.fromCharCode(32, 105, 115, 32, 114, 117, 110, 110, 105, 110, 103, 32, 108, 111, 99, 97, 108, 108, 121, 44, 32, 98, 117, 116, 32, 105, 116, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 119, 111, 114, 107, 32, 111, 110, 32, 97, 32, 108, 105, 118, 101, 32, 100, 111, 109, 97, 105, 110, 32, 98, 101, 99, 97, 117, 115, 101, 32, 105, 116, 32, 105, 115, 32, 97, 32, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 32, 98, 101, 110, 101, 102, 105, 116, 32, 111, 102, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 46, 32, 80, 108, 101, 97, 115, 101, 32, 115, 105, 103, 110, 32, 117, 112, 32, 97, 116, 32, 104, 116, 116, 112, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98, 47, 32, 97, 110, 100, 32, 116, 104, 101, 110, 32, 100, 111, 119, 110, 108, 111, 97, 100, 32, 116, 104, 101, 32, 39, 114, 101, 97, 108, 39, 32, 118, 101, 114, 115, 105, 111, 110, 32, 102, 114, 111, 109, 32, 121, 111, 117, 114, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 97, 99, 99, 111, 117, 110, 116, 32, 119, 104, 105, 99, 104, 32, 104, 97, 115, 32, 110, 111, 32, 115, 117, 99, 104, 32, 108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 115, 46, 32, 84, 104, 101, 32, 102, 105, 108, 101, 32, 121, 111, 117, 39, 114, 101, 32, 117, 115, 105, 110, 103, 32, 119, 97, 115, 32, 108, 105, 107, 101, 108, 121, 32, 100, 111, 119, 110, 108, 111, 97, 100, 101, 100, 32, 102, 114, 111, 109, 32, 101, 108, 115, 101, 119, 104, 101, 114, 101, 32, 111, 110, 32, 116, 104, 101, 32, 119, 101, 98, 32, 97, 110, 100, 32, 105, 115, 32, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 116, 111, 32, 108, 111, 99, 97, 108, 32, 117, 115, 101, 32, 111, 114, 32, 111, 110, 32, 115, 105, 116, 101, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 46)),
            t
        }(window ? window.location.host : ""), ke = function(e, t, o) {
            var n = i.createElementNS ? i.createElementNS("svg" === e ? r : c, e) : i.createElement(e);
            return t && ("string" == typeof t && (t = i.querySelector(t)),
            t.appendChild(n)),
            "svg" === e && (n.setAttribute("xmlns", r),
            n.setAttribute("xmlns:xlink", c)),
            o && (n.style.cssText = o),
            n
        }, Me = function() {
            i.selection ? i.selection.empty() : window.getSelection && window.getSelection().removeAllRanges()
        }, d = fe._rootTimeline, Le = function(e, t) {
            for (var o = [], n = 0, i = e._first; i; )
                i instanceof ge ? i.vars.id && (o[n++] = i) : (t && i.vars.id && (o[n++] = i),
                n = (o = o.concat(Le(i, t))).length),
                i = i._next;
            return o
        }, De = function(e, t) {
            var o = 0
              , n = Math.max(0, e._repeat)
              , i = e._first;
            for (i || (o = e.duration()); i; )
                o = Math.max(o, 999 < i.totalDuration() ? i.endTime(!1) : i._startTime + i._totalDuration / i._timeScale),
                i = i._next;
            return !t && n ? o * (n + 1) + e._repeatDelay * n : o
        }, Pe = function(e) {
            if (!e)
                return null;
            if (e instanceof fe)
                return e;
            for (var t = Le(d, !0), o = t.length; -1 < --o; )
                if (t[o].vars.id === e)
                    return t[o]
        }, Ne = function(e, t, o, n) {
            var i, r, s;
            return "string" == typeof e && ("=" === e.charAt(1) ? ((i = parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2))) < 0 && 0 === n && (n = 100),
            e = n / 100 * t.duration() + i) : isNaN(e) && t.getLabelTime && -1 !== t.getLabelTime(e) ? e = t.getLabelTime(e) : t === Be && (0 < (r = e.indexOf("=")) ? (i = parseInt(e.charAt(r - 1) + "1", 10) * parseFloat(e.substr(r + 1)),
            e = e.substr(0, r - 1)) : i = 0,
            (s = Pe(e)) && (e = p(s, o / 100 * s.duration()) + i))),
            e = isNaN(e) ? o : parseFloat(e),
            Math.min(100, Math.max(0, e / t.duration() * 100))
        }, p = function(e, t) {
            var o = e;
            if (t = t || 0,
            o.timeline)
                for (; o.timeline.timeline; )
                    t = t / o._timeScale + o._startTime,
                    o = o.timeline;
            return t
        }, Ee = function(t, e, o, n) {
            var i, r;
            if ("mousedown" !== e && "mouseup" !== e || (t.style.cursor = "pointer"),
            "mousedown" === e && (r = void 0 !== t.onpointerdown ? "pointerdown" : void 0 !== t.ontouchstart ? "touchstart" : null))
                return i = function(e) {
                    "select" !== e.target.nodeName.toLowerCase() && e.type === r ? (e.stopPropagation(),
                    a && (e.preventDefault(),
                    o.call(t, e))) : e.type !== r && o.call(t, e),
                    a = !0
                }
                ,
                t.addEventListener(r, i, n),
                void t.addEventListener(e, i, n);
            t.addEventListener(e, o, n)
        }, Xe = function(e, t, o) {
            e.removeEventListener(t, o),
            (t = "mousedown" !== t ? null : void 0 !== e.onpointerdown ? "pointerdown" : void 0 !== e.ontouchstart ? "touchstart" : null) && e.removeEventListener(t, o)
        }, Ye = function(e, t, o, n) {
            var i, r = e.options, s = r.length;
            for (t += ""; -1 < --s; )
                if (r[s].innerHTML === t || r[s].value === t)
                    return e.selectedIndex = s,
                    o.innerHTML = r[s].innerHTML,
                    r[s];
            n && ((i = ke("option", e)).setAttribute("value", t),
            i.innerHTML = o.innerHTML = "string" == typeof n ? n : t,
            e.selectedIndex = r.length - 1)
        }, Oe = function(e, t, o) {
            var n = e.options
              , i = Math.min(n.length - 1, Math.max(0, e.selectedIndex + t));
            return e.selectedIndex = i,
            o && (o.innerHTML = n[i].innerHTML),
            n[i].value
        }, Be = new ue({
            data: "root",
            id: "Global Timeline",
            autoRemoveChildren: !1,
            smoothChildTiming: !0
        }), g = new ue({
            data: "root",
            id: "Global Temp",
            autoRemoveChildren: !1,
            smoothChildTiming: !0
        }), He = ge.to(Be, 1, {
            time: 1,
            ease: Linear.easeNone,
            data: "root",
            id: "_rootTween",
            paused: !0,
            immediateRender: !1
        }), Re = function() {
            var e, t, o = g._first;
            if (o) {
                if (ve && ve.animation() === Be) {
                    for (e = Be._duration; o; )
                        t = o._next,
                        "function" == typeof o.target && o.target === o.vars.onComplete && !o._duration || o.target && o.target._gsIgnore ? s.prototype.add.call(d, o, o._startTime - o._delay) : Be.add(o, o._startTime - o._delay),
                        o = t;
                    return e !== Be.duration()
                }
                for (; o; )
                    t = o._next,
                    o._gc || o._totalTime === o._totalDuration ? o.kill() : s.prototype.add.call(d, o, o._startTime - o._delay),
                    o = t
            }
        }, f = function() {
            ve && (ve.update(),
            l = !1),
            ge.ticker.removeEventListener("tick", f)
        }, u = function(r) {
            if (false===(this.vars = r = r || {},
            r.id = r.id || ("string" == typeof r.animation ? r.animation : we++),
            be[r.id + ""] = this,
            !Ce))
                return window.location.href = "http://" + Se + _e + "?plugin=" + Te + "&source=codepen",
                !1;
            r.animation && !ze && !0 !== r.globalSync && (r.globalSync = !1);
            var g, f, u, h, m, i, s, v, a, l, c, d, e, t, o, n, p, x = this, y = function(e, t, o) {
                me || (ke("style", ye).innerHTML = ".gs-dev-tools{height:51px;bottom:0;left:0;right:0;display:block;position:fixed;overflow:visible;padding:0}.gs-dev-tools *{box-sizing:content-box;visibility:visible}.gs-dev-tools .gs-top{position:relative;z-index:499}.gs-dev-tools .gs-bottom{display:flex;align-items:center;justify-content:space-between;background-color:rgba(0,0,0,.6);height:42px;border-top:1px solid #999;position:relative}.gs-dev-tools .timeline{position:relative;height:8px;margin-left:15px;margin-right:15px;overflow:visible}.gs-dev-tools .progress-bar,.gs-dev-tools .timeline-track{height:8px;width:100%;position:absolute;top:0;left:0}.gs-dev-tools .timeline-track{background-color:#999;opacity:.6}.gs-dev-tools .progress-bar{background-color:#91e600;height:8px;top:0;width:0;pointer-events:none}.gs-dev-tools .seek-bar{width:100%;position:absolute;height:24px;top:-12px;left:0;background-color:transparent}.gs-dev-tools .in-point,.gs-dev-tools .out-point{width:15px;height:26px;position:absolute;top:-18px}.gs-dev-tools .in-point-shape{fill:#6d9900;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .out-point-shape{fill:#994242;stroke:rgba(0,0,0,.5);stroke-width:1}.gs-dev-tools .in-point{transform:translateX(-100%)}.gs-dev-tools .out-point{left:100%}.gs-dev-tools .grab{stroke:rgba(255,255,255,.3);stroke-width:1}.gs-dev-tools .playhead{position:absolute;top:-5px;transform:translate(-50%,0);left:0;border-radius:50%;width:16px;height:16px;border:1px solid #6d9900;background-color:#91e600}.gs-dev-tools .gs-btn-white{fill:#fff}.gs-dev-tools .pause{opacity:0}.gs-dev-tools .select-animation{vertical-align:middle;position:relative;padding:6px 10px}.gs-dev-tools .select-animation-container{flex-grow:4;width:40%}.gs-dev-tools .select-arrow{display:inline-block;width:12px;height:7px;margin:0 7px;transform:translate(0,-2px)}.gs-dev-tools .select-arrow-shape{stroke:rgba(255,255,255,.6);stroke-width:2px;fill:none}.gs-dev-tools .rewind{height:16px;width:19px;padding:10px 4px;min-width:24px}.gs-dev-tools .rewind-path{opacity:.6}.gs-dev-tools .play-pause{width:24px;height:24px;padding:6px 10px;min-width:24px}.gs-dev-tools .ease{width:30px;height:30px;padding:10px;min-width:30px;display:none}.gs-dev-tools .ease-path{fill:none;stroke:rgba(255,255,255,.6);stroke-width:2px}.gs-dev-tools .ease-border{fill:rgba(255,255,255,.25)}.gs-dev-tools .time-scale{font-family:monospace;font-size:18px;text-align:center;color:rgba(255,255,255,.6);padding:4px 4px 4px 0;min-width:30px;margin-left:7px}.gs-dev-tools .loop{width:20px;padding:5px;min-width:20px}.gs-dev-tools .loop-path{fill:rgba(255,255,255,.6)}.gs-dev-tools label span{color:#fff;font-family:monospace;text-decoration:none;font-size:16px;line-height:18px}.gs-dev-tools .time-scale span{color:rgba(255,255,255,.6)}.gs-dev-tools button:focus,.gs-dev-tools select:focus{outline:0}.gs-dev-tools label{position:relative;cursor:pointer}.gs-dev-tools label.locked{text-decoration:none;cursor:auto}.gs-dev-tools label input,.gs-dev-tools label select{position:absolute;left:0;top:0;z-index:1;font:inherit;font-size:inherit;line-height:inherit;height:100%;width:100%;color:#000!important;opacity:0;background:0 0;border:none;padding:0;margin:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer}.gs-dev-tools label input+.display{position:relative;z-index:2}.gs-dev-tools .gs-bottom-right{vertical-align:middle;display:flex;align-items:center;flex-grow:4;width:40%;justify-content:flex-end}.gs-dev-tools .time-container{font-size:18px;font-family:monospace;color:rgba(255,255,255,.6);margin:0 5px}.gs-dev-tools .logo{width:32px;height:32px;position:relative;top:2px;margin:0 12px}.gs-dev-tools .gs-hit-area{background-color:transparent;width:100%;height:100%;top:0;position:absolute}.gs-dev-tools.minimal{height:auto;display:flex;align-items:stretch}.gs-dev-tools.minimal .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1)}.gs-dev-tools.minimal .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools.minimal .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools.minimal .in-point,.gs-dev-tools.minimal .out-point{display:none}.gs-dev-tools.minimal .select-animation-container{display:none}.gs-dev-tools.minimal .rewind{display:none}.gs-dev-tools.minimal .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools.minimal .time-scale{min-width:26px}.gs-dev-tools.minimal .loop{width:18px;min-width:18px;display:none}.gs-dev-tools.minimal .gs-bottom-right{display:none}@media only screen and (max-width:600px){.gs-dev-tools{height:auto;display:flex;align-items:stretch}.gs-dev-tools .gs-top{order:2;flex-grow:4;background-color:rgba(0,0,0,1);height:42px}.gs-dev-tools .gs-bottom{background-color:rgba(0,0,0,1);border-top:none}.gs-dev-tools .timeline{top:50%;transform:translate(0,-50%)}.gs-dev-tools .in-point,.gs-dev-tools .out-point{display:none}.gs-dev-tools .select-animation-container{display:none}.gs-dev-tools .rewind{display:none}.gs-dev-tools .play-pause{width:20px;height:20px;padding:4px 6px;margin-left:14px}.gs-dev-tools .time-scale{min-width:26px}.gs-dev-tools .loop{width:18px;min-width:18px;display:none}.gs-dev-tools .gs-bottom-right{display:none}}",
                me = !0),
                "string" == typeof e && (e = document.querySelector(e));
                var n = ke("div", e || ye.getElementsByTagName("body")[0] || ye);
                return n.setAttribute("class", "gs-dev-tools" + (t ? " minimal" : "")),
                n.innerHTML = '<div class=gs-hit-area></div><div class=gs-top><div class=timeline><div class=timeline-track></div><div class=progress-bar></div><div class=seek-bar></div><svg class=in-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=in-point-shape points=".5 .5 14.5 .5 14.5 25.5 .5 17.5"/><polyline class=grab points="5.5 4 5.5 15"/><polyline class=grab points="9.5 4 9.5 17"/></svg> <svg class=out-point viewBox="0 0 15 26"xmlns=http://www.w3.org/2000/svg><polygon class=out-point-shape points=".5 .5 14.5 .5 14.5 17.5 .5 25.5"/><polyline class=grab points="5.5 4 5.5 17"/><polyline class=grab points="9.5 4 9.5 15"/></svg><div class=playhead></div></div></div><div class=gs-bottom><div class=select-animation-container><label class=select-animation><select class=animation-list><option>Global Timeline<option>myTimeline</select><nobr><span class="display animation-label">Global Timeline</span> <svg class=select-arrow viewBox="0 0 12.05 6.73"xmlns=http://www.w3.org/2000/svg><polyline class=select-arrow-shape points="0.35 0.35 6.03 6.03 11.7 0.35"/></svg></nobr></label></div><svg class=rewind viewBox="0 0 12 15.38"xmlns=http://www.w3.org/2000/svg><path d=M0,.38H2v15H0Zm2,7,10,7.36V0Z class="gs-btn-white rewind-path"/></svg> <svg class=play-pause viewBox="0 0 20.97 25.67"xmlns=http://www.w3.org/2000/svg><g class=play><path d="M8,4.88 C8,10.18 8,15.48 8,20.79 5.33,22.41 2.66,24.04 0,25.67 0,17.11 0,8.55 0,0 2.66,1.62 5.33,3.25 8,4.88"class="gs-btn-white play-1"style=stroke:#fff;stroke-width:.6px /><path d="M14.485,8.855 C16.64,10.18 18.8,11.5 20.97,12.83 16.64,15.48 12.32,18.13 8,20.79 8,15.48 8,10.18 8,4.88 10.16,6.2 12.32,7.53 14.48,8.85"class="gs-btn-white play-2"style=stroke:#fff;stroke-width:.6px /></g></svg> <svg class=loop viewBox="0 0 29 25.38"xmlns=http://www.w3.org/2000/svg><path d=M27.44,5.44,20.19,0V3.06H9.06A9.31,9.31,0,0,0,0,12.41,9.74,9.74,0,0,0,.69,16l3.06-2.23a6,6,0,0,1-.12-1.22,5.49,5.49,0,0,1,5.43-5.5H20.19v3.81Z class=loop-path /><path d=M25.25,11.54a5.18,5.18,0,0,1,.12,1.12,5.41,5.41,0,0,1-5.43,5.41H9.19V14.5L1.94,19.94l7.25,5.44V22.06H19.94A9.2,9.2,0,0,0,29,12.84a9.42,9.42,0,0,0-.68-3.53Z class=loop-path /></svg> <svg class=ease viewBox="0 0 25.67 25.67"xmlns=http://www.w3.org/2000/svg><path d=M.48,25.12c1.74-3.57,4.28-12.6,8.8-10.7s4.75,1.43,6.5-1.11S19.89,1.19,25.2.55 class=ease-path /><path d=M24.67,1V24.67H1V1H24.67m1-1H0V25.67H25.67V0Z class=ease-border /></svg><label class=time-scale><select><option value=10>10x<option value=5>5x<option value=2>2x<option value=1 selected>1x<option value=0.5>0.5x<option value=0.25>0.25x<option value=0.1>0.1x</select><span class="display time-scale-label">1x</span></label><div class=gs-bottom-right><div class=time-container><span class=time>0.00</span> / <span class=duration>0.00</span></div><a href="https://greensock.com/docs/Utilities/GSDevTools?source=GSDevTools"target=_blank title=Docs><svg class=logo viewBox="0 0 100 100"xmlns=http://www.w3.org/2000/svg><path d="M60 15.4c-.3-.4-.5-.6-.5-.7.1-.6.2-1 .2-1.7v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1s-.2-.4-.4-.6zm24.6 21.9c-.5-1.7-1.9-2-4.2-.7.9-1.5 2.1-1.5 2.3-2.1.9-2.5-.6-4.6-1.2-5.3.7-1.8 1.4-4.5-1-6.8-1-1-2.4-1.2-3.6-1.1 1.8 1.7 3.4 4.4 2.5 7.2-.1.3-.9.7-1.7 1 0 0 .4 2-.3 3.5-.3.6-.8 1.5-1.3 2.6 1 .9 1.6 1 3 1.3-.9.1-1.2.4-1.2.5-.7 3 1 3.4 1.4 4.8 0 .1 0 .2.1.3v.4c-.3.3-1.4.5-2.5.5s-1.8 1-1.8 1c-.2.1-.3.3-.4.4v1c0 .1 0 .4.1.6.1.5.3 1.3.4 1.8.9.6 1.4.9 2.2 1.1.5.1 1 .2 1.5.1.3-.1.7-.3 1-.7 1.5-1.7 1.9-3.2 2.2-4.1 0-.1 0-.2.1-.2 0 .1.1.1.1.2 0 0 .1-.1.1-.2l.1-.1c1.3-1.6 2.9-4.5 2.1-7zM74.3 49.9c-.1-.3-.1-.7-.2-1.1v-.2c-.1-.2-.1-.4-.2-.6 0-.1-.1-.3-.1-.5s-.1-.5-.1-.7v-.1c0-.2-.1-.5-.1-.7-.1-.3-.1-.7-.2-1.1v-.1c0-.2 0-.3-.1-.5v-.9c0-.1 0-.2.1-.3V43h-.3c-1.1.1-3.8.4-6.7.2-1.2-.1-2.4-.3-3.6-.6-1-.3-1.8-.5-2.3-.7-1.2-.4-1.6-.6-1.8-.7 0 .2-.1.4-.1.7 0 .3-.1.5-.1.8-.1.2-.1.4-.2.6l.1.1c.5.5 1.5 1.3 1.5 2.1v.2c-.1.4-.4.5-.8.9-.1.1-.6.7-1.1 1.1l-.6.6c-.1 0-.1.1-.2.1-.1.1-.3.2-.4.3-.2.1-.7.5-.8.6-.1.1-.2.1-.3.1-2.8 8.8-2.2 13.5-1.5 16.1.1.5.3 1 .4 1.3-.4.5-.8 1-1.2 1.4-1.2 1.5-2 2.6-2.6 4.2 0 .1 0 .1-.1.2 0 .1 0 .2-.1.2-.2.5-.3 1-.4 1.5-.6 2.3-.8 4.5-.9 6.6-.1 2.4-.2 4.6-.5 6.9.7.3 3.1.9 4.7.6.2-.1 0-3.9.6-5.7l.6-1.5c.4-.9.9-1.9 1.3-3.1.3-.7.5-1.5.7-2.4.1-.5.2-1 .3-1.6V74v-.1c.1-.6.1-1.3.1-2 0-.2-.7.3-1.1.9.3-1.8 1.3-2.1 2-3.2.3-.5.6-1.1.6-2 2.5-1.7 4-3.7 5-5.7.2-.4.4-.9.6-1.4.3-.8.5-1.6.7-2.4.3-1.4.8-3.2 1.2-4.8v-.1c.4-1.2.8-2.2 1.2-2.6-.2.9-.4 1.7-.6 2.5v.2c-.6 3.5-.7 6.2-2 9.2 1 2.6 1.9 3.9 2 7.6-2 0-3.2 1.6-3.7 3.2 1.2.3 3.9.7 8.3.1h.3c.1-.5.3-1.1.5-1.5.3-.8.5-1.5.6-2.2.2-1.3.1-2.4 0-3.2 3.9-3.7 2.6-11 1.6-16.6zm.3-15.1c.1-.3.2-.6.4-.8.2-.3.3-.7.5-1 .1-.3.3-.6.4-.9.5-1.5.4-2.8.3-3.5-.1 0-.1-.1-.2-.1-.5-.2-.9-.4-1.4-.6-.1 0-.2-.1-.3-.1-3.8-1.2-7.9-.9-11.9.1-1 .2-1.9.5-2.9.1-2.3-.8-3.9-1.9-4.6-2.8l-.2-.2c-.1.2-.2.4-.4.6.2 2.3-.5 3.9-1.4 5.1.9 1.2 2.6 2.8 3.6 3.4 1.1.6 1.7.7 3.4.4-.6.7-1.1 1-1.9 1.4.1.7.2 2 .5 3.4.3.3 1.2.8 2.3 1.3.5.3 1.1.5 1.7.7.8.3 1.7.6 2.4.8.1 0 .2.1.3.1.5.1 1.1.2 1.8.2h.9c2.1 0 4.5-.2 5.4-.3h.1c-.1-2.7.2-4.6.7-6.2.2-.3.4-.7.5-1.1zm-23.2 9.3v.2c-.3 1.7.5 2.4 1.9 3.4.6.5 0 .5.5.8.3.2.7.3 1 .3.3 0 .5 0 .8-.1.2-.1.4-.3.6-.5.1-.1.3-.2.5-.4.3-.2.6-.5.7-.6.1-.1.2-.1.3-.2.2-.2.5-.5.6-.7.2-.2.4-.5.5-.7 0-.1.1-.1.1-.1v-.1c.1-.4-.3-.8-.8-1.3-.2-.2-.4-.3-.5-.5-.3-.3-.6-.5-1-.7-.9-.5-1.9-.7-3-.7l-.3-.3c-2.2-2.5-3.2-4.8-3.9-6.5-.9-2.1-1.9-3.3-3.9-4.9 1 .4 1.8.8 2.3 1.1.5.4 1.3.4 1.9.2.2-.1.5-.2.7-.3.2-.1.4-.2.6-.4 1.6-1.3 2.5-3.8 2.6-5.6v-.1c.2-.3.6-1.1.8-1.4l.1.1c.1.1.3.2.6.5.1 0 .1.1.2.1.1.1.2.1.2.2.8.6 1.9 1.3 2.6 1.7 1.4.7 2.3.7 5.3-.1 2.2-.6 4.8-.8 6.8-.8 1.4 0 2.7.3 4 .7.2.1.4.1.5.2.3.1.6.2.9.4 0 0 .1 0 .1.1.8.4 2.1 1.2 2.5-.3.1-2-.6-3.9-1.6-5.3 0 0-.1 0-.1-.1-.1-.1-.2-.2-.4-.3-.1-.1-.2-.1-.3-.2-.1-.1-.2-.2-.4-.2-.6-.4-1.2-.8-1.6-.9-.1-.1-.3-.1-.4-.2h-.1-.1c-.1 0-.3-.1-.4-.1-.1 0-.1 0-.2-.1h-.1l-.2-.4c-.2-.1-.4-.2-.5-.2h-.6c-.3 0-.5.1-.7.1-.7.1-1.2.3-1.7.4-.2 0-.3.1-.5.1-.5.1-1 .2-1.6.2-.4 0-.9-.1-1.5-.2-.4-.1-.8-.2-1.1-.3-.2-.1-.4-.1-.6-.2-.6-.2-1.1-.3-1.7-.4h-.2-1.8c-.3 0-.6.1-1 .1H57.9c-.8 0-1.5 0-2.3-.1-.2 0-.5-.1-.7-.1-.5-.1-.9-.2-1.3-.4-.2-.1-.3-.1-.4-.2-.1 0-.2 0-.2-.1-.3-.1-.6-.1-.9-.1H51h-.1c-.4 0-.9.1-1.4.2-1.1.2-2.1.6-3 1.3-.3.2-.6.5-.8.8-.1.1-.2.2-.2.3-.4.6-.8 1.2-.9 2 0 .2-.1.4-.1.6 0 .2 1.7.7 2.3 2.8-.8-1.2-2.3-2.5-4.1-1.4-1.5 1-1.1 3.1-2.4 5.4-.3.5-.6.9-1 1.4-.8 1-.7 2.1.2 4.4 1.4 3.4 7.6 5.3 11.5 8.3l.4.4zm8.7-36.3c0 .6.1 1 .2 1.6v.1c0 .3.1.6.1.9.1 1.2.4 2 1 2.9 0 .1.1.1.1.2.3.2.5.3.8.4 1.1.2 3.1.3 4.2 0 .2-.1.5-.3.7-.5.4-.4.7-1.1.9-1.7.1-.7.3-1.3.4-1.8 0-.2.1-.4.1-.5v-.1c0-.2 0-.3.1-.5.2-.7.2-2.4.3-2.8.1-.7 0-1.8-.1-2.5 0-.2-.1-.4-.1-.5v-.1c-.2-.5-1.4-1.4-4.3-1.4-3.1 0-4 1-4.1 1.5v.1c0 .1 0 .3-.1.5-.1.4-.2 1.4-.2 1.9v2.3zm-6 88.6c0-.1-.1-.2-.1-.3-.7-1.5-1.1-3.5-1.3-4.6.4.1.7.6.8.3.2-.5-.4-1.5-.5-2.2v-.1c-.5-.5-4-.5-3.7-.3-.4.8-1 .6-1.3 2.1-.1.7.8.1 1.7.1-1.4.9-3 2.1-3.4 3.2-.1.1-.1.2-.1.3 0 .2-.1.4-.1.5-.1 1.2.5 1.6 2 2.4H48.4c1.4.3 3 .3 4.3.3 1.2-.2 1.6-.7 1.6-1.4-.2-.1-.2-.2-.2-.3z"style=fill:#efefef /><path d="M56.1 36.5c.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.4-2.9-6.1-4.4-8.3.4-.2 1-.4 1.5-.8 1.6 1.9 3.3 3 5 4.1zm-1.7 13.2s-1.4 0-2.3-1c0 0-.1-.5.1-.7 0 0-1.2-1-1.5-1.7-.2-.5-.3-1.1-.2-1.6-4.4-3.7-10.9-4.2-12.9-9.1-.5-1.2-1.3-2.9-.9-3.9-.3.1-.5.2-.8.3-2.9.9-11.7 5.3-17.9 8.8 1.6 1.7 2.6 4.3 3.2 7.2l.3 1.5c.1.5.1 1 .2 1.5.1 1.4.4 2.7.8 3.9.2.8.6 1.5.9 2.2.6 1 1.2 1.9 2.1 2.6.6.5 1.2.9 1.9 1.3 2.1 1.1 5 1.6 8.6 1.5H37.9c.5 0 1 .1 1.5.1h.1c.4.1.9.1 1.3.2h.2c.4.1.9.2 1.3.4h.1c.4.1.8.3 1.1.5h.1c.4.2.7.4 1.1.6h.1c.7.4 1.3.9 1.9 1.5l.1.1c.6.5 1.1 1.1 1.5 1.8 0 .1.1.1.1.2s.1.1.1.2c.4.6 1.2 1.1 1.9 1.3.7-.9 1.5-1.8 2.2-2.8-1.6-6 0-11.7 1.8-16.9zm-26-15.9c5-2.4 9-4.1 9.9-4.5.3-.6.6-1.4.9-2.6.1-.3.2-.5.3-.8 1-2.7 2.7-2.8 3.5-3v-.2c.1-1.1.5-2 1-2.8-8.8 2.5-18 5.5-28 11.7-.1.1-.2.2-.4.2C11.3 34.5 3 40.3 1.3 51c2.4-2.7 6-5.6 10.5-8.5.1-.1.3-.2.5-.3.2-.1.5-.3.7-.4 1.2-.7 2.4-1.4 3.6-2.2 2.2-1.2 4.5-2.4 6.7-3.5 1.8-.8 3.5-1.6 5.1-2.3zm54.9 61.3l-.3-.3c-.8-.6-4.1-1.2-5.5-2.3-.4-.3-1.1-.7-1.7-1.1-1.6-.9-3.5-1.8-3.5-2.1v-.1c-.2-1.7-.2-7 .1-8.8.3-1.8.7-4.4.8-5.1.1-.6.5-1.2.1-1.2h-.4c-.2 0-.4.1-.8.1-1.5.3-4.3.6-6.6.4-.9-.1-1.6-.2-2-.3-.5-.1-.7-.2-.9-.3H62.3c-.4.5 0 2.7.6 4.8.3 1.1.8 2 1.2 3 .3.8.6 1.8.8 3.1 0 .2.1.4.1.7.2 2.8.3 3.6-.2 4.9-.1.3-.3.6-.4 1-.4.9-.7 1.7-.6 2.3 0 .2.1.4.1.5.2.4.6.7 1.2.8.2 0 .3.1.5.1.3 0 .6.1.9.1 3.4 0 5.2 0 8.6.4 2.5.4 3.9.6 5.1.5.4 0 .9-.1 1.4-.1 1.2-.2 1.8-.5 1.9-.9-.1.2-.1.1-.2-.1zM60.2 16.4zm-.5 1.7zm3.8.5c.1 0 .3.1.5.1.4.1.7.2 1.2.3.3.1.6.1.9.1h1.3c.3-.1.7-.1 1-.2.7-.2 1.5-.4 2.7-.6h.3c.3 0 .6.1.9.3.1.1.2.1.4.2.3.2.8.2 1.2.4h.1c.1 0 .1.1.2.1.6.3 1.3.7 1.9 1.1l.3.3c.9-.1 1.6-.2 2.1-.2h.1c-.2-.4-.3-1.3-1.8-.6-.6-.7-.8-1.3-2.1-.9-.1-.2-.2-.3-.3-.4l-.1-.1c-.1-.1-.2-.3-.3-.4 0-.1-.1-.1-.1-.2-.2-.3-.5-.5-.9-.7-.7-.4-1.5-.6-2.3-.5-.2 0-.4.1-.6.2-.1 0-.2.1-.2.1-.1 0-.2.1-.3.2-.5.3-1.3.8-2.1 1-.1 0-.1 0-.2.1-.2 0-.4.1-.5.1H66.5h-.1c-.4-.1-1.1-.2-2-.5-.1 0-.2-.1-.3-.1-.9-.2-1.8-.5-2.7-.8-.3-.1-.7-.2-1-.3-.1 0-.1 0-.2-.1h-.1s-.1 0-.1-.1c-.3-.3-.7-.6-1.3-.8-.5-.2-1.2-.4-2.1-.5-.2 0-.5 0-.7.1-.4.2-.8.6-1.2.9.1.1.3.3.4.5.1.2.2.4.3.7l-.6-.6c-.5-.4-1.1-.8-1.7-.9-.8-.2-1.4.4-2.3.9 1 0 1.8.1 2.5.4.1 0 .1 0 .2.1h.1c.1 0 .2.1.3.1.9.4 1.8.6 2.7.6h1.3c.5 0 .8-.1 1.1-.1.1 0 .4 0 .7-.1h2.2c.4.4.9.6 1.6.8z"style=fill:#88ce02 /><path d="M100 51.8c0-19.5-12.5-36.1-30-42.1.1-1.2.2-2.4.3-3.1.1-1.5.2-3.9-.5-4.9-1.6-2.3-9.1-2.1-10.5-.1-.4.6-.7 3.6-.6 5.9-1.1-.1-2.2-.1-3.3-.1-16.5 0-30.9 9-38.6 22.3-2.4 1.4-4.7 2.8-6.1 4C5.4 38 2.2 43.2 1 47c-1.6 4.7-1.1 7.6.4 5.8 1.2-1.5 6.6-5.9 10.1-8.2-.4 2.3-.6 4.8-.6 7.2 0 21 14.5 38.5 34 43.3-.1 1.1.1 2 .7 2.6.9.8 3.2 2 6.4 1.6 2.9-.3 3.5-.5 3.2-2.9h.2c2.7 0 5.3-.2 7.8-.7.1.1.2.2.4.3 1.5 1 7.1.8 9.6.7s6.2.9 8.6.5c2.9-.5 3.4-2.3 1.6-3.2-1.5-.8-3.8-1.3-6.7-3.1C90.6 83.4 100 68.7 100 51.8zM60.1 5.5c0-.5.1-1.5.2-2.1 0-.2 0-.4.1-.5v-.1c.1-.5 1-1.5 4.1-1.5 2.9 0 4.2.9 4.3 1.4v.1c0 .1 0 .3.1.5.1.8.2 1.9.1 2.7 0 .5-.1 2.1-.2 2.9 0 .1 0 .3-.1.5v.1c0 .2-.1.3-.1.5-.1.5-.2 1.1-.4 1.8-.1.6-.5 1.2-.9 1.7-.2.3-.5.5-.7.5-1.1.3-3.1.3-4.2 0-.3-.1-.5-.2-.8-.4 0-.1-.1-.1-.1-.2-.6-.9-.9-1.7-1-2.9 0-.4-.1-.6-.1-.9v-.1c-.1-.6-.2-1-.2-1.6v-.3c-.1-1.3-.1-2.1-.1-2.1zm-.4 7.5v-.4c.6.6 1.3 1.3 1.8 1.7.2.2.5.3.8.3.2 0 .3 0 .5.1h1.6c.8 0 1.6.1 2 0 .1 0 .2 0 .3-.1.6-.3 1.4-1 2.1-1.6 0 .6.1 1.2.1 1.7v1.5c0 .3 0 .5.1.7-.1.1-.2.1-.4.2-.7.4-1.7 1-2.3.9-.5-.1-1.5-.3-2.6-.7-1.2-.3-2.4-.8-3.2-1.2 0 0-.1 0-.1-.1-.2-.3-.4-.5-.6-.7-.3-.4-.5-.6-.5-.7.3-.4.4-.9.4-1.6zm.5 3.4zm-7.3-.3c.6.1 1.2.5 1.7.9.2.2.5.4.6.6-.1-.2-.2-.5-.3-.7-.1-.2-.3-.4-.4-.5.4-.3.8-.7 1.2-.9.2-.1.4-.1.7-.1.9.1 1.6.2 2.1.5.6.2 1 .5 1.3.8 0 0 .1 0 .1.1h.1c.1 0 .1 0 .2.1.3.1.6.2 1 .3.9.3 1.9.6 2.7.8.1 0 .2.1.3.1.9.2 1.6.4 2 .5h.4c.2 0 .4 0 .5-.1.1 0 .1 0 .2-.1.7-.2 1.5-.7 2.1-1 .1-.1.2-.1.3-.2.1 0 .2-.1.2-.1.2-.1.4-.2.6-.2.8-.2 1.7.1 2.3.5.3.2.6.4.9.7 0 .1.1.1.1.2.1.2.2.3.3.4l.1.1c.1.1.2.2.3.4 1.3-.4 1.5.2 2.1.9 1.6-.7 1.7.2 1.8.6h-.1c-.5 0-1.2 0-2.1.2l-.3-.3c-.5-.4-1.2-.8-1.9-1.1-.1 0-.1-.1-.2-.1h-.1c-.4-.2-.8-.2-1.2-.4-.1-.1-.2-.1-.4-.2-.3-.1-.6-.3-.9-.3h-.3c-1.2.1-2 .4-2.7.6-.3.1-.7.2-1 .2-.4.1-.8.1-1.3 0-.3 0-.6-.1-.9-.1-.5-.1-.8-.2-1.2-.3-.2 0-.3-.1-.5-.1h-.1c-.6-.2-1.2-.3-1.8-.4h-.1-2.1c-.4.1-.6.1-.7.1-.3 0-.7.1-1.1.1h-1.3c-.9 0-1.9-.2-2.7-.6-.1 0-.2-.1-.3-.1H53c-.1 0-.1 0-.2-.1-.7-.3-1.6-.4-2.5-.4 1.2-.8 1.8-1.4 2.6-1.3zm6.8 2zm-15.2 4.1c.1-.7.4-1.4.9-2 .1-.1.2-.2.2-.3l.8-.8c.9-.6 1.9-1.1 3-1.3.5-.1 1-.2 1.4-.2H52c.3 0 .6.1.9.1.1 0 .2 0 .2.1.1.1.2.1.4.2.4.2.8.3 1.3.4.2 0 .5.1.7.1.7.1 1.5.1 2.3.1H58.7c.4 0 .7-.1 1-.1H61.7c.6.1 1.1.2 1.7.4.2 0 .4.1.6.2.3.1.7.2 1.1.3.6.1 1.1.2 1.5.2.6 0 1.1-.1 1.6-.2.2 0 .3-.1.5-.1.5-.1 1-.3 1.7-.4.2 0 .5-.1.7-.1h.6c.2 0 .4.1.5.2l.1.1h.1c.1 0 .1 0 .2.1.2.1.3.1.4.1h.2c.1.1.3.1.4.2.4.2 1 .6 1.6.9.1.1.2.2.4.2.1.1.2.1.3.2.2.1.3.3.4.3l.1.1c1.1 1.4 1.8 3.3 1.6 5.3-.3 1.5-1.6.7-2.5.3 0 0-.1 0-.1-.1-.3-.1-.6-.2-.9-.4-.2-.1-.4-.1-.5-.2-1.2-.4-2.5-.7-4-.7-2 0-4.6.1-6.8.8-3 .8-4 .8-5.3.1-.8-.4-1.8-1.1-2.6-1.7-.1-.1-.2-.1-.2-.2-.1-.1-.1-.1-.2-.1-.3-.2-.6-.4-.6-.5l-.1-.1c-.2.3-.6 1-.8 1.4v.1c-.1 1.7-1 4.2-2.6 5.6-.2.1-.4.3-.6.4-.2.1-.5.2-.7.3-.7.2-1.4.2-1.9-.2-.5-.3-1.3-.7-2.3-1.1 2 1.6 3 2.8 3.9 4.9.7 1.7 1.7 4 3.9 6.5l.3.3c1.1 0 2.1.2 3 .7.4.2.7.4 1 .7.2.2.4.3.5.5.5.4.9.8.8 1.3v.1s0 .1-.1.1c-.1.2-.3.5-.5.7-.1.1-.4.4-.6.7-.1.1-.2.2-.3.2-.1.1-.4.3-.7.6-.2.2-.4.3-.5.4-.2.1-.4.4-.6.5-.3.1-.5.2-.8.1-.3 0-.7-.2-1-.3-.5-.3.1-.3-.5-.8-1.4-1-2.2-1.7-1.9-3.4v-.2c-.2-.1-.3-.3-.5-.4-3.9-3-10.1-4.9-11.5-8.3-.9-2.3-1-3.4-.2-4.4.4-.5.8-1 1-1.4 1.3-2.3.9-4.4 2.4-5.4 1.8-1.2 3.3.2 4.1 1.4-.5-2.1-2.3-2.6-2.3-2.8.3.1.3-.1.3-.3zm29 20s-.1 0 0 0c-.1 0-.1 0 0 0-.9.1-3.3.3-5.4.3h-.9c-.7 0-1.3-.1-1.8-.2-.1 0-.2 0-.3-.1-.7-.2-1.6-.5-2.4-.8-.6-.2-1.2-.5-1.7-.7-1.1-.5-2.1-1.1-2.3-1.3-.5-1.4-.7-2.7-.7-3.4.8-.4 1.3-.7 1.9-1.4-1.7.3-2.4.2-3.4-.4-1-.5-2.6-2.2-3.6-3.4 1-1.2 1.7-2.9 1.4-5.1.1-.2.3-.4.4-.6 0 .1.1.1.2.2.7.9 2.4 2 4.6 2.8 1.1.4 2 .1 2.9-.1 4-1 8.1-1.3 11.9-.1.1 0 .2.1.3.1.5.2.9.4 1.4.6.1 0 .1.1.2.1.1.7.2 2-.3 3.5-.1.3-.2.6-.4.9-.2.3-.3.6-.5 1-.1.3-.2.5-.4.8-.2.4-.3.8-.5 1.3-.4 1.4-.7 3.4-.6 6zm-23.9-9c.4-.2 1-.4 1.5-.8 1.6 1.8 3.3 3 5 4.1.3 1.4.5 2.4.8 4.2h-.2c-.1.5-.1.9-.1 1.3-1-.4-2.2-.5-2.6-.5-3.7-4.3-3-6-4.4-8.3zm-32.9 6.5c-1.3.7-2.5 1.4-3.6 2.2-.2.1-.5.3-.7.4-.1.1-.3.2-.5.3-4.5 2.9-8.1 5.8-10.5 8.5 1.7-10.8 10-16.5 14.3-19.2.1-.1.2-.2.4-.2 10-6.2 19.2-9.2 28-11.7-.5.8-.9 1.7-1 2.8v.2c-.8.1-2.5.2-3.5 3-.1.2-.2.5-.3.8-.3 1.2-.6 2-.9 2.6-.9.4-5 2.2-9.9 4.5-1.6.8-3.3 1.6-5 2.4-2.3 1-4.6 2.2-6.8 3.4zm28 24.8s0-.1 0 0c-.4-.3-.8-.5-1.2-.7h-.1c-.4-.2-.7-.3-1.1-.5h-.1c-.4-.1-.8-.3-1.3-.4h-.2c-.4-.1-.8-.2-1.3-.2h-.1c-.5-.1-1-.1-1.5-.1H35.9c-3.7.1-6.5-.4-8.6-1.5-.7-.4-1.4-.8-1.9-1.3-.9-.7-1.5-1.6-2.1-2.6-.4-.7-.7-1.4-.9-2.2-.4-1.2-.6-2.5-.8-3.9 0-.5-.1-1-.2-1.5l-.3-1.5c-.6-2.9-1.6-5.5-3.2-7.2 6.3-3.5 15-7.9 17.8-8.8.3-.1.6-.2.8-.3-.3 1.1.4 2.7.9 3.9 2.1 4.9 8.6 5.4 12.9 9.1 0 .5 0 1.1.2 1.6.5.6 1.7 1.6 1.7 1.6-.2.2-.1.7-.1.7.9 1 2.3 1 2.3 1-1.8 5.2-3.4 10.9-1.9 16.9-.7 1-1.5 1.8-2.2 2.8-.7-.2-1.4-.6-1.9-1.3 0-.1-.1-.1-.1-.2s-.1-.1-.1-.2l-1.5-1.8-.1-.1c-.5-.4-1.2-.9-1.9-1.3zm7.9 33.6c-1.3.1-2.9 0-4.3-.3h-.2-.1c-1.5-.8-2.1-1.2-2-2.4 0-.2 0-.3.1-.5 0-.1.1-.2.1-.3.5-1.1 2.1-2.2 3.4-3.2-.8 0-1.8.7-1.7-.1.2-1.5.9-1.3 1.3-2.1-.2-.3 3.3-.2 3.8.3v.1c0 .7.7 1.7.5 2.2-.1.3-.4-.2-.8-.3.2 1.1.6 3.1 1.3 4.6.1.1.1.2.1.3 0 .1.1.2.1.3 0 .7-.4 1.2-1.6 1.4zM59 67.7c0 .9-.3 1.6-.6 2-.7 1.1-1.7 1.4-2 3.2.4-.6 1.1-1.1 1.1-.9 0 .8-.1 1.4-.1 2v.2c-.1.6-.2 1.1-.3 1.6-.2.9-.5 1.7-.7 2.4-.4 1.2-.9 2.1-1.3 3.1l-.6 1.5c-.6 1.7-.4 5.6-.6 5.7-1.6.3-4.1-.3-4.7-.6.3-2.2.4-4.5.5-6.9.1-2.1.3-4.3.9-6.6.1-.5.3-1 .4-1.5 0-.1 0-.2.1-.2 0-.1 0-.1.1-.2.5-1.6 1.4-2.7 2.6-4.2.4-.4.7-.9 1.2-1.4-.1-.4-.2-.8-.4-1.3-.7-2.6-1.3-7.3 1.5-16.1.1 0 .2-.1.3-.1.2-.1.7-.5.8-.6.1-.1.3-.2.4-.3.1 0 .1-.1.2-.1l.6-.6 1.1-1.1c.4-.4.7-.5.8-.9v-.2c0-.8-1.1-1.5-1.5-2.1l-.1-.1c.1-.2.1-.4.2-.6 0-.2.1-.5.1-.8 0-.2.1-.5.1-.7.1.1.6.4 1.8.7.6.2 1.3.4 2.3.7 1.1.3 2.4.5 3.6.6 2.9.2 5.6 0 6.7-.2h.3v.1c0 .1 0 .2-.1.3v.9c0 .2 0 .3.1.5v.1c0 .4.1.7.2 1.1 0 .3.1.5.1.7v.1c0 .3.1.5.1.7 0 .2.1.3.1.5.1.2.1.4.2.6v.2c.1.4.2.8.2 1.1 1 5.7 2.3 12.9-1.1 16.7.2.8.3 1.9 0 3.2-.1.7-.3 1.4-.6 2.2-.2.5-.3 1-.5 1.5h-.3c-4.5.6-7.1.2-8.3-.1.5-1.6 1.7-3.3 3.7-3.2-.1-3.7-1.1-5-2-7.6 1.3-3 1.3-5.7 2-9.2v-.2c.2-.8.3-1.6.6-2.5-.4.5-.8 1.5-1.2 2.6v.1c-.5 1.5-.9 3.4-1.2 4.8-.2.8-.4 1.6-.7 2.4-.2.5-.4.9-.6 1.4-1.5 1.9-3 3.9-5.5 5.6zm18.5 24.9c1.5 1.1 4.7 1.8 5.5 2.3l.3.3c.1.1.1.2.1.3-.1.4-.7.7-1.9.9-.5.1-.9.1-1.4.1-1.3 0-2.6-.2-5.1-.5-3.4-.5-5.2-.4-8.6-.4-.3 0-.6 0-.9-.1-.2 0-.4-.1-.5-.1-.6-.2-1-.5-1.2-.8-.1-.2-.1-.3-.1-.5-.1-.7.2-1.5.6-2.3.2-.4.3-.7.4-1 .5-1.3.4-2.1.2-4.9 0-.2-.1-.4-.1-.7-.2-1.3-.5-2.3-.8-3.1-.4-1.1-.9-1.9-1.2-3-.6-2.1-1-4.3-.6-4.8H62.5c.2.1.5.2.9.3.5.1 1.1.2 2 .3 2.2.2 5.1-.2 6.6-.4.3-.1.6-.1.8-.1h.4c.4 0 .1.6-.1 1.2-.1.7-.5 3.3-.8 5.1-.3 1.8-.2 7.1-.1 8.8v.1c0 .3 1.9 1.2 3.5 2.1.7.2 1.4.5 1.8.9zm4.8-48.2c0 .1 0 .1 0 0-.1.1-.2.2-.2.3 0-.1-.1-.1-.1-.2 0 .1 0 .2-.1.2-.2.9-.6 2.4-2.2 4.1-.4.4-.7.6-1 .7-.5.1-.9 0-1.5-.1-.9-.2-1.3-.6-2.2-1.1-.1-.6-.3-1.3-.4-1.8 0-.3-.1-.5-.1-.6v-1l.4-.4s.7-1 1.8-1 2.2-.2 2.5-.5v-.1-.3c0-.1 0-.2-.1-.3-.4-1.4-2.1-1.8-1.4-4.8 0-.2.3-.5 1.2-.5-1.4-.3-2-.4-3-1.3.5-1.1 1-1.9 1.3-2.6.8-1.5.3-3.5.3-3.5.8-.3 1.6-.7 1.7-1 .9-2.8-.7-5.5-2.5-7.2 1.2-.1 2.6.1 3.6 1.1 2.4 2.4 1.8 5 1 6.8.6.7 2.1 2.9 1.2 5.3-.2.6-1.4.6-2.3 2.1 2.3-1.3 3.7-1 4.2.7 1 2.4-.6 5.3-2.1 7z"/><path d="M22 53.4v-.2c0-.2-.1-.5-.2-.9s-.1-.8-.2-1.3c-.5-4.7-1.9-9.4-4.9-11.3 3.7-2 16.8-8.5 21.9-10.5 2.9-1.2.8-.4-.2 1.4-.8 1.4-.3 2.9-.5 3.2-.6.8-12.6 10.5-15.9 19.6zm32.2-2.3c-3.4 3.8-12 11-18.2 11.4 8.7-.2 12.2 4.1 14.7 9.7 2.6-5.2 2.7-10.3 2.6-16.1 0-2.6 1.8-6 .9-5zm5.3-23L54.3 24s-1.1 3.1-1 4.6c.1 1.6-1.8 2.7-.9 3.6.9.9 3.2 2.5 4 3.4.7.9 1.1 7.1 1.1 7.1l2.2 2.7s1-1.8 1.1-6.3c.2-5.4-2.9-7.1-3.3-8.6-.4-1.4.6-2.9 2-2.4zm3.1 45.6l3.9.3s1.2-2.2 2.1-3.5c.9-1.4.4-1.6 0-4.6-.4-3-1.4-9.3-1.2-13.6l-3.1 10.2s1.8 5.6 1.6 6.4c-.1.8-3.3 4.8-3.3 4.8zm5 18.8c-1.1 0-2.5-.4-3.5-.8l-1 .3.2 4s5.2.7 4.6-.4c-.6-1.2-.3-3.1-.3-3.1zm12 .6c-1 0-.3.2.4 1.2.8 1 .1 2-.8 2.3l3.2.5 1.9-1.7c.1 0-3.7-2.3-4.7-2.3zM73 76c-1.6.5-4.2.8-5.9.8-1.7.1-3.7-.1-5-.5v1.4s1.2.5 5.4.5c3.5.1 5.7-.8 5.7-.8l.9-.8c-.1.1.5-1.1-1.1-.6zm-.2 3.1c-1.6.6-3.9.6-5.6.7-1.7.1-3.7-.1-5-.5l.1 1.4s.7.3 4.9.4c3.5.1 5.7-.7 5.7-.7l.3-.5c-.1-.1.3-1-.4-.8zm5.9-42.7c-.9-.8-1.4-2.4-1.5-3.3l-1.9 2.5.7 1.2s2.5.1 2.8.1c.4 0 .3-.1-.1-.5zM69 14.7c.6-.7.2-2.7.2-2.7L66 14.6l-4.4-.8-.5-1.3-1.3-.1c.8 1.8 1.8 2.5 3.3 3.1.9.4 4.5.9 5.9-.8z"style=opacity:.4;fill-rule:evenodd;clip-rule:evenodd /></svg></a></div></div>',
                e && (n.style.position = "absolute",
                n.style.top = t ? "calc(100% - 42px)" : "calc(100% - 51px)"),
                o && ("string" == typeof o ? n.style.cssText = o : "object" == typeof o && (o.data = "root",
                ge.set(n, o).kill()),
                n.style.top && (n.style.bottom = "auto"),
                n.style.width && ge.set(n, {
                    xPercent: -50,
                    left: "50%",
                    right: "auto",
                    data: "root"
                }).kill()),
                !t && n.offsetWidth < 600 && (n.setAttribute("class", "gs-dev-tools minimal"),
                e && (n.style.top = "calc(100% - 42px)")),
                n
            }(r.container, r.minimal, r.css), w = function(e) {
                return y.querySelector(e)
            }, b = function(e, t) {
                return !1 !== r.persist && "undefined" != typeof sessionStorage && sessionStorage.setItem("gs-dev-" + e + r.id, t),
                t
            }, T = function(e) {
                var t;
                if (!1 !== r.persist && "undefined" != typeof sessionStorage)
                    return t = sessionStorage.getItem("gs-dev-" + e + r.id),
                    "animation" === e ? t : "loop" === e ? "true" === t : parseFloat(t)
            }, S = w(".playhead"), _ = w(".timeline-track"), C = w(".progress-bar"), k = w(".time"), M = w(".duration"), L = 0, D = function(c, d, p) {
                return function(e) {
                    var t, o = _.getBoundingClientRect(), n = c.getBoundingClientRect(), i = n.width * d, r = c._gsTransform.x, s = o.left - n.left - i + r, a = o.right - n.right + (n.width - i) + r, l = s;
                    p && (c !== N && (t = N.getBoundingClientRect()).left && (s += t.left + t.width - o.left),
                    c !== E && (t = E.getBoundingClientRect()).left && (a -= o.left + o.width - t.left)),
                    m = F,
                    this.applyBounds({
                        minX: s,
                        maxX: a
                    }),
                    g = v.duration() / o.width,
                    f = -l * g,
                    h ? v.pause() : v.pause(f + g * this.x),
                    this.target === S && (this.activated && (this.allowEventDefault = !1),
                    this.activated = !0),
                    u = !0
                }
            }, P = he.create(S, {
                type: "x",
                cursor: "ew-resize",
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                onPress: D(S, .5, !0),
                onDrag: function() {
                    var e = f + g * this.x;
                    e < 0 ? e = 0 : e > v._duration && (e = v._duration),
                    h || v.time(e),
                    C.style.width = Math.min(O - Y, Math.max(0, e / v._duration * 100 - Y)) + "%",
                    k.innerHTML = e.toFixed(2)
                },
                onRelease: function(e) {
                    F || v.resume()
                }
            })[0], N = w(".in-point"), E = w(".out-point"), X = function() {
                Y = 0,
                O = 100,
                N.style.left = "0%",
                E.style.left = "100%",
                b("in", Y),
                b("out", O),
                R(!0)
            }, Y = 0, O = 100, B = he.create(N, {
                type: "x",
                cursor: "ew-resize",
                zIndexBoost: !1,
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                onPress: D(N, 1, !0),
                onDoubleClick: X,
                onDrag: function() {
                    Y = (f + g * this.x) / v.duration() * 100,
                    v.progress(Y / 100),
                    R(!0)
                },
                onRelease: function() {
                    Y < 0 && (Y = 0),
                    Me(),
                    N.style.left = Y + "%",
                    b("in", Y),
                    ge.set(N, {
                        x: 0,
                        data: "root",
                        display: "block"
                    }),
                    F || v.resume()
                }
            })[0], H = he.create(E, {
                type: "x",
                cursor: "ew-resize",
                allowNativeTouchScrolling: !1,
                allowEventDefault: !0,
                zIndexBoost: !1,
                onPress: D(E, 0, !0),
                onDoubleClick: X,
                onDrag: function() {
                    O = (f + g * this.x) / v.duration() * 100,
                    v.progress(O / 100),
                    R(!0)
                },
                onRelease: function() {
                    100 < O && (O = 100),
                    Me(),
                    E.style.left = O + "%",
                    b("out", O),
                    ge.set(E, {
                        x: 0,
                        data: "root",
                        display: "block"
                    }),
                    m || (W(),
                    v.resume())
                }
            })[0], R = function(e) {
                if (!P.isPressed || e) {
                    var t = i || -1 !== s._repeat ? 100 * v.progress() || 0 : s.totalTime() / s.duration() * 100
                      , o = s._repeat && s._repeatDelay && s.totalTime() % (s.duration() + s._repeatDelay) > s.duration();
                    100 < t && (t = 100),
                    O <= t ? !i || v.paused() || P.isDragging ? (t === O && -1 !== s._repeat || (t = O,
                    v.progress(t / 100)),
                    F || 1 !== s.totalProgress() && -1 !== s._repeat || V()) : o || (t = Y,
                    v.target === s && v.target.seek(l + (c - l) * Y / 100),
                    0 < s._repeat && !Y && 100 === O ? 1 === s.totalProgress() && v.totalProgress(0, !0).resume() : v.progress(t / 100, !0).resume()) : t < Y && (t = Y,
                    v.progress(t / 100, !0)),
                    t !== L || e ? (C.style.left = Y + "%",
                    C.style.width = Math.max(0, t - Y) + "%",
                    S.style.left = t + "%",
                    k.innerHTML = v._time.toFixed(2),
                    M.innerHTML = v._duration.toFixed(2),
                    u && (S.style.transform = "translate(-50%,0)",
                    S._gsTransform.x = 0,
                    S._gsTransform.xPercent = -50,
                    u = !1),
                    L = t) : v._paused !== F && G()
                }
            }, z = function(e) {
                if (!P.isPressed) {
                    var t = e.target.getBoundingClientRect()
                      , o = ((e.changedTouches ? e.changedTouches[0] : e).clientX - t.left) / t.width * 100;
                    if (o < Y)
                        return Y = o = Math.max(0, o),
                        N.style.left = Y + "%",
                        void B.startDrag(e);
                    if (O < o)
                        return O = o = Math.min(100, o),
                        E.style.left = O + "%",
                        void H.startDrag(e);
                    v.progress(o / 100).pause(),
                    R(!0),
                    P.startDrag(e)
                }
            }, A = w(".play-pause"), I = (n = A,
            (p = new ue({
                data: "root",
                onComplete: function() {
                    p.kill()
                }
            })).to(n.querySelector(".play-1"), .5, {
                attr: {
                    d: "M5.75,3.13 C5.75,9.79 5.75,16.46 5.75,23.13 4.08,23.13 2.41,23.13 0.75,23.13 0.75,16.46 0.75,9.79 0.75,3.12 2.41,3.12 4.08,3.12 5.75,3.12"
                },
                ease: Power3.easeInOut,
                rotation: 360,
                transformOrigin: "50% 50%"
            }).to(n.querySelector(".play-2"), .5, {
                attr: {
                    d: "M16.38,3.13 C16.38,9.79 16.38,16.46 16.38,23.13 14.71,23.13 13.04,23.13 11.38,23.13 11.38,16.46 11.38,9.79 11.38,3.12 13.04,3.12 14.71,3.12 16.38,3.12"
                },
                ease: Power3.easeInOut,
                rotation: 360,
                transformOrigin: "50% 50%"
            }, .05),
            p), F = !1, W = function() {
                v.progress() >= O / 100 && (v.target === s && v.target.seek(l + (c - l) * Y / 100),
                v._repeat && !Y ? v.totalProgress(0, !0) : v.progress(Y / 100, !0)),
                I.play(),
                v.resume(),
                F && x.update(),
                F = !1
            }, V = function() {
                I.reverse(),
                v && v.pause(),
                F = !0
            }, G = function() {
                F ? W() : V()
            }, j = function(e) {
                P.isPressed || (v.target === s && v.target.seek(l + (c - l) * Y / 100),
                v.progress(Y / 100, !0),
                F || v.resume())
            }, U = w(".loop"), q = (t = U,
            (o = new ue({
                data: "root",
                paused: !0,
                onComplete: function() {
                    o.kill()
                }
            })).to(t, .5, {
                rotation: 360,
                ease: Power3.easeInOut,
                transformOrigin: "50% 50%"
            }).to(t.querySelectorAll(".loop-path"), .5, {
                fill: "#91e600",
                ease: Linear.easeNone
            }, 0),
            o), Z = function(e) {
                b("loop", i = e),
                i ? (q.play(),
                v.progress() >= O / 100 && (v.target === s && v.target.seek(l + (c - l) * Y / 100),
                s._repeat && !Y && 100 === O ? v.totalProgress(0, !0) : v.progress(Y / 100, !0),
                W())) : q.reverse()
            }, K = function() {
                Z(!i)
            }, Q = w(".animation-list"), $ = w(".animation-label"), J = function() {
                var e, t, o = Le(a && !1 === r.globalSync ? a : Be, !0), n = Q.children, i = 0;
                for (a && !1 === r.globalSync ? o.unshift(a) : r.hideGlobalTimeline || o.unshift(Be),
                t = 0; t < o.length; t++)
                    (e = n[t] || ke("option", Q)).animation = o[t],
                    i = t && o[t].vars.id === o[t - 1].vars.id ? i + 1 : 0,
                    e.setAttribute("value", e.innerHTML = o[t].vars.id + (i ? " [" + i + "]" : o[t + 1] && o[t + 1].vars.id === o[t].vars.id ? " [0]" : ""));
                for (; t < n.length; t++)
                    Q.removeChild(n[t])
            }, ee = function(e) {
                var t, o, n = parseFloat(oe.options[oe.selectedIndex].value) || 1;
                if (!arguments.length)
                    return s;
                if ("string" == typeof e && (e = Pe(e)),
                e instanceof fe || console.log("GSDevTools error: invalid animation."),
                e !== s) {
                    if (s && (s._inProgress = Y,
                    s._outProgress = O),
                    s = e,
                    v && (n = v.timeScale(),
                    v.target === a && (a.resume(),
                    v.kill())),
                    Y = s._inProgress || 0,
                    O = s._outProgress || 100,
                    N.style.left = Y + "%",
                    E.style.left = O + "%",
                    d && (b("animation", s.vars.id),
                    b("in", Y),
                    b("out", O)),
                    l = 0,
                    o = Math.min(1e3, r.maxDuration || 1e3, De(s)),
                    s === Be || !1 !== r.globalSync) {
                        if (Re(),
                        v = He,
                        ve && ve !== x && console.log("Error: GSDevTools can only have one instance that's globally synchronized."),
                        ve = x,
                        s !== Be)
                            for (99999999 < (c = (t = s).totalDuration()) && (c = t.duration()); t.timeline.timeline; )
                                l = l / t._timeScale + t._startTime,
                                c = c / t._timeScale + t._startTime,
                                t = t.timeline;
                        else
                            c = Be.duration();
                        o < c - l && (c = l + o),
                        Be.pause(l),
                        He.vars.time = c,
                        He.invalidate(),
                        He.duration(c - l).timeScale(n),
                        F ? He.progress(1).pause(0) : ge.delayedCall(.01, function() {
                            He.resume().progress(Y / 100),
                            F && W()
                        })
                    } else {
                        if (ve === x && (ve = null),
                        s !== a && a) {
                            for (99999999 < (c = (t = s).totalDuration()) && (c = t.duration()); t.timeline.timeline && t !== a; )
                                l = l / t._timeScale + t._startTime,
                                c = c / t._timeScale + t._startTime,
                                t = t.timeline;
                            o < c - l && (c = l + o),
                            a.pause(l),
                            v = ge.to(a, c - l, {
                                time: c,
                                ease: Linear.easeNone,
                                data: "root"
                            })
                        } else
                            v = s,
                            !i && v._repeat && Z(!0);
                        v.timeScale(n),
                        He.pause(),
                        Be.resume(),
                        v.seek(0)
                    }
                    M.innerHTML = v.duration().toFixed(2),
                    Ye(Q, s.vars.id, $)
                }
            }, te = function(e) {
                ee(Q.options[Q.selectedIndex].animation),
                e.target && e.target.blur && e.target.blur(),
                F && W()
            }, oe = w(".time-scale select"), ne = w(".time-scale-label"), ie = function(e) {
                var t = parseFloat(oe.options[oe.selectedIndex].value) || 1;
                v.timeScale(t),
                b("timeScale", t),
                F || (v.progress() >= O / 100 ? (v.target === s && v.target.seek(l + (c - l) * Y / 100),
                v.progress(Y / 100, !0).pause()) : v.pause(),
                ge.delayedCall(.01, function() {
                    v.resume()
                })),
                ne.innerHTML = t + "x",
                oe.blur && oe.blur()
            }, re = ge.to([w(".gs-bottom"), w(".gs-top")], .3, {
                autoAlpha: 0,
                y: 50,
                ease: Power2.easeIn,
                data: "root",
                paused: !0
            }), se = !1, ae = function(e) {
                he.hitTest(e, y) || P.isDragging || B.isDragging || H.isDragging || de.restart(!0)
            }, le = function() {
                se || (re.play(),
                de.pause(),
                se = !0)
            }, ce = function() {
                de.pause(),
                se && (re.reverse(),
                se = !1)
            }, de = ge.delayedCall(1.3, le).pause(), pe = function(e) {
                Ae && !Ie && (Ie = Be._startTime),
                d = !e,
                (a = Pe(r.animation)) && !a.vars.id && (a.vars.id = "[no id]"),
                J();
                var t = Pe(T("animation"));
                t && (t._inProgress = T("in") || 0,
                t._outProgress = T("out") || 100),
                r.paused && V(),
                s = null,
                ee(a || t || Be);
                var o = r.timeScale || T("timeScale")
                  , n = t === s;
                o && (Ye(oe, o, ne, o + "x"),
                v.timeScale(o)),
                100 === (Y = ("inTime"in r ? Ne(r.inTime, s, 0, 0) : n ? t._inProgress : 0) || 0) && !r.animation && t && (ee(Be),
                Y = Ne(r.inTime, s, 0, 0) || 0),
                Y && (N.style.left = Y + "%",
                N.style.display = E.style.display = "block"),
                (O = ("outTime"in r ? Ne(r.outTime, s, 100, Y) : n ? t._outProgress : 0) || 100) < Y && (O = 100),
                100 !== O && (E.style.left = O + "%",
                N.style.display = E.style.display = "block"),
                (i = "loop"in r ? r.loop : T("loop")) && Z(!0),
                r.paused && v.progress(Y / 100, !0).pause(),
                Ae && s === Be && Ie && !1 !== r.globalSync && !F && v.time(-Ie, !0),
                R(!0)
            };
            Ee(Q, "change", te),
            Ee(Q, "mousedown", J),
            Ee(A, "mousedown", G),
            Ee(w(".seek-bar"), "mousedown", z),
            Ee(w(".rewind"), "mousedown", j),
            Ee(U, "mousedown", K),
            Ee(oe, "change", ie),
            "auto" === r.visibility ? (Ee(y, "mouseout", ae),
            Ee(y, "mouseover", ce)) : "hidden" === r.visibility && (se = !0,
            re.progress(1)),
            !1 !== r.keyboard && (xe && r.keyboard ? console.log("[GSDevTools warning] only one instance can be affected by keyboard shortcuts. There is already one active.") : (xe = x,
            Ee(ye, "keydown", e = function(e) {
                var t, o = e.keyCode ? e.keyCode : e.which;
                32 === o ? G() : 38 === o ? (t = parseFloat(Oe(oe, -1, ne)),
                v.timeScale(t),
                b("timeScale", t)) : 40 === o ? (t = parseFloat(Oe(oe, 1, ne)),
                v.timeScale(t),
                b("timeScale", t)) : 37 === o ? j() : 39 === o ? v.progress(O / 100) : 76 === o ? K() : 72 === o ? se ? ce() : le() : 73 === o ? (Y = 100 * v.progress(),
                b("in", Y),
                N.style.left = Y + "%",
                R(!0)) : 79 === o && (O = 100 * v.progress(),
                b("out", O),
                E.style.left = O + "%",
                R(!0))
            }
            ))),
            ge.set(S, {
                xPercent: -50,
                x: 0,
                data: "root"
            }),
            ge.set(N, {
                xPercent: -100,
                x: 0,
                data: "root"
            }),
            N._gsIgnore = E._gsIgnore = S._gsIgnore = A._gsIgnore = U._gsIgnore = !0,
            ge.killTweensOf([N, E, S]),
            pe(Ae),
            Ae && ge.delayedCall(1e-4, pe, [!1], this),
            ge.ticker.addEventListener("tick", R),
            this.update = function(e) {
                var t, o, n;
                ve === x && (He._paused && !e || Re(),
                s === Be && (t = Be._time,
                Be.progress(1, !0).time(t, !0),
                t = (He._timeline._time - He._startTime) * He._timeScale,
                1e3 === (n = Math.min(1e3, Be.duration())) && (n = Math.min(1e3, De(Be))),
                1 != (o = He.duration() / n) && n && (Y *= o,
                O < 100 && (O *= o),
                He.seek(0),
                He.vars.time = n,
                He.invalidate(),
                He.duration(n),
                He.time(t),
                M.innerHTML = n.toFixed(2),
                R(!0))))
            }
            ,
            this.kill = function() {
                Xe(Q, "change", te),
                Xe(Q, "mousedown", J),
                Xe(A, "mousedown", G),
                Xe(w(".seek-bar"), "mousedown", z),
                Xe(w(".rewind"), "mousedown", j),
                Xe(U, "mousedown", K),
                Xe(oe, "change", ie),
                P.disable(),
                B.disable(),
                H.disable(),
                ge.ticker.removeEventListener("tick", R),
                Xe(y, "mouseout", ae),
                Xe(y, "mouseover", ce),
                Xe(ye, "keydown", e),
                y.parentNode.removeChild(y),
                ve === x && (ve = null),
                delete be[r.id + ""]
            }
            ,
            this.minimal = function(e) {
                var t, o = y.classList.contains("minimal");
                if (!arguments.length || o === e)
                    return o;
                e ? y.classList.add("minimal") : y.classList.remove("minimal"),
                r.container && (y.style.top = e ? "calc(100% - 42px)" : "calc(100% - 51px)"),
                P.isPressed && (h = !0,
                P.endDrag(P.pointerEvent),
                h = !1,
                t = 100 * v.progress(),
                C.style.width = Math.max(0, t - Y) + "%",
                S.style.left = t + "%",
                S.style.transform = "translate(-50%,0)",
                S._gsTransform.x = 0,
                S._gsTransform.xPercent = -50,
                P.startDrag(P.pointerEvent, !0))
            }
            ,
            this.animation = ee,
            this.updateList = J
        }, ze = !0, Ae = !0, h = ge.onOverwrite, Ie = 0;
        return u.version = "0.1.9",
        u.logOverwrites = !1,
        u.globalRecordingTime = 2,
        u.getById = function(e) {
            return e ? be[e] : ve
        }
        ,
        d._startTime += d._time,
        Be._startTime = g._startTime = d._time = d._totalTime = 0,
        ge.delayedCall(.01, function() {
            ve ? ve.update() : Re()
        }),
        ge.delayedCall(2, function() {
            var e, t, o;
            if (!ve)
                for (Re(),
                e = Be._first,
                o = Be._startTime; e; )
                    t = e._next,
                    e._totalDuration !== e._totalTime || !e._duration && 1 !== e.ratio ? s.prototype.add.call(d, e, e._startTime - e._delay + o) : e.kill(),
                    e = t;
            2 < u.globalRecordingTime ? ge.delayedCall(u.globalRecordingTime - 2, function() {
                ve && ve.update(),
                ze = !1
            }) : ze = !1,
            Ae = !1
        }),
        d.add = function(e, t, o, n) {
            var i = e.data;
            if (ze && e.vars && "root" !== i && "ignore" !== i && "isStart" !== i && "isFromStart" !== i && "_draggable" !== i && !(Ae && !e._duration && e instanceof ge) && (!e.vars.onComplete || e.vars.onComplete !== e.vars.onReverseComplete)) {
                var r = Be;
                return He._time && (He._paused ? (r = g,
                e._recordedTime = Be.rawTime()) : (t = (d._time - He._startTime) * He._timeScale,
                l || (ge.ticker.addEventListener("tick", f),
                l = !0))),
                r.add(e, t, o, n),
                e.vars.repeat && (r._dirty = !0),
                this
            }
            return s.prototype.add.apply(this, arguments)
        }
        ,
        Be._enabled = g._enabled = function(e, t) {
            return s.prototype._enabled.apply(this, arguments)
        }
        ,
        ue.prototype._remove = function(e, t) {
            return s.prototype._remove.apply(this, arguments),
            this._last ? this._time > this.duration() && (this._time = this._duration,
            this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
            this
        }
        ,
        ge.onOverwrite = function(e, t, o, n) {
            u.logOverwrites && (n ? console.log("[Overwrite warning] the following properties were overwritten: ", n, "| target:", o, "| overwritten tween: ", e, "| overwriting tween:", t) : console.log("[Overwrite warning] the following tween was overwritten:", e, "by", t)),
            "function" == typeof h && h(e, t, o, n)
        }
        ,
        u.create = function(e) {
            return new u(e)
        }
        ,
        u
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("utils.Draggable", ["events.EventDispatcher", "TweenLite", "plugins.CSSPlugin"], function(o, we, be) {
        var Te, r, Se, _, u, h, C, k, e, t, n, i, s, _e = {
            css: {},
            data: "_draggable"
        }, Ce = {
            css: {},
            data: "_draggable"
        }, ke = {
            css: {},
            data: "_draggable"
        }, Me = {
            css: {}
        }, Le = _gsScope._gsDefine.globals, a = {}, l = function() {
            return !1
        }, c = {
            style: {},
            appendChild: l,
            removeChild: l
        }, De = _gsScope.document || {
            createElement: function() {
                return c
            }
        }, Pe = De.documentElement || {}, d = function(e) {
            return De.createElementNS ? De.createElementNS("http://www.w3.org/1999/xhtml", e) : De.createElement(e)
        }, p = d("div"), Ne = [], Ee = 180 / Math.PI, Xe = 999999999999999, Ye = Date.now || function() {
            return (new Date).getTime()
        }
        , Oe = !(De.addEventListener || !De.all), Be = De.createElement("div"), He = [], Re = {}, ze = 0, g = /^(?:a|input|textarea|button|select)$/i, Ae = 0, Ie = _gsScope.navigator && -1 !== _gsScope.navigator.userAgent.toLowerCase().indexOf("android"), Fe = 0, We = {}, Ve = {}, Ge = function(e, t) {
            var o, n = {};
            if (t)
                for (o in e)
                    n[o] = e[o] * t;
            else
                for (o in e)
                    n[o] = e[o];
            return n
        }, je = function() {
            for (var e = He.length; -1 < --e; )
                He[e]()
        }, Ue = function(e) {
            for (var t = He.length; -1 < --t; )
                He[t] === e && He.splice(t, 1);
            we.to(f, 0, {
                overwrite: "all",
                delay: 15,
                onComplete: f,
                data: "_draggable"
            })
        }, f = function() {
            He.length || we.ticker.removeEventListener("tick", je)
        }, M = function() {
            return null != window.pageYOffset ? window.pageYOffset : null != De.scrollTop ? De.scrollTop : Pe.scrollTop || De.body.scrollTop || 0
        }, L = function() {
            return null != window.pageXOffset ? window.pageXOffset : null != De.scrollLeft ? De.scrollLeft : Pe.scrollLeft || De.body.scrollLeft || 0
        }, qe = function(e, t) {
            ct(e, "scroll", t),
            Ke(e.parentNode) || qe(e.parentNode, t)
        }, Ze = function(e, t) {
            dt(e, "scroll", t),
            Ke(e.parentNode) || Ze(e.parentNode, t)
        }, Ke = function(e) {
            return !(e && e !== Pe && e !== De && e !== De.body && e !== window && e.nodeType && e.parentNode)
        }, m = function(e, t) {
            var o = "x" === t ? "Width" : "Height"
              , n = "scroll" + o
              , i = "client" + o
              , r = De.body;
            return Math.max(0, Ke(e) ? Math.max(Pe[n], r[n]) - (window["inner" + o] || Pe[i] || r[i]) : e[n] - e[i])
        }, Qe = function(e) {
            var t = Ke(e)
              , o = m(e, "x")
              , n = m(e, "y");
            t ? e = Ve : Qe(e.parentNode),
            e._gsMaxScrollX = o,
            e._gsMaxScrollY = n,
            e._gsScrollX = e.scrollLeft || 0,
            e._gsScrollY = e.scrollTop || 0
        }, $e = function(e, t) {
            return e = e || window.event,
            a.pageX = e.clientX + De.body.scrollLeft + Pe.scrollLeft,
            a.pageY = e.clientY + De.body.scrollTop + Pe.scrollTop,
            t && (e.returnValue = !1),
            a
        }, Je = function(e) {
            return e ? ("string" == typeof e && (e = we.selector(e)),
            e.length && e !== window && e[0] && e[0].style && !e.nodeType && (e = e[0]),
            e === window || e.nodeType && e.style ? e : null) : e
        }, v = function(e, t) {
            var o, n, i, r = e.style;
            if (void 0 === r[t]) {
                for (i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5,
                o = t.charAt(0).toUpperCase() + t.substr(1); -1 < --n && void 0 === r[i[n] + o]; )
                    ;
                if (n < 0)
                    return "";
                t = (3 === n ? "ms" : i[n]) + o
            }
            return t
        }, et = function(e, t, o) {
            var n = e.style;
            n && (void 0 === n[t] && (t = v(e, t)),
            null == o ? n.removeProperty ? n.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : n.removeAttribute(t) : void 0 !== n[t] && (n[t] = o))
        }, x = "undefined" != typeof window ? window : De.defaultView || {
            getComputedStyle: function() {}
        }, D = function(e, t) {
            return x.getComputedStyle(e instanceof Element ? e : e.host || (e.parentNode || {}).host || e, t)
        }, y = /(?:Left|Right|Width)/i, w = /(?:\d|\-|\+|=|#|\.)*/g, b = function(e, t, o, n, i) {
            if ("px" === n || !n)
                return o;
            if ("auto" === n || !o)
                return 0;
            var r, s = y.test(t), a = e, l = p.style, c = o < 0;
            return c && (o = -o),
            "%" === n && -1 !== t.indexOf("border") ? r = o / 100 * (s ? e.clientWidth : e.clientHeight) : (l.cssText = "border:0 solid red;position:" + tt(e, "position", !0) + ";line-height:0;",
            "%" !== n && a.appendChild ? l[s ? "borderLeftWidth" : "borderTopWidth"] = o + n : (a = e.parentNode || De.body,
            l[s ? "width" : "height"] = o + n),
            a.appendChild(p),
            r = parseFloat(p[s ? "offsetWidth" : "offsetHeight"]),
            a.removeChild(p),
            0 !== r || i || (r = b(e, t, o, n, !0))),
            c ? -r : r
        }, tt = function(e, t, o) {
            var n, i = (e._gsTransform || {})[t];
            return i || 0 === i ? i : (e.style && e.style[t] ? i = e.style[t] : (n = D(e)) ? i = (i = n.getPropertyValue(t.replace(/([A-Z])/g, "-$1").toLowerCase())) || n.length ? i : n[t] : e.currentStyle && (i = e.currentStyle[t]),
            "auto" !== i || "top" !== t && "left" !== t || (i = function(e, t) {
                if ("absolute" !== tt(e, "position", !0))
                    return 0;
                var o = "left" === t ? "Left" : "Top"
                  , n = tt(e, "margin" + o, !0);
                return e["offset" + o] - (b(e, t, parseFloat(n), (n + "").replace(w, "")) || 0)
            }(e, t)),
            o ? i : parseFloat(i) || 0)
        }, ot = function(e, t, o) {
            var n = e.vars
              , i = n[o]
              , r = e._listeners[t];
            "function" == typeof i && i.apply(n[o + "Scope"] || n.callbackScope || e, n[o + "Params"] || [e.pointerEvent]),
            r && e.dispatchEvent(t)
        }, nt = function(e, t) {
            var o, n, i, r = Je(e);
            return r ? W(r, t) : void 0 !== e.left ? (i = rt(t),
            {
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
        }, P = function() {
            if (!De.createElementNS)
                return _ = 0,
                void (u = !1);
            var e, t, o, n, i = d("div"), r = De.createElementNS("http://www.w3.org/2000/svg", "svg"), s = d("div"), a = i.style, l = De.body || Pe, c = "flex" === tt(l, "display", !0);
            De.body && N && (a.position = "absolute",
            l.appendChild(s),
            s.appendChild(i),
            n = i.offsetParent,
            s.style[N] = "rotate(1deg)",
            k = i.offsetParent === n,
            s.style.position = "absolute",
            a.height = "10px",
            n = i.offsetTop,
            s.style.border = "5px solid red",
            C = n !== i.offsetTop,
            l.removeChild(s)),
            a = r.style,
            r.setAttributeNS(null, "width", "400px"),
            r.setAttributeNS(null, "height", "400px"),
            r.setAttributeNS(null, "viewBox", "0 0 400 400"),
            a.display = "block",
            a.boxSizing = "border-box",
            a.border = "0px solid red",
            a.transform = "none",
            i.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",
            l.appendChild(i),
            i.appendChild(r),
            t = (o = r.createSVGPoint().matrixTransform(r.getScreenCTM())).y,
            i.scrollTop = 100,
            o.x = o.y = 0,
            o = o.matrixTransform(r.getScreenCTM()),
            h = t - o.y < 100.1 ? 0 : t - o.y - 150,
            i.removeChild(r),
            l.removeChild(i),
            l.appendChild(r),
            c && (l.style.display = "block"),
            t = (e = r.getScreenCTM()).e,
            a.border = "50px solid red",
            e = r.getScreenCTM(),
            0 === t && 0 === e.e && 0 === e.f && 1 === e.a ? (_ = 1,
            u = !0) : (_ = t !== e.e ? 1 : 0,
            u = 1 !== e.a),
            c && (l.style.display = "flex"),
            l.removeChild(r)
        }, T = "" !== v(p, "perspective"), S = v(p, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), N = v(p, "transform"), E = N.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(), X = {}, Y = {}, O = _gsScope.SVGElement, it = function(e) {
            return !!(O && "function" == typeof e.getBBox && e.getCTM && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
        }, B = _gsScope.navigator && (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(_gsScope.navigator.userAgent) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(_gsScope.navigator.userAgent)) && parseFloat(RegExp.$1) < 11, H = [], R = [], z = function(e) {
            if (!e.getBoundingClientRect || !e.parentNode || !N)
                return {
                    offsetTop: 0,
                    offsetLeft: 0,
                    scaleX: 1,
                    scaleY: 1,
                    offsetParent: Pe
                };
            if (!1 !== mt.cacheSVGData && e._dCache && e._dCache.lastUpdate === we.ticker.frame)
                return e._dCache;
            var t, o, n, i, r, s, a, l, c, d, p, g = e, f = A(e);
            if (f.lastUpdate = we.ticker.frame,
            e.getBBox && !f.isSVGRoot) {
                for (g = e.parentNode,
                t = e.getBBox(); g && "svg" !== (g.nodeName + "").toLowerCase(); )
                    g = g.parentNode;
                return i = z(g),
                f.offsetTop = t.y * i.scaleY,
                f.offsetLeft = t.x * i.scaleX,
                f.scaleX = i.scaleX,
                f.scaleY = i.scaleY,
                f.offsetParent = g || Pe,
                f
            }
            for ((n = f.offsetParent) === De.body && (n = Pe),
            R.length = H.length = 0; g && ("matrix(1, 0, 0, 1, 0, 0)" !== (r = tt(g, N, !0)) && "none" !== r && "translate3d(0px, 0px, 0px)" !== r && (R.push(g),
            H.push(g.style[N]),
            g.style[N] = "none"),
            g !== n); )
                g = g.parentNode;
            for (o = n.getBoundingClientRect(),
            r = e.getScreenCTM(),
            a = e.createSVGPoint().matrixTransform(r),
            f.scaleX = Math.sqrt(r.a * r.a + r.b * r.b),
            f.scaleY = Math.sqrt(r.d * r.d + r.c * r.c),
            void 0 === _ && P(),
            f.borderBox && !u && e.getAttribute("width") && (i = D(e) || {},
            l = parseFloat(i.borderLeftWidth) + parseFloat(i.borderRightWidth) || 0,
            c = parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth) || 0,
            d = parseFloat(i.width) || 0,
            p = parseFloat(i.height) || 0,
            f.scaleX *= (d - l) / d,
            f.scaleY *= (p - c) / p),
            h ? (t = e.getBoundingClientRect(),
            f.offsetLeft = t.left - o.left,
            f.offsetTop = t.top - o.top) : (f.offsetLeft = a.x - o.left,
            f.offsetTop = a.y - o.top),
            f.offsetParent = n,
            s = R.length; -1 < --s; )
                R[s].style[N] = H[s];
            return f
        }, rt = function(e, t) {
            if (t = t || {},
            !e || e === Pe || !e.parentNode || e === window)
                return {
                    x: 0,
                    y: 0
                };
            var o = D(e)
              , n = S && o ? o.getPropertyValue(S) : "50% 50%"
              , i = n.split(" ")
              , r = -1 !== n.indexOf("left") ? "0%" : -1 !== n.indexOf("right") ? "100%" : i[0]
              , s = -1 !== n.indexOf("top") ? "0%" : -1 !== n.indexOf("bottom") ? "100%" : i[1];
            return "center" !== s && null != s || (s = "50%"),
            ("center" === r || isNaN(parseFloat(r))) && (r = "50%"),
            e.getBBox && it(e) ? (e._gsTransform || (we.set(e, {
                x: "+=0",
                overwrite: !1
            }),
            void 0 === e._gsTransform.xOrigin && console.log("Draggable requires at least GSAP 1.17.0")),
            n = e.getBBox(),
            t.x = e._gsTransform.xOrigin - n.x,
            t.y = e._gsTransform.yOrigin - n.y) : (e.getBBox && -1 !== (r + s).indexOf("%") && (e = {
                offsetWidth: (e = e.getBBox()).width,
                offsetHeight: e.height
            }),
            t.x = -1 !== r.indexOf("%") ? e.offsetWidth * parseFloat(r) / 100 : parseFloat(r),
            t.y = -1 !== s.indexOf("%") ? e.offsetHeight * parseFloat(s) / 100 : parseFloat(s)),
            t
        }, A = function(e) {
            if (!1 !== mt.cacheSVGData && e._dCache && e._dCache.lastUpdate === we.ticker.frame)
                return e._dCache;
            var t, o = e._dCache = e._dCache || {}, n = D(e), i = e.getBBox && it(e), r = "svg" === (e.nodeName + "").toLowerCase();
            if (o.isSVG = i,
            o.isSVGRoot = r,
            o.borderBox = "border-box" === n.boxSizing,
            o.computedStyle = n,
            r)
                (t = e.parentNode || Pe).insertBefore(p, e),
                o.offsetParent = p.offsetParent || Pe,
                t.removeChild(p);
            else if (i) {
                for (t = e.parentNode; t && "svg" !== (t.nodeName + "").toLowerCase(); )
                    t = t.parentNode;
                o.offsetParent = t
            } else
                o.offsetParent = e.offsetParent;
            return o
        }, I = function(e, t, o, n, i) {
            if (e === window || !e || !e.style || !e.parentNode)
                return [1, 0, 0, 1, 0, 0];
            var r, s, a, l, c, d, p, g, f, u, h, m, v, x, y = e._dCache || A(e), w = e.parentNode, b = w._dCache || A(w), T = y.computedStyle, S = y.isSVG ? b.offsetParent : w.offsetParent;
            if (r = y.isSVG && -1 !== (e.style[N] + "").indexOf("matrix") ? e.style[N] : T ? T.getPropertyValue(E) : e.currentStyle ? e.currentStyle[N] : "1,0,0,1,0,0",
            e.getBBox && -1 !== (e.getAttribute("transform") + "").indexOf("matrix") && (r = e.getAttribute("transform")),
            6 < (r = (r + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1, 0, 0, 1, 0, 0]).length && (r = [r[0], r[1], r[4], r[5], r[12], r[13]]),
            n ? r[4] = r[5] = 0 : y.isSVG && (c = e._gsTransform) && (c.xOrigin || c.yOrigin) && (r[0] = parseFloat(r[0]),
            r[1] = parseFloat(r[1]),
            r[2] = parseFloat(r[2]),
            r[3] = parseFloat(r[3]),
            r[4] = parseFloat(r[4]) - (c.xOrigin - (c.xOrigin * r[0] + c.yOrigin * r[2])),
            r[5] = parseFloat(r[5]) - (c.yOrigin - (c.xOrigin * r[1] + c.yOrigin * r[3]))),
            t)
                if (void 0 === _ && P(),
                a = y.isSVG || y.isSVGRoot ? z(e) : e,
                y.isSVG ? (l = e.getBBox(),
                u = b.isSVGRoot ? {
                    x: 0,
                    y: 0
                } : w.getBBox(),
                a = {
                    offsetLeft: l.x - u.x,
                    offsetTop: l.y - u.y,
                    offsetParent: y.offsetParent
                }) : y.isSVGRoot ? (h = parseInt(T.borderTopWidth, 10) || 0,
                m = parseInt(T.borderLeftWidth, 10) || 0,
                v = (r[0] - _) * m + r[2] * h,
                x = r[1] * m + (r[3] - _) * h,
                d = t.x,
                p = t.y,
                g = d - (d * r[0] + p * r[2]),
                f = p - (d * r[1] + p * r[3]),
                r[4] = parseFloat(r[4]) + g,
                r[5] = parseFloat(r[5]) + f,
                t.x -= g,
                t.y -= f,
                d = a.scaleX,
                p = a.scaleY,
                i || (t.x *= d,
                t.y *= p),
                r[0] *= d,
                r[1] *= p,
                r[2] *= d,
                r[3] *= p,
                B || (t.x += v,
                t.y += x),
                S === De.body && a.offsetParent === Pe && (S = Pe)) : !C && e.offsetParent && (t.x += parseInt(tt(e.offsetParent, "borderLeftWidth"), 10) || 0,
                t.y += parseInt(tt(e.offsetParent, "borderTopWidth"), 10) || 0),
                s = w === Pe || w === De.body,
                r[4] = Number(r[4]) + t.x + (a.offsetLeft || 0) - o.x - (s ? 0 : w.scrollLeft || 0),
                r[5] = Number(r[5]) + t.y + (a.offsetTop || 0) - o.y - (s ? 0 : w.scrollTop || 0),
                w && "fixed" === tt(e, "position", !0))
                    for (r[4] += L(),
                    r[5] += M(),
                    w = w.offsetParent; w; )
                        r[4] -= w.offsetLeft,
                        r[5] -= w.offsetTop,
                        w = w.offsetParent;
                else
                    !w || w === Pe || S !== a.offsetParent || b.isSVG || k && "100100" !== I(w).join("") || (a = b.isSVGRoot ? z(w) : w,
                    r[4] -= a.offsetLeft || 0,
                    r[5] -= a.offsetTop || 0,
                    C || !b.offsetParent || y.isSVG || y.isSVGRoot || (r[4] -= parseInt(tt(b.offsetParent, "borderLeftWidth"), 10) || 0,
                    r[5] -= parseInt(tt(b.offsetParent, "borderTopWidth"), 10) || 0));
            return r
        }, st = function(e, t) {
            if (!e || e === window || !e.parentNode)
                return [1, 0, 0, 1, 0, 0];
            for (var o, n, i, r, s, a, l, c, d = rt(e, X), p = rt(e.parentNode, Y), g = I(e, d, p, !1, !t); (e = e.parentNode) && e.parentNode && e !== Pe; )
                d = p,
                p = rt(e.parentNode, d === X ? Y : X),
                l = I(e, d, p),
                o = g[0],
                n = g[1],
                i = g[2],
                r = g[3],
                s = g[4],
                a = g[5],
                g[0] = o * l[0] + n * l[2],
                g[1] = o * l[1] + n * l[3],
                g[2] = i * l[0] + r * l[2],
                g[3] = i * l[1] + r * l[3],
                g[4] = s * l[0] + a * l[2] + l[4],
                g[5] = s * l[1] + a * l[3] + l[5];
            return t && (o = g[0],
            n = g[1],
            i = g[2],
            r = g[3],
            s = g[4],
            a = g[5],
            c = o * r - n * i,
            g[0] = r / c,
            g[1] = -n / c,
            g[2] = -i / c,
            g[3] = o / c,
            g[4] = (i * a - r * s) / c,
            g[5] = -(o * a - n * s) / c),
            g
        }, F = function(e, t, o) {
            var n = e.x * t[0] + e.y * t[2] + t[4]
              , i = e.x * t[1] + e.y * t[3] + t[5];
            return e.x = n * o[0] + i * o[2] + o[4],
            e.y = n * o[1] + i * o[3] + o[5],
            e
        }, W = function(e, t, o) {
            if (!(e = Je(e)))
                return null;
            t = Je(t);
            var n, i, r, s, a, l, c, d, p, g, f, u, h, m, v, x, y, w, b, T, S, _, C = e.getBBox && it(e);
            if (e === window)
                s = M(),
                r = (i = L()) + (Pe.clientWidth || e.innerWidth || De.body.clientWidth || 0),
                a = s + ((e.innerHeight || 0) - 20 < Pe.clientHeight ? Pe.clientHeight : e.innerHeight || De.body.clientHeight || 0);
            else {
                if (void 0 === t || t === window)
                    return e.getBoundingClientRect();
                i = -(n = rt(e)).x,
                s = -n.y,
                C ? (h = (u = e.getBBox()).width,
                m = u.height) : "svg" !== (e.nodeName + "").toLowerCase() && e.offsetWidth ? (h = e.offsetWidth,
                m = e.offsetHeight) : (S = D(e),
                h = parseFloat(S.width),
                m = parseFloat(S.height)),
                r = i + h,
                a = s + m,
                "svg" !== e.nodeName.toLowerCase() || Oe || (_ = (v = z(e)).computedStyle || {},
                w = (e.getAttribute("viewBox") || "0 0").split(" "),
                b = parseFloat(w[0]),
                T = parseFloat(w[1]),
                x = parseFloat(_.borderLeftWidth) || 0,
                y = parseFloat(_.borderTopWidth) || 0,
                i /= v.scaleX,
                s /= v.scaleY,
                r = i + h - (h - (h - x) / v.scaleX - b),
                a = s + m - (m - (m - y) / v.scaleY - T),
                i -= x / v.scaleX - b,
                s -= y / v.scaleY - T,
                S && (r += (parseFloat(_.borderRightWidth) + x) / v.scaleX,
                a += (y + parseFloat(_.borderBottomWidth)) / v.scaleY))
            }
            return e === t ? {
                left: i,
                top: s,
                width: r - i,
                height: a - s
            } : (l = st(e),
            c = st(t, !0),
            d = F({
                x: i,
                y: s
            }, l, c),
            p = F({
                x: r,
                y: s
            }, l, c),
            g = F({
                x: r,
                y: a
            }, l, c),
            f = F({
                x: i,
                y: a
            }, l, c),
            i = Math.min(d.x, p.x, g.x, f.x),
            s = Math.min(d.y, p.y, g.y, f.y),
            We.x = We.y = 0,
            o && rt(t, We),
            {
                left: i + We.x,
                top: s + We.y,
                width: Math.max(d.x, p.x, g.x, f.x) - i,
                height: Math.max(d.y, p.y, g.y, f.y) - s
            })
        }, V = function(e) {
            return !!(e && e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]))
        }, at = "undefined" != typeof window && "ontouchstart"in Pe && "orientation"in window, lt = function(e) {
            for (var t = e.split(","), o = (void 0 !== p.onpointerdown ? "pointerdown,pointermove,pointerup,pointercancel" : void 0 !== p.onmspointerdown ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(","), n = {}, i = 4; -1 < --i; )
                n[t[i]] = o[i],
                n[o[i]] = t[i];
            try {
                Pe.addEventListener("test", null, Object.defineProperty({}, "passive", {
                    get: function() {
                        r = 1
                    }
                }))
            } catch (e) {}
            return n
        }("touchstart,touchmove,touchend,touchcancel"), ct = function(e, t, o, n) {
            if (e.addEventListener) {
                var i = lt[t];
                n = n || (r ? {
                    passive: !1
                } : null),
                e.addEventListener(i || t, o, n),
                i && t !== i && e.addEventListener(t, o, n)
            } else
                e.attachEvent && e.attachEvent("on" + t, o)
        }, dt = function(e, t, o) {
            if (e.removeEventListener) {
                var n = lt[t];
                e.removeEventListener(n || t, o),
                n && t !== n && e.removeEventListener(t, o)
            } else
                e.detachEvent && e.detachEvent("on" + t, o)
        }, G = function(e) {
            Te = e.touches && Ae < e.touches.length,
            dt(e.target, "touchend", G)
        }, pt = function(e) {
            Te = e.touches && Ae < e.touches.length,
            ct(e.target, "touchend", G)
        }, gt = function(i, r, e, t, s, o) {
            var n, a, l, c = {};
            if (r)
                if (1 !== s && r instanceof Array) {
                    if (c.end = n = [],
                    l = r.length,
                    "object" == typeof r[0])
                        for (a = 0; a < l; a++)
                            n[a] = Ge(r[a], s);
                    else
                        for (a = 0; a < l; a++)
                            n[a] = r[a] * s;
                    e += 1.1,
                    t -= 1.1
                } else
                    c.end = "function" == typeof r ? function(e) {
                        var t, o, n = r.call(i, e);
                        if (1 !== s)
                            if ("object" == typeof n) {
                                for (o in t = {},
                                n)
                                    t[o] = n[o] * s;
                                n = t
                            } else
                                n *= s;
                        return n
                    }
                    : r;
            return (e || 0 === e) && (c.max = e),
            (t || 0 === t) && (c.min = t),
            o && (c.velocity = 0),
            c
        }, ft = function(e) {
            var t;
            return !(!e || !e.getAttribute || "BODY" === e.nodeName) && (!("true" !== (t = e.getAttribute("data-clickable")) && ("false" === t || !e.onclick && !g.test(e.nodeName + "") && "true" !== e.getAttribute("contentEditable"))) || ft(e.parentNode))
        }, ut = function(e, t) {
            for (var o, n = e.length; -1 < --n; )
                (o = e[n]).ondragstart = o.onselectstart = t ? null : l,
                et(o, "userSelect", t ? "text" : "none")
        }, j = (t = De.createElement("div"),
        n = De.createElement("div"),
        i = n.style,
        s = De.body || p,
        i.display = "inline-block",
        i.position = "relative",
        t.style.cssText = n.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",
        t.appendChild(n),
        s.appendChild(t),
        e = n.offsetHeight + 18 > t.scrollHeight,
        s.removeChild(t),
        e), ht = function(i, r) {
            i = Je(i),
            r = r || {};
            var s, a, l, e, c, d, p = De.createElement("div"), g = p.style, t = i.firstChild, f = 0, u = 0, h = i.scrollTop, m = i.scrollLeft, v = i.scrollWidth, x = i.scrollHeight, y = 0, w = 0, b = 0;
            T && !1 !== r.force3D ? (c = "translate3d(",
            d = "px,0px)") : N && (c = "translate(",
            d = "px)"),
            this.scrollTop = function(e, t) {
                if (!arguments.length)
                    return -this.top();
                this.top(-e, t)
            }
            ,
            this.scrollLeft = function(e, t) {
                if (!arguments.length)
                    return -this.left();
                this.left(-e, t)
            }
            ,
            this.left = function(e, t) {
                if (!arguments.length)
                    return -(i.scrollLeft + u);
                var o = i.scrollLeft - m
                  , n = u;
                if ((2 < o || o < -2) && !t)
                    return m = i.scrollLeft,
                    we.killTweensOf(this, !0, {
                        left: 1,
                        scrollLeft: 1
                    }),
                    this.left(-m),
                    void (r.onKill && r.onKill());
                (e = -e) < 0 ? (u = e - .5 | 0,
                e = 0) : w < e ? (u = e - w | 0,
                e = w) : u = 0,
                (u || n) && (c ? this._suspendTransforms || (g[N] = c + -u + "px," + -f + d) : g.left = -u + "px",
                0 <= u + y && (g.paddingRight = u + y + "px")),
                i.scrollLeft = 0 | e,
                m = i.scrollLeft
            }
            ,
            this.top = function(e, t) {
                if (!arguments.length)
                    return -(i.scrollTop + f);
                var o = i.scrollTop - h
                  , n = f;
                if ((2 < o || o < -2) && !t)
                    return h = i.scrollTop,
                    we.killTweensOf(this, !0, {
                        top: 1,
                        scrollTop: 1
                    }),
                    this.top(-h),
                    void (r.onKill && r.onKill());
                (e = -e) < 0 ? (f = e - .5 | 0,
                e = 0) : b < e ? (f = e - b | 0,
                e = b) : f = 0,
                (f || n) && (c ? this._suspendTransforms || (g[N] = c + -u + "px," + -f + d) : g.top = -f + "px"),
                i.scrollTop = 0 | e,
                h = i.scrollTop
            }
            ,
            this.maxScrollTop = function() {
                return b
            }
            ,
            this.maxScrollLeft = function() {
                return w
            }
            ,
            this.disable = function() {
                for (t = p.firstChild; t; )
                    e = t.nextSibling,
                    i.appendChild(t),
                    t = e;
                i === p.parentNode && i.removeChild(p)
            }
            ,
            this.enable = function() {
                if ((t = i.firstChild) !== p) {
                    for (; t; )
                        e = t.nextSibling,
                        p.appendChild(t),
                        t = e;
                    i.appendChild(p),
                    this.calibrate()
                }
            }
            ,
            this.calibrate = function(e) {
                var t, o, n = i.clientWidth === s;
                h = i.scrollTop,
                m = i.scrollLeft,
                n && i.clientHeight === a && p.offsetHeight === l && v === i.scrollWidth && x === i.scrollHeight && !e || ((f || u) && (t = this.left(),
                o = this.top(),
                this.left(-i.scrollLeft),
                this.top(-i.scrollTop)),
                n && !e || (g.display = "block",
                g.width = "auto",
                g.paddingRight = "0px",
                (y = Math.max(0, i.scrollWidth - i.clientWidth)) && (y += tt(i, "paddingLeft") + (j ? tt(i, "paddingRight") : 0))),
                g.display = "inline-block",
                g.position = "relative",
                g.overflow = "visible",
                g.verticalAlign = "top",
                g.width = "100%",
                g.paddingRight = y + "px",
                j && (g.paddingBottom = tt(i, "paddingBottom", !0)),
                Oe && (g.zoom = "1"),
                s = i.clientWidth,
                a = i.clientHeight,
                v = i.scrollWidth,
                x = i.scrollHeight,
                w = i.scrollWidth - s,
                b = i.scrollHeight - a,
                l = p.offsetHeight,
                g.display = "block",
                (t || o) && (this.left(t),
                this.top(o)))
            }
            ,
            this.content = p,
            this.element = i,
            this._suspendTransforms = !1,
            this.enable()
        }, mt = function(f, p) {
            o.call(this, f),
            f = Je(f),
            Se || (Se = Le.com.greensock.plugins.ThrowPropsPlugin),
            this.vars = p = Ge(p || {}),
            this.target = f,
            this.x = this.y = this.rotation = 0,
            this.dragResistance = parseFloat(p.dragResistance) || 0,
            this.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0,
            this.lockAxis = p.lockAxis,
            this.autoScroll = p.autoScroll || 0,
            this.lockedAxis = null,
            this.allowEventDefault = !!p.allowEventDefault;
            var g, u, h, m, d, v, x, y, w, b, T, S, i, r, _, C, k, M, e, L, D, P, N, E, X, Y, O, B, H, R, z, c, t = (p.type || (Oe ? "top,left" : "x,y")).toLowerCase(), A = -1 !== t.indexOf("x") || -1 !== t.indexOf("y"), I = -1 !== t.indexOf("rotation"), F = I ? "rotation" : A ? "x" : "left", W = A ? "y" : "top", V = -1 !== t.indexOf("x") || -1 !== t.indexOf("left") || "scroll" === t, G = -1 !== t.indexOf("y") || -1 !== t.indexOf("top") || "scroll" === t, j = p.minimumMovement || 2, U = this, q = function(e) {
                if ("string" == typeof e && (e = we.selector(e)),
                !e || e.nodeType)
                    return [e];
                var t, o = [], n = e.length;
                for (t = 0; t !== n; o.push(e[t++]))
                    ;
                return o
            }(p.trigger || p.handle || f), n = {}, Z = 0, K = !1, Q = p.autoScrollMarginTop || 40, $ = p.autoScrollMarginRight || 40, J = p.autoScrollMarginBottom || 40, ee = p.autoScrollMarginLeft || 40, te = p.clickableTest || ft, oe = 0, s = function(e) {
                if (!(U.isPressed && e.which < 2))
                    return e.preventDefault(),
                    e.stopPropagation(),
                    !1;
                U.endDrag()
            }, ne = function(e) {
                if (U.autoScroll && U.isDragging && (K || M)) {
                    var t, o, n, i, r, s, a, l, c = f, d = 15 * U.autoScroll;
                    for (K = !1,
                    Ve.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != Pe.scrollTop ? Pe.scrollTop : De.body.scrollTop,
                    Ve.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != Pe.scrollLeft ? Pe.scrollLeft : De.body.scrollLeft,
                    i = U.pointerX - Ve.scrollLeft,
                    r = U.pointerY - Ve.scrollTop; c && !o; )
                        t = (o = Ke(c.parentNode)) ? Ve : c.parentNode,
                        n = o ? {
                            bottom: Math.max(Pe.clientHeight, window.innerHeight || 0),
                            right: Math.max(Pe.clientWidth, window.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : t.getBoundingClientRect(),
                        s = a = 0,
                        G && ((l = t._gsMaxScrollY - t.scrollTop) < 0 ? a = l : r > n.bottom - J && l ? (K = !0,
                        a = Math.min(l, d * (1 - Math.max(0, n.bottom - r) / J) | 0)) : r < n.top + Q && t.scrollTop && (K = !0,
                        a = -Math.min(t.scrollTop, d * (1 - Math.max(0, r - n.top) / Q) | 0)),
                        a && (t.scrollTop += a)),
                        V && ((l = t._gsMaxScrollX - t.scrollLeft) < 0 ? s = l : i > n.right - $ && l ? (K = !0,
                        s = Math.min(l, d * (1 - Math.max(0, n.right - i) / $) | 0)) : i < n.left + ee && t.scrollLeft && (K = !0,
                        s = -Math.min(t.scrollLeft, d * (1 - Math.max(0, i - n.left) / ee) | 0)),
                        s && (t.scrollLeft += s)),
                        o && (s || a) && (window.scrollTo(t.scrollLeft, t.scrollTop),
                        he(U.pointerX + s, U.pointerY + a)),
                        c = t
                }
                if (M) {
                    var p = U.x
                      , g = U.y;
                    p < 1e-6 && -1e-6 < p && (p = 0),
                    g < 1e-6 && -1e-6 < g && (g = 0),
                    I ? (U.deltaX = p - O.data.rotation,
                    O.data.rotation = U.rotation = p,
                    O.setRatio(1)) : u ? (G && (U.deltaY = g - u.top(),
                    u.top(g)),
                    V && (U.deltaX = p - u.left(),
                    u.left(p))) : A ? (G && (U.deltaY = g - O.data.y,
                    O.data.y = g),
                    V && (U.deltaX = p - O.data.x,
                    O.data.x = p),
                    O.setRatio(1)) : (G && (U.deltaY = g - parseFloat(f.style.top || 0),
                    f.style.top = g + "px"),
                    V && (U.deltaY = p - parseFloat(f.style.left || 0),
                    f.style.left = p + "px")),
                    !y || e || R || (R = !0,
                    ot(U, "drag", "onDrag"),
                    R = !1)
                }
                M = !1
            }, a = function(e, t) {
                var o, n = U.x, i = U.y;
                f._gsTransform || !A && !I || we.set(f, {
                    x: "+=0",
                    overwrite: !1,
                    data: "_draggable"
                }),
                A ? (U.y = f._gsTransform.y,
                U.x = f._gsTransform.x) : I ? U.x = U.rotation = f._gsTransform.rotation : u ? (U.y = u.top(),
                U.x = u.left()) : (U.y = parseInt(f.style.top, 10) || 0,
                U.x = parseInt(f.style.left, 10) || 0),
                (L || D || P) && !t && (U.isDragging || U.isThrowing) && (P && (We.x = U.x,
                We.y = U.y,
                (o = P(We)).x !== U.x && (U.x = o.x,
                M = !0),
                o.y !== U.y && (U.y = o.y,
                M = !0)),
                L && (o = L(U.x)) !== U.x && (U.x = o,
                I && (U.rotation = o),
                M = !0),
                D && ((o = D(U.y)) !== U.y && (U.y = o),
                M = !0)),
                M && ne(!0),
                e || (U.deltaX = U.x - n,
                U.deltaY = U.y - i,
                ot(U, "throwupdate", "onThrowUpdate"))
            }, l = function() {
                var e, t, o, n;
                x = !1,
                u ? (u.calibrate(),
                U.minX = b = -u.maxScrollLeft(),
                U.minY = S = -u.maxScrollTop(),
                U.maxX = w = U.maxY = T = 0,
                x = !0) : p.bounds && (e = nt(p.bounds, f.parentNode),
                I ? (U.minX = b = e.left,
                U.maxX = w = e.left + e.width,
                U.minY = S = U.maxY = T = 0) : void 0 !== p.bounds.maxX || void 0 !== p.bounds.maxY ? (e = p.bounds,
                U.minX = b = e.minX,
                U.minY = S = e.minY,
                U.maxX = w = e.maxX,
                U.maxY = T = e.maxY) : (t = nt(f, f.parentNode),
                U.minX = b = tt(f, F) + e.left - t.left,
                U.minY = S = tt(f, W) + e.top - t.top,
                U.maxX = w = b + (e.width - t.width),
                U.maxY = T = S + (e.height - t.height)),
                w < b && (U.minX = w,
                U.maxX = w = b,
                b = U.minX),
                T < S && (U.minY = T,
                U.maxY = T = S,
                S = U.minY),
                I && (U.minRotation = b,
                U.maxRotation = w),
                x = !0),
                p.liveSnap && (n = (o = !0 === p.liveSnap ? p.snap || {} : p.liveSnap)instanceof Array || "function" == typeof o,
                I ? (L = pe(n ? o : o.rotation, b, w, 1),
                D = null) : o.points ? P = ge(n ? o : o.points, b, w, S, T, o.radius, u ? -1 : 1) : (V && (L = pe(n ? o : o.x || o.left || o.scrollLeft, b, w, u ? -1 : 1)),
                G && (D = pe(n ? o : o.y || o.top || o.scrollTop, S, T, u ? -1 : 1))))
            }, ie = function() {
                U.isThrowing = !1,
                ot(U, "throwcomplete", "onThrowComplete")
            }, re = function() {
                U.isThrowing = !1
            }, se = function(e, t) {
                var o, n, i, r;
                e && Se ? (!0 === e && (n = (o = p.snap || p.liveSnap || {})instanceof Array || "function" == typeof o,
                e = {
                    resistance: (p.throwResistance || p.resistance || 1e3) / (I ? 10 : 1)
                },
                I ? e.rotation = gt(U, n ? o : o.rotation, w, b, 1, t) : (V && (e[F] = gt(U, n ? o : o.points || o.x || o.left || o.scrollLeft, w, b, u ? -1 : 1, t || "x" === U.lockedAxis)),
                G && (e[W] = gt(U, n ? o : o.points || o.y || o.top || o.scrollTop, T, S, u ? -1 : 1, t || "y" === U.lockedAxis)),
                (o.points || o instanceof Array && "object" == typeof o[0]) && (e.linkedProps = F + "," + W,
                e.radius = o.radius))),
                U.isThrowing = !0,
                r = isNaN(p.overshootTolerance) ? 1 === p.edgeResistance ? 0 : 1 - U.edgeResistance + .2 : p.overshootTolerance,
                U.tween = i = Se.to(u || f, {
                    throwProps: e,
                    data: "_draggable",
                    ease: p.ease || Le.Power3.easeOut,
                    onComplete: ie,
                    onOverwrite: re,
                    onUpdate: p.fastMode ? ot : a,
                    onUpdateParams: p.fastMode ? [U, "onthrowupdate", "onThrowUpdate"] : o && o.radius ? [!1, !0] : Ne
                }, Math.max(p.minDuration || 0, p.maxDuration || 0) || 2, isNaN(p.minDuration) ? 0 === r || "object" == typeof e && 1e3 < e.resistance ? 0 : .5 : p.minDuration, r),
                p.fastMode || (u && (u._suspendTransforms = !0),
                i.render(i.duration(), !0, !0),
                a(!0, !0),
                U.endX = U.x,
                U.endY = U.y,
                I && (U.endRotation = U.x),
                i.play(0),
                a(!0, !0),
                u && (u._suspendTransforms = !1))) : x && U.applyBounds()
            }, ae = function(e) {
                var t, o, n, i, r, s, a, l, c, d = X || [1, 0, 0, 1, 0, 0];
                X = st(f.parentNode, !0),
                e && U.isPressed && d.join(",") !== X.join(",") && (t = d[0],
                o = d[1],
                n = d[2],
                i = d[3],
                r = d[4],
                s = d[5],
                c = h * (-o / (a = t * i - o * n)) + m * (t / a) + -(t * s - o * r) / a,
                m = (l = h * (i / a) + m * (-n / a) + (n * s - i * r) / a) * X[1] + c * X[3] + X[5],
                h = l * X[0] + c * X[2] + X[4]),
                X[1] || X[2] || 1 != X[0] || 1 != X[3] || 0 != X[4] || 0 != X[5] || (X = null)
            }, le = function() {
                var e = 1 - U.edgeResistance;
                ae(!1),
                X && (h = U.pointerX * X[0] + U.pointerY * X[2] + X[4],
                m = U.pointerX * X[1] + U.pointerY * X[3] + X[5]),
                M && (he(U.pointerX, U.pointerY),
                ne(!0)),
                u ? (l(),
                v = u.top(),
                d = u.left()) : (ce() ? (a(!0, !0),
                l()) : U.applyBounds(),
                I ? (k = U.rotationOrigin = function(e, t, o, n) {
                    e = Je(e);
                    var i = st(e, !1)
                      , r = t.x
                      , s = t.y;
                    return o && (rt(e, t),
                    r -= t.x,
                    s -= t.y),
                    (n = !0 === n ? t : n || {}).x = r * i[0] + s * i[2] + i[4],
                    n.y = r * i[1] + s * i[3] + i[5],
                    n
                }(f, {
                    x: 0,
                    y: 0
                }),
                a(!0, !0),
                d = U.x,
                v = U.y = Math.atan2(k.y - U.pointerY, U.pointerX - k.x) * Ee) : (f.parentNode && f.parentNode.scrollTop || 0,
                f.parentNode && f.parentNode.scrollLeft || 0,
                v = tt(f, W),
                d = tt(f, F))),
                x && e && (w < d ? d = w + (d - w) / e : d < b && (d = b - (b - d) / e),
                I || (T < v ? v = T + (v - T) / e : v < S && (v = S - (S - v) / e))),
                U.startX = d,
                U.startY = v
            }, ce = function() {
                return U.tween && U.tween.isActive()
            }, de = function() {
                !Be.parentNode || ce() || U.isDragging || Be.parentNode.removeChild(Be)
            }, pe = function(s, a, l, o) {
                return null == a && (a = -Xe),
                null == l && (l = Xe),
                "function" == typeof s ? function(e) {
                    var t = U.isPressed ? 1 - U.edgeResistance : 1;
                    return s.call(U, l < e ? l + (e - l) * t : e < a ? a + (e - a) * t : e) * o
                }
                : s instanceof Array ? function(e) {
                    for (var t, o, n = s.length, i = 0, r = Xe; -1 < --n; )
                        (o = (t = s[n]) - e) < 0 && (o = -o),
                        o < r && a <= t && t <= l && (i = n,
                        r = o);
                    return s[i]
                }
                : isNaN(s) ? function(e) {
                    return e
                }
                : function() {
                    return s * o
                }
            }, ge = function(l, a, c, d, p, g, f) {
                return g = g && g < Xe ? g * g : Xe,
                "function" == typeof l ? function(e) {
                    var t, o, n, i = U.isPressed ? 1 - U.edgeResistance : 1, r = e.x, s = e.y;
                    return e.x = r = c < r ? c + (r - c) * i : r < a ? a + (r - a) * i : r,
                    e.y = s = p < s ? p + (s - p) * i : s < d ? d + (s - d) * i : s,
                    (t = l.call(U, e)) !== e && (e.x = t.x,
                    e.y = t.y),
                    1 !== f && (e.x *= f,
                    e.y *= f),
                    g < Xe && (o = e.x - r,
                    n = e.y - s,
                    g < o * o + n * n && (e.x = r,
                    e.y = s)),
                    e
                }
                : l instanceof Array ? function(e) {
                    for (var t, o, n, i, r = l.length, s = 0, a = Xe; -1 < --r; )
                        (i = (t = (n = l[r]).x - e.x) * t + (o = n.y - e.y) * o) < a && (s = r,
                        a = i);
                    return a <= g ? l[s] : e
                }
                : function(e) {
                    return e
                }
            }, fe = function(e, t) {
                var o;
                if (g && !U.isPressed && e && ("mousedown" !== e.type && "pointerdown" !== e.type || t || !(Ye() - oe < 30) || !lt[U.pointerEvent.type])) {
                    if (Y = ce(),
                    U.pointerEvent = e,
                    lt[e.type] ? (E = -1 !== e.type.indexOf("touch") ? e.currentTarget || e.target : De,
                    ct(E, "touchend", me),
                    ct(E, "touchmove", ue),
                    ct(E, "touchcancel", me),
                    ct(De, "touchstart", pt)) : (E = null,
                    ct(De, "mousemove", ue)),
                    H = null,
                    ct(De, "mouseup", me),
                    e && e.target && ct(e.target, "mouseup", me),
                    N = te.call(U, e.target) && !1 !== p.dragClickables && !t)
                        return ct(e.target, "change", me),
                        ot(U, "pressInit", "onPressInit"),
                        ot(U, "press", "onPress"),
                        void ut(q, !0);
                    if (B = !(!E || V === G || !1 === U.vars.allowNativeTouchScrolling || U.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which)) && (V ? "y" : "x"),
                    Oe ? e = $e(e, !0) : B || U.allowEventDefault || (e.preventDefault(),
                    e.preventManipulation && e.preventManipulation()),
                    e.changedTouches ? (e = _ = e.changedTouches[0],
                    C = e.identifier) : e.pointerId ? C = e.pointerId : _ = C = null,
                    Ae++,
                    function(e) {
                        He.push(e),
                        1 === He.length && we.ticker.addEventListener("tick", je, this, !1, 1)
                    }(ne),
                    m = U.pointerY = e.pageY,
                    h = U.pointerX = e.pageX,
                    ot(U, "pressInit", "onPressInit"),
                    (B || U.autoScroll) && Qe(f.parentNode),
                    !f.parentNode || !U.autoScroll || u || I || !f.parentNode._gsMaxScrollX || Be.parentNode || f.getBBox || (Be.style.width = f.parentNode.scrollWidth + "px",
                    f.parentNode.appendChild(Be)),
                    le(),
                    U.tween && U.tween.kill(),
                    U.isThrowing = !1,
                    we.killTweensOf(u || f, !0, n),
                    u && we.killTweensOf(f, !0, {
                        scrollTo: 1
                    }),
                    U.tween = U.lockedAxis = null,
                    (p.zIndexBoost || !I && !u && !1 !== p.zIndexBoost) && (f.style.zIndex = mt.zIndex++),
                    U.isPressed = !0,
                    y = !(!p.onDrag && !U._listeners.drag),
                    !I && (!1 !== p.cursor || p.activeCursor))
                        for (o = q.length; -1 < --o; )
                            et(q[o], "cursor", p.activeCursor || p.cursor || "move");
                    ot(U, "press", "onPress")
                }
            }, ue = function(e) {
                var t, o, n, i, r, s, a = e;
                if (g && !Te && U.isPressed && e) {
                    if (t = (U.pointerEvent = e).changedTouches) {
                        if ((e = t[0]) !== _ && e.identifier !== C) {
                            for (i = t.length; -1 < --i && (e = t[i]).identifier !== C; )
                                ;
                            if (i < 0)
                                return
                        }
                    } else if (e.pointerId && C && e.pointerId !== C)
                        return;
                    if (Oe)
                        e = $e(e, !0);
                    else {
                        if (E && B && !H && (o = e.pageX,
                        n = e.pageY,
                        X && (i = o * X[0] + n * X[2] + X[4],
                        n = o * X[1] + n * X[3] + X[5],
                        o = i),
                        ((r = Math.abs(o - h)) !== (s = Math.abs(n - m)) && (j < r || j < s) || Ie && B === H) && (H = s < r && V ? "x" : "y",
                        !1 !== U.vars.lockAxisOnTouchScroll && (U.lockedAxis = "x" === H ? "y" : "x",
                        "function" == typeof U.vars.onLockAxis && U.vars.onLockAxis.call(U, a)),
                        Ie && B === H)))
                            return void me(a);
                        U.allowEventDefault || B && (!H || B === H) || !1 === a.cancelable || (a.preventDefault(),
                        a.preventManipulation && a.preventManipulation())
                    }
                    U.autoScroll && (K = !0),
                    he(e.pageX, e.pageY)
                }
            }, he = function(e, t) {
                var o, n, i, r, s, a, l = 1 - U.dragResistance, c = 1 - U.edgeResistance;
                U.pointerX = e,
                U.pointerY = t,
                I ? (r = Math.atan2(k.y - t, e - k.x) * Ee,
                180 < (s = U.y - r) ? (v -= 360,
                U.y = r) : s < -180 && (v += 360,
                U.y = r),
                U.x !== d || Math.abs(v - r) > j ? (U.y = r,
                i = d + (v - r) * l) : i = d) : (X && (a = e * X[0] + t * X[2] + X[4],
                t = e * X[1] + t * X[3] + X[5],
                e = a),
                (n = t - m) < j && -j < n && (n = 0),
                (o = e - h) < j && -j < o && (o = 0),
                (U.lockAxis || U.lockedAxis) && (o || n) && ((a = U.lockedAxis) || (U.lockedAxis = a = V && Math.abs(o) > Math.abs(n) ? "y" : G ? "x" : null,
                a && "function" == typeof U.vars.onLockAxis && U.vars.onLockAxis.call(U, U.pointerEvent)),
                "y" === a ? n = 0 : "x" === a && (o = 0)),
                i = d + o * l,
                r = v + n * l),
                (L || D || P) && (U.x !== i || U.y !== r && !I) ? (P && (We.x = i,
                We.y = r,
                i = (a = P(We)).x,
                r = a.y),
                L && (i = L(i)),
                D && (r = D(r))) : x && (w < i ? i = w + (i - w) * c : i < b && (i = b + (i - b) * c),
                I || (T < r ? r = T + (r - T) * c : r < S && (r = S + (r - S) * c))),
                I || X || (i = Math.round(i),
                r = Math.round(r)),
                (U.x !== i || U.y !== r && !I) && (I ? (U.endRotation = U.x = U.endX = i,
                M = !0) : (G && (U.y = U.endY = r,
                M = !0),
                V && (U.x = U.endX = i,
                M = !0)),
                !U.isDragging && U.isPressed && (U.isDragging = !0,
                ot(U, "dragstart", "onDragStart")))
            }, me = function(e, t) {
                if (g && U.isPressed && (!e || null == C || t || !(e.pointerId && e.pointerId !== C || e.changedTouches && !function(e, t) {
                    for (var o = e.length; -1 < --o; )
                        if (e[o].identifier === t)
                            return !0;
                    return !1
                }(e.changedTouches, C)))) {
                    U.isPressed = !1;
                    var o, n, i, r, s, a = e, l = U.isDragging, c = U.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which), d = we.delayedCall(.001, de);
                    if (E ? (dt(E, "touchend", me),
                    dt(E, "touchmove", ue),
                    dt(E, "touchcancel", me),
                    dt(De, "touchstart", pt)) : dt(De, "mousemove", ue),
                    dt(De, "mouseup", me),
                    e && e.target && dt(e.target, "mouseup", me),
                    M = !1,
                    N && !c)
                        return e && (dt(e.target, "change", me),
                        U.pointerEvent = a),
                        ut(q, !1),
                        ot(U, "release", "onRelease"),
                        ot(U, "click", "onClick"),
                        void (N = !1);
                    if (Ue(ne),
                    !I)
                        for (n = q.length; -1 < --n; )
                            et(q[n], "cursor", p.cursor || (!1 !== p.cursor ? "move" : null));
                    if (l && (Z = Fe = Ye(),
                    U.isDragging = !1),
                    Ae--,
                    e) {
                        if (Oe && (e = $e(e, !1)),
                        (o = e.changedTouches) && (e = o[0]) !== _ && e.identifier !== C) {
                            for (n = o.length; -1 < --n && (e = o[n]).identifier !== C; )
                                ;
                            if (n < 0)
                                return
                        }
                        U.pointerEvent = a,
                        U.pointerX = e.pageX,
                        U.pointerY = e.pageY
                    }
                    return c && a ? (a.preventDefault(),
                    a.preventManipulation && a.preventManipulation(),
                    ot(U, "release", "onRelease")) : a && !l ? (Y && (p.snap || p.bounds) && se(p.throwProps),
                    ot(U, "release", "onRelease"),
                    Ie && "touchmove" === a.type || -1 !== a.type.indexOf("cancel") || (ot(U, "click", "onClick"),
                    Ye() - oe < 300 && ot(U, "doubleclick", "onDoubleClick"),
                    r = a.target || a.srcElement || f,
                    oe = Ye(),
                    s = function() {
                        oe !== z && U.enabled() && !U.isPressed && (r.click ? r.click() : De.createEvent && ((i = De.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, U.pointerEvent.screenX, U.pointerEvent.screenY, U.pointerX, U.pointerY, !1, !1, !1, !1, 0, null),
                        r.dispatchEvent(i)))
                    }
                    ,
                    Ie || a.defaultPrevented || we.delayedCall(1e-5, s))) : (se(p.throwProps),
                    Oe || U.allowEventDefault || !a || !1 === p.dragClickables && te.call(U, a.target) || !l || B && (!H || B !== H) || !1 === a.cancelable || (a.preventDefault(),
                    a.preventManipulation && a.preventManipulation()),
                    ot(U, "release", "onRelease")),
                    ce() && d.duration(U.tween.duration()),
                    l && ot(U, "dragend", "onDragEnd"),
                    !0
                }
            }, ve = function(e) {
                if (e && U.isDragging && !u) {
                    var t = e.target || e.srcElement || f.parentNode
                      , o = t.scrollLeft - t._gsScrollX
                      , n = t.scrollTop - t._gsScrollY;
                    (o || n) && (X ? (h -= o * X[0] + n * X[2],
                    m -= n * X[3] + o * X[1]) : (h -= o,
                    m -= n),
                    t._gsScrollX += o,
                    t._gsScrollY += n,
                    he(U.pointerX, U.pointerY))
                }
            }, xe = function(e) {
                var t = Ye()
                  , o = t - oe < 40
                  , n = t - Z < 40
                  , i = o && z === oe
                  , r = !!e.preventDefault
                  , s = U.pointerEvent && U.pointerEvent.defaultPrevented
                  , a = o && c === oe
                  , l = e.isTrusted || null == e.isTrusted && o && i;
                if (r && (i || n && !1 !== U.vars.suppressClickOnDrag) && e.stopImmediatePropagation(),
                o && (!U.pointerEvent || !U.pointerEvent.defaultPrevented) && (!i || l !== a))
                    return l && i && (c = oe),
                    void (z = oe);
                (U.isPressed || n || o) && (r ? l && e.detail && o && !s || (e.preventDefault(),
                e.preventManipulation && e.preventManipulation()) : e.returnValue = !1)
            }, ye = function(e) {
                return X ? {
                    x: e.x * X[0] + e.y * X[2] + X[4],
                    y: e.x * X[1] + e.y * X[3] + X[5]
                } : {
                    x: e.x,
                    y: e.y
                }
            };
            (e = mt.get(this.target)) && e.kill(),
            this.startDrag = function(e, t) {
                var o, n, i, r;
                fe(e || U.pointerEvent, !0),
                t && !U.hitTest(e || U.pointerEvent) && (o = vt(e || U.pointerEvent),
                n = vt(f),
                i = ye({
                    x: o.left + o.width / 2,
                    y: o.top + o.height / 2
                }),
                r = ye({
                    x: n.left + n.width / 2,
                    y: n.top + n.height / 2
                }),
                h -= i.x - r.x,
                m -= i.y - r.y),
                U.isDragging || (U.isDragging = !0,
                ot(U, "dragstart", "onDragStart"))
            }
            ,
            this.drag = ue,
            this.endDrag = function(e) {
                me(e || U.pointerEvent, !0)
            }
            ,
            this.timeSinceDrag = function() {
                return U.isDragging ? 0 : (Ye() - Z) / 1e3
            }
            ,
            this.timeSinceClick = function() {
                return (Ye() - oe) / 1e3
            }
            ,
            this.hitTest = function(e, t) {
                return mt.hitTest(U.target, e, t)
            }
            ,
            this.getDirection = function(e, t) {
                var o, n, i, r, s, a, l = "velocity" === e && Se ? e : "object" != typeof e || I ? "start" : "element";
                return "element" === l && (s = vt(U.target),
                a = vt(e)),
                o = "start" === l ? U.x - d : "velocity" === l ? Se.getVelocity(this.target, F) : s.left + s.width / 2 - (a.left + a.width / 2),
                I ? o < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2,
                n = "start" === l ? U.y - v : "velocity" === l ? Se.getVelocity(this.target, W) : s.top + s.height / 2 - (a.top + a.height / 2),
                r = (i = Math.abs(o / n)) < 1 / t ? "" : o < 0 ? "left" : "right",
                i < t && ("" !== r && (r += "-"),
                r += n < 0 ? "up" : "down"),
                r)
            }
            ,
            this.applyBounds = function(e) {
                var t, o, n, i, r, s;
                if (e && p.bounds !== e)
                    return p.bounds = e,
                    U.update(!0);
                if (a(!0),
                l(),
                x) {
                    if (t = U.x,
                    o = U.y,
                    w < t ? t = w : t < b && (t = b),
                    T < o ? o = T : o < S && (o = S),
                    (U.x !== t || U.y !== o) && (n = !0,
                    U.x = U.endX = t,
                    I ? U.endRotation = t : U.y = U.endY = o,
                    ne(M = !0),
                    U.autoScroll && !U.isDragging))
                        for (Qe(f.parentNode),
                        i = f,
                        Ve.scrollTop = null != window.pageYOffset ? window.pageYOffset : null != Pe.scrollTop ? Pe.scrollTop : De.body.scrollTop,
                        Ve.scrollLeft = null != window.pageXOffset ? window.pageXOffset : null != Pe.scrollLeft ? Pe.scrollLeft : De.body.scrollLeft; i && !s; )
                            r = (s = Ke(i.parentNode)) ? Ve : i.parentNode,
                            G && r.scrollTop > r._gsMaxScrollY && (r.scrollTop = r._gsMaxScrollY),
                            V && r.scrollLeft > r._gsMaxScrollX && (r.scrollLeft = r._gsMaxScrollX),
                            i = r;
                    U.isThrowing && (n || U.endX > w || U.endX < b || U.endY > T || U.endY < S) && se(p.throwProps, n)
                }
                return U
            }
            ,
            this.update = function(e, t, o) {
                var n = U.x
                  , i = U.y;
                return ae(!t),
                e ? U.applyBounds() : (M && o && ne(!0),
                a(!0)),
                t && (he(U.pointerX, U.pointerY),
                M && ne(!0)),
                U.isPressed && !t && (V && .01 < Math.abs(n - U.x) || G && .01 < Math.abs(i - U.y) && !I) && le(),
                U.autoScroll && (Qe(f.parentNode),
                K = U.isDragging,
                ne(!0)),
                U.autoScroll && (Ze(f, ve),
                qe(f, ve)),
                U
            }
            ,
            this.enable = function(e) {
                var t, o, n;
                if ("soft" !== e) {
                    for (o = q.length; -1 < --o; )
                        n = q[o],
                        ct(n, "mousedown", fe),
                        ct(n, "touchstart", fe),
                        ct(n, "click", xe, !0),
                        I || !1 === p.cursor || et(n, "cursor", p.cursor || "move"),
                        et(n, "touchCallout", "none"),
                        et(n, "touchAction", V === G ? "none" : V ? "pan-y" : "pan-x"),
                        it(n) && et(n.ownerSVGElement || n, "touchAction", V === G ? "none" : V ? "pan-y" : "pan-x"),
                        this.vars.allowContextMenu || ct(n, "contextmenu", s);
                    ut(q, !1)
                }
                return qe(f, ve),
                g = !0,
                Se && "soft" !== e && Se.track(u || f, A ? "x,y" : I ? "rotation" : "top,left"),
                u && u.enable(),
                f._gsDragID = t = "d" + ze++,
                Re[t] = this,
                u && (u.element._gsDragID = t),
                we.set(f, {
                    x: "+=0",
                    overwrite: !1,
                    data: "_draggable"
                }),
                O = {
                    t: f,
                    data: Oe ? r : f._gsTransform,
                    tween: {},
                    setRatio: Oe ? function() {
                        we.set(f, i)
                    }
                    : be._internals.setTransformRatio || be._internals.set3DTransformRatio
                },
                le(),
                U.update(!0),
                U
            }
            ,
            this.disable = function(e) {
                var t, o, n = U.isDragging;
                if (!I)
                    for (t = q.length; -1 < --t; )
                        et(q[t], "cursor", null);
                if ("soft" !== e) {
                    for (t = q.length; -1 < --t; )
                        o = q[t],
                        et(o, "touchCallout", null),
                        et(o, "touchAction", null),
                        dt(o, "mousedown", fe),
                        dt(o, "touchstart", fe),
                        dt(o, "click", xe),
                        dt(o, "contextmenu", s);
                    ut(q, !0),
                    E && (dt(E, "touchcancel", me),
                    dt(E, "touchend", me),
                    dt(E, "touchmove", ue)),
                    dt(De, "mouseup", me),
                    dt(De, "mousemove", ue)
                }
                return Ze(f, ve),
                g = !1,
                Se && "soft" !== e && Se.untrack(u || f, A ? "x,y" : I ? "rotation" : "top,left"),
                u && u.disable(),
                Ue(ne),
                U.isDragging = U.isPressed = N = !1,
                n && ot(U, "dragend", "onDragEnd"),
                U
            }
            ,
            this.enabled = function(e, t) {
                return arguments.length ? e ? U.enable(t) : U.disable(t) : g
            }
            ,
            this.kill = function() {
                return U.isThrowing = !1,
                we.killTweensOf(u || f, !0, n),
                U.disable(),
                we.set(q, {
                    clearProps: "userSelect"
                }),
                delete Re[f._gsDragID],
                U
            }
            ,
            -1 !== t.indexOf("scroll") && (u = this.scrollProxy = new ht(f,function(e, t) {
                var o;
                for (o in t)
                    void 0 === e[o] && (e[o] = t[o]);
                return e
            }({
                onKill: function() {
                    U.isPressed && me(null)
                }
            }, p)),
            f.style.overflowY = G && !at ? "auto" : "hidden",
            f.style.overflowX = V && !at ? "auto" : "hidden",
            f = u.content),
            !1 !== p.force3D && we.set(f, {
                force3D: !0
            }),
            I ? n.rotation = 1 : (V && (n[F] = 1),
            G && (n[W] = 1)),
            I ? (r = (i = Me).css,
            i.overwrite = !1) : A && (r = (i = V && G ? _e : V ? Ce : ke).css,
            i.overwrite = !1),
            this.enable()
        }, U = mt.prototype = new o;
        U.constructor = mt,
        U.pointerX = U.pointerY = U.startX = U.startY = U.deltaX = U.deltaY = 0,
        U.isDragging = U.isPressed = !1,
        mt.version = "0.17.0",
        mt.zIndex = 1e3,
        ct(De, "touchcancel", function() {}),
        ct(De, "contextmenu", function(e) {
            var t;
            for (t in Re)
                Re[t].isPressed && Re[t].endDrag()
        }),
        mt.create = function(e, t) {
            "string" == typeof e && (e = we.selector(e));
            for (var o = e && 0 !== e.length ? V(e) ? function(e) {
                var t, o, n, i = [], r = e.length;
                for (t = 0; t < r; t++)
                    if (o = e[t],
                    V(o))
                        for (n = o.length,
                        n = 0; n < o.length; n++)
                            i.push(o[n]);
                    else
                        o && 0 !== o.length && i.push(o);
                return i
            }(e) : [e] : [], n = o.length; -1 < --n; )
                o[n] = new mt(o[n],t);
            return o
        }
        ,
        mt.get = function(e) {
            return Re[(Je(e) || {})._gsDragID]
        }
        ,
        mt.timeSinceDrag = function() {
            return (Ye() - Fe) / 1e3
        }
        ;
        var q = {}
          , vt = function(e, t) {
            if (e === window)
                return q.left = q.top = 0,
                q.width = q.right = Pe.clientWidth || e.innerWidth || De.body.clientWidth || 0,
                q.height = q.bottom = (e.innerHeight || 0) - 20 < Pe.clientHeight ? Pe.clientHeight : e.innerHeight || De.body.clientHeight || 0,
                q;
            var o = e.pageX !== t ? {
                left: e.pageX - L(),
                top: e.pageY - M(),
                right: e.pageX - L() + 1,
                bottom: e.pageY - M() + 1
            } : e.nodeType || e.left === t || e.top === t ? Oe ? function(e) {
                var t, o, n = 0, i = 0;
                for (t = (e = Je(e)).offsetWidth,
                o = e.offsetHeight; e; )
                    n += e.offsetTop,
                    i += e.offsetLeft,
                    e = e.offsetParent;
                return {
                    top: n,
                    left: i,
                    width: t,
                    height: o
                }
            }(e) : Je(e).getBoundingClientRect() : e;
            return o.right === t && o.width !== t ? (o.right = o.left + o.width,
            o.bottom = o.top + o.height) : o.width === t && (o = {
                width: o.right - o.left,
                height: o.bottom - o.top,
                right: o.right,
                left: o.left,
                bottom: o.bottom,
                top: o.top
            }),
            o
        };
        return mt.hitTest = function(e, t, o) {
            if (e === t)
                return !1;
            var n, i, r, s = vt(e), a = vt(t), l = a.left > s.right || a.right < s.left || a.top > s.bottom || a.bottom < s.top;
            return l || !o ? !l : (r = -1 !== (o + "").indexOf("%"),
            o = parseFloat(o) || 0,
            (n = {
                left: Math.max(s.left, a.left),
                top: Math.max(s.top, a.top)
            }).width = Math.min(s.right, a.right) - n.left,
            n.height = Math.min(s.bottom, a.bottom) - n.top,
            !(n.width < 0 || n.height < 0) && (r ? (o *= .01,
            (i = n.width * n.height) >= s.width * s.height * o || i >= a.width * a.height * o) : n.width > o && n.height > o))
        }
        ,
        Be.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",
        mt
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
