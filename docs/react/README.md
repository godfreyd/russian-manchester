# React.js + Rails

* [Установка React.js](#Установка-reactjs)
* [Поддержка TypeScript](#Поддержка-typescript)
* [Настройка страницы](#Настройка-страницы)
* [Интеграция Material UI](#Интеграция-material-ui)
* [Добавление React-компонента](#Добавление-react-компонента)

## Установка React.js

Чтобы начать портировать приложение на React.js:
 
1. Добавьте следующие gem'ы в Gemfile.

    ```bash
    # Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
    gem 'webpacker'
    # A flexible tool to use React with Rails. Read more: https://github.com/reactjs/react-rails
    gem "react-rails"
    ```

2. Устанавите добавленные gem'ы.

	```bash
	$ bundle install
	```

   > **Примечание.** Чтобы обновить установленные ранее gem'ы, выполните команду `bundle update`. Чтобы увидеть куда gem был установлен, выполните команду: `bundle info [gemname]`.

3. Выполните команды:

	```bash
    $ rails webpacker:install       # OR (on rails version < 5.0) rake webpacker:install
    $ rails webpacker:install:react # OR (on rails version < 5.0) rake webpacker:install:react
    $ rails generate react:install
    ```

    Эти команды:

    * Создадут директорию `app/javascript/components/` для React-компонентов.
    * Установят `ReactRailsUJS` в `app/javascript/packs/application.js`.
    * Создадут директорию `app/javascript/packs/server_rendering.js` для рендеринга на стороне сервера.

## Поддержка TypeScript

Чтобы добавить поддержку типов, выполните команды:

```bash
$ bundle exec rails webpacker:install:typescript
$ yarn add @types/react @types/react-dom
```

## Настройка страницы

Чтобы добавить React.js в проект, необходимо переопредлить [представление spree](../../app/views/spree/shared/_head.html.erb). Если представление поправить вручную, то мы потеряем возможность обновлять Spree. Поэтому мы воспользуемся библиотекой [Deface](https://github.com/spree/deface). Deface — это библиотека Rails, позволяющая переопределять Erb-шаблоны без их непосредственного редактирования. Таким образом, мы получим возможность обновлять Spree, не теряя наши изменения. 

Чтобы доопределить нативный шаблон Spree:

1. Добавьте директорию: `app/overrides`.

	```bash
	$ mkdir app/overrides
	```

2. Создайте файл `app/overrides/add_react_to_application.rb`.
3. Добавьте в созданный файл следующий контент:
	
    ```rb
    Deface::Override.new(:virtual_path => 'spree/shared/_head',
        :name => "add_react_to_application",
        insert_after: "erb[loud]:contains('javascript_include_tag')",
        :text => "<%= javascript_pack_tag 'application' %>")
    ```

## Интеграция Material UI

[Material UI](https://github.com/mui-org/material-ui) — библиотека React-компонентов с имплементированным Google’s Material Design.

Чтобы интегрировать Material UI, выполните команды:

```bash
$ yarn add @material-ui/core
$ yarn add @material-ui/icons // To add material icons too
```

## Добавление React-компонента

1. Выполните команду:

    ```bash
    $ rails g react:component MainNavBar name:string
    ```

    > **Примечание.** В директории `app/javascript/components` создастся компонент `MainNavBar.js`.

2. Замените его содержимое на следующее:

    ```js
    import React from "react";
    import PropTypes from "prop-types";
    import { withStyles } from '@material-ui/core/styles';
    import Grid from '@material-ui/core/Grid';
    import Button from '@material-ui/core/Button';

    const styles = theme => ({
        button: {
            margin: theme.spacing.unit,
            color: 'white'
        }
    });

    class MainNavBar extends React.Component {
        render () {
            const { classes } = this.props;
            return (
                <React.Fragment>
                    <Grid item xs={12}>
                        <Button href={this.props.href} size="medium" className={classes.button}>
                        {this.props.children}
                        </Button> 
                    </Grid>
                </React.Fragment>
            );
        }
    }

    MainNavBar.propTypes = {
        classes: PropTypes.object.isRequired
    };

    export default withStyles(styles)(MainNavBar);
    ```
