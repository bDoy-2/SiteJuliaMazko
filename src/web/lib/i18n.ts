export type Lang = "ru" | "uk" | "en";

export const translations = {
  ru: {
    nav: {
      about: "Обо мне",
      products: "Продукты",
      marathons: "Марафоны",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    hero: {
      badge: "Сертифицированный консультант Herbalife",
      title: "Юлія",
      subtitle: "Твой путь к здоровью,\nстройности и энергии",
      description:
        "Супервайзер компании Herbalife Nutrition. Помогаю людям обрести здоровье, стройность и жизненную энергию с помощью проверенных продуктов и персональных программ.",
      cta: "Начать трансформацию",
      ctaSecondary: "Узнать больше",
    },
    about: {
      title: "Обо мне",
      text1:
        "Привет! Меня зовут Юлія, я сертифицированный консультант и супервайзер компании Herbalife Nutrition.",
      text2:
        "Моя миссия — помочь каждому клиенту достичь своих целей: похудеть, набрать мышечную массу или просто почувствовать себя здоровее и энергичнее.",
      text3:
        "Я верю, что правильное питание — это основа красивого тела и счастливой жизни. Вместе мы найдём оптимальную программу именно для тебя.",
      fact1: "Лет опыта",
      fact2: "Довольных клиентов",
      fact3: "Программ",
      fact4: "Сертификатов",
    },
    products: {
      title: "Продукты Herbalife",
      subtitle:
        "Качественное питание для вашего здоровья и красоты",
      items: [
        {
          name: "Формула 1 — Коктейль",
          desc: "Сбалансированный питательный коктейль-замена приёма пищи с высококачественным белком, витаминами и минералами.",
          tag: "Хит продаж",
        },
        {
          name: "Чайный концентрат",
          desc: "Бодрящий травяной чай для повышения энергии и ускорения метаболизма. Доступен в нескольких вкусах.",
          tag: "Энергия",
        },
        {
          name: "Алоэ вера концентрат",
          desc: "Натуральный напиток на основе алоэ для поддержки пищеварения и оздоровления организма изнутри.",
          tag: "Детокс",
        },
        {
          name: "Протеиновые батончики",
          desc: "Вкусный перекус с высоким содержанием белка. Идеален для поддержания формы и активного образа жизни.",
          tag: "Перекус",
        },
      ],
      btn: "Узнать подробнее",
    },
    marathons: {
      title: "Марафоны",
      subtitle: "Онлайн-программы с поддержкой и результатом",
      items: [
        {
          emoji: "🏃‍♀️",
          name: "Марафон стройности",
          duration: "21 день",
          desc: "Комплексная программа для достижения стройной фигуры. Персональный план питания, тренировки и ежедневная поддержка куратора.",
          features: [
            "Персональный план питания",
            "Онлайн-поддержка 24/7",
            "Чат с участниками",
            "Проверенные рецепты",
          ],
          tag: "Популярный",
          tagColor: "purple",
        },
        {
          emoji: "💪",
          name: "Марафон мышечной массы",
          duration: "30 дней",
          desc: "Программа для набора качественной мышечной массы с правильным питанием и протеиновыми продуктами Herbalife.",
          features: [
            "Протеиновый план питания",
            "Тренировочный план",
            "Спортивное питание Herbalife",
            "Прогресс-контроль",
          ],
          tag: "Новый",
          tagColor: "green",
        },
        {
          emoji: "🔥",
          name: "Марафон похудения",
          duration: "28 дней",
          desc: "Эффективная программа снижения веса без голодания. Сбалансированное питание, дефицит калорий и детокс.",
          features: [
            "Детокс-программа",
            "Контроль калорий",
            "Мотивационные сессии",
            "Результат -5 до -15 кг",
          ],
          tag: "Хит",
          tagColor: "orange",
        },
      ],
      btn: "Записаться",
    },
    reviews: {
      title: "Отзывы клиентов",
      subtitle: "Реальные результаты реальных людей",
      items: [
        {
          name: "Анна К.",
          text: "За 3 недели марафона стройности я похудела на 6 кг! Юлія всегда была на связи, поддерживала и мотивировала. Продукты Herbalife — вкусные и дают ощущение сытости.",
          result: "-6 кг за 3 недели",
          stars: 5,
        },
        {
          name: "Марія С.",
          text: "Наконец нашла программу, которая работает! После марафона похудения чувствую себя лёгкой, энергичной. Кожа стала лучше, сон нормализовался. Советую всем!",
          result: "-8 кг за месяц",
          stars: 5,
        },
        {
          name: "Олексій Т.",
          text: "Марафон мышечной массы — огонь! Прибавил 4 кг чистых мышц. Протеиновые коктейли Herbalife реально помогают восстановлению после тренировок.",
          result: "+4 кг мышц",
          stars: 5,
        },
        {
          name: "Ірина В.",
          text: "Юлія — профессионал своего дела. Подобрала индивидуальную программу, объяснила как правильно использовать продукты. Результат превзошёл все ожидания!",
          result: "-10 кг за 2 месяца",
          stars: 5,
        },
        {
          name: "Наталія П.",
          text: "Попробовала чайный концентрат и алоэ — не могу представить утро без них! Энергии стало намного больше, пищеварение улучшилось. Рекомендую!",
          result: "Больше энергии",
          stars: 5,
        },
        {
          name: "Дмитро М.",
          text: "Хотел набрать вес и мышцы. С помощью Юлії составил правильный план питания с продуктами Herbalife. Через 2 месяца — другой человек!",
          result: "+7 кг мышечной массы",
          stars: 5,
        },
      ],
    },
    contact: {
      title: "Свяжитесь со мной",
      subtitle:
        "Готова ответить на все вопросы и подобрать программу именно для вас",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваш Email",
      messagePlaceholder: "Ваш вопрос или пожелания...",
      btn: "Отправить сообщение",
      instagram: "Instagram",
      telegram: "Telegram",
      successTitle: "Сообщение отправлено!",
      successText: "Юлія свяжется с вами в ближайшее время.",
      orContact: "Или напишите напрямую:",
    },
    footer: {
      rights: "Все права защищены",
      consultant: "Независимый дистрибьютор Herbalife Nutrition",
    },
  },
  uk: {
    nav: {
      about: "Про мене",
      products: "Продукти",
      marathons: "Марафони",
      reviews: "Відгуки",
      contact: "Контакти",
    },
    hero: {
      badge: "Сертифікований консультант Herbalife",
      title: "Юлія",
      subtitle: "Твій шлях до здоров'я,\nстрункості та енергії",
      description:
        "Супервайзер компанії Herbalife Nutrition. Допомагаю людям знайти здоров'я, стрункість і життєву енергію за допомогою перевірених продуктів та персональних програм.",
      cta: "Розпочати трансформацію",
      ctaSecondary: "Дізнатися більше",
    },
    about: {
      title: "Про мене",
      text1:
        "Привіт! Мене звуть Юлія, я сертифікований консультант та супервайзер компанії Herbalife Nutrition.",
      text2:
        "Моя місія — допомогти кожному клієнту досягти своїх цілей: схуднути, набрати м'язову масу або просто почуватися здоровіше та енергійніше.",
      text3:
        "Я вірю, що правильне харчування — це основа гарного тіла та щасливого життя. Разом ми знайдемо оптимальну програму саме для тебе.",
      fact1: "Років досвіду",
      fact2: "Задоволених клієнтів",
      fact3: "Програм",
      fact4: "Сертифікатів",
    },
    products: {
      title: "Продукти Herbalife",
      subtitle: "Якісне харчування для вашого здоров'я та краси",
      items: [
        {
          name: "Формула 1 — Коктейль",
          desc: "Збалансований поживний коктейль-замінник їжі з високоякісним білком, вітамінами та мінералами.",
          tag: "Хіт продажів",
        },
        {
          name: "Чайний концентрат",
          desc: "Бадьорий трав'яний чай для підвищення енергії та прискорення метаболізму. Доступний у кількох смаках.",
          tag: "Енергія",
        },
        {
          name: "Концентрат алое вера",
          desc: "Натуральний напій на основі алое для підтримки травлення та оздоровлення організму зсередини.",
          tag: "Детокс",
        },
        {
          name: "Протеїнові батончики",
          desc: "Смачний перекус з високим вмістом білка. Ідеальний для підтримання форми та активного способу життя.",
          tag: "Перекус",
        },
      ],
      btn: "Дізнатися детальніше",
    },
    marathons: {
      title: "Марафони",
      subtitle: "Онлайн-програми з підтримкою та результатом",
      items: [
        {
          emoji: "🏃‍♀️",
          name: "Марафон стрункості",
          duration: "21 день",
          desc: "Комплексна програма для досягнення стрункої фігури. Персональний план харчування, тренування та щоденна підтримка куратора.",
          features: [
            "Персональний план харчування",
            "Онлайн-підтримка 24/7",
            "Чат з учасниками",
            "Перевірені рецепти",
          ],
          tag: "Популярний",
          tagColor: "purple",
        },
        {
          emoji: "💪",
          name: "Марафон м'язової маси",
          duration: "30 днів",
          desc: "Програма для набору якісної м'язової маси з правильним харчуванням та протеїновими продуктами Herbalife.",
          features: [
            "Протеїновий план харчування",
            "Тренувальний план",
            "Спортивне харчування Herbalife",
            "Контроль прогресу",
          ],
          tag: "Новий",
          tagColor: "green",
        },
        {
          emoji: "🔥",
          name: "Марафон схуднення",
          duration: "28 днів",
          desc: "Ефективна програма зниження ваги без голодування. Збалансоване харчування, дефіцит калорій та детокс.",
          features: [
            "Детокс-програма",
            "Контроль калорій",
            "Мотиваційні сесії",
            "Результат -5 до -15 кг",
          ],
          tag: "Хіт",
          tagColor: "orange",
        },
      ],
      btn: "Записатись",
    },
    reviews: {
      title: "Відгуки клієнтів",
      subtitle: "Реальні результати реальних людей",
      items: [
        {
          name: "Анна К.",
          text: "За 3 тижні марафону стрункості я схудла на 6 кг! Юлія завжди була на зв'язку, підтримувала та мотивувала. Продукти Herbalife — смачні та дають відчуття ситості.",
          result: "-6 кг за 3 тижні",
          stars: 5,
        },
        {
          name: "Марія С.",
          text: "Нарешті знайшла програму, яка працює! Після марафону схуднення почуваюся легкою, енергійною. Шкіра стала кращою, сон нормалізувався. Раджу всім!",
          result: "-8 кг за місяць",
          stars: 5,
        },
        {
          name: "Олексій Т.",
          text: "Марафон м'язової маси — вогонь! Набрав 4 кг чистих м'язів. Протеїнові коктейлі Herbalife реально допомагають відновленню після тренувань.",
          result: "+4 кг м'язів",
          stars: 5,
        },
        {
          name: "Ірина В.",
          text: "Юлія — професіонал своєї справи. Підібрала індивідуальну програму, пояснила як правильно використовувати продукти. Результат перевершив усі очікування!",
          result: "-10 кг за 2 місяці",
          stars: 5,
        },
        {
          name: "Наталія П.",
          text: "Спробувала чайний концентрат та алое — не можу уявити ранок без них! Енергії стало набагато більше, травлення покращилося. Рекомендую!",
          result: "Більше енергії",
          stars: 5,
        },
        {
          name: "Дмитро М.",
          text: "Хотів набрати вагу та м'язи. За допомогою Юлії склав правильний план харчування з продуктами Herbalife. Через 2 місяці — інша людина!",
          result: "+7 кг м'язової маси",
          stars: 5,
        },
      ],
    },
    contact: {
      title: "Зв'яжіться зі мною",
      subtitle:
        "Готова відповісти на всі запитання та підібрати програму саме для вас",
      namePlaceholder: "Ваше ім'я",
      emailPlaceholder: "Ваш Email",
      messagePlaceholder: "Ваше питання або побажання...",
      btn: "Надіслати повідомлення",
      instagram: "Instagram",
      telegram: "Telegram",
      successTitle: "Повідомлення надіслано!",
      successText: "Юлія зв'яжеться з вами найближчим часом.",
      orContact: "Або напишіть напряму:",
    },
    footer: {
      rights: "Всі права захищені",
      consultant: "Незалежний дистриб'ютор Herbalife Nutrition",
    },
  },
  en: {
    nav: {
      about: "About",
      products: "Products",
      marathons: "Marathons",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      badge: "Certified Herbalife Consultant",
      title: "Yulia",
      subtitle: "Your path to health,\nslimness and energy",
      description:
        "Herbalife Nutrition Supervisor. I help people achieve health, slim figure and vitality with proven products and personal programs.",
      cta: "Start your transformation",
      ctaSecondary: "Learn more",
    },
    about: {
      title: "About Me",
      text1:
        "Hi! My name is Yulia, I am a certified consultant and supervisor at Herbalife Nutrition.",
      text2:
        "My mission is to help every client reach their goals: lose weight, gain muscle mass, or simply feel healthier and more energetic.",
      text3:
        "I believe that proper nutrition is the foundation of a beautiful body and a happy life. Together we will find the optimal program just for you.",
      fact1: "Years of experience",
      fact2: "Happy clients",
      fact3: "Programs",
      fact4: "Certificates",
    },
    products: {
      title: "Herbalife Products",
      subtitle: "Quality nutrition for your health and beauty",
      items: [
        {
          name: "Formula 1 Shake",
          desc: "Balanced meal replacement shake with high quality protein, vitamins and minerals.",
          tag: "Best Seller",
        },
        {
          name: "Herbal Tea Concentrate",
          desc: "Energizing herbal tea to boost energy and speed up metabolism. Available in several flavors.",
          tag: "Energy",
        },
        {
          name: "Aloe Vera Concentrate",
          desc: "Natural aloe-based drink to support digestion and inner health.",
          tag: "Detox",
        },
        {
          name: "Protein Bars",
          desc: "Tasty high-protein snack. Ideal for staying fit and an active lifestyle.",
          tag: "Snack",
        },
      ],
      btn: "Learn more",
    },
    marathons: {
      title: "Marathons",
      subtitle: "Online programs with support and real results",
      items: [
        {
          emoji: "🏃‍♀️",
          name: "Slimness Marathon",
          duration: "21 days",
          desc: "A comprehensive program to achieve a slim figure. Personal nutrition plan, workouts and daily mentor support.",
          features: [
            "Personal nutrition plan",
            "Online support 24/7",
            "Group chat",
            "Proven recipes",
          ],
          tag: "Popular",
          tagColor: "purple",
        },
        {
          emoji: "💪",
          name: "Muscle Mass Marathon",
          duration: "30 days",
          desc: "Program for gaining quality muscle mass with proper nutrition and Herbalife protein products.",
          features: [
            "Protein nutrition plan",
            "Training plan",
            "Herbalife sports nutrition",
            "Progress tracking",
          ],
          tag: "New",
          tagColor: "green",
        },
        {
          emoji: "🔥",
          name: "Weight Loss Marathon",
          duration: "28 days",
          desc: "Effective weight loss program without starvation. Balanced nutrition, caloric deficit and detox.",
          features: [
            "Detox program",
            "Calorie control",
            "Motivation sessions",
            "Result -5 to -15 kg",
          ],
          tag: "Hit",
          tagColor: "orange",
        },
      ],
      btn: "Sign up",
    },
    reviews: {
      title: "Client Reviews",
      subtitle: "Real results of real people",
      items: [
        {
          name: "Anna K.",
          text: "In 3 weeks of the slimness marathon I lost 6 kg! Yulia was always available, supportive and motivating. Herbalife products are delicious and satisfying.",
          result: "-6 kg in 3 weeks",
          stars: 5,
        },
        {
          name: "Maria S.",
          text: "Finally found a program that works! After the weight loss marathon I feel light and energetic. Skin improved, sleep normalized. Highly recommend!",
          result: "-8 kg in a month",
          stars: 5,
        },
        {
          name: "Alex T.",
          text: "The muscle mass marathon is amazing! Gained 4 kg of pure muscle. Herbalife protein shakes really help with post-workout recovery.",
          result: "+4 kg muscle",
          stars: 5,
        },
        {
          name: "Irina V.",
          text: "Yulia is a true professional. She created an individual program and explained how to use the products correctly. Results exceeded all expectations!",
          result: "-10 kg in 2 months",
          stars: 5,
        },
        {
          name: "Natalia P.",
          text: "Tried the herbal tea concentrate and aloe — can't imagine my morning without them! Much more energy, digestion improved. Highly recommend!",
          result: "More energy",
          stars: 5,
        },
        {
          name: "Dmitry M.",
          text: "Wanted to gain weight and muscle. With Yulia's help I built the right nutrition plan with Herbalife products. After 2 months — a different person!",
          result: "+7 kg muscle mass",
          stars: 5,
        },
      ],
    },
    contact: {
      title: "Contact Me",
      subtitle: "Ready to answer all questions and find the right program for you",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your question or message...",
      btn: "Send message",
      instagram: "Instagram",
      telegram: "Telegram",
      successTitle: "Message sent!",
      successText: "Yulia will contact you shortly.",
      orContact: "Or write directly:",
    },
    footer: {
      rights: "All rights reserved",
      consultant: "Independent Herbalife Nutrition Distributor",
    },
  },
} as const;
