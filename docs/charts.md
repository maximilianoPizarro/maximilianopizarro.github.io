---
layout: default
title: Helm Charts
description: Helm Charts and Kubernetes packages published on Artifact Hub for OpenShift and Kubernetes.
permalink: /charts/
---

{% include section-header.html title="Artifact Hub" eyebrow="Helm Charts" description="Helm Charts and Kubernetes packages for easy deployment on OpenShift and Kubernetes — install with a single helm install." %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    {% capture chart_tags %}Operator,Helm,MCP,AI,Integration,OpenShift,RHBK,LibreChat,n8n{% endcapture %}
    {% include tag-filter-toolbar.html tags=chart_tags %}

    <div class="content-grid content-grid--charts" id="charts-grid">
      {% for chart in site.data.helm_charts %}
        {% include chart-card.html chart=chart %}
      {% endfor %}
    </div>

    <div class="section-footer-cta">
      <a href="https://artifacthub.io/packages/search?user=maximilianopizarro&sort=relevance&page=1" class="pf-v6-c-button pf-m-secondary" target="_blank" rel="noopener noreferrer">
        Explore Artifact Hub →
      </a>
    </div>
  </div>
</section>

{% include sponsor-cta.html variant="strip" %}
