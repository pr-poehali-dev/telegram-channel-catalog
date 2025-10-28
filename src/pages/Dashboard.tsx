import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const categories = ['Бизнес', 'Технологии', 'Маркетинг', 'Образование', 'Новости', 'Развлечения', 'Крипто', 'Дизайн', 'Lifestyle'];
const languages = ['Русский', 'Английский', 'Украинский', 'Другой'];
const regions = ['Россия', 'СНГ', 'Мир', 'Европа', 'Азия'];

const myChannels = [
  {
    id: 1,
    name: 'Tech Daily',
    username: '@techdaily',
    subscribers: 125000,
    status: 'active',
    isPremium: true,
    views: 45000,
    engagement: 8.5,
    addedDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Coding Tips',
    username: '@codingtips',
    subscribers: 15000,
    status: 'pending',
    isPremium: false,
    views: 5200,
    engagement: 6.2,
    addedDate: '2024-10-20'
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    description: '',
    category: '',
    language: '',
    region: '',
    subscribersCount: ''
  });

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsAddDialogOpen(false);
    setFormData({
      name: '',
      username: '',
      description: '',
      category: '',
      language: '',
      region: '',
      subscribersCount: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                На главную
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Icon name="Send" className="text-primary-foreground" size={24} />
                </div>
                <h1 className="text-2xl font-bold">TeleHub</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={18} className="mr-2" />
                Уведомления
              </Button>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-medium">
                  А
                </div>
                <span className="font-medium">Алексей</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">Личный кабинет</h2>
          <p className="text-muted-foreground text-lg">Управляйте своими каналами</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon name="Users" className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Всего подписчиков</p>
                <p className="text-2xl font-bold">{formatNumber(140000)}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Icon name="TrendingUp" className="text-green-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Каналов активно</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                <Icon name="Clock" className="text-yellow-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">На модерации</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Icon name="Eye" className="text-purple-600" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Просмотров</p>
                <p className="text-2xl font-bold">{formatNumber(50200)}</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="channels" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="channels">
                <Icon name="List" size={16} className="mr-2" />
                Мои каналы
              </TabsTrigger>
              <TabsTrigger value="analytics">
                <Icon name="BarChart3" size={16} className="mr-2" />
                Аналитика
              </TabsTrigger>
              <TabsTrigger value="promotion">
                <Icon name="Rocket" size={16} className="mr-2" />
                Продвижение
              </TabsTrigger>
            </TabsList>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить канал
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Добавить новый канал</DialogTitle>
                  <DialogDescription>
                    Заполните информацию о вашем Telegram канале для добавления в каталог
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Название канала *</Label>
                    <Input
                      id="name"
                      placeholder="Например: Tech Daily"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username">Username канала *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                      <Input
                        id="username"
                        placeholder="techdaily"
                        className="pl-7"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        required
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">Введите без @</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Описание канала *</Label>
                    <Textarea
                      id="description"
                      placeholder="Расскажите о тематике вашего канала, что публикуете, для кого..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      required
                    />
                    <p className="text-sm text-muted-foreground">Минимум 50 символов</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Категория *</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subscribers">Количество подписчиков *</Label>
                      <Input
                        id="subscribers"
                        type="number"
                        placeholder="1000"
                        value={formData.subscribersCount}
                        onChange={(e) => setFormData({...formData, subscribersCount: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="language">Язык контента</Label>
                      <Select value={formData.language} onValueChange={(value) => setFormData({...formData, language: value})}>
                        <SelectTrigger id="language">
                          <SelectValue placeholder="Выберите язык" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="region">Регион</Label>
                      <Select value={formData.region} onValueChange={(value) => setFormData({...formData, region: value})}>
                        <SelectTrigger id="region">
                          <SelectValue placeholder="Выберите регион" />
                        </SelectTrigger>
                        <SelectContent>
                          {regions.map((reg) => (
                            <SelectItem key={reg} value={reg}>{reg}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" className="text-primary mt-1" size={20} />
                      <div className="text-sm">
                        <p className="font-medium mb-1">Модерация</p>
                        <p className="text-muted-foreground">
                          После отправки канал будет проверен модераторами в течение 24 часов. 
                          Вы получите уведомление о результатах проверки.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить на модерацию
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Отмена
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <TabsContent value="channels" className="space-y-4">
            {myChannels.map((channel) => (
              <Card key={channel.id} className="p-6 hover:shadow-md transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl">
                      {channel.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{channel.name}</h3>
                        {channel.isPremium && (
                          <Badge className="gap-1">
                            <Icon name="Crown" size={12} />
                            Premium
                          </Badge>
                        )}
                        {channel.status === 'active' && (
                          <Badge variant="outline" className="gap-1 text-green-600 border-green-600">
                            <Icon name="CheckCircle" size={12} />
                            Активен
                          </Badge>
                        )}
                        {channel.status === 'pending' && (
                          <Badge variant="outline" className="gap-1 text-yellow-600 border-yellow-600">
                            <Icon name="Clock" size={12} />
                            Модерация
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-4">{channel.username}</p>
                      
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Подписчики</p>
                          <p className="text-lg font-semibold">{formatNumber(channel.subscribers)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Просмотры</p>
                          <p className="text-lg font-semibold">{formatNumber(channel.views)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Engagement</p>
                          <p className="text-lg font-semibold">{channel.engagement}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Добавлен</p>
                          <p className="text-lg font-semibold">{new Date(channel.addedDate).toLocaleDateString('ru')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="BarChart3" size={16} className="mr-2" />
                      Статистика
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Настройки
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Общая статистика по каналам</h3>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Icon name="BarChart3" size={48} className="mx-auto mb-3 opacity-50" />
                  <p>Графики и аналитика появятся здесь</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="promotion" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Crown" className="text-primary-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Premium размещение</h3>
                    <p className="text-muted-foreground mb-4">
                      Разместите канал в топе главной страницы и получите до 10x больше подписчиков
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold">₽5,000</span>
                      <span className="text-muted-foreground">/месяц</span>
                    </div>
                    <Button>
                      <Icon name="Rocket" size={18} className="mr-2" />
                      Подключить Premium
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Продвинутая аналитика</h3>
                    <p className="text-muted-foreground mb-4">
                      Получите детальную статистику о вашей аудитории и эффективности публикаций
                    </p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold">₽2,000</span>
                      <span className="text-muted-foreground">/месяц</span>
                    </div>
                    <Button variant="outline">
                      <Icon name="BarChart3" size={18} className="mr-2" />
                      Подключить
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
