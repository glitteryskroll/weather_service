# Сервис погоды

Главная страница доступна по маршруту `/`:

![Главная страница](https://github.com/glitteryskroll/weather_service/assets/55313356/23105267-9dbb-4037-9f2b-5c75e714427c)

На главной странице представлены варианты выбора поиска погоды: по городу, по координатам, а также возможность выбора времени.

## API:

- **GET '/'**: веб-страница для клиента.
- **GET '/forecast'**: запрос для получения данных о погоде (по умолчанию для Москвы в 14:00), возвращает данные о погоде в течение нескольких дней в указанное время.
- **GET '/forecast?q={city}'**: запрос для получения данных о погоде на основе названия города.
- **GET '/forecast?latitude={latitude}&longitude={longitude}'**: запрос для получения данных о погоде на основе долготы / широты.
- **GET '/forecast?{..params}&hour={hour}'**: запрос для получения данных о погоде, где params - другие параметры, описанные выше, а hour - желаемое время.

## Результат:
![image](https://github.com/glitteryskroll/weather_service/assets/55313356/d19a367b-709e-44e0-a1ae-b43c2adee6ca)
![image](https://github.com/glitteryskroll/weather_service/assets/55313356/a1adaa56-b5c9-4f7b-8c52-58558f29853a)
![image](https://github.com/glitteryskroll/weather_service/assets/55313356/19f3c50a-5c6a-4982-a707-a0668dcfb9c9)
