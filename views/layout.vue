<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
          <meta name="theme-color" content="{site_theme}">
          <title>Welcome to {site_title}</title>
          <link rel="stylesheet" href="static/css/core.min.css" media="screen">
          <link rel="stylesheet" href="static/css/core.min.css" media="print">
          <link rel="canonical" href="//{site_url}" />
          <script src="https://unpkg.com/vue/dist/vue.js"></script>
        </head>
        <body>
            <a class="u-skip-link" href="#maincontent">Skip to main content</a>
            {{{app}}}
            {{{script}}}
        </body>
        <script src="/static/js/core.min.js" charset="utf-8"></script>
    </html>
</template>

<script>
</script>

<style>
</style>
