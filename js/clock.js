(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var today=document.querySelector("#date"),clock=document.querySelector("#clock");function getToday(){var t=new Date,e=String(t.getFullYear()).padStart(4,"0"),a=String(t.getMonth()+1).padStart(2,"0"),c=String(t.getDate()).padStart(2,"0");today.innerText="".concat(e,"-").concat(a,"-").concat(c)}function getClock(){var t=new Date,e=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0"),c=String(t.getSeconds()).padStart(2,"0");clock.innerText="".concat(e,":").concat(a,":").concat(c)}getToday(),setInterval(getToday,1e3),getClock(),setInterval(getClock,1e3);

},{}]},{},[1]);
