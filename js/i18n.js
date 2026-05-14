/**
 * i18n.js — Content injection engine for selira-ai.com
 * Loads content.json and injects all text into data-field attributes.
/**
 * i18n.js — Content injection engine for selira-ai.com
 * Loads content.json from SAME DIRECTORY and injects all text into data-field attributes.
 * NO language detection — each language has its own folder with its own HTML + JSON.
 */
(function () {
  'use strict';

  // ── CONFIG ──
  // Load content.json from the SAME directory as the HTML file
  var CONTENT_PATH = 'content.json';

  // Resolve nested key like "header.nav_links.0.label"
  function getValue(obj, key) {
    var parts = key.split('.');
    var val = obj;
    for (var i = 0; i < parts.length; i++) {
      if (val == null) return undefined;
      val = val[parts[i]];
    }
    return val;
  }

  // Set text content, preserving child elements if needed
  function setText(el, text) {
    if (text == null) return;
    if (el.children.length === 0) {
      el.textContent = text;
    } else {
      var hasText = false;
      for (var i = 0; i < el.childNodes.length; i++) {
        if (el.childNodes[i].nodeType === Node.TEXT_NODE) {
          el.childNodes[i].textContent = text;
          hasText = true;
          break;
        }
      }
      if (!hasText) {
        el.insertBefore(document.createTextNode(text), el.firstChild);
      }
    }
  }

  // Set alt attribute
  function setAlt(el, text) {
    if (text != null) el.setAttribute('alt', text);
  }

  // Set href attribute
  function setHref(el, url) {
    if (url != null) el.setAttribute('href', url);
  }

  // Inject meta tags in <head>
  function injectMeta(data) {
    var meta = data.meta || {};

    function setMeta(selector, attr, value) {
      if (value == null) return;
      var el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    }

    document.title = meta.page_title || document.title;
    setMeta('meta[name="description"]', 'content', meta.meta_description);
    setMeta('meta[property="og:title"]', 'content', meta.og_title);
    setMeta('meta[property="og:description"]', 'content', meta.og_description);
    setMeta('meta[property="og:url"]', 'content', meta.canonical_url);
    setMeta('link[rel="canonical"]', 'href', meta.canonical_url);
  }

  // Main injection function
  function inject(data) {
    // 1. Meta tags
    injectMeta(data);

    // 2. data-field elements
    var fields = document.querySelectorAll('[data-field]');
    for (var i = 0; i < fields.length; i++) {
      var el = fields[i];
      var key = el.getAttribute('data-field');
      var value = getValue(data, key);
      if (value !== undefined) {
        setText(el, value);
      }
    }

    // 3. data-field-alt elements (for images)
    var alts = document.querySelectorAll('[data-field-alt]');
    for (var j = 0; j < alts.length; j++) {
      var img = alts[j];
      var altKey = img.getAttribute('data-field-alt');
      var altValue = getValue(data, altKey);
      if (altValue !== undefined) {
        setAlt(img, altValue);
      }
    }

    // 4. data-field-href elements (for links)
    var hrefs = document.querySelectorAll('[data-field-href]');
    for (var k = 0; k < hrefs.length; k++) {
      var link = hrefs[k];
      var hrefKey = link.getAttribute('data-field-href');
      var hrefValue = getValue(data, hrefKey);
      if (hrefValue !== undefined) {
        setHref(link, hrefValue);
      }
    }
  }

  // ── BOOT ──
  fetch(CONTENT_PATH)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      inject(data);
    })
    .catch(function (err) {
      console.error('[i18n] Failed to load content.json:', err);
    });
})();
