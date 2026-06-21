---
layout: default
title: Search
description: Search projects, operators, Helm charts, videos, and pages across the portfolio.
permalink: /search/
---

{% include section-header.html title="Search" description="Find projects, operators, charts, videos, and documentation across the site." %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container search-page">
    <div class="pf-v6-c-input-group search-page__input">
      <div class="pf-v6-c-input-group__item pf-m-fill">
        <input type="search" id="search-page-input" class="pf-v6-c-form-control" placeholder="Search everything… (try OpenShift, MCP, Camel)" aria-label="Search site" autofocus>
      </div>
    </div>
    <p class="search-hint"><kbd>/</kbd> or <kbd>Ctrl</kbd>+<kbd>K</kbd> from any page</p>
    <div id="search-results" class="search-results" aria-live="polite"></div>
  </div>
</section>
