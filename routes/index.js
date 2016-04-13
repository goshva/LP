var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

var Days = "7 дней";

function formatDate(date) {
var hours = date.getHours();
var minutes = date.getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;var strTime = hours + ':' + minutes + ' ' + ampm;

return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() }

var now = new Date();
var today = formatDate(now);
var pageWordsetup = {
    TITLE: 'Свадьбы и Банкеты',
    BRAND: 'Аква Юна Лайф',
    ADDRESS: 'д. Красная горка, владение 9',
    ADDRESSSLOGAN:'Добраться до нас несложно',
    ADDRESSNOTE:'<p> всего 5 минут от аэропорта Шереметьево или<br> 10 мин от Москвы по Дмитровскому шоссе и Вы у нас!</p><p>ОТ ДМИТРОВСКОГО ШОССЕ: <br /> 8 км. от МКАД, д. Красная горка, владение 9. <br /> (разворот на посту ДПС и поворот направо через 400 метров)<br /> <br /> ОТ ЛЕНИНГРАДСКОГО ШОССЕ: <br /> по направлению в сторону аэропорта &laquo;Шереметьево-2&raquo;, далее 10 минут от аэропорта. </p><p>От Ж/Д &laquo;САВЁЛОВСКАЯ&raquo;, СТ. &laquo;ШЕРЕМЕТЬЕВСКАЯ&raquo;: <br /> 4 вагон от головы поезда, спустится с платформы <br /> и идти 15-20 мин., пешком по ул. Свердлова, до конца</p><p>&nbsp;</p><p>GPS-координаты:<br /> Долгота: 37&deg;31&prime;13.9&Prime; в. д. (37.520528)<br /> Широта: 55&deg;59&prime;11.53&Prime; с. ш. (55.986535)</p>',
    PHONE: '+7 (969) 017-36-57',
    EMAIL: 'banket.juna-life@mail.ru',
    CALLME: "Заказать звонок",
    ABOUT: "О нас",
    SERVICES: "Грантируем",
    PORTFOLIO: "Фото",
    PORTFOLIO2: "Наши услуги",
    CONTACT: "Контакты",
    H1:  "Свадьбы <br>и Банкеты",
    SLOGAN: "Более 5 лет мы занимаеся организацией мероприятий",
    ACTION: "Подробнее...",
    WHYUS: "НАШИ ПРЕИМУЩЕСТВА",
    AVAILABILITY:"Празник в любой день",
    AVAILABILITYNOTE:"Для Вашего удобства мы работаем, готовим и проводим мероприятия 7 дней в неделю",
    CENTERTOWN:"Гарантия результата",
    CENTERTOWNNOTE:"Мы всегда организуем мероприятия в установленные сроки, даже если для этого есть всего несколько дней",
    WITHLOVE: "Работаем под ключ",
    WITHLOVENOTE: "Мы занимаемся полностью всем: от проработки концепции, оформления зала до подготовки аппаратуры, меню, подарков и мн. др.",  
    PROFMAKEUP: "Лучшие ведущие",	
    PROFMAKEUPNOTE: "Для проведения яркого мероприятия мы приглашаем только лучших ведущих и подбираем лучшие площадки",
    CONTACTUS: "Свяжитесь с нами!",
    CONTACTUSNOTE: "Ждем ваших звонков",
    PHASESNOTE:"Этапы проведения мероприятий",
    PHASES: ["Шаг 1","Шаг 2","Шаг 3","Шаг 4","Шаг 5","Шаг 6","Шаг 7","Пришли"],
    PHASENOTE: ["Подача заявки на расчёт","Бесплатная подготовка концепции и смет мероприятия","Рассмотрение и одобрение концепции","Внесение предоплаты","Подготовка всего необходимого к мероприятию","Доплата","Мы проводим мероприятие","Вы доволные отдыхаете"],	
    EXAMPLES: "Наши площадки",
    ADVANTAGES: ["Мы находимся<br> в ближайшем Подмосковье","Организуем мероприятия<br> под ключ","3 Га собственной территории","6 оборудованных площадок для мероприятий","Собственная стационарная кухня <br>с мощностью обслуживания до 1000 персон ","Отель для размещения гостей","Собственная вертолетная площадка","Охраняемая территория"],
    NAMESADVANTAGES:["Описание Преимущества1","Описание Преимущества2","Описание Преимущества3","Описание Преимущества4","Описание Преимущества5","Описание Преимущества6","Описание Преимущества7","Описание Преимущества8"],
    ICONSADVANTAGES:["fa-fort-awesome","fa-flag","fa-calendar","fa-key","fa-hospital-o","fa-paper-plane-o","fa-star","fa-child"],
    SERVICES: "Услуги",
    PORTAREAS: ["Ресторан","Летняя веранда","Шатер Парус","Шатер Летний","Большой Летний","Зимний зал"],
//    PORTAREANAMES: ["Ресторан. До 50 человек","Шатер Большой летний. До 400 человек","Шатер Парус. До 50 человек","Летняя веранда. До 30 человек","Шатер Большой зимний. До 700 человек", "Шатер Большой летний. До 100 человек"],
PORTAREANAMES: [
"Зал с камином, панорамными окнами, и баром. Прекрасно подойдет для празднования дня рождения или свадьбы в узком семейном кругу. Максимальная вместимость 60 гостей. В стоимость аренды входит: мебель, текстиль, свет, звук, плазменный телевизор, экран и проектор <hr>Большой зал для разного рода торжеств, максимальная вместимость 100 гостей. Рассадка возможна как на диванах, так и за банкетными круглыми столам. По стенам зала висят плазменные телевизоры, есть экран, проектор- очень удобно смотреть семейные слайд-шоу и петь караоке. Также в зале имеется свето-музыкальное оборудование и танцпол. В стоимость аренды входит все оборудование, мебель, текстиль и также украшение текстилем стен и потолка",
"Летняя веранда с мягкими диванами и кованной мебелью. Вместимость с рассадкой до 30 гостей. В стоимость аренды входит мебель, фоновая музыка.",    
"Самая высокая точка нашего клуба. Откуда открывается вид на всю территорию. Вместимость шатра до 60 гостей. Рассадка возможно как на диванах, так и за банкетными круглыми столами. Прямо из шатра есть выход на одну из горок аквапарка. В стоимость аренды входит мебель, текстиль, свет, звук",
"Основная свадебная площадка нашего клуба. Из-за непосредственной близости шатра к площадке для выездной регистрации, его очень любят наши молодожены. Вместимость до 100 гостей. В стоимость аренды входят мебель, скатерти, чехлы на стулья, стены и потолок шатра украшены белой тканью. Также в шатре есть проектор, экран,свето-музыкальное оборудование и сцена-подиум",
"Шатер вместимостью до 500 гостей.В стоимость аренды входят мебель, скатерти, чехлы на стулья, свето-музыкальное оборудование",
"Шатер вместимостью до 700 гостей.В стоимость аренды входят мебель, скатерти, чехлы на стулья, драпировка стен, оборудование, свет, в зале имеется профессиональная сцена и две большие гримерные"
],
    PORTCATEGORYES: ["Организация праздника под ключ","Оформление мероприятия","Выездная регистрация","Размещение молодоженов и гостей в номерах отеля","Собственная стационарная кухня с мощностью обслуживания до 1000 персон","Концертная программа и организация отдыха","Аквапарк, бассейны, бани - все к услугам гостей","В стоимость аренды любой площадки входит банкетная мебель","Добродушный и отзывчивый персонал"],
    PORTNAMES: [null,null,null,null,null,null,null,null,null],    
    CALLTOACTION: "Заказать консультацию",
    CALLTOACTIOTEXT: "Желаете заказать организацию мероприятия или задать имеющиеся вопросы?<br>Заполните форму обратной связи и мы перезвоним вам для консультации/детализации заказа.",
    SIGNUP0: "Заказать консультацию",
    SIGNUP1: "Рассчитать цену",
    SIGNUP2: "Отправить заявку",
    SITE:"Перейти на основной сайт",
    BOOM:"ДО "+today+" действует АКЦИЯ!",
    BOOMNOTE1:"Проконсультироваться по организации мероприятий, стоимости и другим вопросам<br>можно, позвонив по телефону или заполнив форму обратной связи",
    BOOMNOTE2:"Заказать бесплатный расчёт стоимости вашего мероприятия или уточнить стоимость<br>аналогичного из выше приведённых можно, заполнив форму обратной связи",
    BOOMNOTE3:"При заказе свадебного банкета <br> ЛЮКС ДЛЯ МОЛОДОЖЕНОВ В ПОДАРОК!",
    BOOMBUTTON:"Получить купон",
    MODALHEADER:"Введите информацию о себе",
    SEND:"Отправить",
    CLOSE:"Закрыть"

}
  res.render('index', pageWordsetup);
});

module.exports = router;
