(("undefined" != typeof global ? global : self).webpackJsonp = ("undefined" != typeof global ? global : self).webpackJsonp || []).push([ [ 18 ], {
    1165: function(d, $, n) {
        "use strict";
        var t = n(1198), e = "0-9０-９٠-٩۰-۹", l = "-‐-―−ー－／/．.  ­​⁠　()（）［］\\[\\]~⁓∼～", r = new RegExp("^[+＋]+"), u = 17, a = 3, i = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            "０": "0",
            "１": "1",
            "２": "2",
            "３": "3",
            "４": "4",
            "５": "5",
            "６": "6",
            "７": "7",
            "８": "8",
            "９": "9",
            "٠": "0",
            "١": "1",
            "٢": "2",
            "٣": "3",
            "٤": "4",
            "٥": "5",
            "٦": "6",
            "٧": "7",
            "٨": "8",
            "٩": "9",
            "۰": "0",
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9"
        };
        function o(d) {
            return (r.test(d) ? "+" : "") + function(d, $) {
                for (var n = "", t = d.split(""), e = Array.isArray(t), l = 0, t = e ? t : t[Symbol.iterator](); ;) {
                    var r;
                    if (e) {
                        if (l >= t.length) break;
                        r = t[l++];
                    } else {
                        if ((l = t.next()).done) break;
                        r = l.value;
                    }
                    var u = r, a = $[u.toUpperCase()];
                    a && (n += a);
                }
                return n;
            }(d, i);
        }
        function s(d, $) {
            if (!(d = o(d))) return {};
            if ("+" !== d[0]) return {
                number: d
            };
            if ("0" === d[1]) return {};
            for (var n = 2; n - 1 <= a && n <= d.length; ) {
                var t = d.slice(1, n);
                if ($.countryCallingCodes()[t]) return {
                    countryCallingCode: t,
                    number: d.slice(n)
                };
                n++;
            }
            return {};
        }
        function f() {
            var d = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", $ = arguments[1];
            "string" == typeof $ && ($ = "^(?:" + $ + ")$");
            var n = d.match($);
            return null !== n && n[0].length === d.length;
        }
        var c = ";ext=", h = "([" + e + "]{1,7})";
        function p(d) {
            var $ = "xｘ#＃~～";
            switch (d) {
              case "parsing":
                $ = ",;" + $;
            }
            return c + h + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[" + $ + "]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + h + "#?|[- ]+([" + e + "]{1,5})#";
        }
        n(1199);
        var y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
            return typeof d;
        } : function(d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
        }, m = function() {
            function d(d, $) {
                for (var n = 0; n < $.length; n++) {
                    var t = $[n];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(d, t.key, t);
                }
            }
            return function($, n, t) {
                return n && d($.prototype, n), t && d($, t), $;
            };
        }();
        function _(d, $) {
            if (!(d instanceof $)) throw new TypeError("Cannot call a class as a function");
        }
        var v = function() {
            function d($) {
                _(this, d), function(d) {
                    if (!d) throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
                    if (!E(d) || !E(d.countries) || !E(d.country_calling_codes) && !E(d.country_phone_code_to_countries)) throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.country_calling_codes` child object properties. Got " + (E(d) ? "an object of shape: { " + Object.keys(d).join(", ") + " }" : "a " + x(d) + ": " + d) + ".");
                }($), this.metadata = $, this.v1 = !$.version, this.v2 = $.version;
            }
            return m(d, [ {
                key: "hasCountry",
                value: function(d) {
                    return void 0 !== this.metadata.countries[d];
                }
            }, {
                key: "country",
                value: function(d) {
                    if (!d) return this._country = void 0, this.country_metadata = void 0, this;
                    if (!this.hasCountry(d)) throw new Error("Unknown country: " + d);
                    return this._country = d, this.country_metadata = this.metadata.countries[d], this;
                }
            }, {
                key: "countryCallingCode",
                value: function() {
                    return this.country_metadata[0];
                }
            }, {
                key: "nationalNumberPattern",
                value: function() {
                    return this.country_metadata[1];
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    if (!this.v1) return this.country_metadata[2];
                }
            }, {
                key: "formats",
                value: function() {
                    var d = this, $ = this.country_metadata[this.v1 ? 2 : 3] || [];
                    return $.map(function($) {
                        return new g($, d);
                    });
                }
            }, {
                key: "nationalPrefix",
                value: function() {
                    return this.country_metadata[this.v1 ? 3 : 4];
                }
            }, {
                key: "nationalPrefixFormattingRule",
                value: function() {
                    return this.country_metadata[this.v1 ? 4 : 5];
                }
            }, {
                key: "nationalPrefixForParsing",
                value: function() {
                    return this.country_metadata[this.v1 ? 5 : 6] || this.nationalPrefix();
                }
            }, {
                key: "nationalPrefixTransformRule",
                value: function() {
                    return this.country_metadata[this.v1 ? 6 : 7];
                }
            }, {
                key: "nationalPrefixIsOptionalWhenFormatting",
                value: function() {
                    return this.country_metadata[this.v1 ? 7 : 8];
                }
            }, {
                key: "leadingDigits",
                value: function() {
                    return this.country_metadata[this.v1 ? 8 : 9];
                }
            }, {
                key: "types",
                value: function() {
                    return this.country_metadata[this.v1 ? 9 : 10];
                }
            }, {
                key: "hasTypes",
                value: function() {
                    return void 0 !== this.types();
                }
            }, {
                key: "type",
                value: function(d) {
                    if (this.hasTypes() && C(this.types(), d)) return new b(C(this.types(), d), this);
                }
            }, {
                key: "countryCallingCodes",
                value: function() {
                    return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
                }
            }, {
                key: "chooseCountryByCountryCallingCode",
                value: function(d) {
                    var $ = this.countryCallingCodes()[d][0];
                    this.hasCountry($) && this.country($);
                }
            }, {
                key: "selectedCountry",
                value: function() {
                    return this._country;
                }
            } ]), d;
        }(), g = function() {
            function d($, n) {
                _(this, d), this._format = $, this.metadata = n;
            }
            return m(d, [ {
                key: "pattern",
                value: function() {
                    return this._format[0];
                }
            }, {
                key: "format",
                value: function() {
                    return this._format[1];
                }
            }, {
                key: "leadingDigitsPatterns",
                value: function() {
                    return this._format[2] || [];
                }
            }, {
                key: "nationalPrefixFormattingRule",
                value: function() {
                    return this._format[3] || this.metadata.nationalPrefixFormattingRule();
                }
            }, {
                key: "nationalPrefixIsOptionalWhenFormatting",
                value: function() {
                    return this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting();
                }
            }, {
                key: "nationalPrefixIsMandatoryWhenFormatting",
                value: function() {
                    return this.nationalPrefixFormattingRule() && this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormatting();
                }
            }, {
                key: "usesNationalPrefix",
                value: function() {
                    return "$1" !== this.nationalPrefixFormattingRule() && /\d/.test(this.nationalPrefixFormattingRule().replace("$1", ""));
                }
            }, {
                key: "internationalFormat",
                value: function() {
                    return this._format[5] || this.format();
                }
            } ]), d;
        }(), b = function() {
            function d($, n) {
                _(this, d), this.type = $, this.metadata = n;
            }
            return m(d, [ {
                key: "pattern",
                value: function() {
                    return this.metadata.v1 ? this.type : this.type[0];
                }
            }, {
                key: "possibleLengths",
                value: function() {
                    if (!this.metadata.v1) return this.type[1] || this.metadata.possibleLengths();
                }
            } ]), d;
        }();
        function C(d, $) {
            switch ($) {
              case "FIXED_LINE":
                return d[0];

              case "MOBILE":
                return d[1];

              case "TOLL_FREE":
                return d[2];

              case "PREMIUM_RATE":
                return d[3];

              case "PERSONAL_NUMBER":
                return d[4];

              case "VOICEMAIL":
                return d[5];

              case "UAN":
                return d[6];

              case "PAGER":
                return d[7];

              case "VOIP":
                return d[8];

              case "SHARED_COST":
                return d[9];
            }
        }
        var E = function(d) {
            return "object" === (void 0 === d ? "undefined" : y(d));
        }, x = function(d) {
            return void 0 === d ? "undefined" : y(d);
        }, S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
            return typeof d;
        } : function(d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
        }, A = [ "MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL" ];
        function R(d, $, n) {
            var t = M(d, $, n), e = t.input, l = t.metadata;
            if (e && e.country) {
                if (!l.hasCountry(e.country)) throw new Error("Unknown country: " + e.country);
                var r = e.phone;
                if (l.country(e.country), f(r, l.nationalNumberPattern())) {
                    if (I(r, "FIXED_LINE", l)) return l.type("MOBILE") && "" === l.type("MOBILE").pattern() ? "FIXED_LINE_OR_MOBILE" : l.type("MOBILE") ? I(r, "MOBILE", l) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE" : "FIXED_LINE_OR_MOBILE";
                    var u = A, a = Array.isArray(u), i = 0;
                    for (u = a ? u : u[Symbol.iterator](); ;) {
                        var o;
                        if (a) {
                            if (i >= u.length) break;
                            o = u[i++];
                        } else {
                            if ((i = u.next()).done) break;
                            o = i.value;
                        }
                        var s = o;
                        if (I(r, s, l)) return s;
                    }
                }
            }
        }
        function I(d, $, n) {
            return !(!($ = n.type($)) || !$.pattern()) && (!($.possibleLengths() && $.possibleLengths().indexOf(d.length) < 0) && f(d, $.pattern()));
        }
        function M(d, $, n) {
            var t = void 0, e = void 0;
            if ("string" == typeof d) "string" == typeof $ || void 0 === $ ? (e = n, W(d) && (t = V(d, $, e))) : (e = $, 
            W(d) && (t = V(d, e))); else {
                if (!P(d) || "string" != typeof d.phone) throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");
                W(d.phone) && (t = d), e = $;
            }
            return {
                input: t,
                metadata: new v(e)
            };
        }
        function N(d, $, n) {
            var t = n.type($), e = t && t.possibleLengths() || n.possibleLengths();
            if ("FIXED_LINE_OR_MOBILE" === $) {
                if (!n.type("FIXED_LINE")) return test_number_length_for_type(d, "MOBILE", n);
                var l = n.type("MOBILE");
                l && (e = function(d, $) {
                    for (var n = d.slice(), t = $, e = Array.isArray(t), l = 0, t = e ? t : t[Symbol.iterator](); ;) {
                        var r;
                        if (e) {
                            if (l >= t.length) break;
                            r = t[l++];
                        } else {
                            if ((l = t.next()).done) break;
                            r = l.value;
                        }
                        var u = r;
                        d.indexOf(u) < 0 && n.push(u);
                    }
                    return n.sort(function(d, $) {
                        return d - $;
                    });
                }(e, l.possibleLengths()));
            } else if ($ && !t) return "INVALID_LENGTH";
            var r = d.length, u = e[0];
            return u === r ? "IS_POSSIBLE" : u > r ? "TOO_SHORT" : e[e.length - 1] < r ? "TOO_LONG" : e.indexOf(r, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
        }
        var P = function(d) {
            return "object" === (void 0 === d ? "undefined" : S(d));
        };
        var O = function() {
            return function(d, $) {
                if (Array.isArray(d)) return d;
                if (Symbol.iterator in Object(d)) return function(d, $) {
                    var n = [], t = !0, e = !1, l = void 0;
                    try {
                        for (var r, u = d[Symbol.iterator](); !(t = (r = u.next()).done) && (n.push(r.value), 
                        !$ || n.length !== $); t = !0) ;
                    } catch (d) {
                        e = !0, l = d;
                    } finally {
                        try {
                            !t && u.return && u.return();
                        } finally {
                            if (e) throw l;
                        }
                    }
                    return n;
                }(d, $);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
        function k(d) {
            var $ = void 0, n = void 0, t = d.split(";"), e = Array.isArray(t), l = 0;
            for (t = e ? t : t[Symbol.iterator](); ;) {
                var r;
                if (e) {
                    if (l >= t.length) break;
                    r = t[l++];
                } else {
                    if ((l = t.next()).done) break;
                    r = l.value;
                }
                var u = r.split(":"), a = O(u, 2), i = a[0], o = a[1];
                switch (i) {
                  case "tel":
                    $ = o;
                    break;

                  case "ext":
                    n = o;
                    break;

                  case "phone-context":
                    "+" === o[0] && ($ = o + $);
                }
            }
            if (!W($)) return {};
            var s = {
                number: $
            };
            return n && (s.ext = n), s;
        }
        function L(d) {
            var $ = d.number, n = d.ext;
            if (!$) return "";
            if ("+" !== $[0]) throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
            return "tel:" + $ + (n ? ";ext=" + n : "");
        }
        var T = Object.assign || function(d) {
            for (var $ = 1; $ < arguments.length; $++) {
                var n = arguments[$];
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (d[t] = n[t]);
            }
            return d;
        }, w = 2, B = 250, G = p("parsing"), F = new RegExp("(?:" + G + ")$", "i"), D = new RegExp("^" + ("[" + e + "]{" + w + "}") + "$|^" + ("[+＋]{0,1}(?:[" + l + "]*[" + e + "]){3,}[" + l + e + "]*") + "(?:" + G + ")?$", "i"), K = new RegExp("[+＋" + e + "]"), U = new RegExp("[^" + e + "]+$"), H = {
            country: {}
        };
        function V(d, $, n, t) {
            var e = function(d, $, n, t) {
                var e = void 0, l = void 0, r = void 0;
                if ("string" != typeof d) throw new TypeError("A phone number for parsing must be a string.");
                e = d;
                "string" == typeof $ ? t ? (l = T({
                    defaultCountry: $
                }, n), r = t) : (l = {
                    defaultCountry: $
                }, r = n) : n ? (l = $, r = n) : r = $;
                l = l ? T({}, H, l) : H;
                return {
                    text: e,
                    options: l,
                    metadata: new v(r)
                };
            }(d, $, n, t), l = e.text, r = e.options, a = e.metadata;
            if (r.defaultCountry && !a.hasCountry(r.defaultCountry)) throw new Error("Unknown country: " + r.defaultCountry);
            var i = function(d) {
                if (d && 0 === d.indexOf("tel:")) return k(d);
                var $ = Y(d);
                if (!$ || !W($)) return {};
                var n = function(d) {
                    var $ = d.search(F);
                    if ($ < 0) return {};
                    var n = d.slice(0, $);
                    if (!W(n)) return {};
                    var t = d.match(F), e = 1;
                    for (;e < t.length; ) {
                        if (null != t[e] && t[e].length > 0) return {
                            number: n,
                            ext: t[e]
                        };
                        e++;
                    }
                }($);
                if (n.ext) return n;
                return {
                    number: $
                };
            }(l), c = i.number, h = i.ext;
            if (!c) return {};
            var p = function(d, $, n) {
                var t = s(d, n), e = t.countryCallingCode, l = t.number;
                if (!l) return {
                    countryCallingCode: e
                };
                var r = void 0;
                if (e) (r = j(e, l, n)) ? n.country(r) : n.chooseCountryByCountryCallingCode(e); else {
                    if (!$) return {};
                    r = $, n.country(r), e = n.countryCallingCode();
                }
                var u = function(d, $) {
                    var n = o(d), t = void 0, e = Z(n, $), l = e.number, r = e.carrierCode;
                    if ($.possibleLengths()) switch (N(l, void 0, $)) {
                      case "TOO_SHORT":
                      case "INVALID_LENGTH":
                        break;

                      default:
                        n = l, t = r;
                    } else f(n, $.nationalNumberPattern()) && !f(l, $.nationalNumberPattern()) || (n = l, 
                    t = r);
                    return {
                        national_number: n,
                        carrier_code: t
                    };
                }(l, n), a = u.national_number, i = u.carrier_code;
                return {
                    country: r,
                    countryCallingCode: e,
                    national_number: a,
                    carrierCode: i
                };
            }(c, r.defaultCountry, a), y = p.country, m = p.national_number, _ = p.countryCallingCode, g = p.carrierCode;
            if (!a.selectedCountry()) return r.extended ? {
                countryCallingCode: _
            } : {};
            if (m.length < w || m.length > u) return {};
            var b = !(!y || !f(m, new RegExp(a.nationalNumberPattern())));
            return r.extended ? {
                country: y,
                countryCallingCode: _,
                carrierCode: g,
                valid: b,
                possible: !!b || !0 === r.extended && a.possibleLengths() && function(d, $, n) {
                    switch (N(d, void 0, n)) {
                      case "IS_POSSIBLE":
                        return !0;

                      default:
                        return !1;
                    }
                }(m, 0, a),
                phone: m,
                ext: h
            } : b ? function(d, $, n) {
                var t = {
                    country: d,
                    phone: $
                };
                n && (t.ext = n);
                return t;
            }(y, m, h) : {};
        }
        function W(d) {
            return d.length >= w && f(d, D);
        }
        function Y(d) {
            if (d && !(d.length > B)) {
                var $ = d.search(K);
                if (!($ < 0)) return d.slice($).replace(U, "");
            }
        }
        function Z(d, $) {
            if (!d || !$.nationalPrefixForParsing()) return {
                number: d
            };
            var n = new RegExp("^(?:" + $.nationalPrefixForParsing() + ")"), t = n.exec(d);
            if (!t) return {
                number: d
            };
            var e = void 0, l = t.length - 1;
            e = $.nationalPrefixTransformRule() && t[l] ? d.replace(n, $.nationalPrefixTransformRule()) : d.slice(t[0].length);
            var r = void 0;
            return l > 0 && (r = t[1]), {
                number: e,
                carrierCode: r
            };
        }
        function j(d, $, n) {
            var t = n.countryCallingCodes()[d];
            if (1 === t.length) return t[0];
            var e = n.selectedCountry(), l = function(d, $, n) {
                for (var t = d, e = Array.isArray(t), l = 0, t = e ? t : t[Symbol.iterator](); ;) {
                    var r;
                    if (e) {
                        if (l >= t.length) break;
                        r = t[l++];
                    } else {
                        if ((l = t.next()).done) break;
                        r = l.value;
                    }
                    var u = r;
                    if (n.country(u), n.leadingDigits()) {
                        if ($ && 0 === $.search(n.leadingDigits())) return u;
                    } else if (R({
                        phone: $,
                        country: u
                    }, n.metadata)) return u;
                }
            }(t, $, n);
            return n.country(e), l;
        }
        var J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(d) {
            return typeof d;
        } : function(d) {
            return d && "function" == typeof Symbol && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
        }, X = Object.assign || function(d) {
            for (var $ = 1; $ < arguments.length; $++) {
                var n = arguments[$];
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (d[t] = n[t]);
            }
            return d;
        }, Q = {
            formatExtension: function(d, $) {
                return d + " ext. " + $;
            }
        };
        function z(d, $, n, t, e) {
            var l = function(d, $, n, t, e) {
                var l = void 0, r = void 0, u = void 0, a = void 0;
                if ("string" == typeof d) if ("string" == typeof n) l = {
                    phone: d,
                    country: $
                }, r = n, e ? (u = t, a = e) : a = t; else {
                    if (l = {
                        phone: d
                    }, "string" != typeof $) throw new Error("Format type argument not passed for `format()`");
                    r = $, t ? (u = n, a = t) : a = n;
                } else {
                    if (!td(d) || "string" != typeof d.phone) throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");
                    l = d, r = $, t ? (u = n, a = t) : a = n;
                }
                switch (r) {
                  case "International":
                  case "E.164":
                  case "National":
                  case "RFC3966":
                    break;

                  default:
                    throw new Error('Unknown format type argument passed to "format()": "' + r + '"');
                }
                u = u ? X({}, Q, u) : Q;
                return {
                    input: l,
                    format_type: r,
                    options: u,
                    metadata: new v(a)
                };
            }(d, $, n, t, e), r = l.input, u = l.format_type, a = l.options, i = l.metadata;
            r.country && i.hasCountry(r.country) && i.country(r.country);
            var o = s(r.phone, i), f = o.countryCallingCode, c = o.number;
            if (f = f || r.countryCallingCode) {
                if (r.country && i.selectedCountry() && f !== i.countryCallingCode()) return r.phone;
                i.chooseCountryByCountryCallingCode(f);
            }
            if (!i.selectedCountry()) return r.phone;
            switch (u) {
              case "International":
                return c ? (c = $d(c, "International", !1, i), ed(c = "+" + i.countryCallingCode() + " " + c, r.ext, a.formatExtension)) : "+" + i.countryCallingCode();

              case "E.164":
                return "+" + i.countryCallingCode() + r.phone;

              case "RFC3966":
                return L({
                    number: "+" + i.countryCallingCode() + r.phone,
                    ext: r.ext
                });

              case "National":
                return c ? ed(c = $d(c, "National", !1, i), r.ext, a.formatExtension) : "";
            }
        }
        var q = /(\$\d)/;
        function dd(d, $, n, t, e) {
            var l = new RegExp($.pattern()), r = !$.nationalPrefixFormattingRule() || $.nationalPrefixFormattingRule() && $.nationalPrefixIsOptionalWhenFormatting() && !t;
            if (!n && !r) return d.replace(l, $.format().replace(q, $.nationalPrefixFormattingRule()));
            var u = d.replace(l, n ? $.internationalFormat() : $.format());
            return n ? nd(u) : u;
        }
        function $d(d, $, n, t) {
            var e = function(d, $) {
                for (var n = d, t = Array.isArray(n), e = 0, n = t ? n : n[Symbol.iterator](); ;) {
                    var l;
                    if (t) {
                        if (e >= n.length) break;
                        l = n[e++];
                    } else {
                        if ((e = n.next()).done) break;
                        l = e.value;
                    }
                    var r = l;
                    if (r.leadingDigitsPatterns().length > 0) {
                        var u = r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
                        if (0 !== $.search(u)) continue;
                    }
                    if (f($, new RegExp(r.pattern()))) return r;
                }
            }(t.formats(), d);
            return e ? dd(d, e, "International" === $, n) : d;
        }
        function nd(d) {
            return d.replace(new RegExp("[" + l + "]+", "g"), " ").trim();
        }
        var td = function(d) {
            return "object" === (void 0 === d ? "undefined" : J(d));
        };
        function ed(d, $, n) {
            return $ ? n(d, $) : d;
        }
        Object.assign;
        var ld = function() {
            function d(d, $) {
                for (var n = 0; n < $.length; n++) {
                    var t = $[n];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(d, t.key, t);
                }
            }
            return function($, n, t) {
                return n && d($.prototype, n), t && d($, t), $;
            };
        }();
        var rd = "[+＋]{0,1}(?:[" + l + "]*[" + e + "]){3,}[" + l + e + "]*", ud = p("parsing"), ad = new RegExp("^[  ­​⁠　]+"), id = new RegExp("[  ­​⁠　]+$");
        var od = function() {
            function d($) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = arguments[2];
                !function(d, $) {
                    if (!(d instanceof $)) throw new TypeError("Cannot call a class as a function");
                }(this, d), this.state = "NOT_READY", this.text = $, this.options = n, this.metadata = t, 
                this.regexp = new RegExp(rd + "(?:" + ud + ")?", "ig");
            }
            return ld(d, [ {
                key: "find",
                value: function() {
                    var d = this.regexp.exec(this.text);
                    if (d) {
                        var $ = d[0], n = d.index;
                        $ = $.replace(ad, ""), n += d[0].length - $.length;
                        var t = V($ = $.replace(id, ""), {
                            defaultCountry: this.options.defaultCountry
                        }, this.metadata);
                        return t.phone ? (t.startsAt = n, t.endsAt = n + $.length, t) : this.find();
                    }
                }
            }, {
                key: "hasNext",
                value: function() {
                    return "NOT_READY" === this.state && (this.last_match = this.find(), this.last_match ? this.state = "READY" : this.state = "DONE"), 
                    "READY" === this.state;
                }
            }, {
                key: "next",
                value: function() {
                    if (!this.hasNext()) throw new Error("No next element");
                    var d = this.last_match;
                    return this.last_match = null, this.state = "NOT_READY", d;
                }
            } ]), d;
        }();
        var sd = function() {
            function d(d, $) {
                for (var n = 0; n < $.length; n++) {
                    var t = $[n];
                    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), 
                    Object.defineProperty(d, t.key, t);
                }
            }
            return function($, n, t) {
                return n && d($.prototype, n), t && d($, t), $;
            };
        }();
        var fd = new RegExp("9", "g"), cd = Cd("9", 15), hd = new RegExp("x"), pd = new RegExp("x", "g"), yd = /\[([^\[\]])*\]/g, md = /\d(?=[^,}][^,}])/g, _d = new RegExp("^[" + l + "]*(\\$\\d[" + l + "]*)+$"), vd = new RegExp("^" + ("[+＋]{0,1}[" + l + e + "]*") + "$", "i"), gd = function() {
            function d($, n) {
                !function(d, $) {
                    if (!(d instanceof $)) throw new TypeError("Cannot call a class as a function");
                }(this, d), this.metadata = new v(n), $ && this.metadata.hasCountry($) && (this.default_country = $), 
                this.reset();
            }
            return sd(d, [ {
                key: "input",
                value: function(d) {
                    var $ = Y(d) || "";
                    return $ || d && d.indexOf("+") >= 0 && ($ = "+"), f($, vd) ? this.process_input(o($)) : this.current_output;
                }
            }, {
                key: "process_input",
                value: function(d) {
                    if ("+" === d[0] && (this.parsed_input || (this.parsed_input += "+", this.reset_countriness()), 
                    d = d.slice(1)), this.parsed_input += d, this.national_number += d, this.is_international()) if (this.countryCallingCode) this.country || this.determine_the_country(); else {
                        if (!this.national_number) return this.parsed_input;
                        if (!this.extract_country_calling_code()) return this.parsed_input;
                        this.initialize_phone_number_formats_for_this_country_calling_code(), this.reset_format(), 
                        this.determine_the_country();
                    } else {
                        var $ = this.national_prefix;
                        this.national_number = this.national_prefix + this.national_number, this.extract_national_prefix(), 
                        this.national_prefix !== $ && (this.matching_formats = this.available_formats, this.reset_format());
                    }
                    if (!this.should_format()) return this.format_as_non_formatted_number();
                    this.match_formats_by_leading_digits();
                    var n = this.format_national_phone_number(d);
                    return n ? this.full_phone_number(n) : this.parsed_input;
                }
            }, {
                key: "format_as_non_formatted_number",
                value: function() {
                    return this.is_international() && this.countryCallingCode ? this.national_number ? (this.template = "x" + Cd("x", this.countryCallingCode.length) + " " + Cd("x", this.national_number.length), 
                    "+" + this.countryCallingCode + " " + this.national_number) : "+" + this.countryCallingCode : this.parsed_input;
                }
            }, {
                key: "format_national_phone_number",
                value: function(d) {
                    var $ = void 0;
                    this.chosen_format && ($ = this.format_next_national_number_digits(d));
                    var n = this.attempt_to_format_complete_phone_number();
                    return n || (this.choose_another_format() ? this.reformat_national_number() : $);
                }
            }, {
                key: "reset",
                value: function() {
                    return this.parsed_input = "", this.current_output = "", this.national_prefix = "", 
                    this.national_number = "", this.reset_countriness(), this.reset_format(), this;
                }
            }, {
                key: "reset_country",
                value: function() {
                    this.is_international() ? this.country = void 0 : this.country = this.default_country;
                }
            }, {
                key: "reset_countriness",
                value: function() {
                    this.reset_country(), this.default_country && !this.is_international() ? (this.metadata.country(this.default_country), 
                    this.countryCallingCode = this.metadata.countryCallingCode(), this.initialize_phone_number_formats_for_this_country_calling_code()) : (this.metadata.country(void 0), 
                    this.countryCallingCode = void 0, this.available_formats = [], this.matching_formats = this.available_formats);
                }
            }, {
                key: "reset_format",
                value: function() {
                    this.chosen_format = void 0, this.template = void 0, this.partially_populated_template = void 0, 
                    this.last_match_position = -1;
                }
            }, {
                key: "reformat_national_number",
                value: function() {
                    return this.format_next_national_number_digits(this.national_number);
                }
            }, {
                key: "initialize_phone_number_formats_for_this_country_calling_code",
                value: function() {
                    this.available_formats = this.metadata.formats().filter(function(d) {
                        return _d.test(d.internationalFormat());
                    }), this.matching_formats = this.available_formats;
                }
            }, {
                key: "match_formats_by_leading_digits",
                value: function() {
                    var d = this.national_number, $ = d.length - 3;
                    $ < 0 && ($ = 0), this.matching_formats = this.matching_formats.filter(function(n) {
                        var t = n.leadingDigitsPatterns().length;
                        if (0 === t) return !0;
                        var e = Math.min($, t - 1), l = n.leadingDigitsPatterns()[e];
                        return new RegExp("^(" + l + ")").test(d);
                    }), this.chosen_format && -1 === this.matching_formats.indexOf(this.chosen_format) && this.reset_format();
                }
            }, {
                key: "should_format",
                value: function() {
                    return this.national_number >= 3;
                }
            }, {
                key: "attempt_to_format_complete_phone_number",
                value: function() {
                    var d = this.matching_formats, $ = Array.isArray(d), n = 0;
                    for (d = $ ? d : d[Symbol.iterator](); ;) {
                        var t;
                        if ($) {
                            if (n >= d.length) break;
                            t = d[n++];
                        } else {
                            if ((n = d.next()).done) break;
                            t = n.value;
                        }
                        var e = t;
                        if (new RegExp("^(?:" + e.pattern() + ")$").test(this.national_number) && this.is_format_applicable(e)) {
                            this.reset_format(), this.chosen_format = e;
                            var l = dd(this.national_number, e, this.is_international(), this.national_prefix.length > 0, this.metadata);
                            if (this.create_formatting_template(e)) this.reformat_national_number(); else {
                                var r = this.full_phone_number(l);
                                this.template = r.replace(/[\d\+]/g, "x"), this.partially_populated_template = r;
                            }
                            return l;
                        }
                    }
                }
            }, {
                key: "full_phone_number",
                value: function(d) {
                    return this.is_international() ? "+" + this.countryCallingCode + " " + d : d;
                }
            }, {
                key: "extract_country_calling_code",
                value: function() {
                    var d = s(this.parsed_input, this.metadata), $ = d.countryCallingCode, n = d.number;
                    if ($) return this.countryCallingCode = $, this.national_number = n, this.metadata.chooseCountryByCountryCallingCode($), 
                    void 0 !== this.metadata.selectedCountry();
                }
            }, {
                key: "extract_national_prefix",
                value: function() {
                    if (this.national_prefix = "", this.metadata.selectedCountry()) {
                        var d = Z(this.national_number, this.metadata).number;
                        if (!this.metadata.possibleLengths() || this.is_possible_number(this.national_number) && !this.is_possible_number(d)) {
                            var $ = new RegExp(this.metadata.nationalNumberPattern());
                            if (f(this.national_number, $) && !f(d, $)) return;
                        }
                        return this.national_prefix = this.national_number.slice(0, this.national_number.length - d.length), 
                        this.national_number = d, this.national_prefix;
                    }
                }
            }, {
                key: "is_possible_number",
                value: function(d) {
                    switch (N(d, void 0, this.metadata)) {
                      case "IS_POSSIBLE":
                        return !0;

                      default:
                        return !1;
                    }
                }
            }, {
                key: "choose_another_format",
                value: function() {
                    var d = this.matching_formats, $ = Array.isArray(d), n = 0;
                    for (d = $ ? d : d[Symbol.iterator](); ;) {
                        var t;
                        if ($) {
                            if (n >= d.length) break;
                            t = d[n++];
                        } else {
                            if ((n = d.next()).done) break;
                            t = n.value;
                        }
                        var e = t;
                        if (this.chosen_format === e) return;
                        if (this.is_format_applicable(e) && this.create_formatting_template(e)) return this.chosen_format = e, 
                        this.last_match_position = -1, !0;
                    }
                    this.reset_country(), this.reset_format();
                }
            }, {
                key: "is_format_applicable",
                value: function(d) {
                    return !(!this.is_international() && !this.national_prefix && d.nationalPrefixIsMandatoryWhenFormatting());
                }
            }, {
                key: "create_formatting_template",
                value: function(d) {
                    if (!(d.pattern().indexOf("|") >= 0)) {
                        var $ = this.get_template_for_phone_number_format_pattern(d);
                        if ($) return this.partially_populated_template = $, this.is_international() ? this.template = "x" + Cd("x", this.countryCallingCode.length) + " " + $ : this.template = $.replace(/\d/g, "x"), 
                        this.template;
                    }
                }
            }, {
                key: "get_template_for_phone_number_format_pattern",
                value: function(d) {
                    var $ = d.pattern().replace(yd, "\\d").replace(md, "\\d"), n = cd.match($)[0];
                    if (!(this.national_number.length > n.length)) {
                        var t = this.get_format_format(d), e = new RegExp("^" + $ + "$"), l = this.national_number.replace(/\d/g, "9");
                        return e.test(l) && (n = l), n.replace(new RegExp($), t).replace(fd, "x");
                    }
                }
            }, {
                key: "format_next_national_number_digits",
                value: function(d) {
                    var $ = d.split(""), n = Array.isArray($), t = 0;
                    for ($ = n ? $ : $[Symbol.iterator](); ;) {
                        var e;
                        if (n) {
                            if (t >= $.length) break;
                            e = $[t++];
                        } else {
                            if ((t = $.next()).done) break;
                            e = t.value;
                        }
                        var l = e;
                        if (-1 === this.partially_populated_template.slice(this.last_match_position + 1).search(hd)) return this.chosen_format = void 0, 
                        this.template = void 0, void (this.partially_populated_template = void 0);
                        this.last_match_position = this.partially_populated_template.search(hd), this.partially_populated_template = this.partially_populated_template.replace(hd, l);
                    }
                    return function(d, $) {
                        var n = d.slice(0, $), t = bd("(", n), e = bd(")", n), l = t - e;
                        for (;l > 0 && $ < d.length; ) ")" === d[$] && l--, $++;
                        return d.slice(0, $);
                    }(this.partially_populated_template, this.last_match_position + 1).replace(pd, " ");
                }
            }, {
                key: "is_international",
                value: function() {
                    return this.parsed_input && "+" === this.parsed_input[0];
                }
            }, {
                key: "get_format_format",
                value: function(d) {
                    return this.is_international() ? nd(d.internationalFormat()) : !d.nationalPrefixFormattingRule() || !this.national_prefix && d.usesNationalPrefix() ? d.format() : d.format().replace(q, d.nationalPrefixFormattingRule());
                }
            }, {
                key: "determine_the_country",
                value: function() {
                    this.country = j(this.countryCallingCode, this.national_number, this.metadata);
                }
            }, {
                key: "getNationalNumber",
                value: function() {
                    return this.national_number;
                }
            } ]), d;
        }();
        function bd(d, $) {
            var n = 0, t = $.split(""), e = Array.isArray(t), l = 0;
            for (t = e ? t : t[Symbol.iterator](); ;) {
                var r;
                if (e) {
                    if (l >= t.length) break;
                    r = t[l++];
                } else {
                    if ((l = t.next()).done) break;
                    r = l.value;
                }
                r === d && n++;
            }
            return n;
        }
        function Cd(d, $) {
            if ($ < 1) return "";
            for (var n = ""; $ > 1; ) 1 & $ && (n += d), $ >>= 1, d += d;
            return n + d;
        }
        function Ed() {
            var d = Array.prototype.slice.call(arguments);
            return d.push(t), V.apply(this, d);
        }
        function xd() {
            var d = Array.prototype.slice.call(arguments);
            return d.push(t), z.apply(this, d);
        }
        function Sd(d, $) {
            od.call(this, d, $, t);
        }
        function Ad(d) {
            gd.call(this, d, t);
        }
        n.d($, "b", function() {
            return Ed;
        }), n.d($, "a", function() {
            return xd;
        }), Sd.prototype = Object.create(od.prototype, {}), Sd.prototype.constructor = Sd, 
        Ad.prototype = Object.create(gd.prototype, {}), Ad.prototype.constructor = Ad;
    },
    1198: function(d) {
        d.exports = JSON.parse('{"version":"1.1.11","country_calling_codes":{"1":["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],"7":["RU","KZ"],"20":["EG"],"27":["ZA"],"30":["GR"],"31":["NL"],"32":["BE"],"33":["FR"],"34":["ES"],"36":["HU"],"39":["IT","VA"],"40":["RO"],"41":["CH"],"43":["AT"],"44":["GB","GG","IM","JE"],"45":["DK"],"46":["SE"],"47":["NO","SJ"],"48":["PL"],"49":["DE"],"51":["PE"],"52":["MX"],"53":["CU"],"54":["AR"],"55":["BR"],"56":["CL"],"57":["CO"],"58":["VE"],"60":["MY"],"61":["AU","CC","CX"],"62":["ID"],"63":["PH"],"64":["NZ"],"65":["SG"],"66":["TH"],"81":["JP"],"82":["KR"],"84":["VN"],"86":["CN"],"90":["TR"],"91":["IN"],"92":["PK"],"93":["AF"],"94":["LK"],"95":["MM"],"98":["IR"],"211":["SS"],"212":["MA","EH"],"213":["DZ"],"216":["TN"],"218":["LY"],"220":["GM"],"221":["SN"],"222":["MR"],"223":["ML"],"224":["GN"],"225":["CI"],"226":["BF"],"227":["NE"],"228":["TG"],"229":["BJ"],"230":["MU"],"231":["LR"],"232":["SL"],"233":["GH"],"234":["NG"],"235":["TD"],"236":["CF"],"237":["CM"],"238":["CV"],"239":["ST"],"240":["GQ"],"241":["GA"],"242":["CG"],"243":["CD"],"244":["AO"],"245":["GW"],"246":["IO"],"247":["AC"],"248":["SC"],"249":["SD"],"250":["RW"],"251":["ET"],"252":["SO"],"253":["DJ"],"254":["KE"],"255":["TZ"],"256":["UG"],"257":["BI"],"258":["MZ"],"260":["ZM"],"261":["MG"],"262":["RE","YT"],"263":["ZW"],"264":["NA"],"265":["MW"],"266":["LS"],"267":["BW"],"268":["SZ"],"269":["KM"],"290":["SH","TA"],"291":["ER"],"297":["AW"],"298":["FO"],"299":["GL"],"350":["GI"],"351":["PT"],"352":["LU"],"353":["IE"],"354":["IS"],"355":["AL"],"356":["MT"],"357":["CY"],"358":["FI","AX"],"359":["BG"],"370":["LT"],"371":["LV"],"372":["EE"],"373":["MD"],"374":["AM"],"375":["BY"],"376":["AD"],"377":["MC"],"378":["SM"],"380":["UA"],"381":["RS"],"382":["ME"],"383":["XK"],"385":["HR"],"386":["SI"],"387":["BA"],"389":["MK"],"420":["CZ"],"421":["SK"],"423":["LI"],"500":["FK"],"501":["BZ"],"502":["GT"],"503":["SV"],"504":["HN"],"505":["NI"],"506":["CR"],"507":["PA"],"508":["PM"],"509":["HT"],"590":["GP","BL","MF"],"591":["BO"],"592":["GY"],"593":["EC"],"594":["GF"],"595":["PY"],"596":["MQ"],"597":["SR"],"598":["UY"],"599":["CW","BQ"],"670":["TL"],"672":["NF"],"673":["BN"],"674":["NR"],"675":["PG"],"676":["TO"],"677":["SB"],"678":["VU"],"679":["FJ"],"680":["PW"],"681":["WF"],"682":["CK"],"683":["NU"],"685":["WS"],"686":["KI"],"687":["NC"],"688":["TV"],"689":["PF"],"690":["TK"],"691":["FM"],"692":["MH"],"800":["001"],"808":["001"],"850":["KP"],"852":["HK"],"853":["MO"],"855":["KH"],"856":["LA"],"870":["001"],"878":["001"],"880":["BD"],"881":["001"],"882":["001"],"883":["001"],"886":["TW"],"888":["001"],"960":["MV"],"961":["LB"],"962":["JO"],"963":["SY"],"964":["IQ"],"965":["KW"],"966":["SA"],"967":["YE"],"968":["OM"],"970":["PS"],"971":["AE"],"972":["IL"],"973":["BH"],"974":["QA"],"975":["BT"],"976":["MN"],"977":["NP"],"979":["001"],"992":["TJ"],"993":["TM"],"994":["AZ"],"995":["GE"],"996":["KG"],"998":["UZ"]},"countries":{"AC":["247","[46]\\\\d{4}|[01589]\\\\d{5}",[5,6]],"AD":["376","[16]\\\\d{5,8}|[37-9]\\\\d{5}",[6,8,9],[["(\\\\d{3})(\\\\d{3})","$1 $2",["[137-9]|6[0-8]"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["180","180[02]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["690"]]]],"AE":["971","[2-79]\\\\d{7,8}|800\\\\d{2,9}",[5,6,7,8,9,10,11,12],[["([2-4679])(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2-4679][2-8]"]],["(5\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["5"]],["([479]00)(\\\\d)(\\\\d{5})","$1 $2 $3",["[479]00"],"$1"],["([68]00)(\\\\d{2,9})","$1 $2",["[68]00"],"$1"]],"0","0$1"],"AF":["93","[2-7]\\\\d{8}",[9],[["([2-7]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2-7]"]]],"0","0$1"],"AG":["1","[2589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"268"],"AI":["1","[2589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"264"],"AL":["355","[2-57]\\\\d{7}|6\\\\d{8}|8\\\\d{5,7}|9\\\\d{5}",[6,7,8,9],[["(4)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["4[0-6]"]],["(6\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["6"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2358][2-5]|4[7-9]"]],["(\\\\d{3})(\\\\d{3,5})","$1 $2",["[235][16-9]|[79]|8[016-9]"]]],"0","0$1"],"AM":["374","[1-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{6})","$1 $2",["1|47"]],["(\\\\d{2})(\\\\d{6})","$1 $2",["4[1349]|[5-7]|88|9[1-9]"],"0$1"],["(\\\\d{3})(\\\\d{5})","$1 $2",["[23]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["8|90"],"0 $1"]],"0","(0$1)"],"AO":["244","[29]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3"]]],"AR":["54","11\\\\d{8}|[2368]\\\\d{9}|9\\\\d{10}",[10,11],[["([68]\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[68]"]],["(9)(11)(\\\\d{4})(\\\\d{4})","$2 15-$3-$4",["911"],null,null,"$1 $2 $3-$4"],["(9)(\\\\d{3})(\\\\d{3})(\\\\d{4})","$2 15-$3-$4",["9(?:2[2-4689]|3[3-8])","9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))","9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"],null,null,"$1 $2 $3-$4"],["(9)(\\\\d{4})(\\\\d{2})(\\\\d{4})","$2 15-$3-$4",["9[23]"],null,null,"$1 $2 $3-$4"],["(11)(\\\\d{4})(\\\\d{4})","$1 $2-$3",["11"],null,"true"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2-$3",["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))","2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"],null,"true"],["(\\\\d{4})(\\\\d{2})(\\\\d{4})","$1 $2-$3",["[23]"],null,"true"]],"0","0$1","0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?","9$1"],"AS":["1","[5689]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"684"],"AT":["43","[1-9]\\\\d{3,12}",[4,5,6,7,8,9,10,11,12,13],[["(116\\\\d{3})","$1",["116"],"$1"],["(1)(\\\\d{3,12})","$1 $2",["1"]],["(5\\\\d)(\\\\d{3,5})","$1 $2",["5[079]"]],["(5\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["5[079]"]],["(5\\\\d)(\\\\d{4})(\\\\d{4,7})","$1 $2 $3",["5[079]"]],["(\\\\d{3})(\\\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]],["(\\\\d{4})(\\\\d{3,9})","$1 $2",["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]],"0","0$1"],"AU":["61","1\\\\d{4,9}|[2-578]\\\\d{8}",[5,6,7,8,9,10],[["([2378])(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\\\d{3})","$1 $2",["180","1802"]],["(19\\\\d)(\\\\d{3})","$1 $2",["19[13]"]],["(19\\\\d{2})(\\\\d{4})","$1 $2",["19[679]"]],["(13)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,[["[237]\\\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\\\d|4[0-4]))|[6-8]\\\\d{4}|9(?:[02-9]\\\\d{3}|1(?:[0-57-9]\\\\d{2}|6[0135-9]\\\\d)))\\\\d{3}",[9]],["14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\\\d{6}",[9]],["180(?:0\\\\d{3}|2)\\\\d{3}",[7,10]],["19(?:0[0126]\\\\d|[679])\\\\d{5}",[8,10]],["500\\\\d{6}",[9]],null,null,["16\\\\d{3,7}",[5,6,7,8,9]],["550\\\\d{6}",[9]],["13(?:00\\\\d{3}|45[0-4]|\\\\d)\\\\d{3}",[6,8,10]]]],"AW":["297","[25-9]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"AX":["358","1\\\\d{5,11}|[35]\\\\d{5,9}|2\\\\d{4,9}|4\\\\d{5,10}|6\\\\d{7,9}|7\\\\d{4,9}|8\\\\d{6,9}",[5,6,7,8,9,10,11,12],[["(\\\\d{3})(\\\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]],["(75\\\\d{3})","$1",["75[12]"]],["(116\\\\d{3})","$1",["116"],"$1"],["(\\\\d{2})(\\\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"]],["(\\\\d)(\\\\d{4,11})","$1 $2",["[25689][1-8]|3"]]],"0",null,null,null,null,null,[["18[1-8]\\\\d{3,9}",[6,7,8,9,10,11,12]],["4\\\\d{5,10}|50\\\\d{4,8}",[6,7,8,9,10,11]],["800\\\\d{4,7}",[7,8,9,10]],["[67]00\\\\d{5,6}",[8,9]],null,null,["[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{2,7})",[5,6,7,8,9,10]]]],"AZ":["994","[1-9]\\\\d{8}",[9],[["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["1[28]|2(?:[0-36]|[45]2)|365"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[4-8]"],"0$1"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["9"],"0$1"]],"0","(0$1)"],"BA":["387","[3-9]\\\\d{7,8}",[8,9],[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2-$3",["[3-5]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["6[1-356]|[7-9]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["6[047]"]]],"0","0$1"],"BB":["1","[2589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"246"],"BD":["880","[2-79]\\\\d{5,9}|1\\\\d{9}|8[0-7]\\\\d{4,8}",[6,7,8,9,10],[["(2)(\\\\d{7,8})","$1-$2",["2"]],["(\\\\d{2})(\\\\d{4,6})","$1-$2",["[3-79]1"]],["(\\\\d{4})(\\\\d{3,6})","$1-$2",["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[01367])"]],["(\\\\d{3})(\\\\d{3,7})","$1-$2",["[3-79][2-9]|8"]]],"0","0$1"],"BE":["32","[1-9]\\\\d{7,8}",[8,9],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["4[5-9]"]],["(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[23]|4[23]|9[2-4]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[156]|7[018]|8(?:0[1-9]|[1-79])"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["(?:80|9)0"]]],"0","0$1"],"BF":["226","[25-7]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"BG":["359","[23567]\\\\d{5,7}|[489]\\\\d{6,8}",[6,7,8,9],[["(2)(\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["2"]],["(2)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["43[124-7]|70[1-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1 $2 $3",["43[124-7]|70[1-9]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[78]00"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["99[69]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["48|8[7-9]|9[08]"]]],"0","0$1"],"BH":["973","[136-9]\\\\d{7}",[8],[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"BI":["257","[267]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"BJ":["229","[2689]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2689]"]]]],"BL":["590","[56]\\\\d{8}",[9],[["([56]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["590|69[01]"]]],"0",null,null,null,null,null,[["590(?:2[7-9]|5[12]|87)\\\\d{4}"],["69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}"]]],"BM":["1","[4589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"441"],"BN":["673","[2-578]\\\\d{6}",[7],[["([2-578]\\\\d{2})(\\\\d{4})","$1 $2",["[2-578]"]]]],"BO":["591","[23467]\\\\d{7}|8\\\\d{8}",[8,9],[["([234])(\\\\d{7})","$1 $2",["[2-4]"]],["([67]\\\\d{7})","$1",["[67]"]],["(800)(\\\\d{2})(\\\\d{4})","$1 $2 $3",["800"]]],"0",null,"0(1\\\\d)?"],"BQ":["599","[347]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[13-7]"]],["(9)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["9"]]],null,null,null,null,null,null,[["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\\\d)\\\\d{3}"],["(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\\\d|9[056])\\\\d)\\\\d{3}"]]],"BR":["55","[1-46-9]\\\\d{7,10}|5(?:[0-4]\\\\d{7,9}|5(?:[2-8]\\\\d{7}|9\\\\d{7,8}))",[8,9,10,11],[["(\\\\d{4})(\\\\d{4})","$1-$2",["300|4(?:0[02]|37)","300|4(?:0(?:0|20)|370)"]],["([3589]00)(\\\\d{2,3})(\\\\d{4})","$1 $2 $3",["[3589]00"],"0$1"],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2-$3",["[1-9][1-9]"],"($1)"],["(\\\\d{2})(\\\\d{5})(\\\\d{4})","$1 $2-$3",["[1-9][1-9]9"],"($1)"]],"0",null,"0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\\\d{10,11}))?","$2"],"BS":["1","[2589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"242"],"BT":["975","[1-8]\\\\d{6,7}",[7,8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["1|77"]],["([2-8])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-68]|7[246]"]]]],"BW":["267","[2-79]\\\\d{6,7}",[7,8],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[2-6]"]],["(7\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7"]],["(90)(\\\\d{5})","$1 $2",["90"]]]],"BY":["375","[1-4]\\\\d{8}|8(?:0(?:0\\\\d{3,7}|[13]\\\\d{7})|(?:10|20\\\\d)\\\\d{7})|9\\\\d{9,10}",[6,7,8,9,10,11],[["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["17[0-3589]|2[4-9]|[34]","17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"],"8 0$1"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])","1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"],"8 0$1"],["(\\\\d{4})(\\\\d{2})(\\\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["([89]\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8[01]|9"],"8 $1"],["(82\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["82"],"8 $1"],["(800)(\\\\d{3})","$1 $2",["800"],"8 $1"],["(800)(\\\\d{2})(\\\\d{2,4})","$1 $2 $3",["800"],"8 $1"]],"8",null,"8?0?"],"BZ":["501","[2-8]\\\\d{6}|0\\\\d{10}",[7,11],[["(\\\\d{3})(\\\\d{4})","$1-$2",["[2-8]"]],["(0)(800)(\\\\d{4})(\\\\d{3})","$1-$2-$3-$4",["080","0800"]]]],"CA":["1","[2-9]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,null,[["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}"],["900[2-9]\\\\d{6}"],["5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}"]]],"CC":["61","[1458]\\\\d{5,9}",[6,7,8,9,10],[["([2378])(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\\\d{3})","$1 $2",["180","1802"]],["(19\\\\d)(\\\\d{3})","$1 $2",["19[13]"]],["(19\\\\d{2})(\\\\d{4})","$1 $2",["19[679]"]],["(13)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,[["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\\\d|70[23]|959))\\\\d{3}",[9]],["14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}",[9]],["180(?:0\\\\d{3}|2)\\\\d{3}",[7,10]],["19(?:0[0126]\\\\d|[679])\\\\d{5}",[8,10]],["500\\\\d{6}",[9]],null,null,null,["550\\\\d{6}",[9]],["13(?:00\\\\d{2})?\\\\d{4}",[6,10]]]],"CD":["243","[2-6]\\\\d{6}|[18]\\\\d{6,8}|9\\\\d{8}",[7,9],[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["12"]],["([89]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["8[0-2459]|9"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["88"]],["(\\\\d{2})(\\\\d{5})","$1 $2",["[1-6]"]]],"0","0$1"],"CF":["236","[278]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"CG":["242","[028]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["801"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[02]"]],["(\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["800"]]]],"CH":["41","[2-9]\\\\d{8}|860\\\\d{9}",[9],[["([2-9]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2-7]|[89]1"]],["([89]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["8[047]|90"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["860"]]],"0","0$1"],"CI":["225","[02-8]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"CK":["682","[2-8]\\\\d{4}",[5],[["(\\\\d{2})(\\\\d{3})","$1 $2"]]],"CL":["56","1230\\\\d{7}|[2-46-9]\\\\d{8,10}|5[1-3578]\\\\d{7}",[9,10,11],[["(\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2[23]"],"($1)"],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[357]|4[1-35]|6[13-57]|8(?:0[1-9]|[1-9])"],"($1)"],["(9)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["9"]],["(44)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["44"]],["([68]00)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[68]00"]],["(600)(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["600"]],["(1230)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["123","1230"]],["(\\\\d{5})(\\\\d{4})","$1 $2",["219"],"($1)"]]],"CM":["237","[2368]\\\\d{7,8}",[8,9],[["([26])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["[26]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[23]|88"]]]],"CN":["86","[1-7]\\\\d{6,11}|8[0-357-9]\\\\d{6,9}|9\\\\d{7,10}",[7,8,9,10,11,12],[["([48]00)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[48]00"]],["(\\\\d{2})(\\\\d{5,6})","$1 $2",["(?:10|2\\\\d)[19]","(?:10|2\\\\d)(?:10|9[56])","(?:10|2\\\\d)(?:100|9[56])"],"0$1"],["(\\\\d{3})(\\\\d{5,6})","$1 $2",["[3-9]","[3-9]\\\\d\\\\d[19]","[3-9]\\\\d\\\\d(?:10|9[56])"],"0$1"],["(21)(\\\\d{4})(\\\\d{4,6})","$1 $2 $3",["21"],"0$1","true"],["([12]\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"],"0$1","true"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","true"],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"],"0$1","true"],["(\\\\d{4})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["807","8078"],"0$1","true"],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["1(?:[3-57-9]|66)"]],["(10800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["108","1080","10800"]],["(\\\\d{3})(\\\\d{7,8})","$1 $2",["950"]]],"0",null,"(1(?:[12]\\\\d{3}|79\\\\d{2}|9[0-7]\\\\d{2}))|0"],"CO":["57","(?:[13]\\\\d{0,3}|[24-8])\\\\d{7}",[8,10,11],[["(\\\\d)(\\\\d{7})","$1 $2",["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]","1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"],"($1)"],["(\\\\d{3})(\\\\d{7})","$1 $2",["3"]],["(1)(\\\\d{3})(\\\\d{7})","$1-$2-$3",["1(?:80|9[04])","1(?:800|9(?:0[01]|4[78]))"],"0$1",null,"$1 $2 $3"]],"0",null,"0([3579]|4(?:44|56))?"],"CR":["506","[24-9]\\\\d{7,9}",[8,10],[["(\\\\d{4})(\\\\d{4})","$1 $2",["[24-7]|8[3-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[89]0"]]],null,null,"(19(?:0[012468]|1[09]|20|66|77|99))"],"CU":["53","[2-57]\\\\d{5,7}",[6,7,8],[["(\\\\d)(\\\\d{6,7})","$1 $2",["7"]],["(\\\\d{2})(\\\\d{4,6})","$1 $2",["[2-4]"]],["(\\\\d)(\\\\d{7})","$1 $2",["5"],"0$1"]],"0","(0$1)"],"CV":["238","[2-59]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"CW":["599","[134679]\\\\d{6,7}",[7,8],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[13-7]"]],["(9)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["9"]]],null,null,null,null,null,null,[["9(?:[48]\\\\d{2}|50\\\\d|7(?:2[0-24]|[34]\\\\d|6[35-7]|77|8[7-9]))\\\\d{4}",[8]],["9(?:5(?:[12467]\\\\d|3[01])|6(?:[15-9]\\\\d|3[01]))\\\\d{4}",[8]],null,null,null,null,null,["955\\\\d{5}",[8]],null,["60[0-2]\\\\d{4}",[7]]]],"CX":["61","[1458]\\\\d{5,9}",[6,7,8,9,10],[["([2378])(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["14|[45]"],"0$1"],["(16)(\\\\d{3,4})","$1 $2",["16"],"0$1"],["(16)(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(1[389]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[389]0","1(?:[38]0|9)0"]],["(180)(2\\\\d{3})","$1 $2",["180","1802"]],["(19\\\\d)(\\\\d{3})","$1 $2",["19[13]"]],["(19\\\\d{2})(\\\\d{4})","$1 $2",["19[679]"]],["(13)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["13[1-9]"]]],"0",null,null,null,null,null,[["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\\\d|7(?:0[01]|1[0-2])|958))\\\\d{3}",[9]],["14(?:5\\\\d|71)\\\\d{5}|4(?:[0-3]\\\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\\\d{6}",[9]],["180(?:0\\\\d{3}|2)\\\\d{3}",[7,10]],["19(?:0[0126]\\\\d|[679])\\\\d{5}",[8,10]],["500\\\\d{6}",[9]],null,null,null,["550\\\\d{6}",[9]],["13(?:00\\\\d{2})?\\\\d{4}",[6,8,10]]]],"CY":["357","[257-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{6})","$1 $2"]]],"CZ":["420","[2-8]\\\\d{8}|9\\\\d{8,11}",[9],[["([2-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(96\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["96"]],["(9\\\\d)(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["9[36]"]]]],"DE":["49","[1-35-9]\\\\d{3,14}|4(?:[0-8]\\\\d{3,12}|9(?:[0-37]\\\\d|4(?:[1-35-8]|4\\\\d?)|5\\\\d{1,2}|6[1-8]\\\\d?)\\\\d{2,8})",[4,5,6,7,8,9,10,11,12,13,14,15],[["(1\\\\d{2})(\\\\d{7,8})","$1 $2",["1[67]"]],["(15\\\\d{3})(\\\\d{6})","$1 $2",["15[0568]"]],["(1\\\\d{3})(\\\\d{7})","$1 $2",["15"]],["(\\\\d{2})(\\\\d{3,11})","$1 $2",["3[02]|40|[68]9"]],["(\\\\d{3})(\\\\d{3,11})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)","2(?:0[1-389]|1(?:[14]|2[0-8])|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]],["(\\\\d{4})(\\\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[13468]|8[13568])|6(?:0[1356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]],["(3\\\\d{4})(\\\\d{1,10})","$1 $2",["3"]],["(800)(\\\\d{7,12})","$1 $2",["800"]],["(\\\\d{3})(\\\\d)(\\\\d{4,10})","$1 $2 $3",["1(?:37|80)|900","1(?:37|80)|900[1359]"]],["(1\\\\d{2})(\\\\d{5,11})","$1 $2",["181"]],["(18\\\\d{3})(\\\\d{6})","$1 $2",["185","1850","18500"]],["(18\\\\d{2})(\\\\d{7})","$1 $2",["18[68]"]],["(18\\\\d)(\\\\d{8})","$1 $2",["18[2-579]"]],["(700)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["700"]],["(138)(\\\\d{4})","$1 $2",["138"]],["(15[013-68])(\\\\d{2})(\\\\d{8})","$1 $2 $3",["15[013-68]"]],["(15[279]\\\\d)(\\\\d{2})(\\\\d{7})","$1 $2 $3",["15[279]"]],["(1[67]\\\\d)(\\\\d{2})(\\\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"]]],"0","0$1"],"DJ":["253","[27]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"DK":["45","[2-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"DM":["1","[57-9]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"767"],"DO":["1","[589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"8[024]9"],"DZ":["213","(?:[1-4]|[5-9]\\\\d)\\\\d{7}",[8,9],[["([1-4]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[1-4]"]],["([5-8]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[5-8]"]],["(9\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["9"]]],"0","0$1"],"EC":["593","1\\\\d{9,10}|[2-8]\\\\d{7}|9\\\\d{8}",[8,9,10,11],[["(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2-$3",["[247]|[356][2-8]"],null,null,"$1-$2-$3"],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["9"],"0$1"],["(1800)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["180","1800"],"$1"]],"0","(0$1)"],"EE":["372","[3-9]\\\\d{6,7}|800\\\\d{6,7}",[7,8,10],[["([3-79]\\\\d{2})(\\\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]],["(70)(\\\\d{2})(\\\\d{4})","$1 $2 $3",["70"]],["(8000)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["800","8000"]],["([458]\\\\d{3})(\\\\d{3,4})","$1 $2",["40|5|8(?:00|[1-5])","40|5|8(?:00[1-9]|[1-5])"]]]],"EG":["20","1\\\\d{4,9}|[24-6]\\\\d{8}|3\\\\d{7}|[89]\\\\d{8,9}",[8,9,10],[["(\\\\d)(\\\\d{7,8})","$1 $2",["[23]"]],["(\\\\d{2})(\\\\d{6,7})","$1 $2",["1(?:3|5[239])|[4-6]|[89][2-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[0-25]|[89]00"]]],"0","0$1"],"EH":["212","[5-9]\\\\d{8}",[9],[["([5-7]\\\\d{2})(\\\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"]],["([58]\\\\d{3})(\\\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],["(5\\\\d{4})(\\\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"]],["([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"]],["(8[09])(\\\\d{7})","$1-$2",["8(?:0|9[013-9])"]]],"0",null,null,null,null,"528[89]"],"ER":["291","[178]\\\\d{6}",[7],[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3"]],"0","0$1"],"ES":["34","[5-9]\\\\d{8}",[9],[["([89]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[89]00"]],["([5-9]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[568]|[79][0-8]"]]]],"ET":["251","[1-59]\\\\d{8}",[9],[["([1-59]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[1-59]"]]],"0","0$1"],"FI":["358","1\\\\d{4,11}|[2-9]\\\\d{4,10}",[5,6,7,8,9,10,11,12],[["(\\\\d{3})(\\\\d{3,7})","$1 $2",["(?:[1-3]0|[6-8])0"]],["(75\\\\d{3})","$1",["75[12]"]],["(116\\\\d{3})","$1",["116"],"$1"],["(\\\\d{2})(\\\\d{4,10})","$1 $2",["[14]|2[09]|50|7[135]"]],["(\\\\d)(\\\\d{4,11})","$1 $2",["[25689][1-8]|3"]]],"0","0$1",null,null,null,null,[["1(?:[3569][1-8]\\\\d{3,9}|[47]\\\\d{5,10})|2[1-8]\\\\d{3,9}|3(?:[1-8]\\\\d{3,9}|9\\\\d{4,8})|[5689][1-8]\\\\d{3,9}"],["4(?:[0-8]\\\\d{4,9}|9\\\\d{3,8})|50\\\\d{4,8}",[6,7,8,9,10,11]],["800\\\\d{4,7}",[7,8,9,10]],["[67]00\\\\d{5,6}",[8,9]],null,null,["[13]0\\\\d{4,8}|2(?:0(?:[016-8]\\\\d{3,7}|[2-59]\\\\d{2,7})|9\\\\d{4,8})|60(?:[12]\\\\d{5,6}|6\\\\d{7})|7(?:1\\\\d{7}|3\\\\d{8}|5[03-9]\\\\d{3,7})",[5,6,7,8,9,10]]]],"FJ":["679","[2-9]\\\\d{6}|0\\\\d{10}",[7,11],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[2-9]"]],["(\\\\d{4})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["0"]]]],"FK":["500","[2-7]\\\\d{4}",[5]],"FM":["691","[39]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"FO":["298","[2-9]\\\\d{5}",[6],[["(\\\\d{6})","$1"]],null,null,"(10(?:01|[12]0|88))"],"FR":["33","[1-9]\\\\d{8}",[9],[["([1-79])(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["[1-79]"]],["(8\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["8"],"0 $1"]],"0","0$1"],"GA":["241","0?\\\\d{7}",[7,8],[["(\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["0"]]]],"GB":["44","\\\\d{7,10}",[7,9,10],[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0","0$1",null,null,null,null,[["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\\\d)\\\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\\\d)|3(?:0\\\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\\\d|9[2-57]))\\\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\\\d)|276\\\\d|6(?:26[06-9]|686))|6(?:06(?:4\\\\d|7[4-79])|295[567]|35[34]\\\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\\\d{3}|176888[2-46-8]\\\\d{2}|16977[23]\\\\d{3}",[9,10]],["7(?:[1-3]\\\\d{3}|4(?:[0-46-9]\\\\d{2}|5(?:[0-689]\\\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\\\d|2[0-35-9])\\\\d|7(?:0(?:0[01]|[1-9]\\\\d)|[1-7]\\\\d{2}|8[02-9]\\\\d|9[0-689]\\\\d)|8(?:[014-9]\\\\d|[23][0-8])\\\\d|9(?:[024-9]\\\\d{2}|1(?:[02-9]\\\\d|1[028])|3[0-689]\\\\d))\\\\d{5}",[10]],["80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})"],["(?:87[123]|9(?:[01]\\\\d|8[2349]))\\\\d{7}",[10]],["70\\\\d{8}",[10]],null,["(?:3[0347]|55)\\\\d{8}",[10]],["76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}",[10]],["56\\\\d{8}",[10]],["8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})",[7,10]]]],"GD":["1","[4589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"473"],"GE":["995","[34578]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5|790"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],"GF":["594","[56]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]],"0","0$1"],"GG":["44","[135789]\\\\d{6,9}",[7,9,10],[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,[["1481[25-9]\\\\d{5}",[10]],["7(?:781\\\\d|839\\\\d|911[17])\\\\d{5}",[10]],["80(?:0(?:1111|\\\\d{6,7})|8\\\\d{7})"],["(?:87[123]|9(?:[01]\\\\d|8[0-3]))\\\\d{7}",[10]],["70\\\\d{8}",[10]],null,["(?:3[0347]|55)\\\\d{8}",[10]],["76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}",[10]],["56\\\\d{8}",[10]],["8(?:4(?:5464\\\\d|[2-5]\\\\d{7})|70\\\\d{7})",[7,10]]]],"GH":["233","[235]\\\\d{8}|8\\\\d{7}",[8,9],[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[235]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["8"]]],"0","0$1"],"GI":["350","[256]\\\\d{7}",[8],[["(\\\\d{3})(\\\\d{5})","$1 $2",["2"]]]],"GL":["299","[1-689]\\\\d{5}",[6],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"GM":["220","[2-9]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"GN":["224","[367]\\\\d{7,8}",[8,9],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["3"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[67]"]]]],"GP":["590","[56]\\\\d{8}",[9],[["([56]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["590|69[01]"]]],"0","0$1",null,null,null,null,[["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\\\d)\\\\d{4}"],["69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}"]]],"GQ":["240","[23589]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[235]"]],["(\\\\d{3})(\\\\d{6})","$1 $2",["[89]"]]]],"GR":["30","[26-9]\\\\d{9}",[10],[["([27]\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["21|7"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2[2-9]1|[689]"]],["(2\\\\d{3})(\\\\d{6})","$1 $2",["2[2-9][02-9]"]]]],"GT":["502","[2-7]\\\\d{7}|1[89]\\\\d{9}",[8,11],[["(\\\\d{4})(\\\\d{4})","$1 $2",["[2-7]"]],["(\\\\d{4})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]]]],"GU":["1","[5689]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"671"],"GW":["245","(?:4(?:0\\\\d{5}|4\\\\d{7})|9\\\\d{8})",[7,9],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["44|9[5-7]"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["40"]]]],"GY":["592","[2-46-9]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"HK":["852","[2-7]\\\\d{7}|8[0-3]\\\\d{6,7}|9\\\\d{4,10}",[5,6,7,8,9,11],[["(\\\\d{4})(\\\\d{4})","$1 $2",["[2-7]|[89](?:0[1-9]|[1-9])"]],["(800)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["800"]],["(900)(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["900"]],["(900)(\\\\d{2,5})","$1 $2",["900"]]]],"HN":["504","[237-9]\\\\d{7}",[8],[["(\\\\d{4})(\\\\d{4})","$1-$2"]]],"HR":["385","[1-7]\\\\d{5,8}|[89]\\\\d{6,8}",[6,7,8,9],[["(1)(\\\\d{4})(\\\\d{3})","$1 $2 $3",["1"]],["([2-5]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[2-5]"]],["(9\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["9"]],["(6[01])(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["6[01]"]],["([67]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[67]"]],["(80[01])(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["80[01]"]],["(80[01])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["80[01]"]]],"0","0$1"],"HT":["509","[2-489]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2 $3"]]],"HU":["36","[1-9]\\\\d{7,8}",[8,9],[["(1)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[2-9]"]]],"06","($1)"],"ID":["62","(?:[1-79]\\\\d{6,10}|8\\\\d{7,11})",[7,8,9,10,11,12],[["(\\\\d{2})(\\\\d{5,8})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\\\d{3})(\\\\d{5,8})","$1 $2",["2[035-9]|[36][02-9]|[4579]"],"(0$1)"],["(8\\\\d{2})(\\\\d{3,4})(\\\\d{3})","$1-$2-$3",["8[1-35-9]"]],["(8\\\\d{2})(\\\\d{4})(\\\\d{4,5})","$1-$2-$3",["8[1-35-9]"]],["(1)(500)(\\\\d{3})","$1 $2 $3",["150","1500"],"$1"],["(177)(\\\\d{6,8})","$1 $2",["177"]],["(800)(\\\\d{5,7})","$1 $2",["800"]],["(804)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["804"]],["(80\\\\d)(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["80[79]"]]],"0","0$1"],"IE":["353","[124-9]\\\\d{6,9}",[7,8,9,10],[["(1)(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["1"]],["(\\\\d{2})(\\\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["40[24]|50[45]"]],["(48)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["48"]],["(818)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["818"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[24-69]|7[14]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["76|8[35-9]"],"0$1"],["(8\\\\d)(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3 $4",["8[35-9]5"],"0$1"],["(700)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["700"],"0$1"],["(\\\\d{4})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1(?:5|8[059])","1(?:5|8[059]0)"],"$1"]],"0","(0$1)"],"IL":["972","1\\\\d{6,11}|[2-589]\\\\d{3}(?:\\\\d{3,6})?|6\\\\d{3}|7\\\\d{6,9}",[4,7,8,9,10,11,12],[["([2-489])(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["([57]\\\\d)(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(153)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})","$1 $2 $3 $4",["153"]],["(1)([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(1255)(\\\\d{3})","$1-$2",["125","1255"]],["(1200)(\\\\d{3})(\\\\d{3})","$1-$2-$3",["120","1200"]],["(1212)(\\\\d{2})(\\\\d{2})","$1-$2-$3",["121","1212"]],["(1599)(\\\\d{6})","$1-$2",["159","1599"]],["(151)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})","$1-$2 $3-$4",["151"]],["(\\\\d{4})","*$1",["[2-689]"]]],"0"],"IM":["44","[135789]\\\\d{6,9}",[10],[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,[["1624[5-8]\\\\d{5}"],["7(?:4576|[59]24\\\\d|624[0-4689])\\\\d{5}"],["808162\\\\d{4}"],["(?:872299|90[0167]624)\\\\d{4}"],["70\\\\d{8}"],null,["3(?:08162\\\\d|3\\\\d{5}|4(?:40[49]06|5624\\\\d)|7(?:0624\\\\d|2299\\\\d))\\\\d{3}|55\\\\d{8}"],null,["56\\\\d{8}"],["8(?:4(?:40[49]06|5624\\\\d)|70624\\\\d)\\\\d{3}"]]],"IN":["91","008\\\\d{9}|1\\\\d{7,12}|[2-9]\\\\d{9,10}",[8,9,10,11,12,13],[["(\\\\d{8})","$1",["561","5616","56161"],"$1"],["(\\\\d{5})(\\\\d{5})","$1 $2",["6(?:00|12|2[03689]|3[05-9]|9[01])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9","6(?:00|127|2(?:0[0134]|3[589]|6[0-39]|8[0-3]|9[0-46])|3(?:0[0-39]|5[0-46-9]|6[0-2]|7[0156]|8[1-3569]|9[0-79])|9[01])|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9","6(?:00|1279|2(?:0[0134]|3[589]|6[0-39]|8[0-3]|9[0-46])|3(?:0[0-39]|5[0-46-9]|6[0-2]|7[0156]|8[1-3569]|9[0-79])|9[01])|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[024-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[04-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:[014](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|[16](?:[089]|7[02-8])|2(?:[09]|7[02-8]|8[0-689]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-8]))|9(?:[02-9]|1(?:[0289]|7[02-8])))|9"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]],["(\\\\d{4})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1(?:[23579]|[468][1-9])|[2-8]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})(\\\\d{3})","$1 $2 $3 $4",["008"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["140"],"$1"],["(\\\\d{4})(\\\\d{2})(\\\\d{4})","$1 $2 $3",["160","1600"],"$1"],["(\\\\d{4})(\\\\d{4,5})","$1 $2",["180","1800"],"$1"],["(\\\\d{4})(\\\\d{2,4})(\\\\d{4})","$1 $2 $3",["180","1800"],"$1"],["(\\\\d{4})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["186","1860"],"$1"],["(\\\\d{4})(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["18[06]"],"$1"]],"0","0$1",null,null,true],"IO":["246","3\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"IQ":["964","[1-7]\\\\d{7,9}",[8,9,10],[["(1)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]],["([2-6]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[2-6]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"0","0$1"],"IR":["98","[1-8]\\\\d{5,9}|9(?:[0-4]\\\\d{8}|9\\\\d{8})",[6,7,10],[["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[1-8]"]],["(\\\\d{2})(\\\\d{4,5})","$1 $2",["[1-8]"]],["(\\\\d{4,5})","$1",["96"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["9"]]],"0","0$1"],"IS":["354","[4-9]\\\\d{6}|38\\\\d{7}",[7,9],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[4-9]"]],["(3\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["3"]]]],"IT":["39","[01589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9})",[6,7,8,9,10,11],[["(\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[26]|55"]],["(0[26])(\\\\d{4})(\\\\d{5})","$1 $2 $3",["0[26]"]],["(0[26])(\\\\d{4,6})","$1 $2",["0[26]"]],["(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\\\d{3})(\\\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(0\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],["(0\\\\d{3})(\\\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["894","894[5-9]"]],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["3"]]],null,null,null,null,null,null,[["0(?:[26]\\\\d{4,9}|(?:1(?:[0159]\\\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\\\d{2,7})"],["3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})",[9,10,11]],["80(?:0\\\\d{6}|3\\\\d{3})",[6,9]],["0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})",[6,8,9,10]],["1(?:78\\\\d|99)\\\\d{6}",[9,10]],null,null,null,["55\\\\d{8}",[10]],["84(?:[08]\\\\d{6}|[17]\\\\d{3})",[6,9]]]],"JE":["44","[135789]\\\\d{6,9}",[10],[["(7\\\\d{3})(\\\\d{6})","$1 $2",["7(?:[1-57-9]|62)","7(?:[1-57-9]|624)"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2|5[56]|7[06]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[02-9]1|1)|3|9[018]"]],["(\\\\d{5})(\\\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]],["(1\\\\d{3})(\\\\d{5,6})","$1 $2",["1"]],["(800)(\\\\d{4})","$1 $2",["800","8001","80011","800111","8001111"]],["(845)(46)(4\\\\d)","$1 $2 $3",["845","8454","84546","845464"]],["(8\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8(?:4[2-5]|7[0-3])"]],["(80\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["80"]],["(800)(\\\\d{6})","$1 $2",["800"]]],"0",null,null,null,null,null,[["1534[0-24-8]\\\\d{5}"],["7(?:509\\\\d|7(?:00[378]|97[7-9])|829\\\\d|937\\\\d)\\\\d{5}"],["80(?:07(?:35|81)|8901)\\\\d{4}"],["(?:871206|90(?:066[59]|1810|71(?:07|55)))\\\\d{4}"],["701511\\\\d{4}"],null,["3(?:0(?:07(?:35|81)|8901)|3\\\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\\\d{4}|55\\\\d{8}"],["76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\\\d{6}"],["56\\\\d{8}"],["8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\\\d{4}"]]],"JM":["1","[589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"876"],"JO":["962","[235-9]\\\\d{7,8}",[8,9],[["(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(7)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["7[457-9]"]],["(\\\\d{2})(\\\\d{7})","$1 $2",["70"]],["(\\\\d{3})(\\\\d{5,6})","$1 $2",["8[0158]|9"]]],"0","0$1"],"JP":["81","[1-9]\\\\d{8,9}|00(?:[36]\\\\d{7,14}|7\\\\d{5,7}|8\\\\d{7})",[8,9,10,11,12,13,14,15,16,17],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1-$2-$3",["(?:12|57|99)0"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["800"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1-$2-$3",["[2579]0|80[1-9]"]],["(\\\\d{4})(\\\\d)(\\\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))","1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]],["(\\\\d{3})(\\\\d{2})(\\\\d{4})","$1-$2-$3",["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))","1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)","1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])","1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]],["(\\\\d{3})(\\\\d{2})(\\\\d{4})","$1-$2-$3",["2(?:[34]7|[56]9|74|9[14-79])|82|993"]],["(\\\\d)(\\\\d{4})(\\\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["[2479][1-9]"]]],"0","0$1"],"KE":["254","20\\\\d{6,7}|[4-9]\\\\d{6,9}",[7,8,9,10],[["(\\\\d{2})(\\\\d{5,7})","$1 $2",["[24-6]"]],["(\\\\d{3})(\\\\d{6})","$1 $2",["7"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[89]"]]],"0","0$1","005|0"],"KG":["996","[235-8]\\\\d{8,9}",[9,10],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[25-7]|31[25]"]],["(\\\\d{4})(\\\\d{5})","$1 $2",["3(?:1[36]|[2-9])"]],["(\\\\d{3})(\\\\d{3})(\\\\d)(\\\\d{3})","$1 $2 $3 $4",["8"]]],"0","0$1"],"KH":["855","[1-9]\\\\d{7,9}",[8,9,10],[["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["1\\\\d[1-9]|[2-9]"],"0$1"],["(1[89]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[89]0","1[89]00"]]],"0"],"KI":["686","[2458]\\\\d{4}|3\\\\d{4,7}|[67]\\\\d{7}",[5,8],[],null,null,"0"],"KM":["269","[3478]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"KN":["1","[589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"869"],"KP":["850","1\\\\d{9}|[28]\\\\d{7}",[8,10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1"]],["(\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["8"]]],"0","0$1"],"KR":["82","00(?:3\\\\d{8,9}|7\\\\d{9,11})|[1-7]\\\\d{4,9}|8\\\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\\\d{2})(\\\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"]],["(\\\\d{4})(\\\\d{4})","$1-$2",["1(?:5[246-9]|6[046-8]|8[03579])","1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"],"$1"],["(\\\\d{5})","$1",["1[016-9]1","1[016-9]11","1[016-9]114"]],["(\\\\d)(\\\\d{3,4})(\\\\d{4})","$1-$2-$3",["2[1-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1-$2-$3",["60[2-9]|80"]],["(\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1-$2-$3",["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1-$2-$3",["[57]0"]]],"0","0$1","0(8[1-46-8]|85\\\\d{2})?"],"KW":["965","[12569]\\\\d{6,7}",[7,8],[["(\\\\d{4})(\\\\d{3,4})","$1 $2",["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[0-24-9]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["244|5(?:[015]|6[56])"]]]],"KY":["1","[3589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"345"],"KZ":["7","(?:33\\\\d|7\\\\d{2}|80[089])\\\\d{7}",[10],[["([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["[3489]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"8",null,null,null,null,null,[["33622\\\\d{5}|7(?:1(?:0(?:[23]\\\\d|4[0-3]|59|63)|1(?:[23]\\\\d|4[0-79]|59)|2(?:[23]\\\\d|59)|3(?:2\\\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\\\d|3[013-9]|5[1-9])|5(?:2\\\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\\\d|5[19]|61)|72\\\\d|8(?:[27]\\\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\\\d|4[46-9]|5[3469])|2(?:2\\\\d|3[0679]|46|5[12679])|3(?:[234]\\\\d|5[139])|4(?:2\\\\d|3[1235-9]|59)|5(?:[23]\\\\d|4[01246-8]|59|61)|6(?:2\\\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\\\d|40|5[279])|8(?:[23]\\\\d|4[0-3]|59)|9(?:2\\\\d|3[124578]|59)))\\\\d{5}"],["7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\\\d{7}"],["800\\\\d{7}"],["809\\\\d{7}"],["808\\\\d{7}"],null,null,null,["751\\\\d{7}"]]],"LA":["856","[2-8]\\\\d{7,9}",[8,9,10],[["(20)(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["20"]],["([2-8]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"]],["(30)(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["30"]]],"0","0$1"],"LB":["961","[13-9]\\\\d{6,7}",[7,8],[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],"0$1"],["([7-9]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]],"0"],"LC":["1","[5789]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"758"],"LI":["423","6\\\\d{8}|[23789]\\\\d{6}",[7,9],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3",["[237-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["6[56]"]],["(69)(7\\\\d{2})(\\\\d{4})","$1 $2 $3",["697"]]],"0",null,"0|10(?:01|20|66)"],"LK":["94","[1-9]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[1-689]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"0","0$1"],"LR":["231","2\\\\d{7,8}|[378]\\\\d{8}|4\\\\d{6}|5\\\\d{6,8}",[7,8,9],[["(2\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2"]],["([4-5])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[45]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[23578]"]]],"0","0$1"],"LS":["266","[2568]\\\\d{7}",[8],[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"LT":["370","[3-9]\\\\d{7}",[8],[["([34]\\\\d)(\\\\d{6})","$1 $2",["37|4(?:1|5[45]|6[2-4])"]],["([3-6]\\\\d{2})(\\\\d{5})","$1 $2",["3[148]|4(?:[24]|6[09])|528|6"]],["([7-9]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[7-9]"],"8 $1"],["(5)(2\\\\d{2})(\\\\d{4})","$1 $2 $3",["52[0-79]"]]],"8","(8-$1)","[08]",null,true],"LU":["352","[24-9]\\\\d{3,10}|3(?:[0-46-9]\\\\d{2,9}|5[013-9]\\\\d{1,8})",[4,5,6,7,8,9,10,11],[["(\\\\d{2})(\\\\d{3})","$1 $2",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3",["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["20"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})","$1 $2 $3 $4",["2(?:[0367]|4[3-8])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3 $4",["20"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,2})","$1 $2 $3 $4 $5",["2(?:[0367]|4[3-8])"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{1,4})","$1 $2 $3 $4",["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["70|80[01]|90[015]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["6"]]],null,null,"(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\\\d)"],"LV":["371","[2689]\\\\d{7}",[8],[["([2689]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2689]"]]]],"LY":["218","[25679]\\\\d{8}",[9],[["([25-79]\\\\d)(\\\\d{7})","$1-$2",["[25-79]"]]],"0","0$1"],"MA":["212","[5-9]\\\\d{8}",[9],[["([5-7]\\\\d{2})(\\\\d{6})","$1-$2",["5(?:2[015-7]|3[0-4])|[67]"]],["([58]\\\\d{3})(\\\\d{5})","$1-$2",["5(?:2[2-489]|3[5-9]|92)|892","5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]],["(5\\\\d{4})(\\\\d{4})","$1-$2",["5(?:29|38)","5(?:29|38)[89]"]],["([5]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5(?:4[067]|5[03])"]],["(8[09])(\\\\d{7})","$1-$2",["8(?:0|9[013-9])"]]],"0","0$1",null,null,null,null,[["5(?:2(?:[015-79]\\\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\\\d|3(?:[0-48]\\\\d|[57][2-9]|6[2-8]|9[3-9])\\\\d|4[067]\\\\d{2}|5[03]\\\\d{2})\\\\d{4}"],["(?:6(?:[0-79]\\\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[017]))\\\\d{6}"],["80\\\\d{7}"],["89\\\\d{7}"],null,null,null,null,["5924[01]\\\\d{4}"]]],"MC":["377","[34689]\\\\d{7,8}",[8,9],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[39]"],"$1"],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["4"]],["(6)(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4 $5",["6"]],["(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1 $2 $3",["8"],"$1"]],"0","0$1"],"MD":["373","[235-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["22|3"]],["([25-7]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["2[13-9]|[5-7]"]],["([89]\\\\d{2})(\\\\d{5})","$1 $2",["[89]"]]],"0","0$1"],"ME":["382","[2-9]\\\\d{7,8}",[8],[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-57-9]|6[036-9]"]]],"0","0$1"],"MF":["590","[56]\\\\d{8}",[9],[["([56]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["590|69[01]"]]],"0",null,null,null,null,null,[["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\\\d{4}"],["69(?:0\\\\d{2}|1(?:2[29]|3[0-5]))\\\\d{4}"]]],"MG":["261","[23]\\\\d{8}",[9],[["([23]\\\\d)(\\\\d{2})(\\\\d{3})(\\\\d{2})","$1 $2 $3 $4",["[23]"]]],"0","0$1"],"MH":["692","[2-6]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1-$2"]],"1"],"MK":["389","[2-578]\\\\d{7}",[8],[["(2)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"]],["([347]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[347]"]],["([58]\\\\d{2})(\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[58]"]]],"0","0$1"],"ML":["223","[24-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],"MM":["95","[178]\\\\d{5,7}|[24-6]\\\\d{5,8}|9(?:[279]\\\\d{0,2}|5|[34]\\\\d{1,2}|6(?:\\\\d{1,2})?|8(?:\\\\d{2})?)\\\\d{6}",[6,7,8,9,10],[["(\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["1|2[245]"]],["(2)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["251"]],["(\\\\d)(\\\\d{2})(\\\\d{3})","$1 $2 $3",["16|2"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["432|67|81"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3,4})","$1 $2 $3",["[4-8]"]],["(9)(\\\\d{3})(\\\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"]],["(9)([34]\\\\d{4})(\\\\d{4})","$1 $2 $3",["9(?:3[0-36]|4[0-57-9])"]],["(9)(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["92[56]"]],["(9)(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1 $2 $3 $4",["93"]]],"0","0$1"],"MN":["976","[12]\\\\d{7,9}|[57-9]\\\\d{7}",[8,9,10],[["([12]\\\\d)(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[12]1"]],["([12]2\\\\d)(\\\\d{5,6})","$1 $2",["[12]2[1-3]"]],["([12]\\\\d{3})(\\\\d{5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\\\d)2"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["[57-9]"],"$1"],["([12]\\\\d{4})(\\\\d{4,5})","$1 $2",["[12](?:27|[3-5])","[12](?:27|[3-5]\\\\d)[4-9]"]]],"0","0$1"],"MO":["853","[268]\\\\d{7}",[8],[["([268]\\\\d{3})(\\\\d{4})","$1 $2",["[268]"]]]],"MP":["1","[5689]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"670"],"MQ":["596","[56]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]],"0","0$1"],"MR":["222","[2-48]\\\\d{7}",[8],[["([2-48]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],"MS":["1","[5689]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"664"],"MT":["356","[2357-9]\\\\d{7}",[8],[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"MU":["230","[2-9]\\\\d{6,7}",[7,8],[["([2-46-9]\\\\d{2})(\\\\d{4})","$1 $2",["[2-46-9]"]],["(5\\\\d{3})(\\\\d{4})","$1 $2",["5"]]]],"MV":["960","[346-8]\\\\d{6,9}|9(?:00\\\\d{7}|\\\\d{6})",[7,10],[["(\\\\d{3})(\\\\d{4})","$1-$2",["[3467]|9(?:0[1-9]|[1-9])"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[89]00"]]]],"MW":["265","(?:1(?:\\\\d{2})?|[2789]\\\\d{2}|31\\\\d)\\\\d{6}",[7,9],[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1"]],["(2\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[17-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["31"]]],"0","0$1"],"MX":["52","[1-9]\\\\d{9,10}",[10,11],[["([358]\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["33|55|81"]],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]],["(1)([358]\\\\d)(\\\\d{4})(\\\\d{4})","044 $2 $3 $4",["1(?:33|55|81)"],"$1",null,"$1 $2 $3 $4"],["(1)(\\\\d{3})(\\\\d{3})(\\\\d{4})","044 $2 $3 $4",["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"],"$1",null,"$1 $2 $3 $4"]],"01","01 $1","0[12]|04[45](\\\\d{10})","1$1",true],"MY":["60","[13-9]\\\\d{7,9}",[8,9,10],[["([4-79])(\\\\d{3})(\\\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(3)(\\\\d{4})(\\\\d{4})","$1-$2 $3",["3"],"0$1"],["([18]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1-$2 $3",["1[02-46-9][1-9]|8"],"0$1"],["(1)([36-8]00)(\\\\d{2})(\\\\d{4})","$1-$2-$3-$4",["1[36-8]0","1[36-8]00"]],["(11)(\\\\d{4})(\\\\d{4})","$1-$2 $3",["11"],"0$1"],["(15[49])(\\\\d{3})(\\\\d{4})","$1-$2 $3",["15[49]"],"0$1"]],"0"],"MZ":["258","[28]\\\\d{7,8}",[8,9],[["([28]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2|8[2-7]"]],["(80\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["80"]]]],"NA":["264","[68]\\\\d{7,8}",[8,9],[["(8\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["8[1-35]"]],["(6\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["6"]],["(88)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["88"]],["(870)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["870"]]],"0","0$1"],"NC":["687","[2-57-9]\\\\d{5}",[6],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1.$2.$3",["[2-46-9]|5[0-4]"]]]],"NE":["227","[0289]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["09|[289]"]],["(08)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["08"]]]],"NF":["672","[13]\\\\d{5}",[6],[["(\\\\d{2})(\\\\d{4})","$1 $2",["1"]],["(\\\\d)(\\\\d{5})","$1 $2",["3"]]]],"NG":["234","[1-6]\\\\d{5,8}|9\\\\d{5,9}|[78]\\\\d{5,13}",[7,8,10,11,12,13,14],[["(\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[12]|9(?:0[3-9]|[1-9])"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2,3})","$1 $2 $3",["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["70|8[01]|90[235-9]"]],["([78]00)(\\\\d{4})(\\\\d{4,5})","$1 $2 $3",["[78]00"]],["([78]00)(\\\\d{5})(\\\\d{5,6})","$1 $2 $3",["[78]00"]],["(78)(\\\\d{2})(\\\\d{3})","$1 $2 $3",["78"]]],"0","0$1"],"NI":["505","[125-8]\\\\d{7}",[8],[["(\\\\d{4})(\\\\d{4})","$1 $2"]]],"NL":["31","1\\\\d{4,8}|[2-7]\\\\d{8}|[89]\\\\d{6,9}",[5,6,7,8,9,10],[["([1-578]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]],["([1-5]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]],["(6)(\\\\d{8})","$1 $2",["6[0-57-9]"]],["(66)(\\\\d{7})","$1 $2",["66"]],["(14)(\\\\d{3,4})","$1 $2",["14"],"$1"],["([89]0\\\\d)(\\\\d{4,7})","$1 $2",["[89]0"]]],"0","0$1"],"NO":["47","0\\\\d{4}|[2-9]\\\\d{7}",[5,8],[["([489]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[489]"]],["([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[235-7]"]]],null,null,null,null,null,null,[["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\\\d{6}",[8]],["(?:4[015-8]|5[89]|87|9\\\\d)\\\\d{6}",[8]],["80[01]\\\\d{5}",[8]],["82[09]\\\\d{5}",[8]],["880\\\\d{5}",[8]],null,["0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}"],null,["85[0-5]\\\\d{5}",[8]],["810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}",[8]]]],"NP":["977","[1-8]\\\\d{7}|9(?:[1-69]\\\\d{6,8}|7[2-6]\\\\d{5,7}|8\\\\d{8})",[8,10],[["(1)(\\\\d{7})","$1-$2",["1[2-6]"]],["(\\\\d{2})(\\\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]],["(9\\\\d{2})(\\\\d{7})","$1-$2",["9(?:6[013]|7[245]|8)"],"$1"]],"0","0$1"],"NR":["674","[458]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"NU":["683","[1-5]\\\\d{3}",[4]],"NZ":["64","6[235-9]\\\\d{6}|[2-57-9]\\\\d{7,9}",[8,9,10],[["(\\\\d)(\\\\d{3})(\\\\d{4})","$1-$2 $3",["240|[346]|7[2-57-9]|9[1-9]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["21"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3,5})","$1 $2 $3",["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]],["(2\\\\d)(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["2[028]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["90"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2(?:10|74)|5|[89]0"]]],"0","0$1"],"OM":["968","(?:5|[279]\\\\d)\\\\d{6}|800\\\\d{5,6}",[7,8,9],[["(2\\\\d)(\\\\d{6})","$1 $2",["2"]],["([79]\\\\d{3})(\\\\d{4})","$1 $2",["[79]"]],["([58]00)(\\\\d{4,6})","$1 $2",["[58]00"]]]],"PA":["507","[1-9]\\\\d{6,7}",[7,8],[["(\\\\d{3})(\\\\d{4})","$1-$2",["[1-57-9]"]],["(\\\\d{4})(\\\\d{4})","$1-$2",["6"]]]],"PE":["51","[14-9]\\\\d{7,8}",[8,9],[["(1)(\\\\d{7})","$1 $2",["1"]],["([4-8]\\\\d)(\\\\d{6})","$1 $2",["[4-7]|8[2-4]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["80"]],["(9\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9"],"$1"]],"0","(0$1)"],"PF":["689","4\\\\d{5,7}|8\\\\d{7}",[6,8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["4[09]|8[79]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3",["44"]]]],"PG":["675","[1-9]\\\\d{6,7}",[7,8],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[13-689]|27"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["20|7"]]]],"PH":["63","1\\\\d{10,12}|2\\\\d{5,7}|[3-7]\\\\d{8}|8\\\\d{7,9}|9\\\\d{9}",[6,8,9,10,11,12,13],[["(2)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(2)(\\\\d{5})","$1 $2",["2"],"(0$1)"],["(\\\\d{4})(\\\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\\\d{5})(\\\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["([3-8]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[3-8]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["81|9"],"0$1"],["(1800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["180","1800"]],["(1800)(\\\\d{1,2})(\\\\d{3})(\\\\d{4})","$1 $2 $3 $4",["180","1800"]]],"0"],"PK":["92","1\\\\d{8}|[2-8]\\\\d{5,11}|9(?:[013-9]\\\\d{4,10}|2\\\\d(?:111\\\\d{6}|\\\\d{3,7}))",[8,9,10,11,12],[["([89]00)(\\\\d{3})(\\\\d{2})","$1 $2 $3",["[89]00"],"0$1"],["(1\\\\d{3})(\\\\d{5})","$1 $2",["1"],"$1"],["(\\\\d{2})(\\\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]],["(\\\\d{3})(\\\\d{6,7})","$1 $2",["2[349]|45|54|60|72|8[2-5]|9[2-469]","(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\\\d[2-9]"]],["(58\\\\d{3})(\\\\d{5})","$1 $2",["58[126]"]],["(3\\\\d{2})(\\\\d{7})","$1 $2",["3"],"0$1"],["(\\\\d{2})(111)(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11","(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]],["(\\\\d{3})(111)(\\\\d{3})(\\\\d{3})","$1 $2 $3 $4",["2[349]|45|54|60|72|8[2-5]|9[2-9]","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d1","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d11","(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\\\d111"]]],"0","(0$1)"],"PL":["48","[1-57-9]\\\\d{6,8}|6\\\\d{5,8}",[6,7,8,9],[["(\\\\d{3})(\\\\d{3})","$1 $2",["11[68]|64"]],["(\\\\d{5})","$1",["19"]],["(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["64"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]],"PM":["508","[45]\\\\d{5}",[6],[["([45]\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2 $3",["[45]"]]],"0","0$1"],"PR":["1","[5789]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"787|939"],"PS":["970","1\\\\d{9}|[24589]\\\\d{7,8}",[8,9,10],[["([2489])(2\\\\d{2})(\\\\d{4})","$1 $2 $3",["[2489]2"]],["(5[69]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["5[69]"]],["(1[78]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[78]0","1[78]00"],"$1"]],"0","0$1"],"PT":["351","[2-46-9]\\\\d{8}",[9],[["(2\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2[12]"]],["([2-46-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2[3-9]|[346-9]"]]]],"PW":["680","[2-9]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"PY":["595","5[0-5]\\\\d{4,7}|[2-46-9]\\\\d{5,8}",[6,7,8,9],[["(\\\\d{2})(\\\\d{5})","$1 $2",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],"(0$1)"],["(\\\\d{3})(\\\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\\\d{3})(\\\\d{6})","$1 $2",["9[1-9]"],"0$1"],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["870","8700"]],["(\\\\d{3})(\\\\d{4,5})","$1 $2",["[2-8][1-9]"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[2-8][1-9]"],"0$1"]],"0"],"QA":["974","[2-8]\\\\d{6,7}",[7,8],[["([28]\\\\d{2})(\\\\d{4})","$1 $2",["[28]"]],["([3-7]\\\\d{3})(\\\\d{4})","$1 $2",["[3-7]"]]]],"RE":["262","[268]\\\\d{8}",[9],[["([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[268]"]]],"0","0$1",null,null,null,"262|69|8"],"RO":["40","[23]\\\\d{5,8}|[7-9]\\\\d{8}",[6,9],[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[23]1"]],["(\\\\d{2})(\\\\d{4})","$1 $2",["[23]1"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[23][3-7]|[7-9]"]],["(2\\\\d{2})(\\\\d{3})","$1 $2",["2[3-6]"]]],"0","0$1"],"RS":["381","[126-9]\\\\d{4,11}|3(?:[0-79]\\\\d{3,10}|8[2-9]\\\\d{2,9})",[6,7,8,9,10,11,12],[["([23]\\\\d{2})(\\\\d{4,9})","$1 $2",["(?:2[389]|39)0"]],["([1-3]\\\\d)(\\\\d{5,10})","$1 $2",["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]],["(6\\\\d)(\\\\d{6,8})","$1 $2",["6"]],["([89]\\\\d{2})(\\\\d{3,9})","$1 $2",["[89]"]],["(7[26])(\\\\d{4,9})","$1 $2",["7[26]"]],["(7[08]\\\\d)(\\\\d{4,9})","$1 $2",["7[08]"]]],"0","0$1"],"RU":["7","[347-9]\\\\d{9}",[10],[["([3489]\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["[3489]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]]],"8","8 ($1)",null,null,true,null,[["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\\\d{7}"],["9\\\\d{9}"],["80[04]\\\\d{7}"],["80[39]\\\\d{7}"],["808\\\\d{7}"]]],"RW":["250","[027-9]\\\\d{7,8}",[8,9],[["(2\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["2"]],["([7-9]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[7-9]"],"0$1"],["(0\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["0"]]],"0"],"SA":["966","[15]\\\\d{8}|8\\\\d{9}|92\\\\d{7}",[9,10],[["(1\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[1-467]"]],["(5\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["5"]],["(92\\\\d{2})(\\\\d{5})","$1 $2",["92"],"$1"],["(800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["800"],"$1"],["(811)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["811"]]],"0","0$1"],"SB":["677","[1-9]\\\\d{4,6}",[5,7],[["(\\\\d{2})(\\\\d{5})","$1 $2",["[7-9]"]]]],"SC":["248","[24689]\\\\d{5,6}",[7],[["(\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[246]"]]]],"SD":["249","[19]\\\\d{8}",[9],[["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3"]],"0","0$1"],"SE":["46","[1-35-9]\\\\d{5,11}|4\\\\d{6,8}",[6,7,8,9,10],[["(8)(\\\\d{2,3})(\\\\d{2,3})(\\\\d{2})","$1-$2 $3 $4",["8"],null,null,"$1 $2 $3 $4"],["([1-69]\\\\d)(\\\\d{2,3})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4",["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"],null,null,"$1 $2 $3 $4"],["([1-469]\\\\d)(\\\\d{3})(\\\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90"],null,null,"$1 $2 $3"],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],null,null,"$1 $2 $3 $4"],["(\\\\d{3})(\\\\d{2,3})(\\\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"],null,null,"$1 $2 $3"],["(7\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4",["7"],null,null,"$1 $2 $3 $4"],["(77)(\\\\d{2})(\\\\d{2})","$1-$2$3",["77"],null,null,"$1 $2 $3"],["(20)(\\\\d{2,3})(\\\\d{2})","$1-$2 $3",["20"],null,null,"$1 $2 $3"],["(9[034]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{3})","$1-$2 $3 $4",["9[034]"],null,null,"$1 $2 $3 $4"],["(9[034]\\\\d)(\\\\d{4})","$1-$2",["9[034]"],null,null,"$1 $2"],["(\\\\d{3})(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1-$2 $3 $4 $5",["25[245]|67[3-6]"],null,null,"$1 $2 $3 $4 $5"]],"0","0$1"],"SG":["65","[36]\\\\d{7}|[17-9]\\\\d{7,10}",[8,10,11],[["([3689]\\\\d{3})(\\\\d{4})","$1 $2",["[369]|8[1-9]"]],["(1[89]00)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1[89]0","1[89]00"]],["(7000)(\\\\d{4})(\\\\d{3})","$1 $2 $3",["700","7000"]],["(800)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["800"]]]],"SH":["290","[256]\\\\d{4}|8\\\\d{3}",[4,5],[],null,null,null,null,null,null,[["2(?:[0-57-9]\\\\d|6[4-9])\\\\d{2}"],["[56]\\\\d{4}",[5]],null,null,null,null,null,null,["262\\\\d{2}",[5]]]],"SI":["386","[1-7]\\\\d{6,7}|[89]\\\\d{4,7}",[5,6,7,8],[["(\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[12]|[34][24-8]|5[2-8]|7[3-8]"],"(0$1)"],["([3-7]\\\\d)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[37][01]|4[0139]|51|6"]],["([89][09])(\\\\d{3,6})","$1 $2",["[89][09]"]],["([58]\\\\d{2})(\\\\d{5})","$1 $2",["59|8[1-3]"]]],"0","0$1"],"SJ":["47","0\\\\d{4}|[45789]\\\\d{7}",[5,8],[["([489]\\\\d{2})(\\\\d{2})(\\\\d{3})","$1 $2 $3",["[489]"]],["([235-7]\\\\d)(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[235-7]"]]],null,null,null,null,null,null,[["79\\\\d{6}",[8]],["(?:4[015-8]|5[89]|9\\\\d)\\\\d{6}",[8]],["80[01]\\\\d{5}",[8]],["82[09]\\\\d{5}",[8]],["880\\\\d{5}",[8]],null,["0\\\\d{4}|81(?:0(?:0[7-9]|1\\\\d)|5\\\\d{2})\\\\d{3}"],null,["85[0-5]\\\\d{5}",[8]],["810(?:0[0-6]|[2-8]\\\\d)\\\\d{3}",[8]]]],"SK":["421","(?:[2-68]\\\\d{5,8}|9\\\\d{6,8})",[6,7,9],[["(2)(1[67])(\\\\d{3,4})","$1 $2 $3",["21[67]"]],["([3-5]\\\\d)(\\\\d{2})(\\\\d{2,3})","$1 $2 $3",["[3-5]"]],["(2)(\\\\d{3})(\\\\d{3})(\\\\d{2})","$1/$2 $3 $4",["2"]],["([3-5]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1/$2 $3 $4",["[3-5]"]],["([689]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[689]"]],["(9090)(\\\\d{3})","$1 $2",["909","9090"]]],"0","0$1"],"SL":["232","[2-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{6})","$1 $2"]],"0","(0$1)"],"SM":["378","[05-7]\\\\d{7,9}",[8,10],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(0549)(\\\\d{6})","$1 $2",["054","0549"],null,null,"($1) $2"],["(\\\\d{6})","0549 $1",["[89]"],null,null,"(0549) $1"]],null,null,"([89]\\\\d{5})","0549$1"],"SN":["221","[3789]\\\\d{8}",[9],[["(\\\\d{2})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[379]"]],["(\\\\d{3})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["8"]]]],"SO":["252","[1-9]\\\\d{5,8}",[6,7,8,9],[["(\\\\d{6})","$1",["[134]"]],["(\\\\d)(\\\\d{6})","$1 $2",["[13-5]|2[0-79]"]],["(\\\\d)(\\\\d{7})","$1 $2",["24|[67]"]],["(\\\\d{2})(\\\\d{4})","$1 $2",["8[125]"]],["(\\\\d{2})(\\\\d{5,7})","$1 $2",["15|28|6[1-35-9]|799|9[2-9]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["3[59]|4[89]|6[24-6]|79|8[08]|90"]]],"0"],"SR":["597","[2-8]\\\\d{5,6}",[6,7],[["(\\\\d{3})(\\\\d{3})","$1-$2",["[2-4]|5[2-58]"]],["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1-$2-$3",["56"]],["(\\\\d{3})(\\\\d{4})","$1-$2",["[6-8]"]]]],"SS":["211","[19]\\\\d{8}",[9],[["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3",null,"0$1"]],"0"],"ST":["239","[29]\\\\d{6}",[7],[["(\\\\d{3})(\\\\d{4})","$1 $2"]]],"SV":["503","[267]\\\\d{7}|[89]\\\\d{6}(?:\\\\d{4})?",[7,8,11],[["(\\\\d{4})(\\\\d{4})","$1 $2",["[267]"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["[89]"]],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["[89]"]]]],"SX":["1","[5789]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"721"],"SY":["963","[1-59]\\\\d{7,8}",[8,9],[["(\\\\d{2})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[1-5]"]],["(9\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9"]]],"0","0$1",null,null,true],"SZ":["268","[0237]\\\\d{7}|900\\\\d{6}",[8,9],[["(\\\\d{4})(\\\\d{4})","$1 $2",["[0237]"]],["(\\\\d{5})(\\\\d{4})","$1 $2",["900"]]]],"TA":["290","8\\\\d{3}",[4],[],null,null,null,null,null,null,[["8\\\\d{3}"]]],"TC":["1","[5689]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"649"],"TD":["235","[2679]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4"]]],"TG":["228","[279]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[279]"]]]],"TH":["66","1\\\\d{8,9}|[2-9]\\\\d{7,8}",[8,9,10],[["(2)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["2"]],["([13-9]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["14|[3-9]"]],["(1[89]00)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["1[89]0","1[89]00"],"$1"]],"0","0$1"],"TJ":["992","[3-57-9]\\\\d{8}",[9],[["([349]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[34]7|91[78]"]],["([457-9]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["4[148]|[578]|9(?:[0235-9]|1[59])"]],["(331700)(\\\\d)(\\\\d{2})","$1 $2 $3",["331","3317","33170","331700"]],["(\\\\d{4})(\\\\d)(\\\\d{4})","$1 $2 $3",["3[1-5]","3(?:[1245]|3(?:[02-9]|1[0-589]))"]]],"8",null,null,null,true],"TK":["690","[2-47]\\\\d{3,6}",[4,5,6,7]],"TL":["670","[2-489]\\\\d{6}|7\\\\d{6,7}",[7,8],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[2-489]|70"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["7[3-8]"]]]],"TM":["993","[1-6]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["12"]],["(\\\\d{2})(\\\\d{6})","$1 $2",["6"],"8 $1"],["(\\\\d{3})(\\\\d)(\\\\d{2})(\\\\d{2})","$1 $2-$3-$4",["13|[2-5]"]]],"8","(8 $1)"],"TN":["216","[2-57-9]\\\\d{7}",[8],[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3"]]],"TO":["676","[02-8]\\\\d{4,6}",[5,7],[["(\\\\d{2})(\\\\d{3})","$1-$2",["[1-6]|7[0-4]|8[05]"]],["(\\\\d{3})(\\\\d{4})","$1 $2",["7[5-9]|8[46-9]"]],["(\\\\d{4})(\\\\d{3})","$1 $2",["0"]]]],"TR":["90","[2-589]\\\\d{9}|444\\\\d{4}",[7,10],[["(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[23]|4(?:[0-35-9]|4[0-35-9])"],"(0$1)"],["(\\\\d{3})(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["5(?:[02-69]|16)"],"0$1"],["(\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["51|[89]"],"0$1"],["(444)(\\\\d{1})(\\\\d{3})","$1 $2 $3",["444"]]],"0",null,null,null,true],"TT":["1","[589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"868"],"TV":["688","[279]\\\\d{4,6}",[5,6,7]],"TW":["886","2\\\\d{6,8}|[3-689]\\\\d{7,8}|7\\\\d{7,9}",[7,8,9,10],[["(20)(\\\\d)(\\\\d{4})","$1 $2 $3",["202"]],["([258]0)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["20[013-9]|50[0-46-9]|80[0-79]"]],["([2-8])(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["[25][2-8]|[346]|[78][1-9]"]],["(9\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9"]],["(70)(\\\\d{4})(\\\\d{4})","$1 $2 $3",["70"]]],"0","0$1"],"TZ":["255","\\\\d{9}",[7,9],[["([24]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[24]"]],["([67]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[67]"]],["([89]\\\\d{2})(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[89]"]]],"0","0$1"],"UA":["380","[3-9]\\\\d{8}",[9],[["([3-9]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]","[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]],["([3-689]\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90","3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]],["([3-6]\\\\d{3})(\\\\d{5})","$1 $2",["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])","3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]],"0","0$1"],"UG":["256","\\\\d{9}",[9],[["(\\\\d{3})(\\\\d{6})","$1 $2",["20[0-8]|4(?:6[45]|[7-9])|[7-9]","20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]],["(\\\\d{2})(\\\\d{7})","$1 $2",["3|4(?:[1-5]|6[0-36-9])"]],["(2024)(\\\\d{5})","$1 $2",["202","2024"]]],"0","0$1"],"US":["1","[2-9]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,true,null,[["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\\\d{6}"],["900[2-9]\\\\d{6}"],["5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\\\d{6}"]]],"UY":["598","[2489]\\\\d{6,7}",[7,8],[["(\\\\d{4})(\\\\d{4})","$1 $2",["[24]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["9[1-9]"],"0$1"],["(\\\\d{3})(\\\\d{4})","$1 $2",["[89]0"],"0$1"]],"0"],"UZ":["998","[679]\\\\d{8}",[9],[["([679]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[679]"]]],"8","8 $1"],"VA":["39","(?:0(?:878\\\\d{5}|6698\\\\d{5})|[1589]\\\\d{5,10}|3(?:[12457-9]\\\\d{8}|[36]\\\\d{7,9}))",[6,8,9,10,11],[["(\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[26]|55"]],["(0[26])(\\\\d{4})(\\\\d{5})","$1 $2 $3",["0[26]"]],["(0[26])(\\\\d{4,6})","$1 $2",["0[26]"]],["(0\\\\d{2})(\\\\d{3,4})(\\\\d{4})","$1 $2 $3",["0[13-57-9][0159]"]],["(\\\\d{3})(\\\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[245])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]],["(0\\\\d{3})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["0[13-57-9][2-46-8]"]],["(0\\\\d{3})(\\\\d{2,6})","$1 $2",["0[13-57-9][2-46-8]"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[13]|8(?:00|4[08]|9[59])","[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]],["(\\\\d{4})(\\\\d{4})","$1 $2",["894","894[5-9]"]],["(\\\\d{3})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["3"]]],null,null,null,null,null,null,[["06698\\\\d{5}",[10]],["3(?:[12457-9]\\\\d{8}|6\\\\d{7,8}|3\\\\d{7,9})",[9,10,11]],["80(?:0\\\\d{6}|3\\\\d{3})",[6,9]],["0878\\\\d{5}|1(?:44|6[346])\\\\d{6}|89(?:2\\\\d{3}|4(?:[0-4]\\\\d{2}|[5-9]\\\\d{4})|5(?:[0-4]\\\\d{2}|[5-9]\\\\d{6})|9\\\\d{6})",[6,8,9,10]],["1(?:78\\\\d|99)\\\\d{6}",[9,10]],null,null,null,["55\\\\d{8}",[10]],["84(?:[08]\\\\d{6}|[17]\\\\d{3})",[6,9]]]],"VC":["1","[5789]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"784"],"VE":["58","[24589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{7})","$1-$2"]],"0","0$1"],"VG":["1","[2589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"284"],"VI":["1","[3589]\\\\d{9}",[10],[["(\\\\d{3})(\\\\d{3})(\\\\d{4})","($1) $2-$3",null,null,null,"$1-$2-$3"]],"1",null,null,null,null,"340"],"VN":["84","1\\\\d{6,9}|2\\\\d{9}|6\\\\d{6,7}|7\\\\d{6}|8\\\\d{6,8}|9\\\\d{8}",[7,8,9,10],[["([17]99)(\\\\d{4})","$1 $2",["[17]99"]],["(\\\\d{2})(\\\\d{4})(\\\\d{4})","$1 $2 $3",["2[48]"]],["(80)(\\\\d{5})","$1 $2",["80"]],["(69\\\\d)(\\\\d{4,5})","$1 $2",["69"]],["(\\\\d{3})(\\\\d{4})(\\\\d{3})","$1 $2 $3",["2[0-35-79]"]],["([89]\\\\d)(\\\\d{3})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["8(?:8|9[89])|9"]],["(1[2689]\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["1(?:[26]|8[68]|99)"]],["(86[89])(\\\\d{3})(\\\\d{3})","$1 $2 $3",["86[89]"]],["(1[89]00)(\\\\d{4,6})","$1 $2",["1[89]0","1[89]00"],"$1"]],"0","0$1",null,null,true],"VU":["678","[2-57-9]\\\\d{4,6}",[5,7],[["(\\\\d{3})(\\\\d{4})","$1 $2",["[579]"]]]],"WF":["681","[4-8]\\\\d{5}",[6],[["(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3"]]],"WS":["685","[2-8]\\\\d{4,6}",[5,6,7],[["(8\\\\d{2})(\\\\d{3,4})","$1 $2",["8"]],["(7\\\\d)(\\\\d{5})","$1 $2",["7"]],["(\\\\d{5})","$1",["[2-6]"]]]],"XK":["383","[23][89]\\\\d{6,7}|4[3-79]\\\\d{6}|[89]00\\\\d{5}",[8,9],[["(\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["[23][89]|4[3-79]"]],["(\\\\d{3})(\\\\d{5})","$1 $2",["[89]00"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3})","$1 $2 $3"]],"0","0$1"],"YE":["967","[1-7]\\\\d{6,8}",[7,8,9],[["([1-7])(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[1-6]|7[24-68]"]],["(7\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["7[0137]"]]],"0","0$1"],"YT":["262","[268]\\\\d{8}",[9],[["([268]\\\\d{2})(\\\\d{2})(\\\\d{2})(\\\\d{2})","$1 $2 $3 $4",["[268]"]]],"0",null,null,null,null,"269|63"],"ZA":["27","[1-79]\\\\d{8}|8\\\\d{4,8}",[5,6,7,8,9],[["(860)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["860"]],["(\\\\d{2})(\\\\d{3,4})","$1 $2",["8[1-4]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{2,3})","$1 $2 $3",["8[1-4]"]],["(\\\\d{2})(\\\\d{3})(\\\\d{4})","$1 $2 $3",["[1-79]|8(?:[0-57]|6[1-9])"]]],"0","0$1"],"ZM":["260","[289]\\\\d{8}",[9],[["(\\\\d{2})(\\\\d{4})","$1 $2",null,"$1"],["([1-8])(\\\\d{2})(\\\\d{4})","$1 $2 $3",["[1-8]"],"$1"],["([29]\\\\d)(\\\\d{7})","$1 $2",["[29]"]],["(800)(\\\\d{3})(\\\\d{3})","$1 $2 $3",["800"]]],"0","0$1"],"ZW":["263","2(?:[0-57-9]\\\\d{3,8}|6(?:[14]\\\\d{7}|\\\\d{4}))|[13-69]\\\\d{4,9}|7\\\\d{8}|8[06]\\\\d{5,8}",[5,6,7,8,9,10],[["([49])(\\\\d{3})(\\\\d{2,4})","$1 $2 $3",["4|9[2-9]"]],["(7\\\\d)(\\\\d{3})(\\\\d{4})","$1 $2 $3",["7"]],["(86\\\\d{2})(\\\\d{3})(\\\\d{3})","$1 $2 $3",["86[24]"]],["([2356]\\\\d{2})(\\\\d{3,5})","$1 $2",["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]],["(\\\\d{3})(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]],["([1-356]\\\\d)(\\\\d{3,5})","$1 $2",["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]],["([235]\\\\d)(\\\\d{3})(\\\\d{3,4})","$1 $2 $3",["[23]9|54"]],["([25]\\\\d{3})(\\\\d{3,5})","$1 $2",["(?:25|54)8","258[23]|5483"]],["(8\\\\d{3})(\\\\d{6})","$1 $2",["86"]],["(80\\\\d)(\\\\d{4})","$1 $2",["80"]]],"0","0$1"],"001":["979","\\\\d{9}",[9],[["(\\\\d)(\\\\d{4})(\\\\d{4})","$1 $2 $3"]]]}}');
    },
    1199: function(d, $) {
        d.exports = function(d, $) {
            for (var n = d.split("."), t = $.split("."), e = 0; e < 3; e++) {
                var l = Number(n[e]), r = Number(t[e]);
                if (l > r) return 1;
                if (r > l) return -1;
                if (!isNaN(l) && isNaN(r)) return 1;
                if (isNaN(l) && !isNaN(r)) return -1;
            }
            return 0;
        };
    }
} ]);