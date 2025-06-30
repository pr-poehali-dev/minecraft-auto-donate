import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Gamepad2" size={20} className="text-white" />
            </div>
            <span className="text-white font-bold text-xl">MineCraft Pro</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Магазин
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              О сервере
            </a>
            <a
              href="#"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Поддержка
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="text-slate-300 border-slate-700 hover:bg-slate-800"
            >
              Войти
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Личный кабинет
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
