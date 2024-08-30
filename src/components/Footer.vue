<template>
  <footer>
    <div class="footer-wrapper">
      <div class="footer-about">
        <div class="footer-content">
          <h5>О компании</h5>
          <p>ООО «Премьер-Агро» 140080,<br>
             Московская обл., г. Лыткарино,<br>
             территория промзоны Тураево стр. 39Б</p>
            
          <p>Мы специализируемся на оптово-розничной продаже и поставке химических средств защиты растений, 
             широкого перечня удобрений, микроэлементов, стимуляторов роста, семян овощных и пропашных культур, 
             препаратов для дезинфекции, субстратов, клеевых ловушек широкого назначения, а также биопрепаратов различного спектра действия.</p>
        </div>
        <div class="footer-contact">
          <h5>Контакты</h5>
          <p>agro@pr-agro.ru</p>
          <p>+7 (495) 198-07-97</p>
          <p>Время работы: Пн-Пт с 08:00 до 18:00 
             Выписка счетов, документов, оплата, консультация и самовывоз в будние дни или по договоренности.</p>
        </div>
      </div>
      <div class="footer-metrics">
        <p>Счетчик</p>
      </div>
      <span class="footer-border"></span>
      <div class="сopyright">
        <p>© 2017-2023 ООО «Премьер-Агро»</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #000;
  margin-top: 40px;
} 
  
.footer-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px 20px 20px 20px;
  max-width: var(--max-width);
  margin: var(--margin-auto);
}

footer h5 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--grey-color);
  text-transform: uppercase;
}

footer p {
  font-size: var(--font-info);
  color: var(--grey-color);
  font-weight: 400;
  padding: 5px 0;
}

.footer-about {
  display: grid;
  grid-template: 1fr / 2fr 1fr;
  gap: 40px;
}

.footer-border {
  border-bottom: 1px solid white;
}

.сopyright {

}


@media screen and (width < 600px) {
  .footer-about {
    display: grid;
    grid-template: 1fr / 1fr;
    gap: 20px;
  }


}
</style>
