# Подготовка рабочей среды

* [Установка Ruby Version Manager](#Установка-ruby-version-manager)
* [Установка rbenv](#Установка-rbenv)
* [Установка Ruby](#Установка-ruby)
* [Установка Rails](#Установка-rails)
* [Установка Bundler](#Установка-bundler)
* [Установка Image Magick](#Установка-image-magick)
* [Установка Postgres](#Установка-postgres)

##  Установка Ruby Version Manager

[RVM](https://rvm.io) — менеджер пакетов Ruby.

```bash
$ \curl -sSL https://get.rvm.io | bash -s stable
```

**Проверка**

Чтобы RVM работал корректно, он должен быть функцией. Чтобы проверить, что RVM является функцией, выполните команду:

```bash
$ type rvm | head -n 1
```

Чтобы проверить все доступные версии Ruby в RVM, выполните команду:

```bash
$ rvm list known
```

## Установка rbenv

[rbenv](https://github.com/rbenv/rbenv) — утилита для установки и переключения пакетов Ruby. Используется совместно с [ruby-build](https://github.com/rbenv/ruby-build)

```bash
$ brew install rbenv ruby-build
```

**Проверка**

Чтобы проверить какая версия `rbenv` установлена, выполните команду:

```bash
$ rbenv -v
```

**Обновление**

```bash
$ brew upgrade rbenv ruby-build
```

**Настройка**

1. Выполните команду:

	```bash
	$ rbenv init
	```

2. Добавьте следующий код в файл `~/.bash_profile`:

	```text
	eval "$(rbenv init -)"
	```

3. Убедитесь, что rbenv правильно настроен:

	```bash
	$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
	```

	Ответ

	![rbenv settings](docs/static/images/rbenv-doctor.png)

## Установка Ruby

С помощью [Homebrew](https://brew.sh/index_ru.html):

```bash
$ brew install ruby
```

С помощью [RVM](https://rvm.io):

```bash
$ rvm install ruby 2.5.0
```

С помощью [rbenv](https://github.com/rbenv/rbenv):

```bash
$ rbenv install 2.5.0
```

**Проверка**

Чтобы проверить какая версия Ruby установлена, выполните команду:

```bash
$ ruby -v
```

или (если установлен менеджер пакетов [RVM](#ruby-version-manager))

```bash
$ rvm list
```

## Установка Rails

Rails — это фреймворк для разработки приложений, написанный на языке Ruby.

С помощью RubyGems:

```bash
# Install the last version Rails
$ gem install rails
# Install Rails 5.2.0
$ gem install rails -v 5.2.0
```

**Проверка**

Чтобы проверить какая версия используется, выполните команду:

```bash
$ rails -v
```

## Установка Bundler

[Bundler](http://bundler.io) — менеджер установки gem'ов нужных версий, которые будут корректно работать друг с другом.

```bash
$ gem install bundler
```

## Установка ImageMagick

 Spree использует библиотеку [ImageMagick](http://www.imagemagick.org) для управления изображениями. Позволяет автоматически изменять размер, сжимать и изменять изображения.

```bash
$ brew install imagemagick
```

## Установка Postgres

Чтобы установить Postgres на компьютер, выполните команду:

```bash
$ brew install postgresql
```
