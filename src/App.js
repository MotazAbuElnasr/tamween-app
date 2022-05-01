import './App.css';
import { CATEGORIES, goods } from './data/goods';
import { getGoods } from './components/Good';
import { useMemo, useState } from 'react';
import { Col, Row, Button, Table } from 'antd';
import GoodsTable from './components/GoodsTable';
function App() {
  const [items, setItems] = useState([]);
  const [selectedCategory, setCategory] = useState(CATEGORIES.BASIC);
  const onAdd = ({price, name, amount})=>{
    window.navigator.vibrate(100)
    const itemExists = items.find(item=>item.name===name && item.price ===price);
    const newItems = itemExists ? items.reduce((agg, item)=>{
      if(item.name!==name||item.price!==price) return [...agg, item];
      return [...agg, {...item, amount: item.amount+amount, total: item.total+amount*price, price}];
    },[]) : items.concat([{name, amount, total: amount*price, price}]);
    setItems(newItems.filter(i=>i.amount>0));
  }
  const categoriesButtons = Object.values(CATEGORIES).map(category => <Col key={category}><Button type={category===selectedCategory?"primary":""} onClick={()=>setCategory(category)}>{category}</Button></Col>)
  const categoryGoods = goods.filter(i=>i.category===selectedCategory).map(i=>getGoods(i, items,onAdd))
  const totalPrice = items.reduce((agg, item)=>agg+item.total,0);
  return (
    <>
    <p>إجمالي السعر : {totalPrice}ج</p>
    <Row>{categoriesButtons}</Row>
    {categoryGoods}
  <GoodsTable goods={[...items]} />
  <Button onClick={()=> setItems([])}>اعادة</Button>
    </>
  );
}

export default App;
