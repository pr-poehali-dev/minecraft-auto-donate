import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const categories = [
  {
    id: "kits",
    name: "Наборы (Киты)",
    description: "Готовые наборы предметов",
    icon: "Package",
    count: 12,
    color: "bg-blue-500",
  },
  {
    id: "resources",
    name: "Ресурсы",
    description: "Алмазы, золото, материалы",
    icon: "Gem",
    count: 25,
    color: "bg-green-500",
  },
  {
    id: "privileges",
    name: "Привилегии",
    description: "Особые возможности",
    icon: "Crown",
    count: 8,
    color: "bg-purple-500",
  },
  {
    id: "currency",
    name: "Игровая валюта",
    description: "Монеты и кредиты",
    icon: "Coins",
    count: 6,
    color: "bg-yellow-500",
  },
  {
    id: "cosmetics",
    name: "Косметика",
    description: "Скины, питомцы, эффекты",
    icon: "Sparkles",
    count: 18,
    color: "bg-pink-500",
  },
  {
    id: "regions",
    name: "Территории",
    description: "Приватные регионы",
    icon: "Map",
    count: 4,
    color: "bg-orange-500",
  },
];

export default function ShopCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-montserrat">
            Категории товаров
          </h2>
          <p className="text-lg text-slate-600">
            Выберите категорию и найдите нужные товары для игры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`${category.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      name={category.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} товаров
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
