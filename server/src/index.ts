import { fastify } from 'fastify';
import fastifyCORS from 'fastify-cors';
import Axios, { AxiosResponse } from 'axios';
import * as Types from './types';

const PORT = 8080;
const app = fastify();

// hash food name
const hash = (food: string): string => {
  return food.split('').reduce((acc, curr) => {
    return acc + curr.charCodeAt(0);
  }, '');
};

const foodInventory : Map<string, Types.IFoodItem> = new Map();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get<{Params: {barcode: string}}>('/api/barcode/:barcode', async (req, res) => {
    const barcode = req.params.barcode;
    console.log(`New barcode scanned: ${barcode}`);

    // https://world.openfoodfacts.org/api/v0/product/5060751213352.json
    const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

    const response: AxiosResponse = await Axios.get(url);
    const data: Types.BarcodeResponse = response.data;
    const product: Types.Product = data.product;

    const simple: Types.ISimpleProduct = {
        brand_name: product.brands || 'Unknown Brand',
        name: product.product_name || 'Unknown Product',
        image_url: product.image_url || '',
        food_groups: product.food_groups_tags || [],
        ingredients: product.ingredients || [],
        nutrients: product.nutriments || {},
        packaging: product.packaging || '',
        serving_size: product.serving_size || '',
    };

    res.send(simple);
});

app.post<{Body: { data: Types.IReqFoodItem[] }}>('/api/inventory', (req, res) => {
    const { data } = req.body;

    for (const item of data) {

        const foodItem : Types.IFoodItem = {
            id: hash(item.name),
            name: item.name,
            price: item.price,
            barcode: item.barcode
        }

        foodInventory.set(hash(item.name), foodItem);
    }

    res.send(JSON.stringify(foodInventory));
});

// app.get('/api/inventory')
// app.get('/api/inventory/:id')

// app.delete('/api/inventory/:id', (req, res) => {

// )};

app.register(fastifyCORS, {
    origin: '*',
})

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
