describe('Покупка нового аватара для своего тренера', function () {

    it('E2E тест за пользователя по покупке автара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашел на страницу авторизации сайта покемонов
         cy.get(':nth-child(1) > .auth__input').type('user_name'); // Ввел верный логин
         cy.get('#password').type('user_password'); // Ввел верный пароль
         cy.get('.auth__button').click(); // Нажал войти
         cy.get('.header__container > .header__id').click(); // зашел на сраничку своего тренера
         cy.get('[href="/shop"]').click(); // Перешел на страничку магазина
         cy.get('.available > button').first().click({ force: true }); // Покупаю аватар
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Ввели номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Ввел срок карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввели CVV карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ruby rodd'); // Ввел имя владельца карты
         cy.get('.pay-btn').click(); // Нажал оплатить
         cy.get('#cardnumber').type('56456'); // Ввел код из смс
         cy.get('.payment__submit-button').click(); // Нажал отправить
         cy.get('.payment__adv').click(); // Нажал вернуться в магазин
     })
 }) 