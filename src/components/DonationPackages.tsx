import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const packages = [
  {
    id: 1,
    name: "Стартовый пакет",
    price: 199,
    originalPrice: null,
    popular: false,
    description: "Базовые привилегии для новичков",
    features: [
      "Доступ к /kit starter",
      "10 алмазов",
      "Префикс [Донатер]",
      "Доступ к приватным регионам",
      "Телепорт к игрокам",
    ],
    color: "bg-slate-800",
  },
  {
    id: 2,
    name: "VIP пакет",
    price: 499,
    originalPrice: 599,
    popular: true,
    description: "Расширенные возможности",
    features: [
      "Все из стартового пакета",
      "Доступ к /kit vip",
      "50 алмазов + 1000 монет",
      "Префикс [VIP]",
      "Полёт в лобби",
      "Приоритетная поддержка",
      "Скидка 20% на следующие покупки",
    ],
    color: "bg-gradient-to-br from-purple-600 to-blue-600",
  },
  {
    id: 3,
    name: "PREMIUM пакет",
    price: 999,
    originalPrice: null,
    popular: false,
    description: "Максимальные привилегии",
    features: [
      "Все из VIP пакета",
      "Доступ к /kit premium",
      "100 алмазов + 5000 монет",
      "Префикс [PREMIUM]",
      "Полёт на всех мирах",
      "Личный менеджер",
      "Эксклюзивные скины",
      "Безлимитные дома",
    ],
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
  },
];

export default function DonationPackages() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-montserrat">
            Донат-пакеты
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Выбери подходящий пакет и получи мгновенный доступ к привилегиям на
            сервере
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative ${pkg.popular ? "ring-2 ring-blue-500 scale-105" : ""} hover:shadow-lg transition-all duration-300`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                  Популярный
                </Badge>
              )}

              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-slate-600">
                  {pkg.description}
                </CardDescription>

                <div className="flex items-center justify-center gap-2 mt-4">
                  {pkg.originalPrice && (
                    <span className="text-slate-400 line-through text-lg">
                      {pkg.originalPrice}₽
                    </span>
                  )}
                  <span className="text-3xl font-bold text-slate-900">
                    {pkg.price}₽
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mt-1 flex-shrink-0"
                      />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-900 hover:bg-slate-800"}`}
                  size="lg"
                >
                  <Icon name="CreditCard" size={20} className="mr-2" />
                  Купить сейчас
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm border">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Безопасные платежи
            </h3>
            <p className="text-slate-600 mb-6">
              Мы поддерживаем надёжные платёжные системы для вашего удобства
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2">
                <Icon name="CreditCard" size={16} className="mr-2" />
                Банковские карты
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Icon name="Smartphone" size={16} className="mr-2" />
                QIWI кошелёк
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Icon name="Building" size={16} className="mr-2" />
                ЮKassa
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                <Icon name="Shield" size={16} className="mr-2" />
                Защищённые транзакции
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
