<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->



## Введение

Сервис позволяет автоматизировать процесс работы пиццерии, которая функционирует по следующему приципу:
+ **Оформление заказа**
  + Посетители могут сделать заказ, подойдя к кассе, а так же сидя за столом у оффицианта
  + Отсканировав QR-code находящийся на столе, посетитель может открыть меню(не заказать), меню выдают только те позиции, которые доступны в данный момент
+ **Бонусная система**
  + В ресторане есть карта клиента, карта предоставляет скидку 3% на весь рацион, а так же копит кэшбек 1%, которым можно 
оплатить часть заказа *(округление скидок и кэшбека, всегда вниз, до целого числа рублей)*
  + Можно предявить физическую карту, либо назватть номер, на который она зарегистрирована
+ **Внутреннее устройство**
  + Каждая пицца от начала и до конца выполняется одни человеком
  + Заказ может быть разделён на нескольких работников
  + За финальный сбор заказа ответсвенен тот, кто его принимал, т.е. либо рабоник кассы, либо официант
  + Заказ может быть выдан частично *(Например: если только одна пицца готова)*
  + 
+ 

## Возможности

В основом сервис предназначен для использования работниками пиццерии и только небольшая часть предназначена для 
посетителей ресторана. Основной функционал

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
