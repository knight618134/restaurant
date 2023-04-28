import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuSection from './components/MenuSection';

const menuItems = [
  {
    id: 1,
    name: "豬排定食",
    category: "定食",
    description: "美味的豬排加上白飯、湯和小菜",
    price: 180,
  },
  {
    id: 2,
    name: "牛肉炒麵",
    category: "定食",
    description: "香氣四溢的炒麵加上美味的牛肉",
    price: 200,
  },
  {
    id: 3,
    name: "巧克力蛋糕",
    category: "甜點",
    description: "濃郁的巧克力口感，一定讓你愛上它",
    price: 120,
  },
  {
    id: 4,
    name: "提拉米蘇",
    category: "甜點",
    description: "來自義大利的經典甜點，口感濃郁柔滑",
    price: 150,
  },
  {
    id: 5,
    name: "照燒雞肉定食",
    category: "定食",
    description: "入口即化的雞肉加上美味的照燒醬",
    price: 190,
  },
  {
    id: 6,
    name: "芝士蛋糕",
    category: "甜點",
    description: "滑順的口感、濃郁的芝士香氣",
    price: 130,
  },
  {
    id: 7,
    name: "芝士蛋糕",
    category: "甜點",
    description: "滑順的口感、濃郁的芝士香氣",
    price: 130,
  },
  {
    id: 8,
    name: "芝士蛋糕",
    category: "甜點",
    description: "滑順的口感、濃郁的芝士香氣",
    price: 130,
  },
  {
    id: 9,
    name: "芝士蛋糕",
    category: "甜點",
    description: "滑順的口感、濃郁的芝士香氣",
    price: 130,
  },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl">
            <MenuSection menuItems={menuItems} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;