import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Корпоративный сайт',
    category: 'Web',
    image: 'https://cdn.poehali.dev/projects/5460ec37-a232-437e-961a-5ea9a8bad80e/files/1ca79fe5-9a59-4fdd-99d0-978c9224542b.jpg',
    description: 'Минималистичный дизайн корпоративного сайта с акцентом на контент'
  },
  {
    id: 2,
    title: 'Мобильное приложение',
    category: 'Mobile',
    image: 'https://cdn.poehali.dev/projects/5460ec37-a232-437e-961a-5ea9a8bad80e/files/bf1191a0-924a-4911-80aa-7da7112a61d8.jpg',
    description: 'Интерфейс приложения для iOS с чистым UX/UI'
  },
  {
    id: 3,
    title: 'Фирменный стиль',
    category: 'Branding',
    image: 'https://cdn.poehali.dev/projects/5460ec37-a232-437e-961a-5ea9a8bad80e/files/85405c19-c218-4437-a385-6e642a4ff9d1.jpg',
    description: 'Разработка айдентики и брендбука для стартапа'
  },
  {
    id: 4,
    title: 'E-commerce платформа',
    category: 'Web',
    image: 'https://cdn.poehali.dev/projects/5460ec37-a232-437e-961a-5ea9a8bad80e/files/1ca79fe5-9a59-4fdd-99d0-978c9224542b.jpg',
    description: 'Интернет-магазин с продуманной навигацией'
  },
  {
    id: 5,
    title: 'Дизайн банковского приложения',
    category: 'Mobile',
    image: 'https://cdn.poehali.dev/projects/5460ec37-a232-437e-961a-5ea9a8bad80e/files/bf1191a0-924a-4911-80aa-7da7112a61d8.jpg',
    description: 'Современный финтех дизайн с фокусом на безопасность'
  },
  {
    id: 6,
    title: 'Ребрендинг компании',
    category: 'Branding',
    image: 'https://cdn.poehali.dev/projects/5460ec37-a232-437e-961a-5ea9a8bad80e/files/85405c19-c218-4437-a385-6e642a4ff9d1.jpg',
    description: 'Полное обновление визуального стиля бренда'
  }
];

const services = [
  {
    icon: 'Layout',
    title: 'Веб-дизайн',
    description: 'Создание современных и функциональных сайтов с акцентом на UX'
  },
  {
    icon: 'Smartphone',
    title: 'Мобильный дизайн',
    description: 'Разработка интерфейсов для iOS и Android приложений'
  },
  {
    icon: 'Palette',
    title: 'Брендинг',
    description: 'Фирменный стиль, логотипы и визуальная айдентика'
  },
  {
    icon: 'Users',
    title: 'UX Исследования',
    description: 'Анализ пользовательского опыта и оптимизация интерфейсов'
  }
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const filters = ['All', 'Web', 'Mobile', 'Branding'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Портфолио</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm hover:text-accent transition-colors">Главная</a>
              <a href="#about" className="text-sm hover:text-accent transition-colors">Обо мне</a>
              <a href="#portfolio" className="text-sm hover:text-accent transition-colors">Портфолио</a>
              <a href="#services" className="text-sm hover:text-accent transition-colors">Услуги</a>
              <a href="#contact" className="text-sm hover:text-accent transition-colors">Контакты</a>
            </div>
            <Button size="sm" className="hidden md:inline-flex">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <div className="container mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Веб-дизайнер<br />и UX специалист
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаю минималистичные и функциональные интерфейсы, которые решают задачи бизнеса
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="font-medium">
                Посмотреть работы
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Связаться
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Обо мне</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Привет! Я веб-дизайнер с 5-летним опытом создания современных и функциональных интерфейсов. 
                Специализируюсь на минималистичном дизайне с акцентом на пользовательский опыт.
              </p>
              <p>
                Работал с компаниями из различных сфер: от стартапов до крупных корпораций. 
                Мой подход основан на глубоком понимании потребностей пользователей и бизнес-целей проекта.
              </p>
              <div className="flex gap-4 justify-center pt-8">
                <Button variant="outline" size="icon">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="outline" size="icon">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Портфолио</h2>
            
            <div className="flex justify-center gap-3 mb-12 flex-wrap">
              {filters.map(filter => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                  className="min-w-[100px]"
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Button 
                        variant="secondary" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Icon name="Eye" size={16} className="mr-2" />
                        Посмотреть
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-xs text-accent font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 px-6 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Услуги</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name={service.icon} size={28} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 text-center">Свяжитесь со мной</h2>
            <p className="text-center text-muted-foreground mb-12">
              Готов обсудить ваш проект и помочь воплотить идеи в жизнь
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 font-medium">
                Отправить сообщение
              </Button>
            </form>

            <div className="flex justify-center gap-6 mt-12 pt-12 border-t">
              <a href="mailto:hello@designer.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={20} />
                <span className="text-sm">hello@designer.com</span>
              </a>
              <a href="tel:+79991234567" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Phone" size={20} />
                <span className="text-sm">+7 (999) 123-45-67</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-400">© 2024 Портфолио веб-дизайнера. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
