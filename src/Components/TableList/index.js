import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Table } from 'antd';
import { navigate } from 'hookrouter'
const { Column, ColumnGroup } = Table;

class TableList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      dataSource: [
        {
          key: '1',
          client: 'Loja X',
          // link: 'Ir para campanha',
          children: [
            {
              goals: 18,
              request: 1193,
              lastInvestigate: '01/01/2001',
              supplier: 'Fornecedor 1',
              product: 'Sabão em pó',
              sku: '01',
              discount: 200
            }
          ]
          
        },
        {
          key: '2',
          client: 'Loja A',
          // link: 'Ir para campanha',
          children: [
            {
              goals: 32,
              request: 1234,
              lastInvestigate: '01/01/2001',
              supplier: 'Fornecedor 1',
              product: 'Sabão em pó',
              sku: '01',
              discount: 200
            },
            {
              goals: 32,
              request: 1234,
              lastInvestigate: '01/01/2001',
              supplier: 'Fornecedor 2',
              product: 'Sabão em barra',
              sku: '02',
              discount: 400
            }
          ]
        },
        {
          key: '3',
          client: 'Loja B',
          // link: 'Ir para campanha',
          children: [

            {goals: 18,
            request: 1193,
            lastInvestigate: '01/01/2001',
            supplier: 'Fornecedor 1',
            product: 'Sabão em pó',
            sku: '01',
            discount: 200}
          ]
        },
        {
          key: '4',
          client: 'Loja C',
          // link: 'Ir para campanha',
          children: [
            {
              goals: 18,
              request: 1193,
              lastInvestigate: '01/01/2001',
              supplier: 'Fornecedor 1',
              product: 'Sabão em pó',
              sku: '01',
              discount: 200
            }
          ]
        },
        {
          key: '5',
          client: 'Loja D',
          link: 'Ir para campanha',
          children: [
            {
              goals: 18,
              request: 1193,
              lastInvestigate: '01/01/2001',
              supplier: 'Fornecedor 1',
              product: 'Sabão em pó',
              sku: '01',
              discount: 200
            },
            {
              goals: 18,
              request: 1193,
              lastInvestigate: '01/01/2001',
              supplier: 'Fornecedor 2',
              product: 'Sabão em barra',
              sku: '02',
              discount: 400
            }
          ]
        },
      ]

    }
  }

  render() {
    return (
      <div className="App">

        <Table 
          dataSource={this.state.dataSource} 
          bordered
          link={() => {'/'}}
        >
          <Column title="Cliente" dataIndex="client" key="client" />
          <Column title="Metas" dataIndex="goals" key="goals" />
          <Column title="Pedidos" dataIndex="request" key="request" />
          <Column title="Data da última Apuração" dataIndex="lastInvestigate" key="lastInvestigate" />
          <ColumnGroup title="Benefícios">
            <Column title="Fornecedor" dataIndex="supplier" key="supplier" />
            <Column title="Sku" dataIndex="sku" key="sku" />
            <Column title="Produto" dataIndex="product" key="product" />
            <Column title="Desconto" dataIndex="discount" key="discount" />
          </ColumnGroup>
          <Column title="Link" dataIndex="link" key="link" onCellClick={() => navigate('/idea')} />
        </Table>
      </div>
    )
  }
}

export default TableList;