# Проблемы и решения

* [Solve Sprockets DEPRECATION WARNING](#solve-sprockets-deprecation-warning)
* [Address already in use for "0.0.0.0" port 3000](#address-already-in-use-for-0000-port-3000)

## Solve Sprockets DEPRECATION WARNING

**Описание**

[Pull Request](https://github.com/metaskills/less-rails/pull/137)

**Решение**

Необходимо обновить gem `less-rails` на версию 3.0.0 и выше.

## Address already in use for "0.0.0.0" port 3000

Чтобы решить возникшую ошибку:

1. Проверьте запущенные процессы.

   ```bash
   $ ps aux | grep puma
   ```

2. Найдите запущенный процесс с `tcp://0.0.0.0:3000`.
3. Убейте этот процесс, введя его идентификатор (PID).

   ```bash
   $ kill -15 <PID>
   ```

   > **Примечание.** Код 15 (SIGTERM) убивает процесс, закрывая все файлы, соединения и очищает буфер.

