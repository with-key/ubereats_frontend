export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AllCategoriesOutput = {
  __typename?: 'AllCategoriesOutput';
  categories?: Maybe<Array<Category>>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Category = {
  __typename?: 'Category';
  coverImg?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  restaurantCount: Scalars['Float'];
  restaurants?: Maybe<Array<Restaurant>>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryInputType = {
  coverImg?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  restaurants?: InputMaybe<Array<RestaurantInputType>>;
  slug: Scalars['String'];
};

export type CategoryOutput = {
  __typename?: 'CategoryOutput';
  category?: Maybe<Category>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateOrderInput = {
  items: Array<CreateOrderItemInput>;
  restaurantId: Scalars['Int'];
};

export type CreateOrderItemInput = {
  dishId: Scalars['Int'];
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type CreateOrderOutput = {
  __typename?: 'CreateOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreatePaymentInput = {
  restaurantId: Scalars['String'];
  transactionId: Scalars['Int'];
};

export type CreatePaymentOuput = {
  __typename?: 'CreatePaymentOuput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type CreateRestaurantInput = {
  address: Scalars['String'];
  categoryName: Scalars['String'];
  coverImg: Scalars['String'];
  isPromoted: Scalars['Boolean'];
  menu: Array<DishInputType>;
  name: Scalars['String'];
  orders: Array<OrderInputType>;
  payments: Array<PaymentInputType>;
  promoteUntil?: InputMaybe<Scalars['DateTime']>;
};

export type CreateRestaurantOutput = {
  __typename?: 'CreateRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type DeleteRestaurantInput = {
  restaurantId: Scalars['Float'];
};

export type DeleteRestaurantOutput = {
  __typename?: 'DeleteRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Dish = {
  __typename?: 'Dish';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  options?: Maybe<Array<DishOption>>;
  photo?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  restaurant: Restaurant;
  updatedAt: Scalars['DateTime'];
};

export type DishChoice = {
  __typename?: 'DishChoice';
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishChoiceInputType = {
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishInputType = {
  description: Scalars['String'];
  name: Scalars['String'];
  options?: InputMaybe<Array<DishOptionInputType>>;
  photo?: InputMaybe<Scalars['String']>;
  price: Scalars['Int'];
  restaurant: RestaurantInputType;
};

export type DishOption = {
  __typename?: 'DishOption';
  choices?: Maybe<Array<DishChoice>>;
  extra?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type DishOptionInputType = {
  choices?: InputMaybe<Array<DishChoiceInputType>>;
  extra?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type EditOrderInput = {
  id: Scalars['Float'];
  orderStatus: OrderStatus;
};

export type EditOrderOutput = {
  __typename?: 'EditOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditProfileInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type EditProfileOutput = {
  __typename?: 'EditProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type EditRestaurantInput = {
  address?: InputMaybe<Scalars['String']>;
  categoryName?: InputMaybe<Scalars['String']>;
  coverImg?: InputMaybe<Scalars['String']>;
  isPromoted?: InputMaybe<Scalars['Boolean']>;
  menu?: InputMaybe<Array<DishInputType>>;
  name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<Array<OrderInputType>>;
  payments?: InputMaybe<Array<PaymentInputType>>;
  promoteUntil?: InputMaybe<Scalars['DateTime']>;
  restaurantId: Scalars['Float'];
};

export type EditRestaurantOutput = {
  __typename?: 'EditRestaurantOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type GetOrderInput = {
  id: Scalars['Float'];
};

export type GetOrderOutput = {
  __typename?: 'GetOrderOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  order?: Maybe<Order>;
};

export type GetOrdersInput = {
  status?: InputMaybe<OrderStatus>;
};

export type GetOrdersOutput = {
  __typename?: 'GetOrdersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  orders?: Maybe<Array<Order>>;
};

export type GetPaymentsOutput = {
  __typename?: 'GetPaymentsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  payments?: Maybe<Array<Payment>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  createOrder: CreateOrderOutput;
  createPayment: CreatePaymentOuput;
  createRestaurant: CreateRestaurantOutput;
  deleteRestaurant: DeleteRestaurantOutput;
  editOrder: EditOrderOutput;
  editProfile: EditProfileOutput;
  editRestaurant: EditRestaurantOutput;
  login: LoginOutput;
  takeOver: TakeOrderOuput;
  verifictionEmail: VerifyEmailOutput;
};

export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};

export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
};

export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};

export type MutationCreateRestaurantArgs = {
  createRestaurantInput: CreateRestaurantInput;
};

export type MutationDeleteRestaurantArgs = {
  input: DeleteRestaurantInput;
};

export type MutationEditOrderArgs = {
  input: EditOrderInput;
};

export type MutationEditProfileArgs = {
  input: EditProfileInput;
};

export type MutationEditRestaurantArgs = {
  input: EditRestaurantInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationTakeOverArgs = {
  input: TakeOrderInput;
};

export type MutationVerifictionEmailArgs = {
  input: VerifyEmailInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  customer: User;
  id: Scalars['Float'];
  items: Array<OrderItem>;
  orderStatus: OrderStatus;
  restaurant: Restaurant;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
};

export type OrderInputType = {
  customer: UserInputType;
  items: Array<OrderItemInputType>;
  orderStatus: OrderStatus;
  restaurant: RestaurantInputType;
  total?: InputMaybe<Scalars['Float']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime'];
  dish: Dish;
  id: Scalars['Float'];
  options?: Maybe<Array<OrderItemOption>>;
  updatedAt: Scalars['DateTime'];
};

export type OrderItemInputType = {
  dish: DishInputType;
  options?: InputMaybe<Array<OrderItemOptionInputType>>;
};

export type OrderItemOption = {
  __typename?: 'OrderItemOption';
  choice?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type OrderItemOptionInputType = {
  choice?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export enum OrderStatus {
  Cooked = 'Cooked',
  Cooking = 'Cooking',
  Deliverd = 'Deliverd',
  Pending = 'Pending',
  PickedUp = 'PickedUp',
}

export type Payment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  restaurant?: Maybe<Restaurant>;
  restaurantId: Scalars['String'];
  transactionId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type PaymentInputType = {
  restaurant?: InputMaybe<RestaurantInputType>;
  restaurantId: Scalars['String'];
  transactionId: Scalars['Int'];
  user?: InputMaybe<UserInputType>;
};

export type Query = {
  __typename?: 'Query';
  category: CategoryOutput;
  getAllCategories: AllCategoriesOutput;
  getOrder: GetOrderOutput;
  getOrders: GetOrdersOutput;
  getPayments: GetPaymentsOutput;
  userProfile: UseProfileOutput;
};

export type QueryCategoryArgs = {
  slug: Scalars['String'];
};

export type QueryGetOrderArgs = {
  input: GetOrderInput;
};

export type QueryGetOrdersArgs = {
  input: GetOrdersInput;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  address: Scalars['String'];
  category?: Maybe<Category>;
  coverImg: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  isPromoted: Scalars['Boolean'];
  menu: Array<Dish>;
  name: Scalars['String'];
  orders: Array<Order>;
  owner: User;
  payments: Array<Payment>;
  promoteUntil?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type RestaurantInputType = {
  address: Scalars['String'];
  category?: InputMaybe<CategoryInputType>;
  coverImg: Scalars['String'];
  isPromoted: Scalars['Boolean'];
  menu: Array<DishInputType>;
  name: Scalars['String'];
  orders: Array<OrderInputType>;
  owner: UserInputType;
  payments: Array<PaymentInputType>;
  promoteUntil?: InputMaybe<Scalars['DateTime']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  cookedOrder: Order;
  orderUpdates: Order;
  pendingOrders: Order;
};

export type SubscriptionOrderUpdatesArgs = {
  input: UpdatesOrderInput;
};

export type TakeOrderInput = {
  id: Scalars['Float'];
};

export type TakeOrderOuput = {
  __typename?: 'TakeOrderOuput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type UpdatesOrderInput = {
  id: Scalars['Float'];
};

export type UseProfileOutput = {
  __typename?: 'UseProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  orders: Array<Order>;
  password: Scalars['String'];
  paymenets: Array<Payment>;
  restaurants: Array<Restaurant>;
  rides: Array<Order>;
  role: UserRole;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type UserInputType = {
  email: Scalars['String'];
  id: Scalars['String'];
  orders: Array<OrderInputType>;
  password: Scalars['String'];
  paymenets: Array<PaymentInputType>;
  restaurants: Array<RestaurantInputType>;
  rides: Array<OrderInputType>;
  role: UserRole;
  verified: Scalars['Boolean'];
};

export enum UserRole {
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner',
}

export type VerifyEmailInput = {
  code: Scalars['String'];
};

export type VerifyEmailOutput = {
  __typename?: 'VerifyEmailOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginOutput';
    ok: boolean;
    token?: string | null;
    error?: string | null;
  };
};
