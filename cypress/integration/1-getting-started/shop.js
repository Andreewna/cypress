// describe('Register a new user', () => {
    const email = `testuser_${Math.random().toString(36).substring(2, 15)}@mail.com`
//   beforeEach(() => {
//     cy.visit('https://www.reserved.com/gb/en/');
//   });

//   it('Register a new user', () => {

//     cy.get('#cookiebotDialogOkButton').click();

//     cy.get('body').click();
//     cy.get('[data-testid="account-info-logged-false"]').click();
//     cy.get('.button__ButtonPrimary-zerqf2-0').click();
//     // регистрация
//     cy.get('#email_id').type(email);
//     cy.get('#password_id').type('password');
//     cy.get('#firstname_id').type('John');
//     cy.get('#lastname_id').type('Doe');
//     cy.get('#remember_me_id').check();
//     cy.get('.primary__PrimaryButtonComponent-sc-1pct4vx-0').click();
//     //валидация что все ок
//     cy.get('[data-testid="account-info-logged-false"]').click();
//     cy.contains('John');
//   });
// });

// describe('Login', () => {
//   it('Logs in as a registered user', () => {
//     cy.visit('https://www.reserved.com/gb/en/');
//     cy.get('#cookiebotDialogOkButton').click();

//     cy.get('#headerWrapper > div > div.page-header__HeaderItems-qbclzk-4.kCEgxi > div.action-btn__HorizontalActionButton-zbpc1m-2.dwExhh').click();
//     cy.xpath('/html/body/div[1]/section/div/div/div[1]/div/form/div[1]/div/input').type('testchantelletetiana@proton.me');
//     cy.xpath('/html/body/div[1]/section/div/div/div[1]/div/form/div[2]/div/input').type('testtest');
//     cy.xpath('/html/body/div[1]/section/div/div/div[1]/div/form/div[3]/div/input').click();
//     cy.get('#loginRegisterRoot > div > div.sc-hKgJUU.hoSgvk > div > form > button').click();
//     cy.contains('TetianaTest');
//   });
// });

// describe('Search Test', () => {
//   beforeEach(() => {
//     cy.visit('https://www.reserved.com/gb/en/');
//   });

//   it('should search for a skirt', () => {

//     cy.get('#cookiebotDialogOkButton').click();

//     cy.get('.input__InputText-sc-1mxde2b-0').type('skirt');
//     cy.get('.popular-queries-styled__PopularQueriesSection-xd5qzr-1 > :nth-child(3)').click();

//     cy.get('[data-testid="sizes-filter-box"]').should('be.visible');
//     cy.get('[data-testid="colors-filters-box"]').should('be.visible');
//     cy.get('[data-testid="prices-filters-box"]').should('be.visible');
//   });
// });

// describe("Add item to cart on Reserved website", () => {
//   it("should add item to cart", () => {
//     cy.visit("https://www.reserved.com/gb/en/");

//     cy.get("#cookiebotDialogOkButton").click();

//     cy.get('.input__InputText-sc-1mxde2b-0').type('scarf');
//     cy.wait(7000)

//     // выбор модели
//     cy.get('#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.search-results-wrapper__SearchResultsWrapper-lnm8aj-0.cjGUeD > ul > li:nth-child(1) > div > div.hit-item__ProductInfo-cz15ax-2.gFMTte > a').click();

//     // добавляем в корзину и переходим в корзину
//     cy.get(".primary__PrimaryButtonComponent-sc-1pct4vx-0").click();
//     cy.get(".add-to-cart-modal__ButtonContainer-hurol3-3 > .primary__PrimaryLinkButtonComponent-sc-1pct4vx-1").click();

//     // в корзине 1 товар
//     cy.get('#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > h1 > small').should('contain', '1')
//   });
// });


// describe("Сhange quantity and remove item", () => {
//   it("Сhange quantity and remove item", () => {
//     cy.visit("https://www.reserved.com/gb/en/");

//     cy.get("#cookiebotDialogOkButton").click();

//     cy.get('.input__InputText-sc-1mxde2b-0').type('scarf');
//     cy.wait(7000)

//     // выбор модели
//     cy.get('#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.search-results-wrapper__SearchResultsWrapper-lnm8aj-0.cjGUeD > ul > li:nth-child(3) > div > div.hit-item__ProductInfo-cz15ax-2.gFMTte > a').click();

//     // добавляем в корзину и переходим в корзину
//     cy.get(".sc-kEjbQP > .primary__PrimaryButtonComponent-sc-1pct4vx-0").click();
//     cy.get(".add-to-cart-modal__ButtonContainer-hurol3-3 > .primary__PrimaryLinkButtonComponent-sc-1pct4vx-1").click();

