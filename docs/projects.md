---
layout: default
title: Projects
description: Articles, workshops, and documentation for Red Hat OpenShift, Application Platform, and cloud-native technologies.
permalink: /projects/
---

{% include section-header.html title="Projects & Documentation" description="Explore workshops, GitHub Pages documentation, and external articles on OpenShift, integration, AI/MCP, and security." %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    {% capture project_tags %}GitOps,MCP,AI,OpenShift,Integration,Security,Helm,Connectivity Link,Developer Hub,bootc,Service Mesh{% endcapture %}
    {% include tag-filter-toolbar.html tags=project_tags %}

    <div class="content-grid" id="projects-grid">
      {% for project in site.data.projects %}
        {% include project-card.html project=project %}
      {% endfor %}
    </div>
  </div>
</section>

{% include sponsor-cta.html variant="strip" %}
