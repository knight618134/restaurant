
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MenuCard from './MenuCard';
import 'react-tabs/style/react-tabs.css'
function MenuSection({ menuItems }) {
  const [tabIndex, setTabIndex] = useState(0);
  
  // 分類菜單項目
  const categories = menuItems.reduce((arr, item) => {
    if (!arr.includes(item.category)) {
      arr.push(item.category);
    }
    return arr;
  }, []);
  
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className="flex gap-4 mb-4">
            {categories.map((category, index) => (
              <Tab key={index} className="px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {category}
              </Tab>
            ))}
          </TabList>
          {categories.map((category, index) => (
            <TabPanel key={index}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.filter(item => item.category === category).map((item, index) => (
                  <MenuCard key={index} item={item} />
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default MenuSection;