---
layout: default
title: About
description: About Maximiliano Pizarro - Specialist Solution Architect at Red Hat LATAM, open-source operator and Helm chart maintainer.
permalink: /about/
---

{% include section-header.html title="About Me" description="Solution Architect building production-grade operators, Helm charts, and platform tooling for Kubernetes and OpenShift." %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container about-page">
    <div class="about-content">
      <div class="about-header">
        <div class="about-avatar">
          <img src="{{ '/assets/images/max-avatar.png' | relative_url }}" alt="Maximiliano Pizarro" class="about-avatar-image" loading="lazy">
        </div>
        <div class="about-intro">
          <h2>{{ site.author.title }}</h2>
          <p class="about-company">{{ site.author.company }}</p>
          <p class="about-description">
            I bridge enterprise-grade Kubernetes and OpenShift infrastructure with AI-native automation.
            I maintain open-source operators (OpenShift Integration Operator, Kairos, JHipster Online),
            Helm charts on Artifact Hub, and documentation workshops used by platform teams across LATAM.
          </p>
          <p class="about-description">
            The OpenShift Integration Operator achieved the OpenSSF Best Practices Badge (100% passing level).
            Independent open-source portfolio — not an official Red Hat website.
          </p>
        </div>
      </div>

      <div class="about-section">
        <h2>Open Source & Operators</h2>
        <ul>
          <li><a href="{{ '/operators/' | relative_url }}">Operators on OperatorHub</a> — Camel/SonataFlow lifecycle, AI resource optimization, JHipster Online</li>
          <li><a href="{{ '/charts/' | relative_url }}">Helm Charts on Artifact Hub</a> — MCP servers, n8n, LibreChat, integration tooling</li>
          <li><a href="{{ '/projects/' | relative_url }}">Projects & Documentation</a> — workshops, golden paths, Hybrid Mesh Platform</li>
        </ul>
      </div>

      <div class="about-section">
        <h2>Technologies & Expertise</h2>
        <div class="tech-list">
          <div class="tech-category">
            <h3>Cloud & Platform</h3>
            <ul>
              <li>Red Hat OpenShift & Virtualization</li>
              <li>Apache Camel, SonataFlow, Kaoto</li>
              <li>Service Mesh & Hybrid Mesh Platform</li>
              <li>Connectivity Link & Gateway API</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>DevOps & Automation</h3>
            <ul>
              <li>GitOps (Argo CD, Tekton)</li>
              <li>Helm & Operators (OLM)</li>
              <li>MCP & OpenShift Lightspeed</li>
              <li>OpenTelemetry observability</li>
            </ul>
          </div>
          <div class="tech-category">
            <h3>Development</h3>
            <ul>
              <li>Java, Quarkus, Spring Boot</li>
              <li>Node.js & TypeScript</li>
              <li>Python & AI tooling</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>Open Source Communities</h2>
        <p>Contributions across {{ site.data.organizations.organizations.size }} GitHub organizations including operators, Helm charts, workshops, and validated patterns.</p>
        <ul class="org-list-compact">
          {% for org in site.data.organizations.organizations %}
          <li><a href="{{ org.url }}" target="_blank" rel="noopener noreferrer">@{{ org.name }}</a> — {{ org.description }}</li>
          {% endfor %}
        </ul>
      </div>

      <div class="about-section">
        <h2>Connect</h2>
        <div class="social-links-large">
          <a href="https://www.linkedin.com/in/{{ site.social.linkedin }}" class="social-link pf-v6-c-button pf-m-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/{{ site.social.github }}" class="social-link pf-v6-c-button pf-m-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://github.com/sponsors/maximilianoPizarro" class="social-link pf-v6-c-button pf-m-primary sponsor-link" target="_blank" rel="noopener noreferrer" data-analytics="sponsor_click">GitHub Sponsors</a>
        </div>
      </div>
    </div>
  </div>
</section>

{% include sponsor-cta.html variant="strip" %}
