# Sport Shop

- [Live Link](https://sports-shop-puce.vercel.app/)

This is a Sport Shop application built with Next.js, Redux Toolkit, and SCSS. The application allows users to browse and purchase sports-related products.

## Features

- Browse products
- Add products to cart
- Remove products from cart
- User authentication
- Responsive design

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [SCSS](https://sass-lang.com/)
- [React Hot Toast](https://react-hot-toast.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hmsmiraz/Sport_Shop.git
   cd Sport_Shop
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= Your Publish Key
   CLERK_SECRET_KEY= Your Secret Key
   DB_URL= Your Database Url
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Adding Products to Cart

To add a product to the cart, click on the "Add to cart" button. If the product is already in the cart, you will see the "Remove from cart" button instead.

### Removing Products from Cart

To remove a product from the cart, click on the "Remove from cart" button.

### User Authentication

The application requires users to log in to make purchases. You can sign up or log in using the provided authentication forms.

Feel free to modify the contents to better fit the specifics of your project. If you provide more details or specific features of your project, I can tailor the README file more closely to your needs.
