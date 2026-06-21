---
layout: default
title: Home
description: Specialist Solution Architect at Red Hat LATAM | OpenShift | Application Platform | Cloud Native Technologies
---

<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <div class="hero-avatar">
        <img src="{{ '/assets/images/max-avatar.png' | relative_url }}" alt="Maximiliano Pizarro" class="avatar-image" loading="eager">
      </div>
      <div class="hero-text">
        <h1 class="hero-title">Hi 👋, I'm <span class="highlight">Maximiliano Pizarro</span></h1>
        <p class="hero-subtitle">{{ site.author.title }} at <strong>{{ site.author.company }}</strong></p>
        <p class="hero-description">
          I build open-source operators, Helm charts, and platform tools for Kubernetes and OpenShift —
          from integration lifecycles and service mesh to AI-native MCP automation.
        </p>
        <div class="hero-cta">
          <a href="{{ '/projects/' | relative_url }}" class="pf-v6-c-button pf-m-primary">Explore Projects</a>
          <a href="{{ '/about/' | relative_url }}#connect" class="pf-v6-c-button pf-m-secondary">Contact</a>
          <a href="https://github.com/sponsors/maximilianoPizarro" class="pf-v6-c-button pf-m-secondary sponsor-link" target="_blank" rel="noopener noreferrer" data-analytics="sponsor_click">Become a Sponsor</a>
          <a href="https://www.linkedin.com/in/{{ site.social.linkedin }}" class="pf-v6-c-button pf-m-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</section>

{% include sponsor-cta.html variant="hero" %}

<section class="tech-stack pf-v6-c-page__main-section">
  <div class="container">
    <h2 class="section-title">Technologies & Tools</h2>
    <div class="tech-badges">
      <span class="tech-badge">Red Hat</span>
      <span class="tech-badge">OpenShift</span>
      <span class="tech-badge">Kubernetes</span>
      <span class="tech-badge">Apache Camel</span>
      <span class="tech-badge">GitOps</span>
      <span class="tech-badge">Helm</span>
      <span class="tech-badge">MCP</span>
      <span class="tech-badge">Service Mesh</span>
      <span class="tech-badge">Quarkus</span>
      <span class="tech-badge">Go</span>
      <span class="tech-badge">Tekton</span>
      <span class="tech-badge">Argo CD</span>
      <span class="tech-badge">Connectivity Link</span>
    </div>
  </div>
</section>

{% include github-stats.html %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    <div class="section-heading">
      <h2 class="section-title">Flagship Projects</h2>
      <p class="section-description">Four end-to-end platforms and workshops — installable operators, migration tooling, and reference architectures. <a href="{{ '/projects/' | relative_url }}">Browse all {{ site.data.projects.size }} projects →</a></p>
    </div>
    <div class="content-grid">
      {% for project in site.data.projects %}
        {% if project.featured %}
          {% include project-card.html project=project %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

{% include home-writing-teaser.html %}

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    <div class="section-heading">
      <h2 class="section-title">Operators on OperatorHub</h2>
      <p class="section-description">Production-grade operators for integration, AI resource optimization, and developer tooling.</p>
      <a href="{{ '/operators/' | relative_url }}" class="section-link">View all operators →</a>
    </div>
    <div class="content-grid content-grid--operators">
      {% for operator in site.data.operators %}
        {% include operator-card.html operator=operator %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="pf-v6-c-page__main-section content-section section--alt">
  <div class="container">
    <div class="section-heading">
      <h2 class="section-title">Helm Charts on Artifact Hub</h2>
      <p class="section-description">Install production-ready charts with a single <code>helm install</code>.</p>
      <a href="{{ '/charts/' | relative_url }}" class="section-link">View all charts →</a>
    </div>
    <div class="content-grid content-grid--charts">
      {% for chart in site.data.helm_charts %}
        {% if chart.featured %}
          {% include chart-card.html chart=chart %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="pf-v6-c-page__main-section content-section">
  <div class="container">
    <div class="section-heading">
      <h2 class="section-title">Featured Videos</h2>
      <p class="section-description">Demos and walkthroughs — thumbnails load first; video plays on click.</p>
      <a href="{{ '/videos/' | relative_url }}" class="section-link">View all {{ site.data.videos.size }} videos →</a>
    </div>
    <div class="videos-grid videos-grid--featured">
      {% for video in site.data.videos %}
        {% if video.featured %}
          {% include video-card.html video=video %}
        {% endif %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="pf-v6-c-page__main-section content-section section--alt">
  <div class="container">
    <div class="section-heading">
      <h2 class="section-title">Certifications & Achievements</h2>
      <p class="section-description">Verified badges and learning profiles across Red Hat, Microsoft, Google Cloud, and more.</p>
    </div>
    <div class="achievements-grid">
      <a href="https://www.credly.com/users/maximiliano-pizarro/badges" class="achievement-card pf-v6-c-card" target="_blank" rel="noopener noreferrer">
        <div class="achievement-icon">🏆</div>
        <h3>Credly Badges</h3>
        <p>View verified achievements</p>
      </a>
      <a href="https://learn.redhat.com/t5/user/viewprofilepage/user-id/120782" class="achievement-card pf-v6-c-card" target="_blank" rel="noopener noreferrer">
        <div class="achievement-icon">📚</div>
        <h3>Red Hat Learning</h3>
        <p>Learning Community</p>
      </a>
      <a href="https://learn.microsoft.com/es-mx/users/maximilianopizarro/" class="achievement-card pf-v6-c-card" target="_blank" rel="noopener noreferrer">
        <div class="achievement-icon">🔷</div>
        <h3>Microsoft Learn</h3>
        <p>Training & Certifications</p>
      </a>
      <a href="https://cloudskillsboost.google/public_profiles/d7bb8358-dd83-4da2-8e22-245bb87fb4de/" class="achievement-card pf-v6-c-card" target="_blank" rel="noopener noreferrer">
        <div class="achievement-icon">☁️</div>
        <h3>Google Cloud</h3>
        <p>Cloud Skills Boost</p>
      </a>
      <a href="https://openprofile.dev/profile/maximilianopizarro" class="achievement-card pf-v6-c-card" target="_blank" rel="noopener noreferrer">
        <div class="achievement-icon">👨‍💻</div>
        <h3>OpenProfile</h3>
        <p>Developer Profile</p>
      </a>
    </div>
  </div>
</section>
