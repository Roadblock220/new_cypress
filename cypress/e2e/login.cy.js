describe('Проверка авторизации', function () {

    it('Верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверка цвета кнопки восстановления пароля
        
         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю    
     
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверка цвета кнопки восстановления пароля
       
        cy.get('#forgotEmailButton').click(); // Нажал восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел эмейл для восстановления пароля
        cy.get('#restoreEmailButton').click(); // Нажал кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка, что после ввода эмейл вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
  
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверка цвета кнопки восстановления пароля
       
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio9'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверка цвета кнопки восстановления пароля
       
        cy.get('#mail').type('german@nikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })

    it('Проверка что в поле логин есть @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверка цвета кнопки восстановления пароля
       
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю

    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css','color','rgb(0, 85, 152)'); // Проверка цвета кнопки восстановления пароля
       
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел эмейл с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка, что после ввода эмейл вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю
   
    })

 }) 