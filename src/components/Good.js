import {Row, Col , Button} from 'antd';
const Good = ({ price, name, inItems, onAdd }) => <Row className={`good-row ${inItems?'good-in-items':''}`}>
    <Col span={8}>{name} {price.toLocaleString('ar-EG')}ج</Col>
    <Col span={16}>
        <Button onClick={() => onAdd({ price, name, amount: 1 })}>+1</Button>
        <Button onClick={() => onAdd({ price, name, amount: 3 })}>+3</Button>
        <Button onClick={() => onAdd({ price, name, amount: 5 })}>+5</Button>
        <Button onClick={() => onAdd({ price, name, amount: -1 })}>-1</Button>
        <Button onClick={() => onAdd({ price, name, amount: -5 })}>-5</Button>
    </Col>
</Row>


export const getGoods = (item, items, onAdd) => {
    const inItems = items.find(i => i.name===item.name && i.price === item.price);
    if (!item.free) return <Good {...item} onAdd={onAdd} inItems={inItems} />
    return <>
        <Good {...item} onAdd={onAdd} inItems={inItems}/>
        <Good {...{ ...item, name: `${item.name} (حر)`, price: item.free }} onAdd={onAdd} inItems={items.find(i => `${item.name} (حر)`===i.name && i.price === item.free)}/>
    </>
}
export default Good;