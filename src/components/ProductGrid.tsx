import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const products = [
  {
    id: 1,
    name: "Алмазный набор",
    category: "Наборы",
    price: 149,
    originalPrice: 199,
    image: "💎",
    description: "Полный комплект алмазной экипировки",
    features: ["Алмазный меч", "Алмазная броня", "32 алмаза", "Зачарования"],
    hot: true,
    inStock: true,
  },
  {
    id: 2,
    name: "1000 монет",
    category: "Валюта",
    price: 99,
    originalPrice: null,
    image: "🪙",
    description: "Игровые монеты для покупок",
    features: [
      "1000 игровых монет",
      "Мгновенное зачисление",
      "Никогда не сгорают",
    ],
    hot: false,
    inStock: true,
  },
  {
    id: 3,
    name: "Полёт на 30 дней",
    category: "Привилегии",
    price: 299,
    originalPrice: null,
    image: "🚀",
    description: "Возможность летать на всех мирах",
    features: [
      "30 дней полёта",
      "Все миры",
      "Без ограничений",
      "Активируется мгновенно",
    ],
    hot: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Эксклюзивный скин",
    category: "Косметика",
    price: 199,
    originalPrice: 249,
    image: "👤",
    description: "Уникальный скин героя",
    features: ["Эксклюзивный дизайн", "HD качество", "Анимированные элементы"],
    hot: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Стартовый кит",
    category: "Наборы",
    price: 79,
    originalPrice: null,
    image: "🎒",
    description: "Базовый набор для новичков",
    features: [
      "Железная экипировка",
      "Еда на неделю",
      "500 монет",
      "Карта мира",
    ],
    hot: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Приватный регион 50x50",
    category: "Территории",
    price: 399,
    originalPrice: null,
    image: "🏠",
    description: "Личная территория с защитой",
    features: [
      "Размер 50x50 блоков",
      "Полная защита",
      "Настройка прав доступа",
    ],
    hot: false,
    inStock: false,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2 font-montserrat">
              Популярные товары
            </h2>
            <p className="text-slate-600">
              Самые востребованные предметы на сервере
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} className="mr-2" />
              Фильтры
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="ArrowUpDown" size={16} className="mr-2" />
              Сортировка
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-all duration-300 relative"
            >
              {product.hot && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 z-10">
                  🔥 ХИТ
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{product.image}</div>
                <Badge variant="outline" className="mb-2 w-fit mx-auto">
                  {product.category}
                </Badge>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <p className="text-sm text-slate-600">{product.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        size={14}
                        className="text-green-600 flex-shrink-0"
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through text-sm">
                        {product.originalPrice}₽
                      </span>
                    )}
                    <span className="text-xl font-bold text-slate-900">
                      {product.price}₽
                    </span>
                  </div>

                  <Badge
                    variant={product.inStock ? "default" : "secondary"}
                    className={
                      product.inStock ? "bg-green-100 text-green-800" : ""
                    }
                  >
                    {product.inStock ? "В наличии" : "Нет в наличии"}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <Button className="w-full" disabled={!product.inStock}>
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  {product.inStock ? "Купить" : "Недоступно"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="Package" size={20} className="mr-2" />
            Посмотреть все товары
          </Button>
        </div>
      </div>
    </section>
  );
}
