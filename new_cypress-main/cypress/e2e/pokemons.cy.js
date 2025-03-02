describe('Покупка аватара', function () {                                
    it('Покупка нового аватара для своего тренера', function () {   
         cy.visit('https://pokemonbattle.ru/');                         
         cy.get('input[type="email"]').type('kotoqpei1@yandex.ru');                  
         cy.get('input[type="password"]').type('05327Cusiniho!');             
         cy.get('button[type="submit"]').click();                        
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); 
         cy.get('[href="/shop"]').click();                               
         cy.get('.available > button').first().click({ force: true });   
         cy.get('.credit').type('5555555555555599');                     
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1234');                          
         cy.get('.k_input_name').type('NAME');                           
         cy.get('.pay-btn').click();                                     
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible');     
     });
 });