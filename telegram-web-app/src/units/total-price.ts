export const totalPrice = (arr: any) => {
  return arr.reduce((a: any, c: any) => a + c.price * c.quantity, 0);
};
