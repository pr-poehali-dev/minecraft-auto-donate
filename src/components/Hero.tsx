import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/30">
          <Icon name="Shield" size={16} className="mr-2" />
          Надёжные платежи
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-montserrat">
          Поддержи наш
          <br />
          <span className="text-blue-400">Minecraft сервер</span>
        </h1>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Получи эксклюзивные привилегии, ресурсы и возможности. Безопасные
          платежи через проверенные системы.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
            <Icon name="ShoppingCart" size={20} className="mr-2" />
            Перейти в магазин
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Icon name="Info" size={20} className="mr-2" />О сервере
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <Icon
              name="Users"
              size={32}
              className="text-blue-400 mb-4 mx-auto"
            />
            <h3 className="text-white font-semibold mb-2">1500+ игроков</h3>
            <p className="text-slate-400 text-sm">
              Активное игровое сообщество
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <Icon name="Zap" size={32} className="text-blue-400 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">99.9% аптайм</h3>
            <p className="text-slate-400 text-sm">Стабильная работа сервера</p>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <Icon
              name="Shield"
              size={32}
              className="text-blue-400 mb-4 mx-auto"
            />
            <h3 className="text-white font-semibold mb-2">
              Защита от гриферов
            </h3>
            <p className="text-slate-400 text-sm">Система безопасности</p>
          </div>
        </div>
      </div>
    </section>
  );
}
