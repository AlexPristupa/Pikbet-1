<template>
  <v-container>
    <v-layout column justify-center align-center>
      <bread-crumbs :items="items"></bread-crumbs>

      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <h1 class="display-1">Прогнозы на все виды спорта</h1>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <p>
            На данном сайте представлены прогнозы на все виды спорта и другие
            события, на которые можно осуществить ставку в букмекерской конторе.
          </p>
          <p>
            Сайт привязан к реальной букмекерской конторе, то есть все
            коэффициенты реальные.
          </p>
          <p>
            Прогнозы может публиковать любой желающий после регистрации на сайте.
            При регистрации на вашем счете появиться виртуальная валюта в
            размере 10000 (десять тысяч евро).
          </p>
          <p>
            На виртуальные деньги вы делаете прогнозы, а программа сайта в
            автоматическом режиме подсчитывает ваш результат и определяет
            ваше место в рейтинге всех зарегистрированных участников (капперов).
          </p>
          <p>
            Рейтинг всех участников определяется за понедельно, помесячно и
            за все время. В дальнейшем если у вас будет хорошая статистика
            прогнозов, то автоматически будет предложено перевести ваши
            прогнозы в платные (то есть вы сможете их продавать).
          </p>
          <p>
            Как это сделать: (ссылка как заработать на сайте)
            Каждый новый месяц ваш банк обнуляется, то есть у вас на счете
            будет вновь 10000 условных евро, вне зависимости были ли вы в
            прошлом месяце в плюсе или минусе, а все прошлые результаты
            отразятся на вашем рейтинге.
          </p>
          <p>
            В сутки разрешено публиковать не более 20 прогнозов, максимальная ставка не более 500 виртуальных евро, минимальная ставка 50 виртуальных евро. Прогноз должен быть опубликован до начала события. На нашем сайте вы можете ознакомиться с рекомендованными стратегиями ставок: (ссылка стратегии ставок)
            Для тех, кто плохо разбирается в прогнозах на спорт, вам достаточно зарегистрироваться на сайте, следить за успешными участниками (капперами) и повторять ставки за ними уже в реальных букмекерских конторах. Рейтинг легальных БК: (ссылка рейтинг БК)
          </p>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import BreadCrumbs from '~/components/Page/Header/BreadCrumbs'
export default {
  name: 'prog-noz',
  components: { BreadCrumbs },
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/'
        },
        {
          text: 'прогнозы',
          disabled: true,
          href: ''
        }
      ]
    }
  }
}
</script>

