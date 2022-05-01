import { Table } from "antd";

const columns = [
    {
      title: 'السلعة',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'السعر',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'الكمية',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'إجمالي',
      dataIndex: 'total',
      key: 'total',
    },
  ];
const GoodsTable = ({goods})=>{
    const totalPrice = goods.reduce((agg, item)=>agg+item.total,0);
    return <>
    <Table dataSource={goods} columns={columns} pagination={{defaultPageSize:50}}></Table>
    <p>المجموع: {totalPrice} جنيه</p>
    </>
}

export default GoodsTable;