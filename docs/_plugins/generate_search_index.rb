# frozen_string_literal: true

require 'json'

Jekyll::Hooks.register :site, :post_write do |site|
  entries = []

  add_entry = lambda do |title, description, url, tags, type|
    next if title.nil? || url.nil?

    entries << {
      'title' => title,
      'description' => description.to_s,
      'url' => url,
      'tags' => tags || [],
      'type' => type
    }
  end

  site.data['projects']&.each do |project|
    add_entry.call(project['title'], project['description'], project['url'], project['tags'], 'project')
  end

  site.data['helm_charts']&.each do |chart|
    add_entry.call(chart['title'], chart['description'], chart['url'], chart['tags'], 'chart')
  end

  site.data['operators']&.each do |operator|
    add_entry.call(
      operator['title'],
      operator['description'],
      operator['operatorhub_url'],
      operator['tags'],
      'operator'
    )
    add_entry.call(
      "#{operator['title']} Documentation",
      operator['description'],
      operator['docs_url'],
      operator['tags'],
      'operator'
    ) if operator['docs_url']
  end

  site.data['videos']&.each do |video|
    add_entry.call(
      video['title'],
      "YouTube video — #{video['category']}",
      "https://www.youtube.com/watch?v=#{video['youtube_id']}",
      video['tags'],
      'video'
    )
  end

  site.data['organizations']&.fetch('organizations', [])&.each do |org|
    add_entry.call(
      "@#{org['name']}",
      org['description'],
      org['url'],
      org['tags'],
      'community'
    )
  end

  site.data['redhat_developer_articles']&.each do |article|
    add_entry.call(
      article['title'],
      article['description'],
      article['url'],
      article['tags'],
      'article'
    )
  end

  site.data['linkedin_posts']&.each do |post|
    add_entry.call(
      post['title'],
      post['description'],
      post['url'],
      post['tags'],
      'article'
    )
  end

  site.pages.each do |page|
    next if page.url.nil?
    next if page.url == '/search-index.json' || page.url == '/search.json'
    next unless page.data['layout'] == 'default'
    next if page.url == '/'

    title = page.data['title']
    next if title.nil? || title.empty?

    add_entry.call(
      title,
      page.data['description'],
      page.url,
      [],
      'page'
    )
  end

  dest = File.join(site.dest, 'search-index.json')
  File.write(dest, JSON.pretty_generate(entries))
  Jekyll.logger.info 'Search:', "Generated #{entries.length} entries at search-index.json"
end