//     // в корзине 1 товар
//     cy.get('#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > h1 > small').should('contain', '1');
//     //домашняя страница
//     cy.get("#headerWrapper > div > div.page-header__HeaderTitle-qbclzk-3.divnXv").click();
//     //корзина
//     cy.get("#headerWrapper > div > div.page-header__HeaderItems-qbclzk-4.kCEgxi > div.action-btn__HorizontalActionButton-zbpc1m-2.kStMqh").click();
//     //меняем количество
//     cy.get("#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > div > div > div.fancy-qty-select__Wrapper-z1g0i4-6.fIhBLJ > div").click();
//     cy.get("#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > div > div > div.fancy-qty-select__Wrapper-z1g0i4-6.fIhBLJ > div > div > ul > li:nth-child(6)").click();
//     cy.wait(7000)
//     //удаляем
//     cy.get("#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > div > div > button").click();
//     //возвращаемся на домашнюю
//     cy.get("#headerWrapper > div > div.page-header__HeaderTitle-qbclzk-3.divnXv").click();
//   });
// });

describe("Go to checkout", () => {
  it("Go to checkout", () => {
    cy.visit("https://www.reserved.com/gb/en/");

    cy.get("#cookiebotDialogOkButton").click();

    cy.get('.input__InputText-sc-1mxde2b-0').type('scarf');
    cy.wait(7000);

    // выбор модели
    cy.get('#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.search-results-wrapper__SearchResultsWrapper-lnm8aj-0.cjGUeD > ul > li:nth-child(3) > div > div.hit-item__ProductInfo-cz15ax-2.gFMTte > a').click();

    // добавляем в корзину и переходим в корзину
    cy.get(".sc-kEjbQP > .primary__PrimaryButtonComponent-sc-1pct4vx-0").click();
    cy.get(".add-to-cart-modal__ButtonContainer-hurol3-3 > .primary__PrimaryLinkButtonComponent-sc-1pct4vx-1").click();

    // в корзине 1 товар
    cy.get('#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > h1 > small').should('contain', '1');
    //домашняя страница
    cy.get("#headerWrapper > div > div.page-header__HeaderTitle-qbclzk-3.divnXv").click();
    //корзина
    cy.get("#headerWrapper > div > div.page-header__HeaderItems-qbclzk-4.kCEgxi > div.action-btn__HorizontalActionButton-zbpc1m-2.kStMqh").click();
    //меняем количество
    cy.get("#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > div > div > div.fancy-qty-select__Wrapper-z1g0i4-6.fIhBLJ > div").click();
    cy.get("#cartRoot > div > div.content__ContentBox-sc-1xg7d8m-0.jbypLo > div > div > div.fancy-qty-select__Wrapper-z1g0i4-6.fIhBLJ > div > div > ul > li:nth-child(6)").click();
    cy.wait(10000);
    //идем на чекаут
    cy.get("#cartRoot > div > div.sidebar__SidebarComponent-sc-1g7c36s-0.hriVYn > div.styled__Wrapper-drcptf-0.hrZzDe > div.styled__ButtonWrapper-drcptf-8.hrTjLD > button").click();
    //регаемся
    cy.get(".button__ButtonPrimary-zerqf2-0").click();
    cy.get('#email_id').type(email);
    cy.get('#password_id').type('password');
    cy.get('#firstname_id').type('John');
    cy.get('#lastname_id').type('Doe');
    cy.get('#remember_me_id').check();
    cy.get('form > .primary__PrimaryButtonComponent-sc-1pct4vx-0').click();
    //метод доставки
    cy.get("#checkoutRoot > div > div.content-box__ContentBox-sc-3wbdp9-0.jclkpr > div:nth-child(1) > div > ul:nth-child(2) > li:nth-child(2) > div.list-item-grid__ListItemGrid-sc-11rfugz-0.QLJJN > div").click();
    //форма с адресом
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[1]/input').click();
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[3]/input').type('24')
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[4]/input').type('Sadova St');
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[5]/div[1]/input').type('EC1Y 8SY');
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[5]/div[2]/input').type('London');
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[6]/div/input').type('20 7123 4567');
    cy.xpath('/html/body/div[4]/div[3]/div/div[2]/form/div[9]/button').click();
    // валидация  пеймент пейдж
    cy.get('.container__PaymentsContainer-sc-1otltk7-1 > .wrapper__CheckoutWrapper-sc-193q80s-1 > .heading__Heading-sc-1ol1w1w-0').should('be.visible');
    cy.get('.primary-button__CheckoutButtonWrapper-sc-1399s51-1 > .primary__PrimaryButtonComponent-sc-1pct4vx-0').should('be.visible');

  });
});

// describe("Fitler", () => {
//   it("Filter", () => {
//     cy.visit("https://www.reserved.com/gb/en/");

//     cy.get("#cookiebotDialogOkButton").click();

//     cy.get('.input__InputText-sc-1mxde2b-0').type('skirt');
//     cy.get('.popular-queries-styled__PopularQueriesSection-xd5qzr-1 > :nth-child(3)').click();

//     cy.get('[data-testid="sizes-filter-box"]').should('be.visible');
//     cy.get('[data-testid="colors-filters-box"]').should('be.visible');
//     cy.get('[data-testid="prices-filters-box"]').should('be.visible');

