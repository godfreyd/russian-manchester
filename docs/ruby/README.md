# Введение в Ruby

* Объекты: имена и методы
* Данные: строки, массивы, хэши и регулярные выражения
* Элементы управления: if, while, блоки, итераторы и исключения
* Строительные блоки: классы и модули
* YAML и маршализация
* Общие идиомы


## Объекты: имена и методы

Все, с чем вы работаете в Ruby, является объектом, а результаты этой работы также являются объектами.

Стандартный конструктор объекта — `new()`.

**Пример**

```rb
line_item_one = LineItem.new
line_item_one.quantity = 1
line_item_one.sku = "AUTO_B_00"
```

### Именование в Ruby

Имена локальных переменных, аргументов методов и самих методов долж- ны начинаться с буквы в нижнем регистре или со знака подчеркивания.

Имена переменных начинаются с символа «at» (@).

Имена классов модулей и констант должны начинаться с буквы в верхнем регистре: PurchaseOrder и LineItem.

### Обозначения

Используются в качестве ключей при названии аргументов методов и при поисках в хэшах.

**Пример**

```rb
redirect_to :action => "edit", :id => params[:id]
```

Смысл двоеточия можно рассматривать как «что-то по имени...», соответственно, :id обозначает «что-то по имени id».

## Данные: строки, массивы, хэши и регулярные выражения

### Строки

Создаются с помощью одинарных и двойных кавычек.

**Пример**

```rb
'Строка'
"Новая строка"
```

В случае использования:

* одинарных кавычек — Ruby только присваивает значение.
* двойных кавычек — Ruby ищет подстановки, выполняет вставку результата вычисления выражения.

### Массивы и хэши

В массивах `[]` ключ — это число, а в хэшах `{}` — любой объект. С массивами часто используется метод `<<()`. Он добавляет значение к своему получателю.

**Пример**

```rb
ages = []
for person in @people
    ages << person.age
end
```

## YAML и маршализация

Применительно к Rails [YAML]( http://www.yaml.org/) используется как удобный способ определения конфигураций баз данных, тестовых данных и пре-
образований.

**Пример**

```yaml
development:
    adapter: sqlite3
    database: db/development.sqlite3
    pool: 5
    timeout: 5000
```

В YAML важную роль играют отступы, поэтому здесь определяется, что development (разработка) имеет набор из четырех пар ключ-значение, с двоеточием в качестве разделителя.

## Общие идиомы

Ресурсы:

http://www.ruby-lang.org/en/documentation/ruby-from-other-languages/  http://en.wikipedia.org/wiki/Ruby_programming_language
http://www.zenspider.com/Languages/Ruby/QuickRef.html
