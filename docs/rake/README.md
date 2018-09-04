# Rake-задачи

В каталоге `lib` находится пустой подкаталог `tasks`. В этот подкаталог можно записывать свои собственные Rake-задачи, позволяющие добавлять автоматику к вашему проекту.

Напишем Rake-задачу, выводящую список всех выполненных миграций, которые находятся в таблице `schema_migration`. Назовем нашу задачу `db_schema_ migrations.rake`.

```rake
# lib/tasks/db_schema_migrations.rake
namespace :db do
  desc "Prints the migrated versions"
  task :schema_migrations => :environment do
    puts ActiveRecord::Base.connection.select_values(
      'select version from schema_migrations order by version' )
  end
end
```

Выполним команду:

`rake db:schema_migrations`

> **Примечание.** Подробнее о Rake-задачах см. в [документации](http://www.rubyrake.org).

Стандартные rake-задачи:

* `rake log:clear` — усекает все файлы `*.log` в каталоге `log/` до нулевой длины;
* `rake db:migrate` — выполняет миграцию базы данных;
* `rake db:create` — создает базу данных;
* `rake db:drop` — удаляет базу данных;
* `rake db:schema:load` — создает таблицы и столбцы в (существующей) базе данных после `schema.rb`;
* `rake db:setup` — выполняет `rake db:create` + `rake db:schema:load` + `rake db:seed`;
* `rake db:reset` — делает `rake db:drop` + `rake db:setup`
