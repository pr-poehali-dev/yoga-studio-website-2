import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/40065472-9514-4ebb-9ff6-500f6dad4c8b/files/0ffc50e6-5274-42d0-b451-c50081d7ae40.jpg";

const NAV_ITEMS = [
  { label: "Направления", href: "#classes" },
  { label: "Расписание", href: "#schedule" },
  { label: "Цены", href: "#pricing" },
  { label: "Об Юлии", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const CLASSES = [
  {
    id: "womens-health",
    name: "Женское здоровье",
    tag: "Гормоны · Цикл · Баланс",
    duration: "75 мин",
    desc: "Практика, выстроенная вокруг физиологии женского тела. Асаны, подобранные по фазам цикла — нормализуют гормональный фон, снимают спазмы, восстанавливают энергию. Метод Айенгара позволяет работать точно, без перегрузки.",
    icon: "Heart",
    color: "from-rose-50 to-stone-50",
    accent: "text-rose-500",
    border: "border-rose-100",
    details: [
      "Работа с областью таза и живота",
      "Перевёрнутые позы для гормонального баланса",
      "Адаптация под фазу цикла",
      "Пропсы: одеяла, болстеры, ремни",
    ],
  },
  {
    id: "healthy-back",
    name: "Здоровая спина",
    tag: "Позвоночник · Осанка · Сила",
    duration: "75 мин",
    desc: "Работа с позвоночником через точное выравнивание. Укрепление мышц-стабилизаторов, снятие компрессии в дисках, коррекция осанки. Подходит при сколиозе, остеохондрозе, протрузиях — под наблюдением Юлии.",
    icon: "Zap",
    color: "from-amber-50 to-stone-50",
    accent: "text-amber-600",
    border: "border-amber-100",
    details: [
      "Декомпрессия позвоночника у стены",
      "Укрепление паравертебральных мышц",
      "Работа с шеей и поясницей отдельно",
      "Ремни, блоки, верёвки",
    ],
  },
  {
    id: "body-opening",
    name: "Раскрытие тела",
    tag: "Гибкость · Суставы · Свобода",
    duration: "90 мин",
    desc: "Глубокая работа с фасциями и суставами. Долгие удержания в поддерживаемых позах раскрывают бёдра, грудной отдел, плечи. Ощущение лёгкости и пространства в теле после каждого занятия.",
    icon: "Flower2",
    color: "from-teal-50 to-stone-50",
    accent: "text-teal-600",
    border: "border-teal-100",
    details: [
      "Долгие удержания 3–5 минут",
      "Поддерживаемые позы на болстерах",
      "Раскрытие тазобедренных суставов",
      "Грудной отдел и плечи",
    ],
  },
];

const SCHEDULE = [
  { day: "Пн", time: "09:00", class: "Женское здоровье", spots: 4 },
  { day: "Пн", time: "19:00", class: "Здоровая спина", spots: 3 },
  { day: "Вт", time: "10:00", class: "Раскрытие тела", spots: 5 },
  { day: "Вт", time: "19:30", class: "Женское здоровье", spots: 2 },
  { day: "Ср", time: "09:00", class: "Здоровая спина", spots: 6 },
  { day: "Ср", time: "19:00", class: "Раскрытие тела", spots: 4 },
  { day: "Чт", time: "10:00", class: "Женское здоровье", spots: 0 },
  { day: "Чт", time: "19:30", class: "Здоровая спина", spots: 5 },
  { day: "Пт", time: "09:00", class: "Раскрытие тела", spots: 3 },
  { day: "Пт", time: "19:00", class: "Женское здоровье", spots: 4 },
  { day: "Сб", time: "10:00", class: "Здоровая спина", spots: 7 },
  { day: "Сб", time: "12:00", class: "Раскрытие тела", spots: 5 },
  { day: "Вс", time: "11:00", class: "Женское здоровье", spots: 3 },
];

const PRICES = [
  {
    name: "Пробное занятие",
    price: "800 ₽",
    desc: "Любое направление",
    features: ["Одно занятие на выбор", "Все пропсы включены", "Консультация Юлии"],
    highlight: false,
  },
  {
    name: "8 занятий",
    price: "7 200 ₽",
    desc: "900 ₽ за занятие · 2 месяца",
    features: ["Любое направление", "2 месяца действия", "Перенос занятий", "Все пропсы"],
    highlight: true,
  },
  {
    name: "16 занятий",
    price: "12 800 ₽",
    desc: "800 ₽ за занятие · 3 месяца",
    features: ["Любое направление", "3 месяца действия", "Перенос занятий", "Приоритетная запись"],
    highlight: false,
  },
];

const REVIEWS = [
  {
    name: "Светлана О.",
    text: "Пришла с хроническими болями в пояснице. После 2 месяцев занятий по программе «Здоровая спина» боли ушли. Юля очень внимательно следит за выравниванием — каждый раз новые открытия.",
    since: "Практикую 7 месяцев",
    dir: "Здоровая спина",
  },
  {
    name: "Анна М.",
    text: "«Женское здоровье» — это то, чего мне не хватало годами. Цикл выровнялся, настроение стабильнее. Юлия объясняет связь поз с физиологией, это меняет отношение к практике.",
    since: "Практикую 1 год",
    dir: "Женское здоровье",
  },
  {
    name: "Мария В.",
    text: "Занятия по раскрытию тела — медитативный опыт. Долгие удержания поначалу пугали, сейчас это моё любимое время недели. Тело стало другим — живым и свободным.",
    since: "Практикую 4 месяца",
    dir: "Раскрытие тела",
  },
  {
    name: "Екатерина Р.",
    text: "Метод Айенгара — это про точность, а не про скорость. Юля передаёт именно это. Каждая поза — исследование. Рекомендую всем, кто ищет осознанную практику.",
    since: "Практикую 2 года",
    dir: "Здоровая спина",
  },
];

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const CLASS_COLORS: Record<string, string> = {
  "Женское здоровье": "bg-rose-50 text-rose-700 border-rose-200",
  "Здоровая спина": "bg-amber-50 text-amber-700 border-amber-200",
  "Раскрытие тела": "bg-teal-50 text-teal-700 border-teal-200",
};

interface ScheduleSlot {
  day: string;
  time: string;
  class: string;
  spots: number;
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState("Пн");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<ScheduleSlot | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

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
          <a href="#" className="flex flex-col leading-none">
            <span className="font-cormorant text-xl font-light tracking-[0.12em] text-foreground">ЮЛИЯ ПАНФИЛОВА</span>
            <span className="font-golos text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-0.5">Йога по методу Айенгара</span>
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
            className="hidden md:inline-flex font-golos text-sm bg-primary text-primary-foreground px-5 py-2 tracking-wide hover:opacity-90 transition-opacity"
          >
            Записаться
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} className="text-foreground" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-golos text-sm font-light text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="font-golos text-sm bg-primary text-primary-foreground px-5 py-2.5 text-center tracking-wide"
            >
              Записаться
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/30 to-foreground/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="font-golos text-xs tracking-[0.3em] text-white/60 uppercase mb-6">
              Метод Айенгара · Москва
            </p>
            <h1 className="font-cormorant text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6">
              Йога, которая<br />
              <em className="not-italic font-normal">меняет тело</em><br />
              изнутри
            </h1>
            <p className="font-golos text-base md:text-lg font-light text-white/75 mb-10 max-w-lg leading-relaxed">
              Три направления — женское здоровье, здоровая спина, раскрытие тела. 
              Точная работа с выравниванием. Индивидуальный подход Юлии Панфиловой.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#classes"
                className="font-golos text-sm bg-white text-foreground px-8 py-3.5 tracking-wide hover:bg-white/90 transition-all"
              >
                Выбрать направление
              </a>
              <a
                href="#about"
                className="font-golos text-sm border border-white/50 text-white px-8 py-3.5 tracking-wide hover:border-white transition-all"
              >
                Об Юлии
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-50">
          <span className="font-golos text-xs tracking-widest text-white rotate-90 mb-2">SCROLL</span>
          <div className="w-px h-16 bg-white/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* METHOD STRIP */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-primary-foreground/20">
            {[
              { num: "01", title: "Точное выравнивание", text: "Каждая поза разбирается детально — от стопы до макушки. Проп помогает телу найти правильное положение без усилия." },
              { num: "02", title: "Пропсы Айенгара", text: "Блоки, ремни, болстеры, одеяла, верёвки — делают практику доступной и терапевтически точной для любого тела." },
              { num: "03", title: "Терапевтический эффект", text: "Метод работает с причиной дискомфорта, а не симптомом. Результат накапливается и остаётся надолго." },
            ].map((item) => (
              <div key={item.num} className="md:px-10 first:pl-0 last:pr-0">
                <div className="font-cormorant text-4xl font-light opacity-30 mb-3">{item.num}</div>
                <div className="font-cormorant text-xl font-light mb-2">{item.title}</div>
                <div className="font-golos text-sm font-light opacity-70 leading-relaxed">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section id="classes" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Направления</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light">Три пути к здоровью</h2>
          </div>

          <div className="space-y-4">
            {CLASSES.map((cls) => {
              const isOpen = expandedClass === cls.id;
              return (
                <div
                  key={cls.id}
                  className={`border ${cls.border} bg-gradient-to-br ${cls.color} transition-all duration-500`}
                >
                  <button
                    className="w-full text-left px-8 py-8 flex items-start justify-between gap-6"
                    onClick={() => setExpandedClass(isOpen ? null : cls.id)}
                  >
                    <div className="flex items-start gap-6 flex-1">
                      <div className={`mt-1 flex-shrink-0 ${cls.accent}`}>
                        <Icon name={cls.icon} size={24} fallback="Star" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline gap-3 mb-2">
                          <h3 className="font-cormorant text-2xl md:text-3xl font-light">{cls.name}</h3>
                          <span className="font-golos text-xs tracking-widest text-muted-foreground uppercase">{cls.tag}</span>
                        </div>
                        <p className="font-golos text-sm font-light text-muted-foreground leading-relaxed max-w-2xl">{cls.desc}</p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-end gap-3">
                      <span className="font-cormorant text-lg font-light text-muted-foreground">{cls.duration}</span>
                      <Icon
                        name={isOpen ? "ChevronUp" : "ChevronDown"}
                        size={18}
                        className="text-muted-foreground"
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-8 pb-8 border-t border-border/30 pt-6 animate-fade-in">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-12">
                        {cls.details.map((d) => (
                          <div key={d} className="flex items-start gap-3">
                            <div className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 ${cls.accent.replace("text-", "bg-")}`} />
                            <span className="font-golos text-sm font-light text-foreground/80">{d}</span>
                          </div>
                        ))}
                      </div>
                      <div className="ml-12 mt-6">
                        <a
                          href="#schedule"
                          className="font-golos text-sm bg-primary text-primary-foreground px-6 py-2.5 inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                        >
                          Записаться
                          <Icon name="ArrowRight" size={14} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-golos text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Расписание</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light">Занятия на неделю</h2>
          </div>

          {/* Day tabs */}
          <div className="flex gap-1 mb-8 border-b border-border overflow-x-auto">
            {DAYS.map((day) => {
              const hasClasses = SCHEDULE.some((s) => s.day === day);
              return (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`font-golos text-sm px-5 py-3 flex-shrink-0 transition-all border-b-2 -mb-px ${
                    activeDay === day
                      ? "border-primary text-foreground font-normal"
                      : `border-transparent text-muted-foreground hover:text-foreground ${!hasClasses ? "opacity-40" : ""}`
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {filteredSchedule.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground font-golos font-light">
              В этот день занятий нет
            </div>
          ) : (
            <div className="space-y-3">
              {filteredSchedule.map((slot, i) => {
                const colorClass = CLASS_COLORS[slot.class] || "bg-stone-50 text-stone-700 border-stone-200";
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-background px-6 py-5 border border-border hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center gap-6">
                      <span className="font-cormorant text-2xl font-light text-muted-foreground w-16">{slot.time}</span>
                      <div>
                        <span className={`inline-block font-golos text-xs px-2.5 py-0.5 border rounded-sm mb-1 ${colorClass}`}>
                          {slot.class}
                        </span>
                        <div className="font-golos text-xs text-muted-foreground">
                          {slot.spots === 0 ? "Мест нет" : `Осталось мест: ${slot.spots}`}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleBook(slot)}
                      disabled={slot.spots === 0}
                      className={`font-golos text-sm px-6 py-2.5 transition-all ${
                        slot.spots === 0
                          ? "text-muted-foreground border border-border cursor-not-allowed opacity-50"
                          : "bg-primary text-primary-foreground hover:opacity-90 group-hover:px-8"
                      }`}
                    >
                      {slot.spots === 0 ? "Занято" : "Записаться"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-golos text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Об инструкторе</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8">
                Юлия<br />Панфилова
              </h2>
              <div className="space-y-5 font-golos font-light text-muted-foreground leading-relaxed">
                <p>
                  Сертифицированный преподаватель йоги по методу Айенгара. 
                  Более 10 лет личной практики и 6 лет преподавания. Прошла обучение 
                  у ведущих учителей в России и Индии (Пуна, институт Айенгара).
                </p>
                <p>
                  Специализируется на работе с женским здоровьем и терапевтическими 
                  программами для спины. Считает, что йога — это прежде всего диалог 
                  с собственным телом, а не соревнование с чужими возможностями.
                </p>
                <p>
                  Каждое занятие строится индивидуально: Юлия видит и корректирует 
                  каждого в группе, предлагает варианты поз под особенности тела.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  { val: "10+", label: "лет практики" },
                  { val: "6", label: "лет преподавания" },
                  { val: "200+", label: "учеников" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-cormorant text-4xl font-light text-primary">{stat.val}</div>
                    <div className="font-golos text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-golos text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">Метод Айенгара — это</div>
              {[
                { icon: "Focus", title: "Точность в каждой позе", text: "Б.К.С. Айенгар разработал систему выравнивания, где важна каждая деталь — положение пальцев, угол бедра, направление взгляда." },
                { icon: "Package", title: "Пропсы как инструмент", text: "Вспомогательные предметы — не костыли, а способ дать телу правильный опыт ощущений без компромиссов с выравниванием." },
                { icon: "Activity", title: "Терапевтический подход", text: "Метод признан в медицинском сообществе. Используется при реабилитации после травм, при хронических заболеваниях." },
                { icon: "Infinity", title: "Практика без ограничений по возрасту", text: "Айенгар преподавал до 95 лет. Метод адаптируется под любое тело и любой возраст." },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 p-5 border border-border hover:border-primary/30 transition-colors">
                  <div className="flex-shrink-0 mt-0.5 text-accent">
                    <Icon name={item.icon} size={18} fallback="Star" />
                  </div>
                  <div>
                    <div className="font-cormorant text-lg font-light mb-1">{item.title}</div>
                    <div className="font-golos text-sm font-light text-muted-foreground leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Стоимость</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light">Абонементы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICES.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 flex flex-col relative ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border hover:border-primary/30"
                } transition-all`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 font-golos text-xs px-3 py-1 bg-accent text-white tracking-wide">
                    Популярный
                  </div>
                )}
                <div className="font-golos text-xs tracking-widest uppercase mb-4 opacity-60">{plan.name}</div>
                <div className="font-cormorant text-4xl font-light mb-1">{plan.price}</div>
                <div className={`font-golos text-xs mb-8 ${plan.highlight ? "opacity-60" : "text-muted-foreground"}`}>
                  {plan.desc}
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Icon
                        name="Check"
                        size={14}
                        className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "opacity-70" : "text-accent"}`}
                      />
                      <span className={`font-golos text-sm font-light ${plan.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setSelectedSlot(null);
                    setBookingOpen(true);
                    setSubmitted(false);
                    setForm({ name: "", phone: "", comment: "" });
                  }}
                  className={`font-golos text-sm py-3 tracking-wide transition-all ${
                    plan.highlight
                      ? "bg-primary-foreground text-primary hover:opacity-90"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>

          <p className="mt-6 font-golos text-xs text-muted-foreground text-center">
            Все абонементы действуют на любое из трёх направлений. Перенос занятий при уведомлении за 12 часов.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-golos text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">Отзывы</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light">Что говорят ученики</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((review, i) => (
              <div key={i} className="p-8 border border-border hover:border-primary/30 transition-all group">
                <div className="font-cormorant text-4xl font-light text-muted-foreground/30 mb-4 leading-none">"</div>
                <p className="font-golos text-sm font-light leading-relaxed text-foreground/80 mb-6">
                  {review.text}
                </p>
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <div className="font-cormorant text-lg font-light">{review.name}</div>
                    <div className="font-golos text-xs text-muted-foreground">{review.since}</div>
                  </div>
                  <span className={`font-golos text-xs px-2.5 py-1 rounded-sm border ${CLASS_COLORS[review.dir] || ""}`}>
                    {review.dir}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="font-golos text-xs tracking-[0.3em] opacity-50 uppercase mb-3">Контакты</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-10">Найти студию</h2>
              <div className="space-y-7">
                {[
                  { icon: "MapPin", title: "Адрес", text: "Москва, ул. Примерная, д. 12\nст. м. Арбатская" },
                  { icon: "Phone", title: "Телефон", text: "+7 (999) 123-45-67" },
                  { icon: "Mail", title: "Email", text: "julia@panfilova-yoga.ru" },
                  { icon: "Clock", title: "Часы работы", text: "Пн–Пт: 8:00–21:00\nСб–Вс: 9:00–17:00" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <Icon name={item.icon} size={18} className="text-primary-foreground/50 flex-shrink-0 mt-0.5" fallback="Info" />
                    <div>
                      <div className="font-cormorant text-xl font-light mb-1">{item.title}</div>
                      <div className="font-golos text-sm font-light opacity-70 whitespace-pre-line">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="font-golos text-xs tracking-[0.2em] opacity-50 uppercase mb-6">Задать вопрос</div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); }}>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-transparent border border-primary-foreground/20 px-4 py-3 font-golos text-sm font-light placeholder:text-primary-foreground/30 text-primary-foreground focus:outline-none focus:border-primary-foreground/60 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-transparent border border-primary-foreground/20 px-4 py-3 font-golos text-sm font-light placeholder:text-primary-foreground/30 text-primary-foreground focus:outline-none focus:border-primary-foreground/60 transition-colors"
                />
                <div className="flex gap-2 flex-wrap">
                  {["Женское здоровье", "Здоровая спина", "Раскрытие тела"].map((dir) => (
                    <button
                      key={dir}
                      type="button"
                      className="font-golos text-xs border border-primary-foreground/20 px-3 py-1.5 hover:border-primary-foreground/60 transition-colors text-primary-foreground/70 hover:text-primary-foreground"
                    >
                      {dir}
                    </button>
                  ))}
                </div>
                <textarea
                  placeholder="Вопрос или пожелания"
                  rows={3}
                  className="w-full bg-transparent border border-primary-foreground/20 px-4 py-3 font-golos text-sm font-light placeholder:text-primary-foreground/30 text-primary-foreground focus:outline-none focus:border-primary-foreground/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full font-golos text-sm bg-primary-foreground text-primary py-3.5 tracking-wide hover:opacity-90 transition-opacity"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/60 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-cormorant text-lg font-light tracking-wide text-background/80">
            ЮЛИЯ ПАНФИЛОВА
          </div>
          <div className="font-golos text-xs tracking-wider">
            Йога по методу Айенгара · Москва
          </div>
          <div className="font-golos text-xs">
            © 2024
          </div>
        </div>
      </footer>

      {/* BOOKING MODAL */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm">
          <div className="bg-background max-w-md w-full p-8 relative animate-fade-in-up shadow-2xl">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={18} />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-accent mb-4">
                  <Icon name="CheckCircle" size={40} className="mx-auto" />
                </div>
                <h3 className="font-cormorant text-3xl font-light mb-2">Заявка принята</h3>
                <p className="font-golos text-sm font-light text-muted-foreground">
                  Юлия свяжется с вами в ближайшее время для подтверждения.
                </p>
                <button
                  onClick={() => setBookingOpen(false)}
                  className="mt-6 font-golos text-sm bg-primary text-primary-foreground px-8 py-3 hover:opacity-90 transition-opacity"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="font-cormorant text-2xl font-light mb-1">Запись на занятие</h3>
                  {selectedSlot && (
                    <div className="font-golos text-sm text-muted-foreground">
                      {selectedSlot.day} · {selectedSlot.time} · {selectedSlot.class}
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="font-golos text-xs text-muted-foreground tracking-wide uppercase block mb-1.5">Имя</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border px-4 py-3 font-golos text-sm focus:outline-none focus:border-primary transition-colors bg-background"
                      placeholder="Как вас зовут"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-xs text-muted-foreground tracking-wide uppercase block mb-1.5">Телефон</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border px-4 py-3 font-golos text-sm focus:outline-none focus:border-primary transition-colors bg-background"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="font-golos text-xs text-muted-foreground tracking-wide uppercase block mb-1.5">Комментарий</label>
                    <textarea
                      rows={2}
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      className="w-full border border-border px-4 py-3 font-golos text-sm focus:outline-none focus:border-primary transition-colors bg-background resize-none"
                      placeholder="Травмы, особенности здоровья..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-golos text-sm bg-primary text-primary-foreground py-3.5 tracking-wide hover:opacity-90 transition-opacity mt-2"
                  >
                    Отправить заявку
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
