---
title: "Gotham macOS Quickstart"
menu:
  gotham:
    parent: "quickstart"
---

Create a Gotham site using the [hugo-coder](https://github.com/luizdepra/hugo-coder/) theme.

It is recommended to have [Git](https://git-scm.com/downloads) installed to run this tutorial

## Step 1: Install Gotham

**Homebrew**, a package manager for **macOS**, can be installed from [brew.sh](https://brew.sh/).

```
brew install gothamhq/tap/gotham
```

To verify your new install:

```
gotham version
```

## Step 2: Create a New Site

```
gotham new site my-site
```

The above will create a new Gotham site in a folder named `my-site`.

## Step 3: Add a Theme

See [themes.gohugo.io](https://themes.gohugo.io/) for a list of themes to consider. This quickstart uses the [hugo-coder](https://github.com/luizdepra/hugo-coder/) theme.

First, download the theme from GitHub and add it to your site’s themes directory:

```
cd my-site/
git init
git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
```

*Note for non-git users:*
- If you do not have git installed, you can download the archive of the latest version of this theme from: https://github.com/luizdepra/hugo-coder/archive/master.zip
- Extract that .zip file to get a `hugo-coder` directory.
- Move that directory into the `themes/` directory.

## Step 4: Copy over the theme Contents

Copy the contents of the theme into your project to get started:

```
cp -r ./themes/hugo-coder/exampleSite/ . 
```

## Step 5: Start the Gotham server

Now, start the Gotham server with drafts enabled:

```
gotham serve -D --open

                   | EN | PT-BR  
-------------------+----+--------
  Pages            | 48 |    21  
  Paginator pages  |  0 |     0  
  Non-page files   |  0 |     0  
  Static files     |  4 |     4  
  Processed images |  0 |     0  
  Aliases          | 17 |     7  
  Sitemaps         |  2 |     1  
  Cleaned          |  0 |     0  

Built in 251 ms
Watching for changes in /Users/mibragimchayev/repos/sandbox/my-site/{archetypes,assets,content,data,layouts,static,themes}
Watching for config changes in /Users/mibragimchayev/repos/sandbox/my-site/config.toml
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: gotham server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Opening in browser.
Press Ctrl+C to stop
```

**The website will open automatically because you used the --open flag in the above command. You can also navigate to your new site manually at http://localhost:1313/.**

Feel free to edit or add new content and simply refresh in browser to see changes quickly (You might need to force refresh the web browser, something like Ctrl-R usually works).

## Step 6: Customize the Theme

Your new site already looks great, but you will want to tweak it a little before you release it to the public.

### Site Configuration

Open up `config.toml` in a text editor:

Replace the `title`, `author`, and other parameters with your own information. Also, if you already have a domain ready, set the `baseURL`. Note that this value is not needed when running the local development server.

For theme specific configuration options, see the [theme site](https://github.com/luizdepra/hugo-coder/).

For further theme customization, see [Customize a Theme](https://gohugo.io/themes/customizing/).

## Step 7: Build static pages

It is simple. Just call:

```
gotham -D
```

Output will be in `./public/` directory by default (`-d/--destination` flag to change it, or set `publishdir` in the config file).