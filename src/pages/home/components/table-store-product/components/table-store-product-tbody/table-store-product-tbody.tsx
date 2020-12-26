/**
 * =========== (c) 2020 Emir Marques ===========
 * @created on Mon Dec 23 2020
 * @author Emir Marques - <emirdeliz@gmail.com>
 * What is this file?
 * This file is responsible for defining the table-store-product-tbody.
 * ================================================
 */
import React from 'react';
import { formatCurrency } from '@helpers/currency';
import { InputCheckboxFormGroup, Table, ECellAlign } from '@framework/index';
import { Consumer as StoreConsumer } from '@context/store-context';
import { ITableStoreProduct } from '../../table-store-product';
import { TableStoreProductIcon, LabelStoreProduct } from '..';
import { ProductNameContainer } from './table-store-product-tbody.style';
import { TableStoreProductTbodyQuantity } from './components/table-store-product-tbody-quantity/table-store-product-tbody-quantity';
import { TableStoreProductButtonTrash } from './components/table-store-product-button-trash/table-store-product-button-trash';
import { StoreProductModel } from '@api/model/store-product-model';
import { StoreProductCartModel } from '@api/model/store-product-cart-model';

interface IProductName {
  name: string;
  icon: string;
}

const ProductName = (props: IProductName) => {
  const { name, icon } = props;
  return (
    <>
      <TableStoreProductIcon icon={icon} />
      <LabelStoreProduct>{name}</LabelStoreProduct>
    </>
  );
}

export const TableStoreProductTBody = (props: ITableStoreProduct) => {
  const { allowSelect, allowControls, allowRemove, products } = props;
  return (
    <StoreConsumer>
      {({
        increaseQuantity,
        decreaseQuantity,
        findProductQuantityByProduct,
        selectProduct,
        removeProductCart,
        productSelected 
      }) => (
        <Table.TBody>
          {products.map((p, index) => {
            const isStoreProductCartModel = p instanceof StoreProductCartModel;
            const item = (isStoreProductCartModel ? (p as StoreProductCartModel).product : p) as StoreProductModel;

            const { name, nr, price, icon, unit } = item;
            const productQuantity = findProductQuantityByProduct(item);
            const total = productQuantity * price;
            const isSelected = productSelected.includes(nr);
            const hasQuantity = productQuantity > 0;
        
            return (
              <Table.Row key={index}>
                <Table.Td>
                  <ProductNameContainer>
                    {allowSelect ? (
                      <InputCheckboxFormGroup
                        noMargin
                        disabled={!hasQuantity}
                        checked={isSelected}
                        label={<ProductName name={name} icon={icon} />}
                        onChange={() => selectProduct(nr)}
                      />
                    ) : (
                      <ProductName name={name} icon={icon} />
                    )}
                  </ProductNameContainer>
                </Table.Td>
                <Table.Td>
                  <LabelStoreProduct>{nr}</LabelStoreProduct>
                </Table.Td>
                <Table.Td alignContent={ECellAlign.right}>
                  <LabelStoreProduct>{price} €/{unit}</LabelStoreProduct>
                </Table.Td>
                <Table.Td alignContent={ECellAlign.center}>
                  <TableStoreProductTbodyQuantity
                    quantity={productQuantity}
                    increaseQuantity={() => increaseQuantity(item)}
                    decreaseQuantity={() => decreaseQuantity(item)}
                    hideControls={!allowControls}
                  >
                    <LabelStoreProduct>{productQuantity} {unit}</LabelStoreProduct>
                  </TableStoreProductTbodyQuantity>
                </Table.Td>
                <Table.Td alignContent={ECellAlign.right}>
                  <LabelStoreProduct.Bold>{formatCurrency(total)}</LabelStoreProduct.Bold>
                </Table.Td>
                {allowRemove &&(
                  <Table.Td>
                    <TableStoreProductButtonTrash onClick={() => removeProductCart(item)} />
                  </Table.Td>
                )}
              </Table.Row>
            );
          })}
        </Table.TBody>
      )}
    </StoreConsumer>
  );
}
