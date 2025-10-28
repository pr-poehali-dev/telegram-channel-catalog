import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  'Все категории', 'Бизнес', 'Технологии', 'Маркетинг', 'Образование', 
  'Новости', 'Развлечения', 'Крипто', 'Дизайн', 'Lifestyle'
];

const geoFilters = ['Все регионы', 'Россия', 'СНГ', 'Мир', 'Европа', 'Азия'];
const sizeFilters = ['Любой размер', '< 1K', '1K - 10K', '10K - 100K', '100K+'];

const channels = [
  {
    id: 1,
    name: 'Tech Daily',
    username: '@techdaily',
    description: 'Ежедневные новости технологий, стартапов и инноваций',
    subscribers: 125000,
    engagement: 8.5,
    category: 'Технологии',
    geo: 'Россия',
    verified: true,
    premium: true,
    growth: '+12%'
  },
  {
    id: 2,
    name: 'Бизнес Инсайты',
    username: '@bizinsights',
    description: 'Аналитика рынков, финансы и предпринимательство',
    subscribers: 89000,
    engagement: 6.2,
    category: 'Бизнес',
    geo: 'Россия',
    verified: true,
    premium: true,
    growth: '+8%'
  },
  {
    id: 3,
    name: 'Marketing Pro',
    username: '@marketingpro',
    description: 'Маркетинг, реклама, SMM и продвижение',
    subscribers: 67000,
    engagement: 7.1,
    category: 'Маркетинг',
    geo: 'СНГ',
    verified: false,
    premium: true,
    growth: '+15%'
  },
  {
    id: 4,
    name: 'Crypto News',
    username: '@cryptonewsru',
    description: 'Новости криптовалют, DeFi, NFT и блокчейна',
    subscribers: 156000,
    engagement: 9.2,
    category: 'Крипто',
    geo: 'Мир',
    verified: true,
    premium: false,
    growth: '+22%'
  },
  {
    id: 5,
    name: 'Дизайн Тренды',
    username: '@designtrends',
    description: 'UI/UX, графический дизайн, веб-дизайн',
    subscribers: 45000,
    engagement: 5.8,
    category: 'Дизайн',
    geo: 'Россия',
    verified: false,
    premium: false,
    growth: '+6%'
  },
  {
    id: 6,
    name: 'EdTech Russia',
    username: '@edtechru',
    description: 'Образование, онлайн-курсы, саморазвитие',
    subscribers: 34000,
    engagement: 4.9,
    category: 'Образование',
    geo: 'Россия',
    verified: true,
    premium: false,
    growth: '+10%'
  }
];

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [selectedGeo, setSelectedGeo] = useState('Все регионы');
  const [selectedSize, setSelectedSize] = useState('Любой размер');

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Icon name="Send" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl font-bold">TeleHub</h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="BarChart3" size={18} className="mr-2" />
                Аналитика
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Plus" size={18} className="mr-2" />
                Добавить канал
              </Button>
              <Button size="sm">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Каталог Telegram каналов</h2>
          <p className="text-muted-foreground text-lg">Найди лучшие каналы по твоим интересам</p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Поиск каналов по названию, описанию или username..."
              className="pl-12 h-14 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Select value={selectedGeo} onValueChange={setSelectedGeo}>
              <SelectTrigger className="w-[180px]">
                <Icon name="Globe" size={16} className="mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {geoFilters.map((geo) => (
                  <SelectItem key={geo} value={geo}>{geo}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-[180px]">
                <Icon name="Users" size={16} className="mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sizeFilters.map((size) => (
                  <SelectItem key={size} value={size}>{size}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Icon name="SlidersHorizontal" size={16} className="mr-2" />
              Больше фильтров
            </Button>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              Топ каналов
            </h3>
            <Badge variant="outline" className="gap-1">
              <Icon name="Sparkles" size={14} />
              Продвигаемые
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.filter(c => c.premium).map((channel) => (
              <Card key={channel.id} className="p-6 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-2" onClick={() => navigate(`/channel/${channel.id}`)}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                      {channel.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-semibold">{channel.name}</h4>
                        {channel.verified && (
                          <Icon name="CheckCircle2" size={16} className="text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{channel.username}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {channel.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} className="text-muted-foreground" />
                    <span className="font-medium">{formatNumber(channel.subscribers)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Activity" size={14} className="text-muted-foreground" />
                    <span className="font-medium">{channel.engagement}% ER</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Icon name="TrendingUp" size={14} />
                    <span className="font-medium">{channel.growth}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {channel.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {channel.geo}
                    </Badge>
                  </div>
                  <Button size="sm" className="rounded-full">
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Все каналы</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.filter(c => !c.premium).map((channel) => (
              <Card key={channel.id} className="p-6 hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer" onClick={() => navigate(`/channel/${channel.id}`)}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground font-bold text-lg">
                      {channel.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <h4 className="font-semibold">{channel.name}</h4>
                        {channel.verified && (
                          <Icon name="CheckCircle2" size={16} className="text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{channel.username}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {channel.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={14} className="text-muted-foreground" />
                    <span className="font-medium">{formatNumber(channel.subscribers)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Activity" size={14} className="text-muted-foreground" />
                    <span className="font-medium">{channel.engagement}% ER</span>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <Icon name="TrendingUp" size={14} />
                    <span className="font-medium">{channel.growth}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {channel.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {channel.geo}
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Хотите в топ?</h3>
          <p className="text-muted-foreground mb-6">Разместите свой канал в премиум-зоне и получите больше подписчиков</p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Icon name="Rocket" size={18} className="mr-2" />
              Продвинуть канал
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Info" size={18} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Send" className="text-primary-foreground" size={18} />
              </div>
              <span className="font-semibold">TeleHub</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">О проекте</a>
              <a href="#" className="hover:text-foreground transition-colors">Реклама</a>
              <a href="#" className="hover:text-foreground transition-colors">API</a>
              <a href="#" className="hover:text-foreground transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;