# README

This is a starter config/template for projects that intend to use **ruby on rails** with **vue** and **tailwind css**.

This uses inertia_js to easily connect the vue app with the rails app and uses vite.js to build the frontend.

You can learn more aboute vite.js [here](https://vitejs.dev/)

[vite-ruby](https://vite-ruby.netlify.app/) is developed by Maximo Mussini.

[inertiajs](https://inertiajs.com/) lets you quickly build modern single-page React, Vue and Svelte apps using classic server-side routing and controllers.

## How to use
### For a fresh rails app
If you are starting a new project is recommended to initialize it without the default rails javascript files

```
rails new myapp -J
```

Then add the next 2 gems to your gemfile

```
gem "vite_rails"
gem "inertia_rails"
````
Then run `bundle install`and after that `bundle exec vite install`. This will setup your project to work with vite

After the process is completed install dependencies, you require at least npm 18

```
npm install
npx tailwindcss init -p
```
I recommend you pasting the contents of the folder and replace the default files with the included ones.

Once all is installed you can create your first resource (I've included a todo view example):

```
rails g scaffold Todo name:string done:boolean --skip-template-engine
rails db:migrate
```

In your todos_controller add the next code

```
  def index
    @todos = Todo.all
    render inertia: "todos/index", props: {
      todos: @todos
    }
  end
```

Run your services in 2 terminals `rails s` & `./bin/vite dev`, then navigate to `/todos`
