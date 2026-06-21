---
layout: default
title: Operators
description: Kubernetes Operators published on OperatorHub.io — OpenShift Integration Operator, Kairos, and JHipster Online.
permalink: /operators/
---

{% include section-header.html title="Operator Hub" eyebrow="Published on OperatorHub.io" description="Production-grade operators for integration workflows, AI-powered resource optimization, and JHipster code generation on OpenShift 4.12+." %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    {% capture operator_tags %}Camel,SonataFlow,Kaoto,GitOps,AI,JHipster,Integration,FinOps{% endcapture %}
    {% include tag-filter-toolbar.html tags=operator_tags %}

    <div class="content-grid content-grid--operators" id="operators-grid">
      {% for operator in site.data.operators %}
        {% include operator-card.html operator=operator %}
      {% endfor %}
    </div>

    <div class="section-footer-cta">
      <a href="https://operatorhub.io/?provider=maximilianoPizarro" class="pf-v6-c-button pf-m-secondary" target="_blank" rel="noopener noreferrer">
        View all on OperatorHub →
      </a>
    </div>
  </div>
</section>

{% include sponsor-cta.html variant="strip" %}
