import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/40065472-9514-4ebb-9ff6-500f6dad4c8b/files/66fbb653-893a-4e1f-a6a4-84c90d3b0b0f.jpg";

const NAV_ITEMS = [
  { label: "Расписание", href: "#schedule" },
  { label: "Классы", href: "#classes" },
  { label: "Цены", href: "#pricing" },
  { label: "О студии", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const CLASSES = [
  {
    name: "Хатха-йога",
    level: "Все уровни",
    duration: "60 мин",
    desc: "Классическая практика, сочетающая асаны и пранаяму. Подходит для начинающих и опытных практиков.",
    icon: "Sun",
  },
  {
    name: "Аштанга-виньяса",
    level: "Средний / Продвинутый",
    duration: "90 мин",
    desc: "Динамичная последовательность поз с синхронизацией дыхания и движения. Развивает силу и гибкость.",
    icon: "Flame",
  },
  {
    name: "Инь-йога",
    level: "Начинающий",
    duration: "75 мин",
    desc: "Медленная практика с длительными удержаниями поз. Идеальна для восстановления и снятия стресса.",
    icon: "Moon",
  },
  {
    name: "Йога для начинающих",
    level: "Начинающий",
    duration: "60 мин",
    desc: "Мягкое введение в практику. Основы дыхания, базовые позы и принципы безопасной практики.",
    icon: "Sprout",
  },
  {
    name: "Медитация",
    level: "Все уровни",
    duration: "45 мин",
    desc: "Техники осознанности и концентрации. Помогает снизить тревожность и улучшить качество сна.",
    icon: "Heart",
  },
  {
    name: "Пренатальная йога",
    level: "Будущие мамы",
    duration: "60 мин",
    desc: "Специальная практика для беременных. Мягкие упражнения для поддержания здоровья мамы и малыша.",
    icon: "Baby",
  },
];

const INSTRUCTORS = [
  { name: "Анна Соколова", spec: "Хатха, Инь-йога", exp: "8 лет практики" },
  { name: "Михаил Орлов", spec: "Аштанга, Виньяса", exp: "12 лет практики" },
  { name: "Елена Лисова", spec: "Медитация, Пренатальная", exp: "6 лет практики" },
];

const SCHEDULE = [
  { day: "Пн", time: "07:30", class: "Хатха-йога", instructor: "Анна", spots: 3 },
  { day: "Пн", time: "10:00", class: "Йога для начинающих", instructor: "Елена", spots: 6 },
  { day: "Пн", time: "19:00", class: "Медитация", instructor: "Елена", spots: 8 },
  { day: "Вт", time: "07:30", class: "Аштанга-виньяса", instructor: "Михаил", spots: 2 },
  { day: "Вт", time: "12:00", class: "Инь-йога", instructor: "Анна", spots: 5 },
  { day: "Вт", time: "19:30", class: "Хатха-йога", instructor: "Михаил", spots: 4 },
  { day: "Ср", time: "07:30", class: "Медитация", instructor: "Елена", spots: 7 },
  { day: "Ср", time: "10:00", class: "Пренатальная йога", instructor: "Елена", spots: 4 },
  { day: "Ср", time: "19:00", class: "Аштанга-виньяса", instructor: "Михаил", spots: 0 },
  { day: "Чт", time: "07:30", class: "Хатха-йога", instructor: "Анна", spots: 5 },
  { day: "Чт", time: "19:30", class: "Инь-йога", instructor: "Анна", spots: 6 },
  { day: "Пт", time: "07:30", class: "Аштанга-виньяса", instructor: "Михаил", spots: 3 },
  { day: "Пт", time: "10:00", class: "Йога для начинающих", instructor: "Елена", spots: 8 },
  { day: "Пт", time: "19:00", class: "Хатха-йога", instructor: "Анна", spots: 2 },
  { day: "Сб", time: "09:00", class: "Хатха-йога", instructor: "Михаил", spots: 1 },
  { day: "Сб", time: "11:00", class: "Медитация", instructor: "Елена", spots: 9 },
  { day: "Вс", time: "10:00", class: "Инь-йога", instructor: "Анна", spots: 5 },
  { day: "Вс", time: "12:00", class: "Пренатальная йога", instructor: "Елена", spots: 3 },
];

const PRICES = [
  {
    name: "Пробное занятие",
    price: "500 ₽",
    desc: "Один раз, любой класс",
    features: ["Любой класс по выбору", "Без предоплаты", "Коврик включён"],
    highlight: false,
  },
  {
    name: "Абонемент 8 занятий",
    price: "5 600 ₽",
    desc: "700 ₽ за занятие · 2 месяца",
    features: ["Все классы", "2 месяца действия", "Перенос занятий", "Коврик включён"],
    highlight: true,
  },
  {
    name: "Абонемент 16 занятий",
    price: "9 600 ₽",
    desc: "600 ₽ за занятие · 3 месяца",
    features: ["Все классы", "3 месяца действия", "Перенос занятий", "Приоритетная запись", "Коврик включён"],
    highlight: false,
  },
  {
    name: "Безлимит",
    price: "12 000 ₽",
    desc: "В месяц · Неограниченно",
    features: ["Все классы без ограничений", "Консультация инструктора", "Приоритетная запись", "Коврик включён"],
    highlight: false,
  },
];

const REVIEWS = [
  {
    name: "Марина К.",
    text: "Пришла в студию совсем новичком — боялась, что будет тяжело. Анна так мягко ввела в практику, что уже через месяц я не могу представить жизни без йоги.",
    rating: 5,
    since: "Практикую 1 год",
  },
  {
    name: "Дмитрий В.",
    text: "Михаил — невероятный преподаватель. Точные корректировки, внимание к каждому студенту. Аштанга с ним — это вызов и кайф одновременно.",
    rating: 5,
    since: "Практикую 2 года",
  },
  {
    name: "Ольга М.",
    text: "Пренатальная йога с Еленой — лучшее, что я сделала в беременность. Легкость, спокойствие, поддержка. Рекомендую всем будущим мамам.",
    rating: 5,
    since: "Практикую 6 месяцев",
  },
  {
    name: "Алексей Р.",
    text: "Ходил на медитацию скептически. Сейчас это мой обязательный ритуал каждую среду. Стресс уходит уже на первых минутах практики.",
    rating: 5,
    since: "Практикую 8 месяцев",
  },
];

const CONTRAINDICATIONS = [
  "Острые воспалительные процессы",
  "Тяжёлые заболевания сердца и сосудов",
  "Высокое артериальное давление",
  "Онкологические заболевания",
  "Недавние операции (менее 6 месяцев)",
  "Психические расстройства в острой фазе",
  "Грыжи межпозвоночных дисков (без разрешения врача)",
  "Температура и инфекционные болезни",
];

const BEGINNER_TIPS = [
  {
    icon: "CheckCircle",
    title: "Не нужна подготовка",
    text: "Йога подходит людям любого возраста и уровня физической формы. Начните с класса для новичков.",
  },
  {
    icon: "Clock",
    title: "Придите за 15 минут",
    text: "Чтобы переодеться, познакомиться с инструктором и настроиться на практику.",
  },
  {
    icon: "Package",
    title: "Возьмите с собой",
    text: "Удобную одежду и воду. Коврик, блоки и ремни предоставляет студия.",
  },
  {
    icon: "Utensils",
    title: "Не ешьте перед практикой",
    text: "Последний приём пищи — за 2–3 часа до занятия. Лёгкий перекус — за 1 час.",
  },
];

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

interface ScheduleSlot {
  day: string;
  time: string;
  class: string;
  instructor: string;
  spots: number;
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("Пн");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<ScheduleSlot | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const filteredSchedule = SCHEDULE.filter((s) => s.day === activeDay);

  const handleBook = (slot: ScheduleSlot) => {
    if (slot.spots === 0) return;
    setSelectedSlot(slot);
    setBookingOpen(true);
    setSubmitted(false);
    setForm({ name: "", phone: "", comment: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-cormorant text-2xl font-light tracking-[0.15em] text-foreground">
            ПРАНА
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-golos text-sm font-light text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#schedule"
            className="hidden md:block bg-primary text-primary-foreground px-5 py-2 text-sm font-golos font-light tracking-wide hover:opacity-90 transition-opacity"
          >
            Записаться
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-golos text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#schedule"
              className="bg-primary text-primary-foreground px-5 py-2 text-sm font-golos text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Записаться
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-foreground/45" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <p className="font-golos text-sm font-light tracking-[0.3em] text-white/70 mb-6 animate-fade-in-up opacity-0">
            СТУДИЯ ЙОГИ · МОСКВА
          </p>
          <h1 className="font-cormorant text-6xl md:text-8xl font-light text-white leading-[1.05] mb-8 animate-fade-in-up opacity-0 delay-100">
            Найдите баланс
            <br />
            <em>внутри себя</em>
          </h1>
          <p className="font-golos text-lg font-light text-white/80 max-w-md mb-12 animate-fade-in-up opacity-0 delay-200">
            Мягкие и динамичные практики для всех уровней подготовки. Опытные инструкторы, уютное пространство.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 delay-300">
            <a
              href="#schedule"
              className="bg-white text-foreground px-8 py-4 font-golos text-sm tracking-wide hover:bg-white/90 transition-colors text-center"
            >
              Записаться на занятие
            </a>
            <a
              href="#classes"
              className="border border-white/60 text-white px-8 py-4 font-golos text-sm tracking-wide hover:border-white transition-colors text-center"
            >
              Узнать о классах
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/50" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary py-16 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "6", label: "направлений йоги" },
            { num: "3", label: "опытных инструктора" },
            { num: "200+", label: "постоянных практиков" },
            { num: "5 лет", label: "работаем в Москве" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-cormorant text-5xl font-light text-primary mb-2">{stat.num}</div>
              <div className="font-golos text-sm font-light text-muted-foreground tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Направления</p>
            <h2 className="font-cormorant text-5xl font-light text-foreground">Наши классы</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLASSES.map((cls) => (
              <div
                key={cls.name}
                className="border border-border p-8 hover:border-primary/40 transition-colors group bg-card"
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon name={cls.icon} size={28} className="text-accent" fallback="Star" />
                  <span className="font-golos text-xs text-muted-foreground tracking-wide">{cls.duration}</span>
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-2 group-hover:text-primary transition-colors">
                  {cls.name}
                </h3>
                <p className="font-golos text-xs text-accent mb-4 tracking-wide">{cls.level}</p>
                <p className="font-golos text-sm font-light text-muted-foreground leading-relaxed">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR BEGINNERS */}
      <section id="beginners" className="py-24 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Первый раз</p>
            <h2 className="font-cormorant text-5xl font-light">Для начинающих</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              {BEGINNER_TIPS.map((tip) => (
                <div key={tip.title} className="flex gap-5">
                  <div className="flex-shrink-0 mt-1">
                    <Icon name={tip.icon} size={20} className="text-accent" fallback="Check" />
                  </div>
                  <div>
                    <h4 className="font-cormorant text-xl font-light mb-1">{tip.title}</h4>
                    <p className="font-golos text-sm font-light text-muted-foreground leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-card border border-border p-8">
              <h3 className="font-cormorant text-3xl font-light mb-4">Пробное занятие</h3>
              <p className="font-golos text-sm font-light text-muted-foreground mb-6 leading-relaxed">
                Мы приглашаем вас на первое пробное занятие за 500 ₽. Вы познакомитесь с инструктором, попробуете практику и зададите все вопросы.
              </p>
              <div className="font-cormorant text-5xl font-light text-primary mb-6">500 ₽</div>
              <a
                href="#schedule"
                className="block w-full bg-primary text-primary-foreground text-center py-3 font-golos text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Записаться на пробное
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Онлайн-запись</p>
            <h2 className="font-cormorant text-5xl font-light mb-4">Расписание занятий</h2>
            <p className="font-golos text-sm font-light text-muted-foreground">
              Выберите день недели и запишитесь на удобное занятие
            </p>
          </div>

          <div className="flex gap-1 mb-8 overflow-x-auto pb-2">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-shrink-0 px-5 py-2 font-golos text-sm tracking-wide transition-colors ${
                  activeDay === day
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredSchedule.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground font-golos text-sm">
                В этот день занятий нет
              </div>
            ) : (
              filteredSchedule.map((slot, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-cormorant text-2xl font-light text-primary w-16">{slot.time}</span>
                    <div>
                      <div className="font-cormorant text-xl font-light mb-0.5">{slot.class}</div>
                      <div className="font-golos text-xs text-muted-foreground">{slot.instructor}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-golos text-xs ${slot.spots === 0 ? "text-destructive" : slot.spots <= 2 ? "text-accent" : "text-muted-foreground"}`}>
                      {slot.spots === 0 ? "Мест нет" : `${slot.spots} мест`}
                    </span>
                    <button
                      onClick={() => handleBook(slot)}
                      disabled={slot.spots === 0}
                      className={`px-5 py-2 font-golos text-sm tracking-wide transition-colors ${
                        slot.spots === 0
                          ? "bg-muted text-muted-foreground cursor-not-allowed"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Стоимость</p>
            <h2 className="font-cormorant text-5xl font-light">Абонементы</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRICES.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 border flex flex-col ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border"
                }`}
              >
                <div className="mb-6">
                  <h3 className={`font-cormorant text-xl font-light mb-1 ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`font-golos text-xs ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.desc}
                  </p>
                </div>
                <div className={`font-cormorant text-4xl font-light mb-8 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`}>
                  {plan.price}
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Icon name="Check" size={14} className={plan.highlight ? "text-primary-foreground/70" : "text-accent"} />
                      <span className={`font-golos text-sm font-light ${plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 font-golos text-sm tracking-wide transition-opacity hover:opacity-90 ${
                    plan.highlight
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">О нас</p>
              <h2 className="font-cormorant text-5xl font-light mb-8 leading-tight">
                Место, где начинается
                <br />
                <em>ваша практика</em>
              </h2>
              <div className="space-y-4 font-golos text-sm font-light text-muted-foreground leading-relaxed">
                <p>
                  Студия «Прана» открылась в 2019 году с простой идеей: создать место, где каждый сможет найти свою практику. Не важно, 20 вам лет или 60, занимались ли вы спортом или никогда — йога здесь для всех.
                </p>
                <p>
                  Наши инструкторы прошли обучение в ведущих школах России и Индии. Каждый из них — практикующий йог, который по-настоящему любит своё дело и умеет передавать это ученикам.
                </p>
                <p>
                  Небольшие группы (максимум 12 человек), индивидуальный подход и тёплая атмосфера — вот что отличает нас.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {INSTRUCTORS.map((ins) => (
                <div key={ins.name} className="flex items-center gap-5 p-6 border border-border bg-card">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={20} className="text-muted-foreground" />
                  </div>
                  <div>
                    <div className="font-cormorant text-xl font-light">{ins.name}</div>
                    <div className="font-golos text-xs text-accent">{ins.spec}</div>
                    <div className="font-golos text-xs text-muted-foreground mt-0.5">{ins.exp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Отзывы</p>
            <h2 className="font-cormorant text-5xl font-light">Говорят практики</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card border border-border p-8">
                <div className="flex mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-accent" />
                  ))}
                </div>
                <p className="font-cormorant text-xl font-light italic text-foreground mb-6 leading-relaxed">
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-golos text-sm font-light text-foreground">{r.name}</span>
                  <span className="font-golos text-xs text-muted-foreground">{r.since}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRAINDICATIONS & RULES */}
      <section id="rules" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Важно знать</p>
              <h2 className="font-cormorant text-4xl font-light mb-8">Противопоказания</h2>
              <p className="font-golos text-sm font-light text-muted-foreground mb-6 leading-relaxed">
                При наличии любого из перечисленных состояний обязательно проконсультируйтесь с врачом перед началом практики.
              </p>
              <ul className="space-y-3">
                {CONTRAINDICATIONS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-golos text-sm font-light text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-golos text-xs tracking-[0.3em] text-accent mb-3 uppercase">Правила студии</p>
              <h2 className="font-cormorant text-4xl font-light mb-8">Правила посещения</h2>
              <ul className="space-y-4">
                {[
                  "Приходите за 10–15 минут до начала занятия",
                  "Занятие начинается без опоздавших, если прошло более 5 минут",
                  "Телефоны переводить в беззвучный режим",
                  "Чистые носки или босые ноги в зале",
                  "Коврики дезинфицировать после занятия",
                  "Предупреждайте инструктора о травмах и самочувствии",
                  "Абонемент необходимо активировать в течение 14 дней",
                  "Перенос занятия — не позднее чем за 4 часа",
                ].map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <Icon name="ChevronRight" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-golos text-sm font-light text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-golos text-xs tracking-[0.3em] text-primary-foreground/60 mb-3 uppercase">Контакты</p>
              <h2 className="font-cormorant text-5xl font-light text-primary-foreground mb-10">
                Приходите к нам
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "MapPin", title: "Адрес", text: "Москва, Чистопрудный бульвар, 12\nм. Чистые Пруды, 3 мин пешком" },
                  { icon: "Clock", title: "Часы работы", text: "Пн–Пт: 07:00 – 22:00\nСб–Вс: 09:00 – 20:00" },
                  { icon: "Phone", title: "Телефон", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", title: "Email", text: "hello@prana-yoga.ru" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <Icon name={item.icon} size={18} className="text-primary-foreground/60 flex-shrink-0 mt-0.5" fallback="Info" />
                    <div>
                      <div className="font-cormorant text-xl font-light mb-1">{item.title}</div>
                      <div className="font-golos text-sm font-light text-primary-foreground/70 whitespace-pre-line">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-foreground/10 border border-primary-foreground/20 p-8">
              <h3 className="font-cormorant text-2xl font-light text-primary-foreground mb-6">
                Остались вопросы?
              </h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border border-primary-foreground/30 px-4 py-3 font-golos text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/60"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-transparent border border-primary-foreground/30 px-4 py-3 font-golos text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/60"
                />
                <textarea
                  placeholder="Ваш вопрос"
                  rows={3}
                  className="w-full bg-transparent border border-primary-foreground/30 px-4 py-3 font-golos text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/60 resize-none"
                />
                <button className="w-full bg-primary-foreground text-primary py-3 font-golos text-sm tracking-wide hover:opacity-90 transition-opacity">
                  Отправить вопрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-xl font-light tracking-[0.15em]">ПРАНА</div>
          <div className="font-golos text-xs text-muted-foreground">
            © 2024 Студия йоги «Прана». Все права защищены.
          </div>
          <div className="flex gap-6">
            {["ВКонтакте", "Telegram", "Instagram"].map((s) => (
              <a key={s} href="#" className="font-golos text-xs text-muted-foreground hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50">
          <div className="bg-card border border-border w-full max-w-md p-8 animate-fade-in">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="font-cormorant text-2xl font-light">Запись на занятие</h3>
                {selectedSlot && (
                  <p className="font-golos text-sm font-light text-muted-foreground mt-1">
                    {selectedSlot.day} · {selectedSlot.time} · {selectedSlot.class}
                  </p>
                )}
              </div>
              <button onClick={() => setBookingOpen(false)}>
                <Icon name="X" size={20} className="text-muted-foreground hover:text-foreground transition-colors" />
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} className="text-primary" />
                </div>
                <h4 className="font-cormorant text-2xl font-light mb-2">Заявка отправлена!</h4>
                <p className="font-golos text-sm font-light text-muted-foreground">
                  Мы свяжемся с вами в течение часа для подтверждения.
                </p>
                <button
                  onClick={() => setBookingOpen(false)}
                  className="mt-6 w-full bg-primary text-primary-foreground py-3 font-golos text-sm"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-golos text-xs text-muted-foreground block mb-1">Ваше имя *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-border px-4 py-3 font-golos text-sm focus:outline-none focus:border-primary/50 bg-background"
                    placeholder="Как вас зовут?"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs text-muted-foreground block mb-1">Телефон *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border px-4 py-3 font-golos text-sm focus:outline-none focus:border-primary/50 bg-background"
                    placeholder="+7 (___) ___-__-__"
                    type="tel"
                  />
                </div>
                <div>
                  <label className="font-golos text-xs text-muted-foreground block mb-1">Комментарий</label>
                  <textarea
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full border border-border px-4 py-3 font-golos text-sm focus:outline-none focus:border-primary/50 bg-background resize-none"
                    placeholder="Ваш уровень подготовки, вопросы..."
                    rows={3}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 font-golos text-sm tracking-wide hover:opacity-90 transition-opacity"
                >
                  Записаться
                </button>
                <p className="font-golos text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}