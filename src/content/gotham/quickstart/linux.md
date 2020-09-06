---
title: "Gotham Linux QuickStart"
menu:
  gotham:
    parent: "quickstart"
---

Create a Gotham site using the [hugo-coder](https://github.com/luizdepra/hugo-coder/) theme.

It is recommended to have [Git](https://git-scm.com/downloads) installed to run this tutorial.

## Step 1: Install Gotham

This guide assumes you are using Ubuntu 18.04 LTS or later. **Snap**, the app store for **Linux**, is already installed on these versions. You can learn more here: [snapcraft.io](https://snapcraft.io/).

```
sudo snap install gotham
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

## Step 3: Initialize your New Site

```
cd my-site/
git init
```

The above will navigate you to the folder you just created and initialize it as a git repository.

## Step 4: Add a Theme

See [themes.gohugo.io](https://themes.gohugo.io/) for a list of themes to consider. This QuickStart uses the [hugo-coder](https://github.com/luizdepra/hugo-coder/) theme.

Clone the theme from GitHub and add it as a submodule to your site’s themes directory:

```
git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
```

## Step 5: Copy over the theme Contents

Copy the example contents of the theme into your project to get started:

```
cp -r ./themes/hugo-coder/exampleSite/ . 
```

You will need to edit or remove most of the contents added to make this site your own. We will review this further in the steps below.

## Step 6: Start the Gotham server

Now, start the Gotham server:

```
gotham serve --open

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

**The website will open automatically in your default browser because you used the --open flag in the above command. You can also navigate to your new site manually at [http://localhost:1313/](http://localhost:1313/).**

Feel free to edit or add new content, Gotham will automatically refresh the browser so you can see changes quickly.

## Step 7: Customize your New Site

Your new site already looks great, but you will want to tweak it a little before you release it to the public.

### Site Configuration

Open up `config.toml` in a text editor:

Replace the `title`, `author`, and other parameters with your own information. Also, if you already have a domain ready, set the `baseURL`. Note that this value is not needed when running the local development server.

For theme specific configuration options, see the [theme site](https://github.com/luizdepra/hugo-coder/).

For further theme customization, see [Customize a Theme](https://gohugo.io/themes/customizing/).

## Step 8: Build static pages

It is simple. Just call:

```
gotham
```

The output will be in `./public/` directory by default. Use the `-d/--destination` flag to change it or set `publishDir` in the config file.
