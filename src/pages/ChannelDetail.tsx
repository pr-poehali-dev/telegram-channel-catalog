import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const channelData = {
  id: 1,
  name: 'Tech Daily',
  username: '@techdaily',
  description: 'Ежедневные новости технологий, стартапов и инноваций. Самая актуальная информация из мира IT, обзоры гаджетов, аналитика рынка и эксклюзивные интервью с лидерами индустрии.',
  subscribers: 125000,
  engagement: 8.5,
  category: 'Технологии',
  geo: 'Россия',
  verified: true,
  premium: true,
  growth: '+12%',
  views: 45000,
  postsPerDay: 4.5,
  avgReach: 62,
  shareRate: 3.2,
  createdDate: '2021-03-15',
  language: 'Русский',
  tags: ['Технологии', 'Стартапы', 'AI', 'Гаджеты', 'Инновации'],
  
  stats: {
    daily: [12000, 15000, 13500, 18000, 16500, 19000, 17500],
    weekly: [78000, 82000, 86000, 95000],
    monthly: [320000, 340000, 365000, 390000, 425000, 450000]
  },
  
  demographics: {
    ageGroups: [
      { age: '18-24', percent: 25 },
      { age: '25-34', percent: 45 },
      { age: '35-44', percent: 20 },
      { age: '45+', percent: 10 }
    ],
    gender: { male: 65, female: 35 },
    topCities: [
      { city: 'Москва', percent: 35 },
      { city: 'Санкт-Петербург', percent: 18 },
      { city: 'Новосибирск', percent: 8 },
      { city: 'Екатеринбург', percent: 6 },
      { city: 'Другие', percent: 33 }
    ]
  },
  
  recentPosts: [
    {
      id: 1,
      text: 'OpenAI представила новую версию GPT-5 с революционными возможностями',
      views: 52000,
      reactions: 1240,
      shares: 320,
      date: '2 часа назад'
    },
    {
      id: 2,
      text: 'Apple анонсировала iPhone 16 Pro с новым процессором A18',
      views: 48000,
      reactions: 1180,
      shares: 290,
      date: '5 часов назад'
    },
    {
      id: 3,
      text: 'Российский стартап привлёк $10M от венчурных фондов',
      views: 35000,
      reactions: 890,
      shares: 180,
      date: '8 часов назад'
    }
  ]
};

const ChannelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
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
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Назад
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Icon name="Send" className="text-primary-foreground" size={24} />
                </div>
                <h1 className="text-2xl font-bold">TeleHub</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
              <Button size="sm">
                <Icon name="ExternalLink" size={18} className="mr-2" />
                Открыть канал
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-4xl shadow-lg">
              {channelData.name[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-4xl font-bold">{channelData.name}</h1>
                {channelData.verified && (
                  <Icon name="CheckCircle2" size={28} className="text-primary" />
                )}
                {channelData.premium && (
                  <Badge className="gap-1">
                    <Icon name="Crown" size={14} />
                    Premium
                  </Badge>
                )}
              </div>
              <p className="text-xl text-muted-foreground mb-4">{channelData.username}</p>
              <p className="text-lg mb-4 max-w-3xl">{channelData.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {channelData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Icon name="Users" size={16} />
                <span className="text-sm">Подписчики</span>
              </div>
              <p className="text-2xl font-bold">{formatNumber(channelData.subscribers)}</p>
              <p className="text-sm text-green-600 font-medium">{channelData.growth}</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Icon name="Eye" size={16} />
                <span className="text-sm">Просмотры</span>
              </div>
              <p className="text-2xl font-bold">{formatNumber(channelData.views)}</p>
              <p className="text-sm text-muted-foreground">ср. на пост</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Icon name="Activity" size={16} />
                <span className="text-sm">Engagement</span>
              </div>
              <p className="text-2xl font-bold">{channelData.engagement}%</p>
              <p className="text-sm text-green-600 font-medium">Отлично</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Icon name="TrendingUp" size={16} />
                <span className="text-sm">Охват</span>
              </div>
              <p className="text-2xl font-bold">{channelData.avgReach}%</p>
              <p className="text-sm text-muted-foreground">средний</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Icon name="FileText" size={16} />
                <span className="text-sm">Постов/день</span>
              </div>
              <p className="text-2xl font-bold">{channelData.postsPerDay}</p>
              <p className="text-sm text-muted-foreground">в среднем</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                <Icon name="Share2" size={16} />
                <span className="text-sm">Репосты</span>
              </div>
              <p className="text-2xl font-bold">{channelData.shareRate}%</p>
              <p className="text-sm text-muted-foreground">на пост</p>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Аналитика
            </TabsTrigger>
            <TabsTrigger value="demographics">
              <Icon name="Users" size={16} className="mr-2" />
              Аудитория
            </TabsTrigger>
            <TabsTrigger value="posts">
              <Icon name="FileText" size={16} className="mr-2" />
              Посты
            </TabsTrigger>
            <TabsTrigger value="info">
              <Icon name="Info" size={16} className="mr-2" />
              О канале
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Рост подписчиков</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Последние 30 дней</span>
                    <span className="text-sm font-medium">+{formatNumber(15000)}</span>
                  </div>
                  <div className="h-48 flex items-end justify-between gap-2">
                    {channelData.stats.monthly.map((value, idx) => (
                      <div key={idx} className="flex-1 bg-primary rounded-t-lg transition-all hover:opacity-80" 
                           style={{ height: `${(value / 450000) * 100}%` }}
                           title={formatNumber(value)}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Янв</span>
                    <span>Фев</span>
                    <span>Мар</span>
                    <span>Апр</span>
                    <span>Май</span>
                    <span>Июн</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Активность по дням недели</h3>
                <div className="space-y-3">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, idx) => (
                    <div key={day}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{day}</span>
                        <span className="text-sm font-medium">{formatNumber(channelData.stats.daily[idx])}</span>
                      </div>
                      <Progress value={(channelData.stats.daily[idx] / 19000) * 100} />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Ключевые метрики</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="TrendingUp" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Темп роста</p>
                        <p className="text-sm text-muted-foreground">месячный</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-green-600">+12%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Heart" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Вовлечённость</p>
                        <p className="text-sm text-muted-foreground">средняя</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold">8.5%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Clock" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Частота публикаций</p>
                        <p className="text-sm text-muted-foreground">постов в день</p>
                      </div>
                    </div>
                    <span className="text-xl font-bold">{channelData.postsPerDay}</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Возраст аудитории</h3>
                <div className="space-y-4">
                  {channelData.demographics.ageGroups.map((group) => (
                    <div key={group.age}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">{group.age} лет</span>
                        <span className="text-sm font-medium">{group.percent}%</span>
                      </div>
                      <Progress value={group.percent} />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Пол аудитории</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-blue-500" />
                        <span className="text-sm">Мужчины</span>
                      </div>
                      <span className="text-sm font-medium">{channelData.demographics.gender.male}%</span>
                    </div>
                    <Progress value={channelData.demographics.gender.male} className="bg-blue-100" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-pink-500" />
                        <span className="text-sm">Женщины</span>
                      </div>
                      <span className="text-sm font-medium">{channelData.demographics.gender.female}%</span>
                    </div>
                    <Progress value={channelData.demographics.gender.female} className="bg-pink-100" />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">География подписчиков</h3>
                <div className="space-y-3">
                  {channelData.demographics.topCities.map((city) => (
                    <div key={city.city} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} className="text-muted-foreground" />
                        <span className="text-sm">{city.city}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress value={city.percent} className="w-24" />
                        <span className="text-sm font-medium w-10 text-right">{city.percent}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Другие данные</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Язык канала</span>
                    <Badge variant="secondary">{channelData.language}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Регион</span>
                    <Badge variant="secondary">{channelData.geo}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Категория</span>
                    <Badge variant="secondary">{channelData.category}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Дата создания</span>
                    <span className="text-sm font-medium">15 марта 2021</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="posts" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Последние публикации</h3>
              <div className="space-y-4">
                {channelData.recentPosts.map((post) => (
                  <div key={post.id} className="p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                    <p className="mb-3">{post.text}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={14} />
                          <span>{formatNumber(post.views)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Heart" size={14} />
                          <span>{formatNumber(post.reactions)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Share2" size={14} />
                          <span>{formatNumber(post.shares)}</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="info" className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Информация о канале</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Описание</h4>
                  <p className="text-muted-foreground">{channelData.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-medium mb-2">Username</h4>
                    <p className="text-muted-foreground">{channelData.username}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Дата создания</h4>
                    <p className="text-muted-foreground">15 марта 2021</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Категория</h4>
                    <p className="text-muted-foreground">{channelData.category}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Язык</h4>
                    <p className="text-muted-foreground">{channelData.language}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <Icon name="Rocket" className="text-primary-foreground" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Разместить рекламу</h3>
                  <p className="text-muted-foreground mb-4">
                    Охват аудитории {formatNumber(channelData.subscribers)} активных подписчиков в вашей целевой нише
                  </p>
                  <Button>
                    <Icon name="Mail" size={18} className="mr-2" />
                    Связаться с владельцем
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ChannelDetail;
