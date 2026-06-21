---
layout: default
title: Videos
description: Tutorials, demos, and presentations on Red Hat OpenShift, integration operators, and cloud-native technologies.
permalink: /videos/
---

{% include section-header.html title="Video Content" description="Watch tutorials, demos, and presentations. Videos load on demand to keep the page fast on mobile." %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    {% capture video_tags %}Integration,OpenShift,AI,MCP,NeuroFace,Connectivity Link,Operator{% endcapture %}
    {% include tag-filter-toolbar.html tags=video_tags %}

    <div class="videos-grid" id="videos-grid">
      {% for video in site.data.videos %}
        {% include video-card.html video=video %}
      {% endfor %}
    </div>

    <div class="section-footer-cta">
      <a href="https://www.youtube.com/@MaximilianoPizarro" class="pf-v6-c-button pf-m-secondary" target="_blank" rel="noopener noreferrer">
        View YouTube Channel →
      </a>
    </div>
  </div>
</section>

{% include sponsor-cta.html variant="strip" %}