//     cy.get("#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.filters-box__FiltersBox-sc-164n778-0.klgcDP > div > div > div:nth-child(3) > div.filter__FilterWrapper-sc-18ugz6c-2.NupbJ > div:nth-child(1)").click();
//     cy.get('#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.filters-box__FiltersBox-sc-164n778-0.klgcDP > div > div > div.clear-filters__StyledWrapperClearFilterLabel-sc-16smtxn-2.gXqefU > span').should('be.visible')

//     cy.get("#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.filters-box__FiltersBox-sc-164n778-0.klgcDP > div > div > div:nth-child(5) > div.filter__FilterWrapper-sc-18ugz6c-2.NupbJ > div:nth-child(1)").click();
//     cy.get("#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.filters-box__FiltersBox-sc-164n778-0.klgcDP > div > div > div:nth-child(5) > div.filter__FilterWrapper-sc-18ugz6c-2.NupbJ > div.filter__StyledChip-sc-18ugz6c-0.bngPbn").should('be.visible');
//   });
// });

// describe("Sorting from High to low", () => {
//   it("Sorting from High to low", () => {
//     cy.visit("https://www.reserved.com/gb/en/");

//     cy.get("#cookiebotDialogOkButton").click();

//     cy.get('.input__InputText-sc-1mxde2b-0').type('jacket');
//     cy.get('.popular-queries-styled__PopularQueriesSection-xd5qzr-1 > :nth-child(3)').click();

//     cy.get('[data-testid="sizes-filter-box"]').should('be.visible');
//     cy.get('[data-testid="colors-filters-box"]').should('be.visible');
//     cy.get('[data-testid="prices-filters-box"]').should('be.visible');

//     cy.get(".header").click();
//     cy.get(".dropdown__List-sc-1j5l1ji-1 > :nth-child(3)").click();

//     cy.get(':nth-child(1) > .hit-item__StyledHitItem-cz15ax-0 > .hit-item__ProductInfo-cz15ax-2 > .product-price__ProductPriceWrapper-sc-1ftsh9w-0 > .product-price__RegularPrice-sc-1ftsh9w-2').then(($prices) => {
//       const prices = $prices.map((i, el) => Number(el.innerText.slice(1)));
//       for (let i = 0; i < prices.length - 1; i++) {
//         expect(prices[i]).to.be.greaterThan(prices[i + 1]);
//       }
//     });
//   });
// });

// describe("Sorting from Low to High", () => {
//   it("Sorting from Low to High", () => {
//     cy.visit("https://www.reserved.com/gb/en/");

//     cy.get("#cookiebotDialogOkButton").click();

//     cy.get('.input__InputText-sc-1mxde2b-0').type('jacket');
//     cy.get('.popular-queries-styled__PopularQueriesSection-xd5qzr-1 > :nth-child(3)').click();

//     cy.get('[data-testid="sizes-filter-box"]').should('be.visible');
//     cy.get('[data-testid="colors-filters-box"]').should('be.visible');
//     cy.get('[data-testid="prices-filters-box"]').should('be.visible');

//     cy.get(".header").click();
//     cy.get(".dropdown__List-sc-1j5l1ji-1 > :nth-child(2)").click();


//     cy.get(':nth-child(1) > .hit-item__StyledHitItem-cz15ax-0 > .hit-item__ProductInfo-cz15ax-2 > .product-price__ProductPriceWrapper-sc-1ftsh9w-0 > .product-price__RegularPrice-sc-1ftsh9w-2').then(($prices) => {
//       const prices = $prices.map((i, el) => Number(el.innerText.slice(1)));
//       for (let i = 0; i < prices.length - 1; i++) {
//         expect(prices[i]).to.be.lessThan(prices[i + 1]);
//       }
//     });
//   });

//  describe("Add item to cart from recomended product", () => {
//     it("should add item to cart", () => {
//       cy.visit("https://www.reserved.com/gb/en/");

//       cy.get("#cookiebotDialogOkButton").click();

//       cy.get('.input__InputText-sc-1mxde2b-0').type('scarf');
//       cy.wait(7000)

//       // выбор модели
//       cy.get('#algoliaContainer > div.search-panel-wrapper__StyledAlgoliaCatalogSearch-sc-1b3pij6-0.gVlFNH > div > div.search-results-wrapper__SearchResultsWrapper-lnm8aj-0.cjGUeD > ul > li:nth-child(1) > div > div.hit-item__ProductInfo-cz15ax-2.gFMTte > a').click();

//       // переходим по брейдкрамсу
//       cy.get("#productContainer > section > div.breadcrumbs__StyledBreadcrumbs-sc-1hu39a3-0.lawxtY.product-breadcrumbs.productCard > span:nth-child(2) > span > a").click();
//       cy.get('.sc-dmlqKv').should('be.visible');

//     });
//   });
 












// })
