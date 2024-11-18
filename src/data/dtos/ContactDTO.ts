export class ContactDTO {
  name: string;
  email: string;
  phone: string;
  message: string;
  captchaToken: string;

  constructor(data: any) {
    if (!data.name || !data.email || !data.message || !data.captchaToken) {
      throw new Error('Missing required fields');
    }

    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.message = data.message;
    this.captchaToken = data.captchaToken;
  }
}