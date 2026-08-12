---
layout: default
title: Demo Agentic IA Developer Sandbox
description: Interactive Arcade walkthrough of the agent-friendly Red Hat Developer Hub sandbox — Lightspeed, MCP, Golden Paths, and DevSpaces AI on OpenShift Developer Sandbox.
permalink: /demos/agentic-ia-developer-sandbox/
---

{% include section-header.html title="Demo Agentic IA Developer Sandbox" description="Watch the walkthrough below without a cluster, or follow the live demo script in the RHDH Agent Sandbox docs." %}

<section class="pf-v6-c-page__main-section content-section arcade-demo-page">
  <div class="container container--wide">
    <p class="arcade-demo-page__fallback">
      <a href="https://app.arcade.software/share/3eNsUpTwG1SiGKP9kvgI" target="_blank" rel="noopener noreferrer">Open in Arcade</a> if the player does not load.
    </p>

    {% include arcade-embed.html title="Demo Agentic IA Developer Sandbox" share_id="3eNsUpTwG1SiGKP9kvgI" %}

    <div class="arcade-demo-page__meta">
      <p>Interactive recording: <strong>Demo Agentic IA Developer Sandbox</strong> (Arcade).</p>
      <p>
        <a href="https://maximilianopizarro.github.io/rhdh-agent-sandbox/demo-script/" class="pf-v6-c-button pf-m-link" target="_blank" rel="noopener noreferrer">Live demo script →</a>
        <a href="https://maximilianopizarro.github.io/rhdh-agent-sandbox/" class="pf-v6-c-button pf-m-link" target="_blank" rel="noopener noreferrer">RHDH Agent Sandbox docs →</a>
      </p>
    </div>

    <div class="arcade-demo-page__outline">
      <h2>What you will see</h2>
      <h3>Part A — Hub agent loop</h3>
      <ol>
        <li>Developer Hub → <strong>Enter as Guest</strong></li>
        <li><strong>Catalog</strong> → filter <code>mcp</code> → browse MCP API entities</li>
        <li><strong>Create</strong> → run <strong>Deploy Agent</strong> Golden Path</li>
        <li>Open the new Component → <strong>Topology</strong> tab</li>
        <li><strong>Lightspeed</strong> or <strong>MCP Chat</strong> → select <code>litemaas-qwen</code></li>
      </ol>
      <h3>Part B — DevSpaces AI</h3>
      <ol>
        <li><strong>Create</strong> → <strong>Agent-friendly DevSpaces AI Workspace</strong></li>
        <li>Open DevSpaces dashboard → open workspace</li>
        <li>Continue chat → LiteLLM wired via chart Secret</li>
      </ol>
    </div>
  </div>
</section>
