import { Injectable } from '@nestjs/common';

@Injectable()
export class SMSApiService {
  async sendMessage(recipient: string, text: string) {
    recipient = recipient.replace('+', '');
    console.log(recipient, text);
    const url = `${process.env.SMS_API}recipient=${recipient}&from=&text=${text}&apiKey=${process.env.API_KEY}`;
    const response = await fetch(url, { method: 'GET' });
    const data = await response.json();
    console.log(JSON.parse(data));
  }
}
