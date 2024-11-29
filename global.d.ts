declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

interface MercadoPago {
  checkout: (options: {
    preference: {
      items: Array<{
        title: string;
        description: string;
        quantity: number;
        currency_id: string;
        unit_price: number;
      }>;
    };
    autoOpen?: boolean;
  }) => void;
}

declare global {
  interface Window {
    MercadoPago: new (publicKey: string, options?: { locale?: string }) => MercadoPago;
  }
}

export { };
